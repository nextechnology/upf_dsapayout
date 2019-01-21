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
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "verify_client_info_web")
public class VerifyClientInfoWeb implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long verifyclientinfowebid;

	@Column(name = "vsegmentType")
	private String vsegmentType;

	@Column(name = "vpanNumberForCompany")
	private String vpanNumberForCompany;

	@Column(name = "vcompanyName")
	private String vcompanyName;

	@Column(name = "vbusinessopendate")
	private String vbusinessopendate;

	@Column(name = "vcompanyType")
	private String vcompanyType;

	@Column(name = "vpinCode")
	private String vpinCode;

	@Column(name = "vdsaCode")
	private String vdsaCode;

	@Column(name = "vinwardBounceDaysMonth1")
	private String vinwardBounceDaysMonth1;

	@Column(name = "vinwardBounceDaysMonth2")
	private String vinwardBounceDaysMonth2;

	@Column(name = "vinwardBounceDaysMonth3")
	private String vinwardBounceDaysMonth3;

	@Column(name = "vcreditCountMonth1")
	private String vcreditCountMonth1;

	@Column(name = "vcreditCountMonth2")
	private String vcreditCountMonth2;

	@Column(name = "vcreditCountMonth3")
	private String vcreditCountMonth3;

	@Column(name = "vemiBounceMonth1")
	private String vemiBounceMonth1;

	@Column(name = "vemiBounceMonth2")
	private String vemiBounceMonth2;

	@Column(name = "vemiBounceMonth3")
	private String vemiBounceMonth3;

	@Column(name = "vdebitCountMonth1")
	private String vdebitCountMonth1;

	@Column(name = "vdebitCountMonth2")
	private String vdebitCountMonth2;

	@Column(name = "vdebitCountMonth3")
	private String vdebitCountMonth3;
	
	
	@Column(name = "vcategory")
	private String vcategory;
	
	@Column(name = "vpropertyOwnership")
	private String vpropertyOwnership;
	
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "verifyClientinfowebid", referencedColumnName = "ID", nullable = false)
	private List<VerifyDirectorSBL> verifydirectorSBL;
	
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "verifyClientinfowebid", referencedColumnName = "ID", nullable = false)
	private List<VerifyDocument> verifydocument;
	
	

	public long getVerifyclientinfowebid() {
		return verifyclientinfowebid;
	}

	public void setVerifyclientinfowebid(long verifyclientinfowebid) {
		this.verifyclientinfowebid = verifyclientinfowebid;
	}

	public String getVsegmentType() {
		return vsegmentType;
	}

	public void setVsegmentType(String vsegmentType) {
		this.vsegmentType = vsegmentType;
	}

	public String getVpanNumberForCompany() {
		return vpanNumberForCompany;
	}

	public void setVpanNumberForCompany(String vpanNumberForCompany) {
		this.vpanNumberForCompany = vpanNumberForCompany;
	}

	public String getVcompanyName() {
		return vcompanyName;
	}

	public void setVcompanyName(String vcompanyName) {
		this.vcompanyName = vcompanyName;
	}

	public String getVbusinessopendate() {
		return vbusinessopendate;
	}

	public void setVbusinessopendate(String vbusinessopendate) {
		this.vbusinessopendate = vbusinessopendate;
	}

	public String getVcompanyType() {
		return vcompanyType;
	}

	public void setVcompanyType(String vcompanyType) {
		this.vcompanyType = vcompanyType;
	}

	public String getVpinCode() {
		return vpinCode;
	}

	public void setVpinCode(String vpinCode) {
		this.vpinCode = vpinCode;
	}

	public String getVinwardBounceDaysMonth1() {
		return vinwardBounceDaysMonth1;
	}

	public void setVinwardBounceDaysMonth1(String vinwardBounceDaysMonth1) {
		this.vinwardBounceDaysMonth1 = vinwardBounceDaysMonth1;
	}

	public String getVdsaCode() {
		return vdsaCode;
	}

	public void setVdsaCode(String vdsaCode) {
		this.vdsaCode = vdsaCode;
	}

	public String getVinwardBounceDaysMonth2() {
		return vinwardBounceDaysMonth2;
	}

	public void setVinwardBounceDaysMonth2(String vinwardBounceDaysMonth2) {
		this.vinwardBounceDaysMonth2 = vinwardBounceDaysMonth2;
	}

	public String getVinwardBounceDaysMonth3() {
		return vinwardBounceDaysMonth3;
	}

	public void setVinwardBounceDaysMonth3(String vinwardBounceDaysMonth3) {
		this.vinwardBounceDaysMonth3 = vinwardBounceDaysMonth3;
	}

	public String getVcreditCountMonth1() {
		return vcreditCountMonth1;
	}

	public void setVcreditCountMonth1(String vcreditCountMonth1) {
		this.vcreditCountMonth1 = vcreditCountMonth1;
	}

	public String getVcreditCountMonth2() {
		return vcreditCountMonth2;
	}

	public void setVcreditCountMonth2(String vcreditCountMonth2) {
		this.vcreditCountMonth2 = vcreditCountMonth2;
	}

	public String getVcreditCountMonth3() {
		return vcreditCountMonth3;
	}

	public void setVcreditCountMonth3(String vcreditCountMonth3) {
		this.vcreditCountMonth3 = vcreditCountMonth3;
	}

	public String getVemiBounceMonth1() {
		return vemiBounceMonth1;
	}

	public String getVcategory() {
		return vcategory;
	}

	public void setVcategory(String vcategory) {
		this.vcategory = vcategory;
	}

	public String getVpropertyOwnership() {
		return vpropertyOwnership;
	}

	public void setVpropertyOwnership(String vpropertyOwnership) {
		this.vpropertyOwnership = vpropertyOwnership;
	}

	public void setVemiBounceMonth1(String vemiBounceMonth1) {
		this.vemiBounceMonth1 = vemiBounceMonth1;
	}

	public String getVemiBounceMonth2() {
		return vemiBounceMonth2;
	}

	public void setVemiBounceMonth2(String vemiBounceMonth2) {
		this.vemiBounceMonth2 = vemiBounceMonth2;
	}

	public String getVemiBounceMonth3() {
		return vemiBounceMonth3;
	}

	public void setVemiBounceMonth3(String vemiBounceMonth3) {
		this.vemiBounceMonth3 = vemiBounceMonth3;
	}

	public String getVdebitCountMonth1() {
		return vdebitCountMonth1;
	}

	public void setVdebitCountMonth1(String vdebitCountMonth1) {
		this.vdebitCountMonth1 = vdebitCountMonth1;
	}

	public String getVdebitCountMonth2() {
		return vdebitCountMonth2;
	}

	public void setVdebitCountMonth2(String vdebitCountMonth2) {
		this.vdebitCountMonth2 = vdebitCountMonth2;
	}

	public String getVdebitCountMonth3() {
		return vdebitCountMonth3;
	}

	public void setVdebitCountMonth3(String vdebitCountMonth3) {
		this.vdebitCountMonth3 = vdebitCountMonth3;
	}

	public List<VerifyDirectorSBL> getVerifydirectorSBL() {
		return verifydirectorSBL;
	}

	public void setVerifydirectorSBL(List<VerifyDirectorSBL> verifydirectorSBL) {
		this.verifydirectorSBL = verifydirectorSBL;
	}

	public List<VerifyDocument> getVerifydocument() {
		return verifydocument;
	}

	public void setVerifydocument(List<VerifyDocument> verifydocument) {
		this.verifydocument = verifydocument;
	}

	@Override
	public String toString() {
		return "VerifyClientInfoWeb [verifyclientinfowebid=" + verifyclientinfowebid + ", vsegmentType=" + vsegmentType
				+ ", vpanNumberForCompany=" + vpanNumberForCompany + ", vcompanyName=" + vcompanyName
				+ ", vbusinessopendate=" + vbusinessopendate + ", vcompanyType=" + vcompanyType + ", vpinCode="
				+ vpinCode + ", vdsaCode=" + vdsaCode + ", vinwardBounceDaysMonth1=" + vinwardBounceDaysMonth1
				+ ", vinwardBounceDaysMonth2=" + vinwardBounceDaysMonth2 + ", vinwardBounceDaysMonth3="
				+ vinwardBounceDaysMonth3 + ", vcreditCountMonth1=" + vcreditCountMonth1 + ", vcreditCountMonth2="
				+ vcreditCountMonth2 + ", vcreditCountMonth3=" + vcreditCountMonth3 + ", vemiBounceMonth1="
				+ vemiBounceMonth1 + ", vemiBounceMonth2=" + vemiBounceMonth2 + ", vemiBounceMonth3=" + vemiBounceMonth3
				+ ", vdebitCountMonth1=" + vdebitCountMonth1 + ", vdebitCountMonth2=" + vdebitCountMonth2
				+ ", vdebitCountMonth3=" + vdebitCountMonth3 + ", verifydirectorSBL=" + verifydirectorSBL + "]";
	}

}