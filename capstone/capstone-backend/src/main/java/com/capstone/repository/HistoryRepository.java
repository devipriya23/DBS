package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.entities.history;

@Repository
public interface HistoryRepository extends JpaRepository<history,Integer>{

}
