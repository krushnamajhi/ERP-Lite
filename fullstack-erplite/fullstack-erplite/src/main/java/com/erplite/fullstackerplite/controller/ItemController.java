package com.erplite.fullstackerplite.controller;

import com.erplite.fullstackerplite.exceptions.ResourceNotFoundException;
import com.erplite.fullstackerplite.model.Item;
import com.erplite.fullstackerplite.model.User;
import com.erplite.fullstackerplite.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/item/createItem")
    Item newItem(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }

    @GetMapping("/item/itemlist")
    List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @GetMapping("/item/{id}")
    ResponseEntity<Item> getEmployeeById(@PathVariable Long id) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ResolutionException("Item not Exist with id: " + id));
        return ResponseEntity.ok(item);
    }

    @PutMapping("/item/{id}")
    ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item itemDetails) {
        Item item = itemRepository.findById(id).orElseThrow(
                () ->
                        new ResourceNotFoundException("item Not Exist with id : " + id));
        item.setName(itemDetails.getName());
        item.setHsn_sac(itemDetails.getHsn_sac());
        item.setBaseunit(itemDetails.getBaseunit());
        Item updatedItem = itemRepository.save(item);
        return ResponseEntity.ok(updatedItem);
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Item item = itemRepository.findById(id).orElseThrow(
                () ->
                        new ResourceNotFoundException("item Not Exist with id : " + id));
        itemRepository.delete(item);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
