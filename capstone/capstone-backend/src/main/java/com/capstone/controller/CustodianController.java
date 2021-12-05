package com.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.entities.custodian;
import com.capstone.exception.ResourceNotFoundException;
import com.capstone.repository.CustodianRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/custodian")
public class CustodianController {
	
	
	@Autowired
	private CustodianRepository custodianRepository;
	

	@GetMapping("{custodianid}")
	public ResponseEntity<custodian> getBankById(@PathVariable String custodianid){
	custodian custodian=custodianRepository.findById(custodianid)
	.orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id: " + custodianid));
	return ResponseEntity.ok(custodian);
	}

}
