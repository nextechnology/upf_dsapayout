package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client_details")
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
public class ClientDetails implements java.io.Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private Double annualTurnover;
	private String officeOwnershipStatus;
	private String businessVintage;
	private String geographicalArea;
	private String geographicalLimit;
	private Boolean areInwardBounceDaysLastMonths;
	private Boolean areInwardBounceDaysLastThreeMonths;
	private Double inwardBounceDaysMonth1;
	private Double inwardBounceDaysMonth2;
	private Double inwardBounceDaysMonth3;
	private Boolean isCreditCount;
	private Double creditCountMonth1;
	private Double creditCountMonth2;
	private Double creditCountMonthAverage;
	private Double emiBounceMonth1;
	private Double emiBounceMonth2;
	private Double emiBounceMonth3;
	private Double emiBounceMonthTotal;
	private Double loanamount;
	private String businessopendate;
	private String businesspremises;
	private Double creditCountMonth3;
	private Double debitCountMonth1;
	private Double debitCountMonth2;
	private Double debitCountMonth3;
	private String source;
	

	// private String responseJson;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "annual_turnover")
	public Double getAnnualTurnover() {
		return annualTurnover;
	}

	public void setAnnualTurnover(Double annualTurnover) {
		this.annualTurnover = annualTurnover;
	}

	@Column(name = "business_vintage")
	public String getBusinessVintage() {
		return businessVintage;
	}

	public void setBusinessVintage(String businessVintage) {
		this.businessVintage = businessVintage;
	}

	@Column(name = "office_ownership_status")
	public String getOfficeOwnershipStatus() {
		return officeOwnershipStatus;
	}

	public void setOfficeOwnershipStatus(String officeOwnershipStatus) {
		this.officeOwnershipStatus = officeOwnershipStatus;
	}

	@Column(name = "geographical_area")
	public String getGeographicalArea() {
		return geographicalArea;
	}

	public void setGeographicalArea(String geographicalArea) {
		this.geographicalArea = geographicalArea;
	}

	@Column(name = "geographical_limit")
	public String getGeographicalLimit() {
		return geographicalLimit;
	}

	public void setGeographicalLimit(String geographicalLimit) {
		this.geographicalLimit = geographicalLimit;
	}

	@Column(name = "inward_bounce_days_last_month")
	public Boolean getAreInwardBounceDaysLastMonths() {
		return areInwardBounceDaysLastMonths;
	}

	public void setAreInwardBounceDaysLastMonths(Boolean areInwardBounceDaysLastMonths) {
		this.areInwardBounceDaysLastMonths = areInwardBounceDaysLastMonths;
	}

	@Column(name = "inward_bounce_days_last_three_month")
	public Boolean getAreInwardBounceDaysLastThreeMonths() {
		return areInwardBounceDaysLastThreeMonths;
	}

	public void setAreInwardBounceDaysLastThreeMonths(Boolean areInwardBounceDaysLastThreeMonths) {
		this.areInwardBounceDaysLastThreeMonths = areInwardBounceDaysLastThreeMonths;
	}

	@Column(name = "inward_bounce_days_month_1")
	public Double getInwardBounceDaysMonth1() {
		return inwardBounceDaysMonth1;
	}

	public void setInwardBounceDaysMonth1(Double inwardBounceDaysMonth1) {
		this.inwardBounceDaysMonth1 = inwardBounceDaysMonth1;
	}

	@Column(name = "inward_bounce_days_month_2")
	public Double getInwardBounceDaysMonth2() {
		return inwardBounceDaysMonth2;
	}

	public void setInwardBounceDaysMonth2(Double inwardBounceDaysMonth2) {
		this.inwardBounceDaysMonth2 = inwardBounceDaysMonth2;
	}

	@Column(name = "inward_bounce_days_month_3")
	public Double getInwardBounceDaysMonth3() {
		return inwardBounceDaysMonth3;
	}

	public void setInwardBounceDaysMonth3(Double inwardBounceDaysMonth3) {
		this.inwardBounceDaysMonth3 = inwardBounceDaysMonth3;
	}

	@Column(name = "is_credit_count")
	public Boolean getIsCreditCount() {
		return isCreditCount;
	}

	public void setIsCreditCount(Boolean isCreditCount) {
		this.isCreditCount = isCreditCount;
	}

	@Column(name = "credit_count_month_1")
	public Double getCreditCountMonth1() {
		return creditCountMonth1;
	}

	public void setCreditCountMonth1(Double creditCountMonth1) {
		this.creditCountMonth1 = creditCountMonth1;
	}

	@Column(name = "credit_count_month_2")
	public Double getCreditCountMonth2() {
		return creditCountMonth2;
	}

	public void setCreditCountMonth2(Double creditCountMonth2) {
		this.creditCountMonth2 = creditCountMonth2;
	}

	@Column(name = "credit_count_month_average")
	public Double getCreditCountMonthAverage() {
		return creditCountMonthAverage;
	}

	public void setCreditCountMonthAverage(Double creditCountMonthAverage) {
		this.creditCountMonthAverage = creditCountMonthAverage;
	}

	@Column(name = "emi_bounce_month_1")
	public Double getEmiBounceMonth1() {
		return emiBounceMonth1;
	}

	public void setEmiBounceMonth1(Double emiBounceMonth1) {
		this.emiBounceMonth1 = emiBounceMonth1;
	}

	@Column(name = "emi_bounce_month_2")
	public Double getEmiBounceMonth2() {
		return emiBounceMonth2;
	}

	public void setEmiBounceMonth2(Double emiBounceMonth2) {
		this.emiBounceMonth2 = emiBounceMonth2;
	}

	@Column(name = "emi_bounce_month_3")
	public Double getEmiBounceMonth3() {
		return emiBounceMonth3;
	}

	public void setEmiBounceMonth3(Double emiBounceMonth3) {
		this.emiBounceMonth3 = emiBounceMonth3;
	}

	@Column(name = "emi_bounce_month_total")
	public Double getEmiBounceMonthTotal() {
		return emiBounceMonthTotal;
	}

	public void setEmiBounceMonthTotal(Double emiBounceMonthTotal) {
		this.emiBounceMonthTotal = emiBounceMonthTotal;
	}

	@Column(name = "source")
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}
	
	@Column(name = "loanamount")
	public Double getLoanamount() {
		return loanamount;
	}

	public void setLoanamount(Double loanamount) {
		this.loanamount = loanamount;
	}

	@Column(name = "businessopendate")
	public String getBusinessopendate() {
		return businessopendate;
	}

	public void setBusinessopendate(String businessopendate) {
		this.businessopendate = businessopendate;
	}

	@Column(name = "businesspremises")
	public String getBusinesspremises() {
		return businesspremises;
	}

	public void setBusinesspremises(String businesspremises) {
		this.businesspremises = businesspremises;
	}

	@Column(name = "creditcountmonth3")
	public Double getCreditCountMonth3() {
		return creditCountMonth3;
	}

	public void setCreditCountMonth3(Double creditCountMonth3) {
		this.creditCountMonth3 = creditCountMonth3;
	}

	@Column(name = "debitcountmonth1")
	public Double getDebitCountMonth1() {
		return debitCountMonth1;
	}

	public void setDebitCountMonth1(Double debitCountMonth1) {
		this.debitCountMonth1 = debitCountMonth1;
	}

	@Column(name = "debitcountmonth2")
	public Double getDebitCountMonth2() {
		return debitCountMonth2;
	}

	public void setDebitCountMonth2(Double debitCountMonth2) {
		this.debitCountMonth2 = debitCountMonth2;
	}

	@Column(name = "debitcountmonth3")
	public Double getDebitCountMonth3() {
		return debitCountMonth3;
	}

	public void setDebitCountMonth3(Double debitCountMonth3) {
		this.debitCountMonth3 = debitCountMonth3;
	}

}