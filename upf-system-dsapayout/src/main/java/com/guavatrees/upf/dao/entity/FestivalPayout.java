package com.guavatrees.upf.dao.entity;

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
@Table(name = "festivalpayout")
public class FestivalPayout {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long dateid;
	
	
	@Column(name="month")
	private String month;
	
	@Column(name="year")
	private String year;
	
	@Column(name="producttype")
	private String producttype;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "slabid", referencedColumnName = "ID", nullable = false)
	private List<FestivalBLMonthlySlab> monthlyslab;

	public long getDateid() {
		return dateid;
	}

	public void setDateid(long dateid) {
		this.dateid = dateid;
	}

	

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	

	public String getProducttype() {
		return producttype;
	}

	public void setProducttype(String producttype) {
		this.producttype = producttype;
	}

	
	
	

}
