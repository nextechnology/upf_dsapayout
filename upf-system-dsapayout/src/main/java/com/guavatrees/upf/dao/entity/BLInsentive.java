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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "blincentive")
public class BLInsentive implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long blincentiveid;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "renewalsid", referencedColumnName = "ID")
	private BLRenewals renewals;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "monthlyslabid", referencedColumnName = "ID", nullable = false)
	private List<BLMonthlySlab> monthlyslab;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "quarterlyslabid", referencedColumnName = "ID", nullable = false)
	private List<BLQuarterlySlab> quarterlyslab;

	public long getBlincentiveid() {
		return blincentiveid;
	}

	public BLRenewals getRenewals() {
		return renewals;
	}

	public void setRenewals(BLRenewals renewals) {
		this.renewals = renewals;
	}

	public void setBlincentiveid(long blincentiveid) {
		this.blincentiveid = blincentiveid;
	}

	

	

	public List<BLQuarterlySlab> getQuarterlyslab() {
		return quarterlyslab;
	}

	public void setQuarterlyslab(List<BLQuarterlySlab> quarterlyslab) {
		this.quarterlyslab = quarterlyslab;
	}

	public List<BLMonthlySlab> getMonthlyslab() {
		return monthlyslab;
	}

	public void setMonthlyslab(List<BLMonthlySlab> monthlyslab) {
		this.monthlyslab = monthlyslab;
	}
	
	
}