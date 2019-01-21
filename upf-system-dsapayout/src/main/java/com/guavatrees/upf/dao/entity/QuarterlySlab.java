package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "quarterlyslab")
public class QuarterlySlab {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long quarterlyslabid;
	
	@Column(name = "disbursal_in_cr")
	private String disbursalincr;

	@Column(name = "quarterly_slab")
	private String quarterlyslab;
	
	@Column(name = "qualifyingcriteria")
	private String qualifyingcriteria;
	

	public String getDisbursalincr() {
		return disbursalincr;
	}

	public void setDisbursalincr(String disbursalincr) {
		this.disbursalincr = disbursalincr;
	}

	public String getQuarterlyslab() {
		return quarterlyslab;
	}

	public void setQuarterlyslab(String quarterlyslab) {
		this.quarterlyslab = quarterlyslab;
	}

	public long getQuarterlyslabid() {
		return quarterlyslabid;
	}

	public void setQuarterlyslabid(long quarterlyslabid) {
		this.quarterlyslabid = quarterlyslabid;
	}

	public String getQualifyingcriteria() {
		return qualifyingcriteria;
	}

	public void setQualifyingcriteria(String qualifyingcriteria) {
		this.qualifyingcriteria = qualifyingcriteria;
	}

}
