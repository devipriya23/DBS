package com.capstone.entities;

import javax.persistence.*;

@Entity
@Table(name="client")
public class client {
	@Id
	@Column(name = "clientid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String clientid;
	@Column(name = "custodianid")
	private String custodianid;
	@Column(name = "clientname")
	private String clientname;
	@Column(name = "custodianname")
	private String custodianname;
	@Column(name = "transactionlimit")
	private String transactionlimit;
	public String getCustodianid() {
		return custodianid;
	}
	public void setCustodianid(String custodianid) {
		this.custodianid = custodianid;
	}
	public String getClientid() {
		return clientid;
	}
	public void setClientid(String clientid) {
		this.clientid = clientid;
	}
	public String getClientname() {
		return clientname;
	}
	public void setClientname(String clientname) {
		this.clientname = clientname;
	}
	public String getCustodianname() {
		return custodianname;
	}
	public void setCustodianname(String custodianname) {
		this.custodianname = custodianname;
	}
	public String getTransactionlimit() {
		return transactionlimit;
	}
	public void setTransactionlimit(String transactionlimit) {
		this.transactionlimit = transactionlimit;
	}
	
}
