package com.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.capstone.entities.history;
import com.capstone.repository.HistoryRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/history")
public class HistoryController {

	
	@Autowired
	private HistoryRepository historyRepository;
	
	@GetMapping
	public List<history> getAllBuyers(){
	    return historyRepository.findAll();
	}

	  @PostMapping
	    public history createHistory(@RequestBody history history){
	        return historyRepository.save(history);
	    }
}
