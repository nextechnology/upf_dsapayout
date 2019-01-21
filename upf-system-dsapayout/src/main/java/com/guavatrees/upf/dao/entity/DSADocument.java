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

@Table(name = "dsa_document")
public class DSADocument implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private Long documentId;

	@Column(name = "documentname")
	private String documentname;

	@Column(name = "documentpath")
	private String documentpath;

	@Column(name = "updateddate")
	private Date updateddate;

	public Long getDocumentId() {
		return documentId;
	}

	public String getDocumentname() {
		return documentname;
	}

	public String getDocumentpath() {
		return documentpath;
	}

	public void setDocumentId(Long documentId) {
		this.documentId = documentId;
	}

	public Date getUpdateddate() {
		return updateddate;
	}

	public void setUpdateddate(Date updateddate) {
		this.updateddate = updateddate;
	}

	public void setDocumentname(String documentname) {
		this.documentname = documentname;
	}

	public void setDocumentpath(String documentpath) {
		this.documentpath = documentpath;
	}

}
