package com.guavatrees.upf.dao.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "listlos")
public class ListLosId implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long listlosid;
	
	@Column(name = "losid")
	private String losid;
	
	@Column(name = "companyname")
	private String companyname;
	
	@Column(name = "netpayrate")
	private double netpayrate;
	
	@Column(name = "finalpayoutamount")
	private double finalpayoutamount;

	public long getListlosid() {
		return listlosid;
	}

	public void setListlosid(long listlosid) {
		this.listlosid = listlosid;
	}

	public String getLosid() {
		return losid;
	}

	public void setLosid(String losid) {
		this.losid = losid;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public double getNetpayrate() {
		return netpayrate;
	}

	public void setNetpayrate(double netpayrate) {
		this.netpayrate = netpayrate;
	}

	public double getFinalpayoutamount() {
		return finalpayoutamount;
	}

	public void setFinalpayoutamount(double finalpayoutamount) {
		this.finalpayoutamount = finalpayoutamount;
	}
}