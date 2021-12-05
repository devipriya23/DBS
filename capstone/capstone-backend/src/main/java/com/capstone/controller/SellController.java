package com.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.capstone.entities.sell;
import com.capstone.exception.ResourceNotFoundException;

import com.capstone.repository.SellRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sell")
public class SellController {

	
	@Autowired
	private SellRepository sellRepository;
	
	@GetMapping
	public List<sell> getAllSellers(){
	    return sellRepository.findAll();
	}
	
	@GetMapping("{sellid}")
	public ResponseEntity<sell> getSellById(@PathVariable Integer sellid){
	sell sell=sellRepository.findById(sellid)
	.orElseThrow(() -> new ResourceNotFoundException("Seller not exists with id: " + sellid));
	return ResponseEntity.ok(sell);
	}
	
	  @PostMapping
	    public sell createSell(@RequestBody sell sell){
	        return sellRepository.save(sell);
	    }
	  
	  @PutMapping("{sellid}")
	  public ResponseEntity<sell> updateSell(
	          @PathVariable int sellid,
	          @RequestBody sell sellDetails){
	  	
	      sell updateSell = sellRepository.findById(sellid)
	              .orElseThrow(() -> new ResourceNotFoundException("Seller not exists with id: " +  sellid));

	      // Read  from request and set data to employee
	      updateSell.setClientid(sellDetails.getClientid());
	      updateSell.setInstrumentid(sellDetails.getInstrumentid());
	      updateSell.setPrice(sellDetails.getPrice());
	      updateSell.setQuantity(sellDetails.getQuantity());
	      updateSell.setStats(sellDetails.getStats());

	      // Save into database
	      sellRepository.save(updateSell);

	      return ResponseEntity.ok(updateSell);
	  }
}
