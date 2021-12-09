package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.sell;

@Repository
public interface SellRepository extends JpaRepository<sell,Integer>{

}
