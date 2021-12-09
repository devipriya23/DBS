package com.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.entities.instrument;

import com.capstone.exception.ResourceNotFoundException;
import com.capstone.repository.InstrumentRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/instrument")
public class InstrumentController {

	

	@Autowired
	private InstrumentRepository instrumentRepository;
	
	@GetMapping
	public List<instrument> getAllInstruments(){
	    return instrumentRepository.findAll();
	}
	
	@GetMapping("{instrumentid}")
	public ResponseEntity<instrument> getInstrumentById(@PathVariable String instrumentid){
		instrument instrument=instrumentRepository.findById(instrumentid)
	.orElseThrow(() -> new ResourceNotFoundException("instrument not exists with id: " + instrumentid));
	return ResponseEntity.ok(instrument);
	}
}
