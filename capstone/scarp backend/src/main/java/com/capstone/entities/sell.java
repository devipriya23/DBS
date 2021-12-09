package com.capstone.entities;

import javax.persistence.*;


@Entity
@Table(name="sell")
public class sell {

	@Id
	@Column(name = "sellid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sellid;
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
	public int getSellid() {
		return sellid;
	}
	public void setSellid(int sellid) {
		this.sellid = sellid;
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
