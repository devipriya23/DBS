package com.capstone.entities;

import javax.persistence.*;

@Entity
@Table(name="custodian")
public class custodian {
	
	@Id
	@Column(name = "custodianid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String custodianid;



	@Column(name = "pwd")
	private String pwd;



	public String getCustodianid() {
		return custodianid;
	}



	public void setCustodianid(String custodianid) {
		this.custodianid = custodianid;
	}



	public String getPwd() {
		return pwd;
	}



	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	
	
	

}
