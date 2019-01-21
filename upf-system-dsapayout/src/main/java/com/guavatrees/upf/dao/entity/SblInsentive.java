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
@Table(name = "sblincentive")
public class SblInsentive implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long sblincentiveid;

	@Column(name = "disbursementinlac")
	private String disbursementinlac;
	
	@Column(name = "monthlyslab")
	private double monthlyslab;
	
	public long getSblincentiveid() {
		return sblincentiveid;
	}

	public void setSblincentiveid(long sblincentiveid) {
		this.sblincentiveid = sblincentiveid;
	}

	public String getDisbursementinlac() {
		return disbursementinlac;
	}

	public void setDisbursementinlac(String disbursementinlac) {
		this.disbursementinlac = disbursementinlac;
	}

	public double getMonthlyslab() {
		return monthlyslab;
	}

	public void setMonthlyslab(double monthlyslab) {
		this.monthlyslab = monthlyslab;
	}

	
}