package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "festivalsblmonthlyslab")
public class FestivalSBLMonthlySlab 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long sblmonthlyslabid;
	
	@Column(name="disbursement_in_lac")
	private String disbursementinlac;
	
	@Column(name="monthly_slab")
	private double monthlyslab;

	public long getSblmonthlyslabid() {
		return sblmonthlyslabid;
	}

	public void setSblmonthlyslabid(long sblmonthlyslabid) {
		this.sblmonthlyslabid = sblmonthlyslabid;
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
