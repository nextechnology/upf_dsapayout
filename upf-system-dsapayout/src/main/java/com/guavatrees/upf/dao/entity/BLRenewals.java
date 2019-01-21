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
@Table(name = "blrenewals")
public class BLRenewals implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long renewalsid;
	
	@Column(name="instance_of_renewal")
	private String instanceofrenewal;
	
	@Column(name="payout_percentage")
	private String payoutpercentage;
	
	public long getRenewalsid() {
		return renewalsid;
	}

	public void setRenewalsid(long renewalsid) {
		this.renewalsid = renewalsid;
	}

	public String getInstanceofrenewal() {
		return instanceofrenewal;
	}

	public void setInstanceofrenewal(String instanceofrenewal) {
		this.instanceofrenewal = instanceofrenewal;
	}

	public String getPayoutpercentage() {
		return payoutpercentage;
	}

	public void setPayoutpercentage(String payoutpercentage) {
		this.payoutpercentage = payoutpercentage;
	}


}