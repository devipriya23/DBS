package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.client;

@Repository
public interface ClientRepository extends JpaRepository<client,String>{

}
