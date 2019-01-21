package com.guavatrees.upf.dao.entity;

import java.io.Serializable;
import java.util.Date;
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
@Table(name = "invoice")
public class Invoice implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long invoiceid;

	@Column(name = "invoicename")
	private String invoicename;

	@Column(name = "invoicepath")
	private String invoicepath;

	@Column(name = "updated_date")
	private Date updated_date;

	@Column(name = "year")
	private String year;

	@Column(name = "month")
	private String month;
	
	@Column(name = "quarter")
	private String quarter;
	
	@Column(name = "dsacode")
	private String dsacode;
	
	@Column(name = "productname")
	private String productname;
	
	@Column(name = "invoiceno")
	private String invoiceno;
	
	@Column(name = "gstnumber")
	private String gstnumber;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "loan_billing_state")
	private String loan_billing_state;
	
	@Column(name = "invoiceamount")
	private long invoiceamount;
	
	@Column(name = "submit_flag")
	private String submit_flag;
	
	
	

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "invoiceid", referencedColumnName = "ID", nullable = false)
	private List<ListLosId> listlos;

	public long getInvoiceid() {
		return invoiceid;
	}

	public void setInvoiceid(long invoiceid) {
		this.invoiceid = invoiceid;
	}

	public String getInvoicename() {
		return invoicename;
	}

	public void setInvoicename(String invoicename) {
		this.invoicename = invoicename;
	}

	public String getInvoicepath() {
		return invoicepath;
	}

	public void setInvoicepath(String invoicepath) {
		this.invoicepath = invoicepath;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}

	public String getDsacode() {
		return dsacode;
	}

	public void setDsacode(String dsacode) {
		this.dsacode = dsacode;
	}

	public String getQuarter() {
		return quarter;
	}

	public void setQuarter(String quarter) {
		this.quarter = quarter;
	}

	public String getYear() {
		return year;
	}

	public List<ListLosId> getListlos() {
		return listlos;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public void setListlos(List<ListLosId> listlos) {
		this.listlos = listlos;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getInvoiceno() {
		return invoiceno;
	}

	public void setInvoiceno(String invoiceno) {
		this.invoiceno = invoiceno;
	}

	public String getGstnumber() {
		return gstnumber;
	}

	public void setGstnumber(String gstnumber) {
		this.gstnumber = gstnumber;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getInvoiceamount() {
		return invoiceamount;
	}

	public void setInvoiceamount(long invoiceamount) {
		this.invoiceamount = invoiceamount;
	}

	public String getLoan_billing_state() {
		return loan_billing_state;
	}

	public void setLoan_billing_state(String loan_billing_state) {
		this.loan_billing_state = loan_billing_state;
	}

	public String getSubmit_flag() {
		return submit_flag;
	}

	public void setSubmit_flag(String submit_flag) {
		this.submit_flag = submit_flag;
	}

	
}