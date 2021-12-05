package com.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.capstone.entities.client;
import com.capstone.exception.ResourceNotFoundException;
import com.capstone.repository.ClientRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/client")
public class ClientController {

	@Autowired
	private ClientRepository clientRepository;
	
	@GetMapping
	public List<client> getAllClients(){
	    return clientRepository.findAll();
	}
	
	@GetMapping("{clientid}")
	public ResponseEntity<client> getClientById(@PathVariable String clientid){
	client client=clientRepository.findById(clientid)
	.orElseThrow(() -> new ResourceNotFoundException("Client not exists with id: " + clientid));
	return ResponseEntity.ok(client);
	}
	
}
