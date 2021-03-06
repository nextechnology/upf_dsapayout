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
@Table(name = "ssmmonthlyslab")
public class SsmMonthlySlab implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long ssmmonthlyslabid;
	
	@Column(name = "rangefrom")
	private long rangefrom;
	
	@Column(name = "rangeto")
	private long rangeto;
	
	@Column(name = "incentive")
	private double incentive;

	public long getSsmmonthlyslabid() {
		return ssmmonthlyslabid;
	}

	public void setSsmmonthlyslabid(long ssmmonthlyslabid) {
		this.ssmmonthlyslabid = ssmmonthlyslabid;
	}

	public long getRangefrom() {
		return rangefrom;
	}

	public void setRangefrom(long rangefrom) {
		this.rangefrom = rangefrom;
	}

	public long getRangeto() {
		return rangeto;
	}

	public void setRangeto(long rangeto) {
		this.rangeto = rangeto;
	}

	public double getIncentive() {
		return incentive;
	}

	public void setIncentive(double incentive) {
		this.incentive = incentive;
	}
}