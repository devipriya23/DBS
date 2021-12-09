package com.capstone.entities;

import javax.persistence.*;


@Entity
@Table(name="history")
public class history {

	
	@Id
	@Column(name = "historyid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int historyid;
	@Column(name = "transactiontype")
	private String transactiontype;
	@Column(name = "clientid")
	private String clientid;
	@Column(name = "instrumentid")
	private String instrumentid;
	@Column(name = "price")
	private String price;
	@Column(name = "quantity")
	private String quantity;
	public int getHistoryid() {
		return historyid;
	}
	public void setHistoryid(int historyid) {
		this.historyid = historyid;
	}
	public String getTransactiontype() {
		return transactiontype;
	}
	public void setTransactiontype(String transactiontype) {
		this.transactiontype = transactiontype;
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
	
}
