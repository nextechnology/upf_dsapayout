package com.guavatrees.upf.dto;

public class Losdata {
	
	private String gkid;
	
	private String gklogindate;
	
	private Long losid;
	
	private String cmname;
	
	private String location;
	
	private Double loanamt;
	
	private String allocated;
	
	private String status;

	public String getGkid() {
		return gkid;
	}

	public void setGkid(String gkid) {
		this.gkid = gkid;
	}

	public String getGklogindate() {
		return gklogindate;
	}

	public void setGklogindate(String gklogindate) {
		this.gklogindate = gklogindate;
	}

	public Long getLosid() {
		return losid;
	}

	public void setLosid(Long losid) {
		this.losid = losid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCmname() {
		return cmname;
	}

	public void setCmname(String cmname) {
		this.cmname = cmname;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Double getLoanamt() {
		return loanamt;
	}

	public void setLoanamt(Double loanamt) {
		this.loanamt = loanamt;
	}

	public String getAllocated() {
		return allocated;
	}

	public void setAllocated(String allocated) {
		this.allocated = allocated;
	}
	
	

}
