package com.capstone.entities;

import javax.persistence.*;

@Entity
@Table(name="buy")
public class buy {
	@Id
	@Column(name = "buyid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int buyid;
	@Column(name = "clientid")
	private String clientid;
	@Column(name = "instrumentid")
	private String instrumentid;
	@Column(name = "price")
	private String price;
	@Column(name = "quantity")
	private String quantity;
	@Column(name = "stats")
	private String stats;
	public int getBuyid() {
		return buyid;
	}
	public void setBuyid(int buyid) {
		this.buyid = buyid;
	}
	public String getClientid() {
		return clientid;
	}
	public void setClientid(String clientid) {
		this.clientid = clientid;
	}
	public String getInstrumentid() {
		return instrumentid;
	}
	public void setInstrumentid(String instrumentid) {
		this.instrumentid = instrumentid;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getStats() {
		return stats;
	}
	public void setStats(String stats) {
		this.stats = stats;
	}
	

}
