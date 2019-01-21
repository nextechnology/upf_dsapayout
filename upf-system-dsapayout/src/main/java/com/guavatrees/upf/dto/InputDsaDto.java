package com.guavatrees.upf.dto;

import java.util.List;

import com.guavatrees.upf.dao.entity.DsaDetailsEntity;

public class InputDsaDto {
	private long dsa_id;
	private long sm_id;
	private String name;
	private String emailid;
	private long phoneno;
	private String state;
	private String statecode;
	private String city;
	private String employeeid;
	private long dsasmid;
	private String companyname;
	private String year;
	private String month;
	private String dsacode;
	private String invoiceno;
	private double finalpayoutamount;
	
	private List<DsaDetailsEntity> dsalist;
	
	private double quarterlypayout;
	private double quarterlypayrate;
	private double totalsanctionamount;
	private long countdisbursalfile;
	private long reporter_id;
	private long reporting_id;
	private String product;
	private String role;
	
	  
	
	public List<DsaDetailsEntity> getDsalist() {
		return dsalist;
	}
	public void setDsalist(List<DsaDetailsEntity> dsalist) {
		this.dsalist = dsalist;
	}
	public double getTotalsanctionamount() {
		return totalsanctionamount;
	}
	public void setTotalsanctionamount(double totalsanctionamount) {
		this.totalsanctionamount = totalsanctionamount;
	}
	public long getCountdisbursalfile() {
		return countdisbursalfile;
	}
	public void setCountdisbursalfile(long countdisbursalfile) {
		this.countdisbursalfile = countdisbursalfile;
	}
	public long getDsa_id() {
		return dsa_id;
	}
	public void setDsa_id(long dsa_id) {
		this.dsa_id = dsa_id;
	}
	public long getSm_id() {
		return sm_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public long getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public double getQuarterlypayout() {
		return quarterlypayout;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public void setQuarterlypayout(double quarterlypayout) {
		this.quarterlypayout = quarterlypayout;
	}
	public double getQuarterlypayrate() {
		return quarterlypayrate;
	}
	public void setQuarterlypayrate(double quarterlypayrate) {
		this.quarterlypayrate = quarterlypayrate;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
	}
	public void setSm_id(long sm_id) {
		this.sm_id = sm_id;
	}
	public String getCompanyname() {
		return companyname;
	}
	
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getYear() {
		return year;
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
	public long getDsasmid() {
		return dsasmid;
	}
	public void setDsasmid(long dsasmid) {
		this.dsasmid = dsasmid;
	}
	public long getReporter_id() {
		return reporter_id;
	}
	public void setReporter_id(long reporter_id) {
		this.reporter_id = reporter_id;
	}
	public long getReporting_id() {
		return reporting_id;
	}
	public void setReporting_id(long reporting_id) {
		this.reporting_id = reporting_id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getStatecode() {
		return statecode;
	}
	public void setStatecode(String statecode) {
		this.statecode = statecode;
	}
	public String getDsacode() {
		return dsacode;
	}
	public void setDsacode(String dsacode) {
		this.dsacode = dsacode;
	}
	public String getInvoiceno() {
		return invoiceno;
	}
	public void setInvoiceno(String invoiceno) {
		this.invoiceno = invoiceno;
	}
	public double getFinalpayoutamount() {
		return finalpayoutamount;
	}
	public void setFinalpayoutamount(double finalpayoutamount) {
		this.finalpayoutamount = finalpayoutamount;
	}
	
	
	
	



}