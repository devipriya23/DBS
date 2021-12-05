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

import com.capstone.entities.buy;

import com.capstone.exception.ResourceNotFoundException;
import com.capstone.repository.BuyRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/buy")
public class BuyController {
	@Autowired
	private BuyRepository buyRepository;
	
	@GetMapping
	public List<buy> getAllBuyers(){
	    return buyRepository.findAll();
	}
	
	@GetMapping("{buyid}")
	public ResponseEntity<buy> getBuyById(@PathVariable Integer buyid){
	buy buy=buyRepository.findById(buyid)
	.orElseThrow(() -> new ResourceNotFoundException("Buyer not exists with id: " + buyid));
	return ResponseEntity.ok(buy);
	}
	
	  @PostMapping
	    public buy createBuy(@RequestBody buy buy){
	        return buyRepository.save(buy);
	    }
	
	  @PutMapping("{buyid}")
	  public ResponseEntity<buy> updateBuy(
	          @PathVariable int buyid,
	          @RequestBody buy buyDetails){
	  	
	      buy updateBuy = buyRepository.findById(buyid)
	              .orElseThrow(() -> new ResourceNotFoundException("Buyer not exists with id: " +  buyid));

	      // Read  from request and set data to employee
	      updateBuy.setClientid(buyDetails.getClientid());
	      updateBuy.setInstrumentid(buyDetails.getInstrumentid());
	      updateBuy.setPrice(buyDetails.getPrice());
	      updateBuy.setQuantity(buyDetails.getQuantity());
	      updateBuy.setStats(buyDetails.getStats());

	      // Save into database
	      buyRepository.save(updateBuy);

	      return ResponseEntity.ok(updateBuy);
	  }
	
}
