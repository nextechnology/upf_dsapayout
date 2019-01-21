package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "blquarterlyslab")
public class BLQuarterlySlab {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long quarterlyslabid;
	
	@Column(name = "disbursal_in_cr")
	private String disbursalincr;
	
	@Column(name = "quarterly_slab")
	private double quarterlyslab;
	
	@Column(name = "qualifyingcriteria")
	private String qualifyingcriteria;	

	public long getQuarterlyslabid() {
		return quarterlyslabid;
	}

	public void setQuarterlyslabid(long quarterlyslabid) {
		this.quarterlyslabid = quarterlyslabid;
	}

	public String getDisbursalincr() {
		return disbursalincr;
	}

	public void setDisbursalincr(String disbursalincr) {
		this.disbursalincr = disbursalincr;
	}

	public double getQuarterlyslab() {
		return quarterlyslab;
	}

	public void setQuarterlyslab(double quarterlyslab) {
		this.quarterlyslab = quarterlyslab;
	}

	public String getQualifyingcriteria() {
		return qualifyingcriteria;
	}

	public void setQualifyingcriteria(String qualifyingcriteria) {
		this.qualifyingcriteria = qualifyingcriteria;
	}

	
}