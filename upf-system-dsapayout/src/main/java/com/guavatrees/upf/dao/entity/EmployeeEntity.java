package com.guavatrees.upf.dao.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "employee")
public class EmployeeEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long empid;

	@Column(name = "name")
	private String name;

	@Column(name = "emailid")
	private String emailid;

	@Column(name = "phoneno")
	private String phoneno;

	@Column(name = "state")
	private String state;

	@Column(name = "city")
	private String city;

	@Column(name = "employeeid")
	private String employeeid;

	@Column(name = "productype")
	private String productype;

	@Column(name = "userid")
	private long userid;

	@Column(name = "approvalamounts")
	private double approvalamounts;

	@Column(name = "updated_date")
	private Date updated_date;

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

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getState() {
		return state;
	}

	public String getProductype() {
		return productype;
	}

	public void setProductype(String productype) {
		this.productype = productype;
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

	public long getEmpid() {
		return empid;
	}

	public void setEmpid(long empid) {
		this.empid = empid;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
	}

	public double getApprovalamounts() {
		return approvalamounts;
	}

	public void setApprovalamounts(double approvalamounts) {
		this.approvalamounts = approvalamounts;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}

}
