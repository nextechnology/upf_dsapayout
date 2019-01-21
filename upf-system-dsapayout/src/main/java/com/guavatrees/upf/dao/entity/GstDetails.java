package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "gstdetails")
public class GstDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long gstid;

	@Column(name = "companyname")
	private String companyname;

	@Column(name = "companypan")
	private String companypan;

	@Column(name = "address")
	private String address;

	@Column(name = "gstcode")
	private String gstcode;

	@Column(name = "hsncode")
	private String hsncode;

	@Column(name = "statecode")
	private String statecode;

	@Column(name = "state")
	private String state;

	@Column(name = "city")
	private String city;

	@Column(name = "bankname")
	private String bankname;

	@Column(name = "accountno")
	private String accountno;

	@Column(name = "ifsccode")
	private String ifsccode;

	@Column(name = "bankaccountname")
	private String bankaccountname;

	public long getGstid() {
		return gstid;
	}

	public void setGstid(long gstid) {
		this.gstid = gstid;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getCompanypan() {
		return companypan;
	}

	public void setCompanypan(String companypan) {
		this.companypan = companypan;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGstcode() {
		return gstcode;
	}

	public void setGstcode(String gstcode) {
		this.gstcode = gstcode;
	}

	public String getHsncode() {
		return hsncode;
	}

	public void setHsncode(String hsncode) {
		this.hsncode = hsncode;
	}

	public String getStatecode() {
		return statecode;
	}

	public void setStatecode(String statecode) {
		this.statecode = statecode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}

	public String getAccountno() {
		return accountno;
	}

	public void setAccountno(String accountno) {
		this.accountno = accountno;
	}

	public String getIfsccode() {
		return ifsccode;
	}

	public void setIfsccode(String ifsccode) {
		this.ifsccode = ifsccode;
	}

	public String getBankaccountname() {
		return bankaccountname;
	}

	public void setBankaccountname(String bankaccountname) {
		this.bankaccountname = bankaccountname;
	}

}
