package com.guavatrees.upf.dao.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true, dynamicUpdate = true)
@Table(name = "verify_document")
public class VerifyDocument implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	private long verifydocumentid;

	@Column(name = "documentname")
	private String documentname;

	@Column(name = "documentstatus")
	private String documentstatus;

	public long getVerifydocumentid() {
		return verifydocumentid;
	}

	public void setVerifydocumentid(long verifydocumentid) {
		this.verifydocumentid = verifydocumentid;
	}

	public String getDocumentname() {
		return documentname;
	}

	public void setDocumentname(String documentname) {
		this.documentname = documentname;
	}

	public String getDocumentstatus() {
		return documentstatus;
	}

	public void setDocumentstatus(String documentstatus) {
		this.documentstatus = documentstatus;
	}
}