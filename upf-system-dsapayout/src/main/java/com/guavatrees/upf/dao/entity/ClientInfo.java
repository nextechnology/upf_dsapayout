package com.guavatrees.upf.dao.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "client_info")
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
public class ClientInfo implements java.io.Serializable {
 
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private Long id;

	@Column(name = "COMPANY_NAME")
	private String companyName;

	@Column(name = "COMPANY_TYPE")
	private String companyType;

	@Column(name = "COMPANY_CONTACT")
	private Long companyContact;

	@Column(name = "ISCIBIL")
	private String callType;

	@Column(name = "SEGMENT_TYPE")
	private String segmentType;

	@Column(name = "MOBILE_NUMBER")
	private Long mobileNumber;

	@Column(name = "PRODUCT_TYPE")
	private String productType;

	public String getCallType() {
		return callType;
	}

	public void setCallType(String callType) {
		this.callType = callType;
	}

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
	private String gk1Status;

	@Column(name = "GK2_STATUS")
	private String gk2Status;

	@Column(name = "Updated_date")
	private Date updatedDate;
	
	@Column(name = "status_updatedDate")
	private Date status_updatedDate;

	@Column(name = "resident_status")
	private String residentStatus;

	@Column(name = "los_status")
	private String losStatus;
	
	@Column(name = "cibilStatus")
	private String cibilStatus;
	
	@Column(name = "bankingStaus")
	private String bankingStaus;
	
	@Column(name = "finalStatus")
	private String finalStatus;

	public String getGk1Status() {
		return gk1Status;
	}

	public void setGk1Status(String gk1Status) {
		this.gk1Status = gk1Status;
	}

	public String getAnnualturnover() {
		return annualturnover;
	}

	public void setAnnualturnover(String annualturnover) {
		this.annualturnover = annualturnover;
	}

	public String getMonthlycardsales() {
		return monthlycardsales;
	}

	public void setMonthlycardsales(String monthlycardsales) {
		this.monthlycardsales = monthlycardsales;
	}

	@Column(name = "smname")
	private String sm_name;

	@Column(name = "dsaname")
	private String dsa_name;

	@Column(name = "LOS_ID")
	private Long losid;

	@Column(name = "pan_name")
	private String panname;
	
	@Column(name = "compnameflag")
	private String compnameflag;
	
	@Transient
	private String fcmtoken;
	
