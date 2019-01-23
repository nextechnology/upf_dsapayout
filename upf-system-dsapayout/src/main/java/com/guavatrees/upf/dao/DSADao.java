package com.guavatrees.upf.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.guavatrees.upf.dao.entity.BLInsentive;
import com.guavatrees.upf.dao.entity.BLMonthlyPayout;
import com.guavatrees.upf.dao.entity.BLMonthlySlab;
import com.guavatrees.upf.dao.entity.ClientInfo;
import com.guavatrees.upf.dao.entity.ClientInfoWeb;
import com.guavatrees.upf.dao.entity.DSAEntity;
import com.guavatrees.upf.dao.entity.DsaDetailsEntity;
import com.guavatrees.upf.dao.entity.EmployeeEntity;
import com.guavatrees.upf.dao.entity.FestivalBLMonthlySlab;
import com.guavatrees.upf.dao.entity.FestivalPayout;
import com.guavatrees.upf.dao.entity.Invoice;
import com.guavatrees.upf.dao.entity.ListLosId;
import com.guavatrees.upf.dao.entity.PayoutDate;
import com.guavatrees.upf.dao.entity.SMInsentive;
import com.guavatrees.upf.dao.entity.SblInsentive;
import com.guavatrees.upf.dto.InputDsaDto;
import com.guavatrees.upf.dto.Losdata;


/**
 * interface is used for dsapayout dao layer
 * 
 * @author Vivek Patil
 * @since 4-1-2017
 *
 */
public interface DSADao {
	/**
	 * This api is used for posting data into dsaclientinfo table
	 * 
	 * @param DSAEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	public DSAEntity addDsaInfo(DSAEntity dsaEntity) throws Exception;

	/**
	 * This api is used for getting data from dsaclientinfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	public DSAEntity getDsaInfo(long id) throws Exception;

	/**
	 * This api is used for posting data into sminfo table
	 * 
	 * @param SMEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	long addEmpInfo(EmployeeEntity smentity) throws Exception;

	/**
	 * This api is used for getting data from sminfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	EmployeeEntity getEmpInfo(long id) throws Exception;

	/**
	 * This api is used for getting list of city
	 * 
	 * @param state
	 * @param request
	 * @param session
	 * @return citylist
	 * @throws Exception
	 */
	List<String> getCitylist(String state) throws Exception;

	/**
	 * This api is used for getting list of state
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return statelist
	 * @throws Exception
	 */
	List<String> getStatelist() throws Exception;

	/**
	 * This api is used for getting smListbased on city
	 * 
	 * 
	 * @param city
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	List<EmployeeEntity> getsmlist(String role,String product) throws Exception;

	/**
	 * This api is used for getting smListbased on city
	 * 
	 * 
	 * @param city
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	public List<EmployeeEntity> smListonCity(String state, String role,String product) throws Exception;

	/**
	 * This api is used for getting dsalist
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return dsaList
	 * @throws Exception
	 */
	List<DSAEntity> getdsalist() throws Exception;

	/**
	 * This api is used for getting dsalist based on searchstring
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return dsaList
	 * @throws Exception
	 */
	List<DSAEntity> getdsaautolist(String searchstring) throws Exception;

	/**
	 * This api is used for addimg smdsa mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	public void addsmdsa(List<InputDsaDto> listdsasm) throws Exception;

	/**
	 * This api is used for getlistdsa
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	List<InputDsaDto> getdsadetails(long userid) throws Exception;

	/**
	 * This api is used for verify duplicate email
	 * 
	 * 
	 * @param emailid
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	String getemailstatus(String email) throws Exception;

	/**
	 * This api is used for getting mappinglist based on dsaid
	 * 
	 * 
	 * @param dsaid
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	List<InputDsaDto> getdsasmmappingdetails(long dsaid) throws Exception;

	/**
	 * This api is used for deleting smdsa mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	String deletesmdsa(InputDsaDto inputdsadto) throws Exception;

	/**
	 * This api is used for posting data into addDsaAdminInfo table
	 * 
	 * @param DSAEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	void addDsaAdminInfo(DsaDetailsEntity dsadetailsEntity) throws Exception;

	/**
	 * This api is used for getting dsaadmindetails
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	InputDsaDto getdsaadmindetails(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getting getdsalistdetails
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	List<DsaDetailsEntity> getdsalistdetails(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getting getdsabasedlist
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	List<DsaDetailsEntity> getdsabasedlist(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getting getDsaOnUserID
	 * 
	 * @param userid
	 * @param request
	 * @param session
	 * @return DSAEntity
	 * @throws Exception
	 */
	DSAEntity getDsaOnUserID(long userid) throws Exception;

