package com.capstone.entities;

import javax.persistence.*;

@Entity
@Table(name="instrument")
public class instrument {
	@Id
	@Column(name = "instrumentid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String instumentid;
	@Column(name = "instrumentname")
	private String instumentname;
	@Column(name = "facevalue")
	private String facevalue;
	@Column(name = "expirydate")
	private String expirydate;
	public String getInstumentid() {
		return instumentid;
	}
	public void setInstumentid(String instumentid) {
		this.instumentid = instumentid;
	}
	public String getInstumentname() {
		return instumentname;
	}
	public void setInstumentname(String instumentname) {
		this.instumentname = instumentname;
	}
	public String getFacevalue() {
		return facevalue;
	}
	public void setFacevalue(String facevalue) {
		this.facevalue = facevalue;
	}
	public String getExpirydate() {
		return expirydate;
	}
	public void setExpirydate(String expirydate) {
		this.expirydate = expirydate;
	}
	
	

}
