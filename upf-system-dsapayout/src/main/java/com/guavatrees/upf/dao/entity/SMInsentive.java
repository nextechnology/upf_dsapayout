package com.guavatrees.upf.dao.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;


@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "smincentive")
public class SMInsentive implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long smincentiveid;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "smmonthlyslabid", referencedColumnName = "ID", nullable = false)
	private List<SmMonthlySlab> smmonthlyslab;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "ssmmonthlyslabid", referencedColumnName = "ID", nullable = false)
	private List<SsmMonthlySlab> ssmmonthlyslab;

	public long getSmincentiveid() {
		return smincentiveid;
	}

	public void setSmincentiveid(long smincentiveid) {
		this.smincentiveid = smincentiveid;
	}

	public List<SmMonthlySlab> getSmmonthlyslab() {
		return smmonthlyslab;
	}

	public void setSmmonthlyslab(List<SmMonthlySlab> smmonthlyslab) {
		this.smmonthlyslab = smmonthlyslab;
	}

	public List<SsmMonthlySlab> getSsmmonthlyslab() {
		return ssmmonthlyslab;
	}

	public void setSsmmonthlyslab(List<SsmMonthlySlab> ssmmonthlyslab) {
		this.ssmmonthlyslab = ssmmonthlyslab;
	}
}