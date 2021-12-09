package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.buy;


@Repository
public interface BuyRepository extends JpaRepository<buy,Integer> {

}
