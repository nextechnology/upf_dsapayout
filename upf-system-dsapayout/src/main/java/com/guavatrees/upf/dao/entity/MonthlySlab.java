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
@Table(name = "monthlyslab")
public class MonthlySlab implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long monthlyslabid;
	
	@Column(name="disbursal_in_cr")
	private String disbursalincr;
	
	
	@Column(name="min_files_disbursed")
	private String minfilesdisbursed;
	
	@Column(name="monthly_payout")
	private String monthlypayout;

	public long getMonthlyslabid() {
		return monthlyslabid;
	}

	public void setMonthlyslabid(long monthlyslabid) {
		this.monthlyslabid = monthlyslabid;
	}

	public String getDisbursalincr() {
		return disbursalincr;
	}

	public void setDisbursalincr(String disbursalincr) {
		this.disbursalincr = disbursalincr;
	}

	public String getMinfilesdisbursed() {
		return minfilesdisbursed;
	}

	public void setMinfilesdisbursed(String minfilesdisbursed) {
		this.minfilesdisbursed = minfilesdisbursed;
	}

	public String getMonthlypayout() {
		return monthlypayout;
	}

	public void setMonthlypayout(String monthlypayout) {
		this.monthlypayout = monthlypayout;
	}	
}
