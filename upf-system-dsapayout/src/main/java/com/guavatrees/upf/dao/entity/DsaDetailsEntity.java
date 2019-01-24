package com.guavatrees.upf.dao.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.joda.time.format.DateTimeFormatter;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "dsadetails")
public class DsaDetailsEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long dsadetailsid;

	@Column(name = "location")
	private String location;

	@Column(name = "month")
	private String month;

	@Column(name = "companyname")
	private String companyname;

	@Column(name = "salesmanager")
	private String salesmanager;

	@Column(name = "dsa")
	private String dsa;
	
	@Column(name = "frequency")
	private String frequency;

	@Column(name = "dsacode")
	private String dsacode;

	@Column(name = "status")
	private String status;

	@Column(name = "sanctionedamount")
	private double sanctionedamount;

	@Column(name = "payrate")
	private double payrate;

	@Column(name = "subvention")
	private double subvention;

	@Column(name = "netpayrate")
	private double netpayrate;

	@Column(name = "include")
	private String include;

	@Column(name = "finalpayoutamount")
	private double finalpayoutamount;

	@Column(name = "roi")
	private String roi;

	@Column(name = "interestamount")
	private double interestamount;

	@Column(name = "pf")
	private double pf;

	@Column(name = "pfamount")
	private double pfamount;

	@Column(name = "quarterlypayrate")
	private double quarterlypayrate;

	@Column(name = "quarterlytotalpayout")
	private double quarterlytotalpayout;

	@Column(name = "losid")
	private long losid;

	@Column(name = "year")
	private String year;

	@Column(name = "gatekeeperid")
	private String gatekeeperid;

	@Column(name = "sanctioned_amount_total")
	private Long sanctioned_amount_total;

	@Column(name = "appliedloanamount")
	private double applied_loan_amount;

	@Column(name = "avgnetpayrate")
	private double avgnetpayrate;

	@Column(name = "finalpayoutamount_total")
	private double finalpayoutamount_total;

	@Column(name = "avgroi")
	private double avgroi;

	@Column(name = "int_amount_total")
	private double int_amount_total;

	@Column(name = "avgpf")
	private double avgpf;

	@Column(name = "pfamounttotal")
	private double pfamounttotal;

	@Column(name = "paymentflag")
	private String paymentFlag;

	@Column(name = "misflag")
	private String misFlag;

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	@Column(name = "productcode")
	private Long productcode;

	@Column(name = "productname")
	private String productname;

	@Column(name = "customer")
	private String customer;
	
	@Column(name = "state")
	private String state;

	@Column(name = "camdate")
	private Date camdate;

	@Column(name = "hold_pending")
	private String hold_pending;
	
	@Column(name = "pd_date")
	private String pd_date;
	
	@Column(name = "disb_date")
	private Date disb_date;
	
	@Column(name = "gkaccept")
	private String gkaccept;
	
	@Column(name = "gkrejectreason")
	private String gkrejectreason;
	
	@Column(name = "remark")
	private String remark;
	
	@Column(name = "constatus")
	private String constatus;
	
	@Column(name = "acc_constatus")
	private String acc_constatus;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@Column(name = "paymentdate")
	private Date paymentdate;
	
	@Column(name = "acc_remark")
	private String acc_remark;
	
	@Column(name = "updated_date")
	private Date updated_date;
	
	@Transient
	private long offset;
	
	@Transient
	private String startdate;
	
	@Transient
	private String enddate;
	//@Column(name = "lmsid")
	//private String lmsid;

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	public long getDsadetailsid() {
		return dsadetailsid;
	}

	public void setDsadetailsid(long dsadetailsid) {
		this.dsadetailsid = dsadetailsid;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDsacode() {
		return dsacode;
	}

	public void setDsacode(String dsacode) {
		this.dsacode = dsacode;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getSalesmanager() {
		return salesmanager;
	}

	public void setSalesmanager(String salesmanager) {
		this.salesmanager = salesmanager;
	}

	public String getDsa() {
		return dsa;
	}

	public double getQuarterlypayrate() {
		return quarterlypayrate;
	}

	public void setQuarterlypayrate(double quarterlypayrate) {
		this.quarterlypayrate = quarterlypayrate;
	}

	public double getQuarterlytotalpayout() {
		return quarterlytotalpayout;
	}

	public void setQuarterlytotalpayout(double quarterlytotalpayout) {
		this.quarterlytotalpayout = quarterlytotalpayout;
	}

	public void setDsa(String dsa) {
		this.dsa = dsa;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public double getSanctionedamount() {
		return sanctionedamount;
	}

	public Date getDisb_date() {
		return disb_date;
	}

	public void setDisb_date(Date disb_date) {
		this.disb_date = disb_date;
	}

	public void setSanctionedamount(double sanctionedamount) {
		this.sanctionedamount = sanctionedamount;
	}

	public double getApplied_loan_amount() {
		return applied_loan_amount;
	}

	public Long getProductcode() {
		return productcode;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	
	public String getHold_pending() {
		return hold_pending;
	}

	public void setHold_pending(String hold_pending) {
		this.hold_pending = hold_pending;
	}

	public String getPd_date() {
		return pd_date;
	}

	public void setPd_date(String pd_date) {
		this.pd_date = pd_date;
	}

	public String getGkaccept() {
		return gkaccept;
	}

	public void setGkaccept(String gkaccept) {
		this.gkaccept = gkaccept;
	}

	public String getGkrejectreason() {
		return gkrejectreason;
	}

	public void setGkrejectreason(String gkrejectreason) {
		this.gkrejectreason = gkrejectreason;
	}

	public void setProductcode(Long productcode) {
		this.productcode = productcode;
	}

	public void setApplied_loan_amount(double applied_loan_amount) {
		this.applied_loan_amount = applied_loan_amount;
	}

	public double getPayrate() {
		return payrate;
	}

	public String getPaymentFlag() {
		return paymentFlag;
	}

	public void setPaymentFlag(String paymentFlag) {
		this.paymentFlag = paymentFlag;
	}

	public String getMisFlag() {
		return misFlag;
	}

	public void setMisFlag(String misFlag) {
		this.misFlag = misFlag;
	}

	public void setPayrate(double payrate) {
		this.payrate = payrate;
	}

	public double getSubvention() {
		return subvention;
	}

	public void setSubvention(double subvention) {
		this.subvention = subvention;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getGatekeeperid() {
		return gatekeeperid;
	}

	public void setGatekeeperid(String gatekeeperid) {
		this.gatekeeperid = gatekeeperid;
	}

	public double getNetpayrate() {
		return netpayrate;
	}

	public void setNetpayrate(double netpayrate) {
		this.netpayrate = netpayrate;
	}

	public String getInclude() {
		return include;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public void setInclude(String include) {
		this.include = include;
	}

	public Date getCamdate() {
		return camdate;
	}

	public void setCamdate(Date camdate) {
		this.camdate = camdate;
	}

	public double getFinalpayoutamount() {
		return finalpayoutamount;
	}

	public void setFinalpayoutamount(double finalpayoutamount) {
		this.finalpayoutamount = finalpayoutamount;
	}

	public Long getSanctioned_amount_total() {
		return sanctioned_amount_total;
	}

	public void setSanctioned_amount_total(Long sanctioned_amount_total) {
		this.sanctioned_amount_total = sanctioned_amount_total;
	}

	public double getAvgnetpayrate() {
		return avgnetpayrate;
	}

	public void setAvgnetpayrate(double avgnetpayrate) {
		this.avgnetpayrate = avgnetpayrate;
	}

	public double getFinalpayoutamount_total() {
		return finalpayoutamount_total;
	}

	public void setFinalpayoutamount_total(double finalpayoutamount_total) {
		this.finalpayoutamount_total = finalpayoutamount_total;
	}

	public double getAvgroi() {
		return avgroi;
	}

	public void setAvgroi(double avgroi) {
		this.avgroi = avgroi;
	}

	public double getInt_amount_total() {
		return int_amount_total;
	}

	public void setInt_amount_total(double int_amount_total) {
		this.int_amount_total = int_amount_total;
	}

	public double getAvgpf() {
		return avgpf;
	}

	public void setAvgpf(double avgpf) {
		this.avgpf = avgpf;
	}

	public double getPfamounttotal() {
		return pfamounttotal;
	}

	public void setPfamounttotal(double pfamounttotal) {
		this.pfamounttotal = pfamounttotal;
	}

	public double getPf() {
		return pf;
	}

	public void setPf(double pf) {
		this.pf = pf;
	}

	public String getRoi() {
		return roi;
	}

	public void setRoi(String roi) {
		this.roi = roi;
	}

	public long getLosid() {
		return losid;
	}

	public void setLosid(long losid) {
		this.losid = losid;
	}

	public double getPfamount() {
		return pfamount;
	}

	public void setPfamount(double pfamount) {
		this.pfamount = pfamount;
	}

	public double getInterestamount() {
		return interestamount;
	}

	public void setInterestamount(double interestamount) {
		this.interestamount = interestamount;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getConstatus() {
		return constatus;
	}

	public void setConstatus(String constatus) {
		this.constatus = constatus;
	}

	public Date getPaymentdate() {
		return paymentdate;
	}

	public void setPaymentdate(Date paymentdate) {
		this.paymentdate = paymentdate;
	}

	public String getAcc_constatus() {
		return acc_constatus;
	}

	public void setAcc_constatus(String acc_constatus) {
		this.acc_constatus = acc_constatus;
	}

	public String getAcc_remark() {
		return acc_remark;
	}

	public void setAcc_remark(String acc_remark) {
		this.acc_remark = acc_remark;
	}

	public long getOffset() {
		return offset;
	}

	public void setOffset(long offset) {
		this.offset = offset;
	}

	/*public String getLmsid() {
		return lmsid;
	}

	public void setLmsid(String lmsid) {
		this.lmsid = lmsid;
	}*/

	

	
	
	
	
}