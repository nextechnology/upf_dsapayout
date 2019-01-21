package com.guavatrees.upf.dao.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "client_info_web")
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
public class ClientInfoWeb {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "ID", nullable = false)
	private Long id;

	@Column(name = "COMPANY_NAME")
	private String companyName;

	@Column(name = "COMPANY_TYPE")
	private String companyType;

	@Column(name = "COMPANY_CONTACT")
	private Long companyContact;

	@Column(name = "ISCIBIL")
	private String callType;

	@Column(name = "PAN_NUMBER")
	private String panNumberForCompany;

	@Column(name = "ADDRESS")
	private String address;

	@Column(name = "CITY")
	private String city;

	@Column(name = "STATE")
	private String state;

	@Column(name = "PINCODE")
	private Long pinCode;

	@Column(name = "GK1_STATUS")
	private String gk1WebStatus;

	@Column(name = "GK2_STATUS")
	private String gk2Status;

	@Column(name = "Updated_date")
	private Date updatedDate;

	@Column(name = "resident_status")
	private String residentStatus;

	@Column(name = "smname")
	private String sm_name;

	@Column(name = "dsaname")
	private String dsa_name;

	@Column(name = "LOS_ID")
	private Long losid;

	@Column(name = "PRODUCT_TYPE")
	private String productType;

	@Column(name = "los_status")
	private String losStatus;

	@Column(name = "cibilStatus")
	private String cibilStatus;

	@Column(name = "bankingStaus")
	private String bankingStaus;

	@Column(name = "cibilStatusChecker")
	private String cibilStatusChecker;

	@Column(name = "bankingStausChecker")
	private String bankingStausChecker;

	@Column(name = "GK1_STATUS_CHECKER")
	private String gk1WebStatusChecker;

	@Column(name = "cibilStatusRemark")
	private String cibilStatusRemark;

	@Column(name = "bankingStausRemark")
	private String bankingStausRemark;

	@Column(name = "GK1_STATUS_Remark")
	private String gk1WebStatusRemark;

	@Column(name = "finalStatus_Checker")
	private String finalStatusChecker;

	@Column(name = "compnameflag")
	private String compnameflag;

	public String getFinalStatusChecker() {
		return finalStatusChecker;
	}

	public void setFinalStatusChecker(String finalStatusChecker) {
		this.finalStatusChecker = finalStatusChecker;
	}

	@Column(name = "finalStatus")
	private String finalStatus;

	@Column(name = "SEGMENT_TYPE")
	private String segmentType;

	@Column(name = "status_updatedDate")
	private Date status_updatedDate;

	@Column(name = "MOBILE_NUMBER")
	private Long mobileNumber;

	// @LazyCollection(LazyCollectionOption.FALSE)
	// @OneToMany(cascade = CascadeType.ALL)
	// @Fetch(FetchMode.SUBSELECT)
	// private List<ApplicantDetails> applicantDetails;

	public String getGk1WebStatus() {
		return gk1WebStatus;
	}

	public String getResidentStatus() {
		return residentStatus;
	}

	public void setResidentStatus(String residentStatus) {
		this.residentStatus = residentStatus;
	}

	public void setGk1WebStatus(String gk1WebStatus) {
		this.gk1WebStatus = gk1WebStatus;
	}

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CLIENT_DETAILS_ID", referencedColumnName = "ID", nullable = false)
	private ClientDetailsWEB clientDetailsWeb;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "VERIFY_CLIENT_DETAILS_ID", referencedColumnName = "ID", nullable = false)
	private VerifyClientInfoWeb verifyclientinfo;

	public ClientDetailsWEB getClientDetailsWeb() {
		return clientDetailsWeb;
	}

	public void setClientDetailsWeb(ClientDetailsWEB clientDetailsWeb) {
		this.clientDetailsWeb = clientDetailsWeb;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public Long getCompanyContact() {
		return companyContact;
	}

	public void setCompanyContact(Long companyContact) {
		this.companyContact = companyContact;
	}

	public String getCallType() {
		return callType;
	}

	public void setCallType(String callType) {
		this.callType = callType;
	}

	public String getPanNumberForCompany() {
		return panNumberForCompany;
	}

	public void setPanNumberForCompany(String panNumberForCompany) {
		this.panNumberForCompany = panNumberForCompany;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public String getCompnameflag() {
		return compnameflag;
	}

	public void setCompnameflag(String compnameflag) {
		this.compnameflag = compnameflag;
	}

	public String getCibilStatusRemark() {
		return cibilStatusRemark;
	}

	public void setCibilStatusRemark(String cibilStatusRemark) {
		this.cibilStatusRemark = cibilStatusRemark;
	}

	public String getBankingStausRemark() {
		return bankingStausRemark;
	}

	public void setBankingStausRemark(String bankingStausRemark) {
		this.bankingStausRemark = bankingStausRemark;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCibilStatusChecker() {
		return cibilStatusChecker;
	}

	public void setCibilStatusChecker(String cibilStatusChecker) {
		this.cibilStatusChecker = cibilStatusChecker;
	}

	public String getBankingStausChecker() {
		return bankingStausChecker;
	}

	public void setBankingStausChecker(String bankingStausChecker) {
		this.bankingStausChecker = bankingStausChecker;
	}

	public String getGk1WebStatusChecker() {
		return gk1WebStatusChecker;
	}

	public void setGk1WebStatusChecker(String gk1WebStatusChecker) {
		this.gk1WebStatusChecker = gk1WebStatusChecker;
	}

	public String getState() {
		return state;
	}

	public VerifyClientInfoWeb getVerifyclientinfo() {
		return verifyclientinfo;
	}

	public void setVerifyclientinfo(VerifyClientInfoWeb verifyclientinfo) {
		this.verifyclientinfo = verifyclientinfo;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Long getPinCode() {
		return pinCode;
	}

	public void setPinCode(Long pinCode) {
		this.pinCode = pinCode;
	}

	public String getGk2Status() {
		return gk2Status;
	}

	public String getSm_name() {
		return sm_name;
	}

	public String getProductType() {
		return productType;
	}

	public Date getStatus_updatedDate() {
		return status_updatedDate;
	}

	public void setStatus_updatedDate(Date status_updatedDate) {
		this.status_updatedDate = status_updatedDate;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public void setSm_name(String sm_name) {
		this.sm_name = sm_name;
	}

	public String getDsa_name() {
		return dsa_name;
	}

	public void setDsa_name(String dsa_name) {
		this.dsa_name = dsa_name;
	}

	public String getLosStatus() {
		return losStatus;
	}

	public void setLosStatus(String losStatus) {
		this.losStatus = losStatus;
	}

	public String getCibilStatus() {
		return cibilStatus;
	}

	public void setCibilStatus(String cibilStatus) {
		this.cibilStatus = cibilStatus;
	}

	public String getBankingStaus() {
		return bankingStaus;
	}

	public void setBankingStaus(String bankingStaus) {
		this.bankingStaus = bankingStaus;
	}

	public String getFinalStatus() {
		return finalStatus;
	}

	public void setFinalStatus(String finalStatus) {
		this.finalStatus = finalStatus;
	}

	public String getSegmentType() {
		return segmentType;
	}

	public String getGk1WebStatusRemark() {
		return gk1WebStatusRemark;
	}

	public void setGk1WebStatusRemark(String gk1WebStatusRemark) {
		this.gk1WebStatusRemark = gk1WebStatusRemark;
	}

	public void setSegmentType(String segmentType) {
		this.segmentType = segmentType;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public void setGk2Status(String gk2Status) {
		this.gk2Status = gk2Status;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public Long getLosid() {
		return losid;
	}

	public void setLosid(Long losid) {
		this.losid = losid;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