	/**
	 * This api is used for getting dsapayout
	 * 
	 * @param DsaDetailsEntity
	 * @param noFile,amount,dsacode
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	double getdsapayout(long noFile, double amount, String dsacode) throws Exception;

	/**
	 * This api is used for getting getstatecode
	 * 
	 * @param state
	 * @param request
	 * @param session
	 * @return Stringmonth
	 * @throws Exception
	 */
	String getstatecode(String state) throws Exception;

	/**
	 * This api is used for getting getDsadetail
	 * 
	 *
	 * @param dsacode,losid
	 * @param session
	 * @return DsaDetailsEntity
	 * @throws Exception
	 */
	DsaDetailsEntity getDsadetail(String dsacode, long losid) throws Exception;

	/**
	 * This api is used for getRole
	 * 
	 *
	 * @param smid
	 * @param session
	 * @return Role
	 * @throws Exception
	 */
	public String getRole(long id) throws Exception;

	/**
	 * This api is used for verify duplicate employeeid
	 * 
	 * 
	 * @param emailid
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	String getemployeeidstatus(String employeeid) throws Exception;

	/**
	 * This api is used for getdsacode
	 * 
	 *
	 * @return dsacode
	 * @throws Exception
	 */
	String getdsacode() throws Exception;

	/**
	 * This api is used for getdsabasedlistQuarterly
	 * 
	 *
	 * @param DsaDetailsEntity
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	InputDsaDto getdsabasedlistQuarterly(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getting data from dsaclientinfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	DSAEntity getDsaOndsacode(String dsacode) throws Exception;

	/**
	 * This api is used for getting data from getmonthlypayout
	 * 
	 * @param dsacode,month,year
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	long getmonthlypayout(String dsacode, String month, String year,String product) throws Exception;

	/**
	 * This api is used for getting empid based on userid
	 * 
	 * @param userid
	 * @param request
	 * @param session
	 * @return empid
	 * @throws Exception
	 */
	public InputDsaDto getEmpIdBasedOnUserID(long userid) throws Exception;

	/**
	 * This api is used for getting smlist based on roleid
	 * 
	 * 
	 * @param roleid
	 * @param session
	 * @return listsm
	 * @throws Exception
	 */
	public List<InputDsaDto> getsmdetails(long roleid) throws Exception;

	/**
	 * This api is used for getting mapped sm based on smid
	 * 
	 * 
	 * @param roleid
	 * @param session
	 * @return listsm
	 * @throws Exception
	 */
	public List<InputDsaDto> getmapsmdetails(long smid,String product) throws Exception;

	/**
	 * This api is used for adding addmapsm mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	public void addmapsm(List<InputDsaDto> listdsasm) throws Exception;

	/**
	 * This api is used for delete mapped sm
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	public String deletemapsm(InputDsaDto inputdsadto) throws Exception;

	/**
	 * This api is used for getting mapped upper sm
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	public List<InputDsaDto> getuppersmdetails(long smid,String product) throws Exception;

	/**
	 * This api is used for getquarterlypayout
	 * 
	 * 
	 * @param dsacode,month,year
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	long getquarterlypayout(String dsacode, String month, String year) throws Exception;

	/**
	 * This api is used for getmonthlyhistoricaldata
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	List<DsaDetailsEntity> getmonthlyhistoricaldata(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getlistsm
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	List<DsaDetailsEntity> getsmlistdetails(DsaDetailsEntity dsanameEntity) throws Exception;

	/**
	 * This api is used for getting getDsadetailonlos
	 * 
	 * @param losid
	 * @param request
	 * @param session
	 * @return DsaDetailsEntity
	 * @throws Exception
	 */
	DsaDetailsEntity getDsadetailonlos(long losid) throws Exception;

