package com.guavatrees.upf.dao.entity;




import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.joda.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "clientinfo_applicantdetails")
@JsonIgnoreProperties(ignoreUnknown = true)
public class ClientInfoApplicantDetailsMapping {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	
	
	

	@Column(name = "client_id",insertable=false ,updatable=false)
	private Long clientId;
	
	
	@Column(name = "applicant_id",insertable=false ,updatable=false)
	private Long applicant_id;
	

	
	@Column(name = "process_status")
	private String processStatus;
	
	@Column(name = "cibil_vintagedate")
	private Date cibil_vintagedate;
	
	@OneToOne
	@Cascade(org.hibernate.annotations.CascadeType.ALL)
	@JoinColumn(name = "applicant_id", referencedColumnName = "ID")
	private ApplicantDetails applicantDetails;


	public ApplicantDetails getApplicantDetails() {
		return applicantDetails;
	}

	public void setApplicantDetails(ApplicantDetails applicantDetails) {
		this.applicantDetails = applicantDetails;
	}

	@Column(name = "error")
	private String errorCause;
	
	
	public String getProcessStatus() {
		return processStatus;
	}

	public void setProcessStatus(String processStatus) {
		this.processStatus = processStatus;
	}

	public String getErrorCause() {
		return errorCause;
	}

	public void setErrorCause(String errorCause) {
		this.errorCause = errorCause;
	}
	
	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public Long getApplicant_id() {
		return applicant_id;
	}

	public Date getCibil_vintagedate() {
		return cibil_vintagedate;
	}

	public void setCibil_vintagedate(Date cibil_vintagedate) {
		this.cibil_vintagedate = cibil_vintagedate;
	}

	public void setApplicant_id(Long applicant_id) {
		this.applicant_id = applicant_id;
	}

	

	

	
}
