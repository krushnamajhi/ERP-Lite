package com.erplite.fullstackerplite.repository;

import com.erplite.fullstackerplite.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