	@Column(name = "propertyOwnership")
	private String propertyOwnership;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "annualturnover")
	private String annualturnover;
	
	@Column(name = "monthlycardsales")
	private String monthlycardsales;


	/*
	 * 
	 * @LazyCollection(LazyCollectionOption.FALSE)
	 * 
	 * @OneToMany(cascade = CascadeType.ALL)
	 * 
	 * @JoinColumn(name = "CLIENT_INFO_ID",referencedColumnName="ID",nullable=
	 * false)
	 * 
	 * @Fetch(FetchMode.SUBSELECT) private List<ApplicantDetails>
	 * applicantDetails;
	 */

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany
	@Cascade(CascadeType.ALL)
	@JoinColumn(name = "client_id", referencedColumnName = "ID", nullable = false)
	@Fetch(FetchMode.SUBSELECT)
	private List<ClientInfoApplicantDetailsMapping> clientInfoApplicantDetailsMapping;

	public List<ClientInfoApplicantDetailsMapping> getClientInfoApplicantDetailsMapping() {
		return clientInfoApplicantDetailsMapping;
	}

	public void setClientInfoApplicantDetailsMapping(
			List<ClientInfoApplicantDetailsMapping> clientInfoApplicantDetailsMapping) {
		this.clientInfoApplicantDetailsMapping = clientInfoApplicantDetailsMapping;
	}

	@OneToOne
	@Cascade(CascadeType.ALL)
	@JoinColumn(name = "CLIENT_DETAILS_ID", referencedColumnName = "ID")
	private ClientDetails clientDetails;

	// @LazyCollection(LazyCollectionOption.FALSE)
	// @OneToMany(cascade = CascadeType.ALL)
	// @JoinColumn(name = "CLIENT_INFO_ID",referencedColumnName="ID",nullable=
	// false)
	// @Fetch(FetchMode.SUBSELECT)
	// private List<ClientInfoApplicantDetailsmapping> clientInfoApplicant;

	// @Transient
	// @JsonSerialize
	// @JsonDeserialize
	// private MultipartFile file;
	//
	// public MultipartFile getFile() {
	// return file;
	// }
	// public void setFile(MultipartFile file) {
	// this.file = file;
	// }

	public String getCompanyType() {
		return companyType;
	}

	public String getResidentStatus() {
		return residentStatus;
	}

	public void setResidentStatus(String residentStatus) {
		this.residentStatus = residentStatus;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public String getLosStatus() {
		return losStatus;
	}

	public void setLosStatus(String losStatus) {
		this.losStatus = losStatus;
	}

	public String getSegmentType() {
		return segmentType;
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

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public Date getStatus_updatedDate() {
		return status_updatedDate;
	}

	public void setStatus_updatedDate(Date status_updatedDate) {
		this.status_updatedDate = status_updatedDate;
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

	public ClientDetails getClientDetails() {
		return clientDetails;
	}

	public void setClientDetails(ClientDetails clientDetails) {
		this.clientDetails = clientDetails;
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

	public String getCompnameflag() {
		return compnameflag;
	}

	public String getFcmtoken() {
		return fcmtoken;
	}

	public void setFcmtoken(String fcmtoken) {
		this.fcmtoken = fcmtoken;
	}

	public String getPropertyOwnership() {
		return propertyOwnership;
	}

	public void setPropertyOwnership(String propertyOwnership) {
		this.propertyOwnership = propertyOwnership;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setCompnameflag(String compnameflag) {
		this.compnameflag = compnameflag;
	}

	public String getFinalStatus() {
		return finalStatus;
	}

	public void setFinalStatus(String finalStatus) {
		this.finalStatus = finalStatus;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPinCode() {
		return pinCode;
	}

	public void setPinCode(Long pinCode) {
		this.pinCode = pinCode;
	}

	/*
	 * public List<ApplicantDetails> getApplicantDetails() { return
	 * applicantDetails; } public void
	 * setApplicantDetails(List<ApplicantDetails> applicantDetails) {
	 * this.applicantDetails = applicantDetails; }
	 */
	public String getCity() {
		return city;
	}

	public String getSm_name() {
		return sm_name;
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

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	

	public String getPanNumberForCompany() {
		return panNumberForCompany;
	}

	public void setPanNumberForCompany(String panNumberForCompany) {
		this.panNumberForCompany = panNumberForCompany;
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

	public String getGk2Status() {
		return gk2Status;
	}

	public void setGk2Status(String gk2Status) {
		this.gk2Status = gk2Status;
	}

	public String getPanname() {
		return panname;
	}

	public void setPanname(String panname) {
		this.panname = panname;
	}

	@Override
	public String toString() {
		return "ClientInfo [id=" + id + ", companyName=" + companyName + ", companyType=" + companyType
				+ ", companyContact=" + companyContact + ", callType=" + callType + ", segmentType=" + segmentType
				+ ", mobileNumber=" + mobileNumber + ", productType=" + productType + ", panNumberForCompany="
				+ panNumberForCompany + ", address=" + address + ", city=" + city + ", state=" + state + ", pinCode="
				+ pinCode + ", gk1Status=" + gk1Status + ", gk2Status=" + gk2Status + ", updatedDate=" + updatedDate
				+ ", status_updatedDate=" + status_updatedDate + ", residentStatus=" + residentStatus + ", losStatus="
				+ losStatus + ", cibilStatus=" + cibilStatus + ", bankingStaus=" + bankingStaus + ", finalStatus="
				+ finalStatus + ", sm_name=" + sm_name + ", dsa_name=" + dsa_name + ", losid=" + losid + ", panname="
				+ panname + ", clientInfoApplicantDetailsMapping=" + clientInfoApplicantDetailsMapping
				+ ", clientDetails=" + clientDetails + "]";
	}
	
	

}