package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.*;
@Repository
public interface CustodianRepository extends JpaRepository<custodian,String>{

}
