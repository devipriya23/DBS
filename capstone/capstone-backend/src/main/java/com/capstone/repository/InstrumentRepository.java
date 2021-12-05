package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.instrument;
@Repository
public interface InstrumentRepository extends JpaRepository<instrument,String>{

}
