package com.phooja.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phooja.store.entity.productStore;

public interface storeRepo extends JpaRepository<productStore, Integer> {

}
