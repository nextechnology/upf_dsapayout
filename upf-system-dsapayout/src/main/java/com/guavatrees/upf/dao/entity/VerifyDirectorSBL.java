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
@Table(name = "verify_director_sbl")
public class VerifyDirectorSBL implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long verifydirectorsblid;

	@Column(name = "panNumber")
	private String panNumber;
	
	@Column(name = "vpanNumber")
	private String vpanNumber;

	@Column(name = "vaadharNumber")
	private String vaadharNumber;

	@Column(name = "vmobileNumber")
	private String vmobileNumber;

	public long getVerifydirectorsblid() {
		return verifydirectorsblid;
	}

	public void setVerifydirectorsblid(long verifydirectorsblid) {
		this.verifydirectorsblid = verifydirectorsblid;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getVaadharNumber() {
		return vaadharNumber;
	}

	public void setVaadharNumber(String vaadharNumber) {
		this.vaadharNumber = vaadharNumber;
	}

	public String getVmobileNumber() {
		return vmobileNumber;
	}

	public void setVmobileNumber(String vmobileNumber) {
		this.vmobileNumber = vmobileNumber;
	}

	public String getVpanNumber() {
		return vpanNumber;
	}

	public void setVpanNumber(String vpanNumber) {
		this.vpanNumber = vpanNumber;
	}

	@Override
	public String toString() {
		return "VerifyDirectorSBL [verifydirectorsblid=" + verifydirectorsblid + ", panNumber=" + panNumber
				+ ", vpanNumber=" + vpanNumber + ", vaadharNumber=" + vaadharNumber + ", vmobileNumber=" + vmobileNumber
				+ "]";
	}

	
}