	/**
	 * This api is used for verify accountno
	 * 
	 * 
	 * @param accountno
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	String getaccountstatus(String accountno) throws Exception;

	List<String> getBanklist() throws Exception;

	String getcheckmapping(long empid) throws Exception;
	
	String getchecklos(long losid) throws Exception;

	List<SblInsentive> getListmonthlyslab() throws Exception;

	double getsblpayout(double amount) throws Exception;
	public void addsblincentive(List<SblInsentive> listsbl) throws Exception;

	long addBLInsentiveInfo(BLInsentive blinsentive) throws Exception;

	BLInsentive getBLInsentiveInfo(long id) throws Exception;

	double getsumlos(List<ListLosId> empid) throws Exception;

	Invoice addinvoiceInfo(Invoice invoice) throws Exception;

	List<Invoice> getinvoicelist(Invoice dsanameEntity) throws Exception;

	Long getinvoiceno(Invoice dsanameEntity) throws Exception;

	List<DsaDetailsEntity> getadminaccount(DsaDetailsEntity dsanameEntity) throws Exception;

	ClientInfoWeb getclientdetail(long losid) throws Exception;

	void addaccountadminlist(List<DsaDetailsEntity> listdsadetails) throws Exception;

	List<DsaDetailsEntity> getgklistdetails(DsaDetailsEntity dsanameEntity) throws Exception;

	public long getinvoiceid(String invoicename) throws SQLException, Exception;

	List<Losdata> getcamdatafromlos() throws Exception;

	List<Losdata> getcamdatafromclientinfoweb() throws Exception;

	List<Losdata> getstatusfromexceldetails() throws Exception;

	public InputDsaDto getproductbyuserid(Long userid) throws Exception ;

	long addSMInsentiveInfo(SMInsentive sminsentive) throws Exception;

	SMInsentive getSMInsentiveInfo(long id) throws Exception;
	
	public List<InputDsaDto> getuppercmdetails(long smid) throws Exception;
	
	public List<InputDsaDto> getcmdetails( String role) throws Exception;
	
	public List<InputDsaDto> getmapcmdetails(long cmid) throws Exception;

	void addpincode(List<String> listpincode) throws Exception;

	public List<InputDsaDto> getNsmData()throws Exception;
	
	public List<InputDsaDto> getAccountData()throws Exception;

	public List<InputDsaDto> getInvoiceData(String date)throws Exception;

	public double getFinalPayoutTotal();

	public InputDsaDto getStateCode(String state)throws Exception;

	public long checkInvoiceData(String date)throws Exception;

	public void deleteInvoice(List<Invoice> invoice)throws Exception;

	public long checkInvoice(Invoice invoice)throws Exception;

	public void updateInvoice(Invoice invoice)throws Exception;

	public Invoice getInvoicePath(DsaDetailsEntity dsa)throws Exception;

	public List<InputDsaDto> getStatedata()throws Exception;

	public String checkInvoiceNo(Invoice invoice)throws Exception;

	public String getPaymentFlagStatus(Invoice in)throws Exception;
	
	public ArrayList<DSAEntity> getUnverifiedDsaClientInfo();
	
	public ClientInfo getclientinfodetail(long losid)throws Exception;

	public void updateClientInfo(String customer, long losid)throws Exception;

	public List<InputDsaDto> getStateFromDsadetails(DsaDetailsEntity dsadto)throws Exception;

	public String checkDsaOnDsacode(String dsacode)throws Exception;

	public long getDsaCount(DsaDetailsEntity dsadto)throws Exception;

	public long addPayout(PayoutDate blMonthlySlab)throws Exception;
	
	public PayoutDate getPayoutdate(String date)throws Exception;

	public long addFestivalPayout(FestivalPayout festivalPayout)throws Exception;

	public PayoutDate getPayout(PayoutDate payoutDate)throws Exception;

	public List<BLMonthlyPayout> getBlmonthlypayout()throws Exception;
	
}