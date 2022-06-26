package com.erplite.fullstackerplite.controller;

import com.erplite.fullstackerplite.exceptions.ResourceNotFoundException;
import com.erplite.fullstackerplite.model.BaseUnit;
import com.erplite.fullstackerplite.repository.BaseUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class BaseUnitController {

    @Autowired
    private BaseUnitRepository baseunitRepository;

    @PostMapping("/baseunit/createBaseUnit")
    BaseUnit newBaseUnit(@RequestBody BaseUnit newBaseUnit) {
        return baseunitRepository.save(newBaseUnit);
    }

    @GetMapping("/baseunit/baseunitlist")
    List<BaseUnit> getAllBaseUnits() {
        return baseunitRepository.findAll();
    }

    @GetMapping("/baseunit/{id}")
    ResponseEntity<BaseUnit> getBaseUnitById(@PathVariable Long id) {
        BaseUnit baseunit = baseunitRepository.findById(id).orElseThrow(() -> new ResolutionException("BaseUnit not Exist with id: " + id));
        return ResponseEntity.ok(baseunit);
    }

    @PutMapping("/baseunit/{id}")
    ResponseEntity<BaseUnit> updateBaseUnit(@PathVariable Long id, @RequestBody BaseUnit baseunitDetails) {
        BaseUnit baseunit = baseunitRepository.findById(id).orElseThrow(
                () ->
                        new ResourceNotFoundException("baseunit Not Exist with id : " + id));
        baseunit.setName(baseunitDetails.getName());
        baseunit.setPluralName(baseunitDetails.getPluralName());
        baseunit.setAbbreviation(baseunitDetails.getAbbreviation());
        baseunit.setPluralAbbreviation(baseunitDetails.getPluralAbbreviation());
        BaseUnit updatedBaseUnit = baseunitRepository.save(baseunit);
        return ResponseEntity.ok(updatedBaseUnit);
    }

    @DeleteMapping("/baseunit/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        BaseUnit baseunit = baseunitRepository.findById(id).orElseThrow(
                () ->
                        new ResourceNotFoundException("baseunit Not Exist with id : " + id));
        baseunitRepository.delete(baseunit);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
