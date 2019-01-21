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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "dsaclientinfo")
public class DSAEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long dsaid;

	@Column(name = "companyname")
	private String companyname;

	@Column(name = "companypan")
	private String companypan;

	@Column(name = "contactname")
	private String contactname;

	@Column(name = "address")
	private String address;

	@Column(name = "emailid")
	private String emailid;

	@Column(name = "phone_number")
	private Long phoneNumber;

	@Column(name = "residenceaddress")
	private String residenceaddress;

	@Column(name = "businesssince")
	private String businesssince;

	@Column(name = "companytype")
	private String companytype;

	@Column(name = "bankname")
	private String bankname;

	@Column(name = "dsacode")
	private String dsacode;

	@Column(name = "accountno")
	private String accountno;

	@Column(name = "state")
	private String state;

	@Column(name = "city")
	private String city;

	@Column(name = "ifsccode")
	private String ifsccode;

	@Column(name = "userid")
	private long userid;

	@Column(name = "updated_date")
	private Date updated_date;

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "dsadocumentid", referencedColumnName = "ID", nullable = false)
	private List<DSADocument> dsaDocuments;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "renewalsid", referencedColumnName = "ID")
	private Renewals renewals;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "monthlyslabid", referencedColumnName = "ID", nullable = false)
	private List<MonthlySlab> monthlyslab;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "quarterlyslabid", referencedColumnName = "ID", nullable = false)
	private List<QuarterlySlab> quarterlyslab;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "gstdetailsid", referencedColumnName = "ID")
	private GstDetails gstdetails;

	public long getDsaid() {
		return dsaid;
	}

	public void setDsaid(long dsaid) {
		this.dsaid = dsaid;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getCompanypan() {
		return companypan;
	}

	public void setCompanypan(String companypan) {
		this.companypan = companypan;
	}

	public String getContactname() {
		return contactname;
	}

	public void setContactname(String contactname) {
		this.contactname = contactname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getResidenceaddress() {
		return residenceaddress;
	}

	public void setResidenceaddress(String residenceaddress) {
		this.residenceaddress = residenceaddress;
	}

	public String getBusinesssince() {
		return businesssince;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	

	public String getDsacode() {
		return dsacode;
	}

	public void setDsacode(String dsacode) {
		this.dsacode = dsacode;
	}

	public Renewals getRenewals() {
		return renewals;
	}

	public void setRenewals(Renewals renewals) {
		this.renewals = renewals;
	}

	public GstDetails getGstdetails() {
		return gstdetails;
	}

	public void setGstdetails(GstDetails gstdetails) {
		this.gstdetails = gstdetails;
	}

	public List<MonthlySlab> getMonthlyslab() {
		return monthlyslab;
	}

	public void setMonthlyslab(List<MonthlySlab> monthlyslab) {
		this.monthlyslab = monthlyslab;
	}

	public List<QuarterlySlab> getQuarterlyslab() {
		return quarterlyslab;
	}

	public void setQuarterlyslab(List<QuarterlySlab> quarterlyslab) {
		this.quarterlyslab = quarterlyslab;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public void setBusinesssince(String businesssince) {
		this.businesssince = businesssince;
	}

	public String getCompanytype() {
		return companytype;
	}

	public void setCompanytype(String companytype) {
		this.companytype = companytype;
	}

	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}

	public String getAccountno() {
		return accountno;
	}

	public void setAccountno(String accountno) {
		this.accountno = accountno;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getIfsccode() {
		return ifsccode;
	}

	public void setIfsccode(String ifsccode) {
		this.ifsccode = ifsccode;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}

	public List<DSADocument> getDsaDocuments() {
		return dsaDocuments;
	}

	public void setDsaDocuments(List<DSADocument> dsaDocuments) {
		this.dsaDocuments = dsaDocuments;
	}
}