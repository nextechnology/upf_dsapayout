package com.guavatrees.upf.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "client_details_web")
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
public class ClientDetailsWEB {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "annual_turnover")
	private Double annualTurnover;
	
	@Column(name = "business_vintage")
	private String businessVintage;
	
	@Column(name = "geographical_area")
	private String geographicalArea;
	
	@Column(name = "geographical_limit")
	private String geographicalLimit;
	
	@Column(name = "office_ownership_status")
	private String officeOwnershipStatus;

	@Column(name = "inward_bounce_days_last_month")
	private Boolean	areInwardBounceDaysLastMonths;
	
	@Column(name = "inward_bounce_days_last_three_month")
	private Boolean	areInwardBounceDaysLastThreeMonths;
	
	@Column(name = "inward_bounce_days_month_1")
	private Double inwardBounceDaysMonth1;
	
	@Column(name = "inward_bounce_days_month_2")
	private Double 	inwardBounceDaysMonth2;
	
	@Column(name = "inward_bounce_days_month_3")
	private Double  inwardBounceDaysMonth3;
	
	@Column(name = "is_credit_count")
	private Boolean	isCreditCount;
	
	@Column(name = "credit_count_month_1")
	private Integer	creditCountMonth1;
	
	@Column(name = "credit_count_month_2")
	private Integer	creditCountMonth2;
	
	@Column(name = "credit_count_month_average")
	private Double	creditCountMonthAverage;
	
	@Column(name = "emi_bounce_month_1")
	private Integer	emiBounceMonth1;
	
	@Column(name = "emi_bounce_month_2")
	private Integer	emiBounceMonth2;
	
	@Column(name = "emi_bounce_month_3")
	private Integer	emiBounceMonth3;
	
	@Column(name = "emi_bounce_month_total")
	private Integer	emiBounceMonthTotal;
	
	@Column(name = "loanamount")
	private Double loanamount;
	@Column(name = "businessopendate")
	private String businessopendate;
	@Column(name = "businesspremises")
	private String businesspremises;
	@Column(name = "creditCountMonth3")
	private Double creditCountMonth3;
	@Column(name = "debitCountMonth1")
	private Double debitCountMonth1;
	@Column(name = "debitCountMonth2")
	private Double debitCountMonth2;
	@Column(name = "debitCountMonth3")
	private Double debitCountMonth3;

	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getLoanamount() {
		return loanamount;
	}

	public void setLoanamount(Double loanamount) {
		this.loanamount = loanamount;
	}

	public String getBusinessopendate() {
		return businessopendate;
	}

	public void setBusinessopendate(String businessopendate) {
		this.businessopendate = businessopendate;
	}

	public String getBusinesspremises() {
		return businesspremises;
	}

	public void setBusinesspremises(String businesspremises) {
		this.businesspremises = businesspremises;
	}

	public Double getCreditCountMonth3() {
		return creditCountMonth3;
	}

	public void setCreditCountMonth3(Double creditCountMonth3) {
		this.creditCountMonth3 = creditCountMonth3;
	}

	public Double getDebitCountMonth1() {
		return debitCountMonth1;
	}

	public void setDebitCountMonth1(Double debitCountMonth1) {
		this.debitCountMonth1 = debitCountMonth1;
	}

	public Double getDebitCountMonth2() {
		return debitCountMonth2;
	}

	public void setDebitCountMonth2(Double debitCountMonth2) {
		this.debitCountMonth2 = debitCountMonth2;
	}

	public Double getDebitCountMonth3() {
		return debitCountMonth3;
	}

	public void setDebitCountMonth3(Double debitCountMonth3) {
		this.debitCountMonth3 = debitCountMonth3;
	}

	public Double getAnnualTurnover() {
		return annualTurnover;
	}

	public void setAnnualTurnover(Double annualTurnover) {
		this.annualTurnover = annualTurnover;
	}

	public String getBusinessVintage() {
		return businessVintage;
	}

	public void setBusinessVintage(String businessVintage) {
		this.businessVintage = businessVintage;
	}

	public String getGeographicalArea() {
		return geographicalArea;
	}

	public void setGeographicalArea(String geographicalArea) {
		this.geographicalArea = geographicalArea;
	}

	public String getGeographicalLimit() {
		return geographicalLimit;
	}

	public void setGeographicalLimit(String geographicalLimit) {
		this.geographicalLimit = geographicalLimit;
	}

	public String getOfficeOwnershipStatus() {
		return officeOwnershipStatus;
	}

	public void setOfficeOwnershipStatus(String officeOwnershipStatus) {
		this.officeOwnershipStatus = officeOwnershipStatus;
	}

	public Boolean getAreInwardBounceDaysLastMonths() {
		return areInwardBounceDaysLastMonths;
	}

	public void setAreInwardBounceDaysLastMonths(Boolean areInwardBounceDaysLastMonths) {
		this.areInwardBounceDaysLastMonths = areInwardBounceDaysLastMonths;
	}

	public Boolean getAreInwardBounceDaysLastThreeMonths() {
		return areInwardBounceDaysLastThreeMonths;
	}

	public void setAreInwardBounceDaysLastThreeMonths(Boolean areInwardBounceDaysLastThreeMonths) {
		this.areInwardBounceDaysLastThreeMonths = areInwardBounceDaysLastThreeMonths;
	}

	public Double getInwardBounceDaysMonth1() {
		return inwardBounceDaysMonth1;
	}

	public void setInwardBounceDaysMonth1(Double inwardBounceDaysMonth1) {
		this.inwardBounceDaysMonth1 = inwardBounceDaysMonth1;
	}

	public Double getInwardBounceDaysMonth2() {
		return inwardBounceDaysMonth2;
	}

	public void setInwardBounceDaysMonth2(Double inwardBounceDaysMonth2) {
		this.inwardBounceDaysMonth2 = inwardBounceDaysMonth2;
	}

	public Double getInwardBounceDaysMonth3() {
		return inwardBounceDaysMonth3;
	}

	public void setInwardBounceDaysMonth3(Double inwardBounceDaysMonth3) {
		this.inwardBounceDaysMonth3 = inwardBounceDaysMonth3;
	}

	public Boolean getIsCreditCount() {
		return isCreditCount;
	}

	public void setIsCreditCount(Boolean isCreditCount) {
		this.isCreditCount = isCreditCount;
	}


	public Double getCreditCountMonthAverage() {
		return creditCountMonthAverage;
	}

	public void setCreditCountMonthAverage(Double creditCountMonthAverage) {
		this.creditCountMonthAverage = creditCountMonthAverage;
	}

	public Integer getCreditCountMonth1() {
		return creditCountMonth1;
	}

	public void setCreditCountMonth1(Integer creditCountMonth1) {
		this.creditCountMonth1 = creditCountMonth1;
	}

	public Integer getCreditCountMonth2() {
		return creditCountMonth2;
	}

	public void setCreditCountMonth2(Integer creditCountMonth2) {
		this.creditCountMonth2 = creditCountMonth2;
	}

	public Integer getEmiBounceMonth1() {
		return emiBounceMonth1;
	}

	public void setEmiBounceMonth1(Integer emiBounceMonth1) {
		this.emiBounceMonth1 = emiBounceMonth1;
	}

	public Integer getEmiBounceMonth2() {
		return emiBounceMonth2;
	}

	public void setEmiBounceMonth2(Integer emiBounceMonth2) {
		this.emiBounceMonth2 = emiBounceMonth2;
	}

	public Integer getEmiBounceMonth3() {
		return emiBounceMonth3;
	}

	public void setEmiBounceMonth3(Integer emiBounceMonth3) {
		this.emiBounceMonth3 = emiBounceMonth3;
	}

	public Integer getEmiBounceMonthTotal() {
		return emiBounceMonthTotal;
	}

	public void setEmiBounceMonthTotal(Integer emiBounceMonthTotal) {
		this.emiBounceMonthTotal = emiBounceMonthTotal;
	}

	@Override
	public String toString() {
		return "ClientDetailsWEB [id=" + id + ", annualTurnover=" + annualTurnover + ", businessVintage="
				+ businessVintage + ", geographicalArea=" + geographicalArea + ", geographicalLimit="
				+ geographicalLimit + ", officeOwnershipStatus=" + officeOwnershipStatus
				+ ", areInwardBounceDaysLastMonths=" + areInwardBounceDaysLastMonths
				+ ", areInwardBounceDaysLastThreeMonths=" + areInwardBounceDaysLastThreeMonths
				+ ", inwardBounceDaysMonth1=" + inwardBounceDaysMonth1 + ", inwardBounceDaysMonth2="
				+ inwardBounceDaysMonth2 + ", inwardBounceDaysMonth3=" + inwardBounceDaysMonth3 + ", isCreditCount="
				+ isCreditCount + ", creditCountMonth1=" + creditCountMonth1 + ", creditCountMonth2="
				+ creditCountMonth2 + ", creditCountMonthAverage=" + creditCountMonthAverage + ", emiBounceMonth1="
				+ emiBounceMonth1 + ", emiBounceMonth2=" + emiBounceMonth2 + ", emiBounceMonth3=" + emiBounceMonth3
				+ ", emiBounceMonthTotal=" + emiBounceMonthTotal + ", loanamount=" + loanamount + ", businessopendate="
				+ businessopendate + ", businesspremises=" + businesspremises + ", creditCountMonth3="
				+ creditCountMonth3 + ", debitCountMonth1=" + debitCountMonth1 + ", debitCountMonth2="
				+ debitCountMonth2 + ", debitCountMonth3=" + debitCountMonth3 + "]";
	}
	
	
	
}