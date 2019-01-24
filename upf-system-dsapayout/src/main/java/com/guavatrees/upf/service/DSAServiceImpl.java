package com.guavatrees.upf.service;

import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.joda.time.LocalDate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.guavatrees.upf.dao.DSADao;
import com.guavatrees.upf.dao.entity.BLInsentive;
import com.guavatrees.upf.dao.entity.BLMonthlyPayout;
import com.guavatrees.upf.dao.entity.BLMonthlySlab;
import com.guavatrees.upf.dao.entity.ClientInfo;
import com.guavatrees.upf.dao.entity.ClientInfoWeb;
import com.guavatrees.upf.dao.entity.DSAEntity;
import com.guavatrees.upf.dao.entity.DsaDetailsEntity;
import com.guavatrees.upf.dao.entity.EmployeeEntity;
import com.guavatrees.upf.dao.entity.FestivalMonthlyPayout;
import com.guavatrees.upf.dao.entity.FestivalPayout;
import com.guavatrees.upf.dao.entity.Invoice;
import com.guavatrees.upf.dao.entity.ListLosId;
import com.guavatrees.upf.dao.entity.PayoutDate;
import com.guavatrees.upf.dao.entity.SMInsentive;
import com.guavatrees.upf.dao.entity.SblInsentive;
import com.guavatrees.upf.dto.InputDsaDto;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

/**
 * Class is used used for dsapayout service layer
 * 
 * @author Vivek Patil
 * @since 4-1-2017
 *
 */
@Service
public class DSAServiceImpl implements DSAService {

	private Logger LOGGER = LoggerFactory.getLogger(DSAServiceImpl.class);

	@Autowired
	DSADao dsaDao;

	@Value("${invoice_path_dsa}")
	private String invoicepath;

	/**
	 * This api is used for posting data into dsaclientinfo table
	 * 
	 * @param DSAEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@Override
	public DSAEntity addDsaInfo(DSAEntity dsaEntity) throws Exception {
		LOGGER.info("DSAServiceImpl addDsaInfo start");
		return dsaDao.addDsaInfo(dsaEntity);

	}

	/**
	 * This api is used for getting data from dsaclientinfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	public DSAEntity getDsaInfo(long id) throws Exception {
		LOGGER.info("DSAServiceImpl getDsaInfo start");
		return dsaDao.getDsaInfo(id);

	}

	/**
	 * This api is used for posting data into sminfo table
	 * 
	 * @param SMEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@Override
	public long addEmpInfo(EmployeeEntity smentity) throws Exception {
		LOGGER.info("DSAServiceImpl addSmInfo start");
		return dsaDao.addEmpInfo(smentity);
	}

	/**
	 * This api is used for getting data from sminfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return SMEntity
	 * @throws Exception
	 */
	@Override
	public EmployeeEntity getEmpInfo(long id) throws Exception {
		LOGGER.info("DSAServiceImpl getSMInfo start");
		return dsaDao.getEmpInfo(id);
	}

	/**
	 * This api is used for getting list of city
	 * 
	 * @param state
	 * @param request
	 * @param session
	 * @return citylist
	 * @throws Exception
	 */
	@Override
	public List<String> getCitylist(String state) throws Exception {
		LOGGER.info("DSAServiceImpl getCitylist start");
		return dsaDao.getCitylist(state);
	}

	/**
	 * This api is used for getting list of state
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return statelist
	 * @throws Exception
	 */
	@Override
	public List<String> getStatelist() throws Exception {
		LOGGER.info("DSAServiceImpl getStatelist start");
		return dsaDao.getStatelist();
	}

	/**
	 * This api is used for getting smlist
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	@Override
	public List<EmployeeEntity> getsmlist(String role, String product) throws Exception {
		LOGGER.info("DSAServiceImpl getsmlist start");
		return dsaDao.getsmlist(role, product);
	}

	/**
	 * This api is used for getting smListbased on city
	 * 
	 * 
	 * @param city
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	@Override
	public List<EmployeeEntity> smListonCity(String state, String role, String product, String purpose)
			throws Exception {
		LOGGER.info("DSAServiceImpl smListonCity start");
		List<EmployeeEntity> emplist1 = new ArrayList<EmployeeEntity>();
		List<EmployeeEntity> emplist = dsaDao.smListonCity(state, role, product);
		if (purpose.equalsIgnoreCase("dsasmmap")) {
			return emplist;
		} else if (purpose.equalsIgnoreCase("none")) {
			if (emplist.size() > 0) {
				for (EmployeeEntity emp : emplist) {
					String status = dsaDao.getcheckmapping(emp.getEmpid());
					if (status.equalsIgnoreCase("absent")) {
						emplist1.add(emp);
					}
				}
			}
		}
		return emplist1;
	}

	/**
	 * This api is used for getting dsalist
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return dsaList
	 * @throws Exception
	 */
	@Override
	public List<DSAEntity> getdsalist() throws Exception {
		LOGGER.info("DSAServiceImpl getdsalist start");
		return dsaDao.getdsalist();
	}

	/**
	 * This api is used for getting dsalist based on searchstring
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return dsaList
	 * @throws Exception
	 */
	@Override
	public List<DSAEntity> getdsaautolist(String searchstring) throws Exception {
		LOGGER.info("DSAServiceImpl getdsaautolist start");
		return dsaDao.getdsaautolist(searchstring);
	}

	/**
	 * This api is used for addimg smdsa mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	@Override
	public void addsmdsa(List<InputDsaDto> listdsasm) throws Exception {
		LOGGER.info("DSAServiceImpl addsmdsa start");
		dsaDao.addsmdsa(listdsasm);

	}

	/**
	 * This api is used for getlistdsa
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@Override
	public List<InputDsaDto> getdsadetails(long userid) throws Exception {
		LOGGER.info("DSAServiceImpl getdsadetails start");
		return dsaDao.getdsadetails(userid);
	}

	/**
	 * This api is used for verify duplicate email
	 * 
	 * 
	 * @param emailid
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@Override
	public String getemailstatus(String email) throws Exception {
		LOGGER.info("DSAServiceImpl getemailstatus start");
		return dsaDao.getemailstatus(email);
	}

	/**
	 * This api is used for getting mappinglist based on dsaid
	 * 
	 * 
	 * @param dsaid
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	@Override
	public List<InputDsaDto> getdsasmmappingdetails(long dsaid) throws Exception {
		LOGGER.info("DSAServiceImpl getdsasmmappingdetails start");
		return dsaDao.getdsasmmappingdetails(dsaid);
	}

	/**
	 * This api is used for deleting smdsa mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	@Override
	public String deletesmdsa(InputDsaDto inputdsadto) throws Exception {
		LOGGER.info("DSAServiceImpl deletesmdsa start");
		return dsaDao.deletesmdsa(inputdsadto);
	}

	/**
	 * This api is used for posting data into addDsaAdminInfo table
	 * 
	 * @param DSAEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@Override
	public void addDsaAdminInfo(DsaDetailsEntity dsadetailsEntity) throws Exception {
		LOGGER.info("DSAServiceImpl addDsaAdminInfo start");
		dsaDao.addDsaAdminInfo(dsadetailsEntity);

	}

	/**
	 * This api is used for getting dsaadmindetails
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	public List<DsaDetailsEntity> getdsaadmindetails(DsaDetailsEntity dsanameEntity) throws Exception {
		List<DsaDetailsEntity> alldsalist = new ArrayList<DsaDetailsEntity>();
		InputDsaDto input = dsaDao.getdsaadmindetails(dsanameEntity);
		long file = input.getCountdisbursalfile();
		double amount = input.getTotalsanctionamount();
		String dsacode = dsanameEntity.getDsa();
		double dsapayout = 0.0;
		if (0 != file && 0 != amount && null != dsacode && input.getProduct().equalsIgnoreCase("UBL")) {
			dsapayout = dsaDao.getdsapayout(file, amount, dsacode);
		} else if (0 != amount && null != dsacode && input.getProduct().equalsIgnoreCase("SBL")) {
			dsapayout = dsaDao.getsblpayout(amount);
		}

		for (DsaDetailsEntity dsaentity : input.getDsalist()) {
			DsaDetailsEntity dsa = new DsaDetailsEntity();
			dsa.setApplied_loan_amount(dsaentity.getApplied_loan_amount());
			dsa.setCompanyname(dsaentity.getCompanyname());
			dsa.setDsacode(dsaentity.getDsacode());
			dsa.setDsa(dsaentity.getDsa());
			dsa.setGatekeeperid(dsaentity.getGatekeeperid());
			dsa.setInterestamount(dsaentity.getInterestamount());
			dsa.setLocation(dsaentity.getLocation());
			dsa.setLosid(dsaentity.getLosid());
			dsa.setMonth(dsaentity.getMonth());
			dsa.setPayrate(dsapayout);
			dsa.setPf(dsaentity.getPf());
			dsa.setPfamount(dsaentity.getPfamount());
			dsa.setRoi(dsaentity.getRoi());
			dsa.setSalesmanager(dsaentity.getSalesmanager());
			dsa.setStatus(dsaentity.getStatus());
			dsa.setSanctionedamount(dsaentity.getSanctionedamount());
			dsa.setYear(dsaentity.getYear());
			dsa.setProductname(dsaentity.getProductname());
			dsa.setState(dsaentity.getState());
			dsa.setFrequency(dsaentity.getFrequency());
			
			DsaDetailsEntity entitydsa = dsaDao.getDsadetail(dsaentity.getDsacode(), dsaentity.getLosid());
			if (null != entitydsa) {
				dsa.setSubvention(entitydsa.getSubvention());
				dsa.setInclude(entitydsa.getInclude());
				dsa.setNetpayrate(entitydsa.getNetpayrate());
				dsa.setFinalpayoutamount(entitydsa.getFinalpayoutamount());
				dsa.setInterestamount(entitydsa.getInterestamount());
				dsa.setDsadetailsid(entitydsa.getDsadetailsid());
				dsa.setFinalpayoutamount_total(entitydsa.getFinalpayoutamount_total());
				dsa.setSanctioned_amount_total(entitydsa.getSanctioned_amount_total());
				dsa.setAvgnetpayrate(entitydsa.getAvgnetpayrate());
				dsa.setAvgroi(entitydsa.getAvgroi());
				dsa.setInt_amount_total(entitydsa.getInt_amount_total());
				dsa.setAvgpf(entitydsa.getAvgpf());
				dsa.setPfamounttotal(entitydsa.getPfamounttotal());
				dsa.setPayrate(entitydsa.getPayrate());
				dsa.setPaymentFlag(entitydsa.getPaymentFlag());
				dsa.setMisFlag(entitydsa.getMisFlag());
				dsa.setConstatus(entitydsa.getConstatus());
				dsa.setPaymentdate(entitydsa.getPaymentdate());
				dsa.setRemark(entitydsa.getRemark());
				dsa.setUpdated_date(new Date());

			}
			alldsalist.add(dsa);
		}

		return alldsalist;
	}

	/**
	 * This api is used for getting getdsalistdetails
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	public List<DsaDetailsEntity> getdsalistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		List<DsaDetailsEntity> list1 = new ArrayList<DsaDetailsEntity>();

		List<DsaDetailsEntity> list = dsaDao.getdsalistdetails(dsanameEntity);

		if (list.size() > 0) {
			for (DsaDetailsEntity dsaentity : list) {
				DsaDetailsEntity dsa = new DsaDetailsEntity();
				dsa.setDsa(dsaentity.getDsa());
				dsa.setLocation(dsaentity.getLocation());
				dsa.setMonth(dsaentity.getMonth());
				dsa.setCompanyname(dsaentity.getCompanyname());
				dsa.setSanctionedamount(dsaentity.getSanctionedamount());
				dsa.setSalesmanager(dsaentity.getSalesmanager());
				dsa.setYear(dsaentity.getYear());
				dsa.setLosid(dsaentity.getLosid());
				dsa.setStatus(dsaentity.getStatus());
				dsa.setProductname(dsaentity.getProductname());
				dsa.setCustomer(dsaentity.getCustomer());
				dsa.setCamdate(dsaentity.getCamdate());
				dsa.setHold_pending(dsaentity.getHold_pending());
				dsa.setPd_date(dsaentity.getPd_date());
				dsa.setApplied_loan_amount(dsaentity.getApplied_loan_amount());
				dsa.setDisb_date(dsaentity.getDisb_date());
				dsa.setFrequency(dsaentity.getFrequency());
				DsaDetailsEntity entitydsa = dsaDao.getDsadetail(dsanameEntity.getDsa(), dsaentity.getLosid());
				if (null != entitydsa) {
					dsa.setNetpayrate(entitydsa.getNetpayrate());
				}

				//ClientInfoWeb c = dsaDao.getclientdetail(dsaentity.getLosid());
				/*ClientInfoWeb c = dsaDao.getclientdetail(dsaentity.getLosid());
				if (null != c) {
					dsa.setGkaccept(c.getGk2Status());
					dsa.setGkrejectreason(c.getGk1WebStatus());
				}*/
				//dsaDao.updateClientInfo(dsaentity.getCustomer(),dsaentity.getLosid());
				ClientInfo c = dsaDao.getclientinfodetail(dsaentity.getLosid());
				if (null != c) {
					if(c.getGk1Status().contains("Rejected")){
					dsa.setGkaccept("Rejected");
					dsa.setGkrejectreason(c.getGk1Status());
					}
					else{
						if(c.getGk1Status().contains("Congratulations")){
						dsa.setGkaccept("Accepted");
						dsa.setGkrejectreason("");
						}
						else{
							dsa.setGkaccept(c.getGk1Status());
							dsa.setGkrejectreason("");
						}
					}
				}
				dsa.setState(dsaentity.getState());
				list1.add(dsa);
			}

		}

		return list1;
	}

	/**
	 * This api is used for getting getdsabasedlist
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	public List<DsaDetailsEntity> getdsabasedlist(DsaDetailsEntity dsanameEntity) throws Exception {
		return dsaDao.getdsabasedlist(dsanameEntity);
	}

	/**
	 * This api is used for getting getDsaOnUserID
	 * 
	 * @param userid
	 * @param request
	 * @param session
	 * @return DSAEntity
	 * @throws Exception
	 */
	@Override
	public DSAEntity getDsaOnUserID(long userid) throws Exception {
		return dsaDao.getDsaOnUserID(userid);
	}

	/**
	 * This api is used for getting getstatecode
	 * 
	 * @param state
	 * @param request
	 * @param session
	 * @return Stringmonth
	 * @throws Exception
	 */
	@Override
	public String getstatecode(String state) throws Exception {
		return dsaDao.getstatecode(state);
	}

	/**
	 * This api is used for getting smlist based on roleid
	 * 
	 * 
	 * @param roleid
	 * @param session
	 * @return listsm
	 * @throws Exception
	 */

	@Override
	public List<InputDsaDto> getsmdetails(long roleid) throws Exception {
		LOGGER.info("DSAServiceImpl getsmdetails start");
		return dsaDao.getsmdetails(roleid);
	}

	/**
	 * This api is used for getting mapped sm based on smid
	 * 
	 * 
	 * @param roleid
	 * @param session
	 * @return listsm
	 * @throws Exception
	 */
	@Override
	public List<InputDsaDto> getmapsmdetails(long smid, String product) throws Exception {
		LOGGER.info("DSAServiceImpl getmapsmdetails start");
		return dsaDao.getmapsmdetails(smid, product);
	}

	/**
	 * This api is used for adding addmapsm mapping
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	@Override
	public void addmapsm(List<InputDsaDto> listmapsm) throws Exception {
		LOGGER.info("DSAServiceImpl addmapsm start");
		dsaDao.addmapsm(listmapsm);

	}

	/**
	 * This api is used for delete mapped sm
	 * 
	 * 
	 * @param InputDsaDto
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	@Override
	public String deletemapsm(InputDsaDto inputdsadto) throws Exception {
		LOGGER.info("DSAServiceImpl deletemapsm start");
		return dsaDao.deletemapsm(inputdsadto);
	}

	/**
	 * This api is used for getting mapped upper sm
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@Override
	public List<InputDsaDto> getuppersmdetails(long smid, String product) throws Exception {
		LOGGER.info("DSAServiceImpl getmapsmdetails start");
		return dsaDao.getuppersmdetails(smid, product);
	}

	/**
	 * This api is used for getting role based on userid
	 * 
	 * @param userid
	 * @param request
	 * @param session
	 * @return empid
	 * @throws Exception
	 */
	@Override
	public String getRole(long smid) throws Exception {
		return dsaDao.getRole(smid);
	}

	/**
	 * This api is used for getting empid based on userid
	 * 
	 * @param userid
	 * @param request
	 * @param session
	 * @return empid
	 * @throws Exception
	 */
	@Override
	public InputDsaDto getEmpIdBasedOnUserID(long userid) throws Exception {
		return dsaDao.getEmpIdBasedOnUserID(userid);
	}

	/**
	 * This api is used for verify duplicate employeeid
	 * 
	 * 
	 * @param emailid
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@Override
	public String getemployeeidstatus(String employeeid) throws Exception {
		return dsaDao.getemployeeidstatus(employeeid);
	}

	/**
	 * This api is used for getdsacode
	 * 
	 *
	 * @return dsacode
	 * @throws Exception
	 */
	@Override
	public String getdsacode() throws Exception {
		return dsaDao.getdsacode();
	}

	/**
	 * This api is used for getdsabasedlistQuarterly
	 * 
	 *
	 * @param DsaDetailsEntity
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	public InputDsaDto getdsabasedlistQuarterly(DsaDetailsEntity dsanameEntity) throws Exception {
		return dsaDao.getdsabasedlistQuarterly(dsanameEntity);
	}

	public void insertCell(PdfPTable table, String text, int align, int colspan, int rowspan, Font font) {
		// create a new cell with the specified Text and Font
		PdfPCell cell = new PdfPCell(new Phrase(text.trim(), font));
		// set the cell alignment
		cell.setHorizontalAlignment(align);
		// set the cell column span in case you want to merge two or more cells
		cell.setColspan(colspan);
		cell.setRowspan(rowspan);
		// in case there is no text and you wan to create an empty row
		cell.setBorderColor(BaseColor.ORANGE);
		if (text.trim().equalsIgnoreCase("")) {
			cell.setMinimumHeight(15f);
		}
		// add the call to the table
		table.addCell(cell);

	}

	public void insertCell1(PdfPTable table, String text, int align, int colspan, int rowspan, Font font) {
		// create a new cell with the specified Text and Font
		PdfPCell cell = new PdfPCell(new Phrase(text.trim(), font));
		// set the cell alignment
		cell.setHorizontalAlignment(align);
		// set the cell column span in case you want to merge two or more cells
		cell.setColspan(colspan);
		cell.setRowspan(rowspan);
		// in case there is no text and you wan to create an empty row
		if (text.trim().equalsIgnoreCase("")) {
			cell.setMinimumHeight(15f);
		}
		cell.setBorder(Rectangle.NO_BORDER);
		// add the call to the table
		table.addCell(cell);

	}

	String NumberToWord(String number) {
		String twodigitword = "";
		String word = "";
		String[] HTLC = { "", "Hundred", "Thousand", "Lakh", "Crore" }; // H-hundread
																		// ,
																		// T-Thousand,
																		// ..
		int split[] = { 0, 2, 3, 5, 7, 9 };
		String[] temp = new String[split.length];
		boolean addzero = true;
		for (int l = 1; l < split.length; l++)
			if (number.length() == split[l])
				addzero = false;
		if (addzero == true)
			number = "0" + number;
		int len = number.length();
		int j = 0;
		// spliting & putting numbers in temp array.
		while (split[j] < len) {
			int beg = len - split[j + 1];
			int end = beg + split[j + 1] - split[j];
			temp[j] = number.substring(beg, end);
			j = j + 1;
		}

		for (int k = 0; k < j; k++) {
			twodigitword = ConvertOnesTwos(temp[k]);
			if (k >= 1) {
				if (twodigitword.trim().length() != 0)
					word = twodigitword + " " + HTLC[k] + " " + word;
			} else
				word = twodigitword;
		}
		return (word) + " Only.";
	}

	private static String ConvertOnesTwos(String t) {
		final String[] ones = { "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
				"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };
		final String[] tens = { "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty",
				"Ninety" };

		String word = "";
		int num = Integer.parseInt(t);
		if (num % 10 == 0)
			word = tens[num / 10] + " " + word;
		else if (num < 20)
			word = ones[num] + " " + word;
		else {
			word = tens[(num - (num % 10)) / 10] + word;
			word = word + " " + ones[num % 10];
		}
		return word;

	}

	/**
	 * This api is used for generateinvoicequarterly
	 * 
	 * 
	 * @param dsacode
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@Override
	public List<DsaDetailsEntity> getmonthlyhistoricaldata(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSAServiceImpl getmonthlyhistoricaldata start");
		return dsaDao.getmonthlyhistoricaldata(dsanameEntity);
	}

	/**
	 * This api is used for getlistsm
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@Override
	public List<DsaDetailsEntity> getsmlistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		List<DsaDetailsEntity> alldsalist = new ArrayList<DsaDetailsEntity>();
		List<DsaDetailsEntity> dsadetails = dsaDao.getsmlistdetails(dsanameEntity);
		if (null != dsadetails) {
			for (DsaDetailsEntity dsaentity : dsadetails) {
				DsaDetailsEntity dsa = new DsaDetailsEntity();
				dsa.setYear(dsaentity.getYear());
				dsa.setLocation(dsaentity.getLocation());
				dsa.setSalesmanager(dsaentity.getSalesmanager());
				dsa.setDsa(dsaentity.getDsa());
				dsa.setLosid(dsaentity.getLosid());
				dsa.setMonth(dsaentity.getMonth());
				dsa.setCompanyname(dsaentity.getCompanyname());
				dsa.setStatus(dsaentity.getStatus());
				dsa.setSanctionedamount(dsaentity.getSanctionedamount());
				dsa.setApplied_loan_amount(dsaentity.getApplied_loan_amount());
				if (null != dsaentity.getStatus() && dsaentity.getStatus().equalsIgnoreCase("Executed")) {
					DsaDetailsEntity dsa12 = dsaDao.getDsadetailonlos(dsaentity.getLosid());
					if (null != dsa12) {
						dsa.setNetpayrate(dsa12.getNetpayrate());
						dsa.setFinalpayoutamount(dsa12.getFinalpayoutamount());
					}
				}
				alldsalist.add(dsa);

			}
		}
		return alldsalist;
	}

	/**
	 * This api is used for verify accountno
	 * 
	 * 
	 * @param accountno
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@Override
	public String getaccountstatus(String accountno) throws Exception {
		return dsaDao.getaccountstatus(accountno);
	}

	@Override
	public List<String> getBanklist() throws Exception {
		return dsaDao.getBanklist();
	}

	@Override
	public List<SblInsentive> getListmonthlyslab() throws Exception {
		return dsaDao.getListmonthlyslab();
	}

	@Override
	public void addsblincentive(List<SblInsentive> listsbl) throws Exception {
		dsaDao.addsblincentive(listsbl);

	}

	@Override
	public long addBLInsentiveInfo(BLInsentive blinsentive) throws Exception {
		return dsaDao.addBLInsentiveInfo(blinsentive);
	}

	@Override
	public BLInsentive getBLInsentiveInfo(long id) throws Exception {
		return dsaDao.getBLInsentiveInfo(id);
	}

	@Override
	public String CreateInvoicePdfInfo(Invoice invoice) throws Exception {
		String responsemessage = null;
		// check bank details and gst details compulsory
		DSAEntity dsaentity = dsaDao.getDsaOndsacode(invoice.getDsacode());
		if (null != dsaentity.getGstdetails().getBankname() && null != dsaentity.getGstdetails().getAccountno()
				&& null != dsaentity.getGstdetails().getIfsccode()
				&& null != dsaentity.getGstdetails().getBankaccountname()
				&& null != dsaentity.getGstdetails().getGstcode()
				&& !dsaentity.getGstdetails().getBankname().equalsIgnoreCase("")
				&& !dsaentity.getGstdetails().getAccountno().equalsIgnoreCase("")
				&& !dsaentity.getGstdetails().getIfsccode().equalsIgnoreCase("")
				&& !dsaentity.getGstdetails().getBankaccountname().equalsIgnoreCase("")
				&& !dsaentity.getGstdetails().getGstcode().equalsIgnoreCase("")) {
			responsemessage = "gst absent";

			if (invoice.getProductname().equalsIgnoreCase("UBL") || invoice.getProductname().equalsIgnoreCase("BL")) {
				responsemessage = createPDFUBL(invoice);
			} else if (invoice.getProductname().equalsIgnoreCase("SBL")) {
				responsemessage = createPDFSBL(invoice);
			}
		}
		return responsemessage;
	}

	public String createPDFUBL(Invoice invoice) throws Exception {
		LOGGER.info("DSAServiceImpl createPDF start");
		String responseMessage=null;
		int cnt=0;
		Document doc = new Document();
		PdfWriter docWriter = null;
		// special font sizes
		Font bfBold12 = new Font(FontFamily.TIMES_ROMAN, 12, Font.BOLD, new BaseColor(0, 0, 0));
		Font bfBold10 = new Font(FontFamily.TIMES_ROMAN, 10, Font.BOLD, new BaseColor(0, 0, 0));
		Font bfBold8 = new Font(FontFamily.TIMES_ROMAN, 8, Font.BOLD, new BaseColor(0, 0, 0));
		Font bf10 = new Font(FontFamily.TIMES_ROMAN, 10);
		Font bf8 = new Font(FontFamily.TIMES_ROMAN, 8);
		DSAEntity dsaentity = dsaDao.getDsaOndsacode(invoice.getDsacode());

		long count = dsaDao.getinvoiceno(invoice);

		String path = invoicepath + invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
				.concat(invoice.getMonth()).concat("_").concat(invoice.getYear()).concat("_")
				.concat(String.valueOf(invoice.getState())).concat(".pdf");
		
		long total = Math.round(dsaDao.getsumlos(invoice.getListlos()));
		
		if (total > 0) {
			try {

				// file path

				docWriter = PdfWriter.getInstance(doc, new FileOutputStream(path));
				// document header attributes
				doc.addCreationDate();
				doc.addProducer();
				doc.addCreator("vivekpatil");
				doc.setPageSize(PageSize.LETTER);
				// open document
				doc.open();
				doc.add(new Paragraph("\n\n\n\n"));
				PdfPTable table = new PdfPTable(10);
				table.setWidthPercentage(100f);
				table.setTotalWidth(new float[] { 30, 50, 50, 50, 55, 55, 55, 55, 55, 55 });
				table.setLockedWidth(true);
				table.setSplitLate(false);
				InputDsaDto inputDsaDto=dsaDao.getStateCode((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":invoice.getGstnumber().substring(0,2));
				
				insertCell(table, "", Element.ALIGN_LEFT, 2, 3, bf10);
				insertCell(table, "INVOICE", Element.ALIGN_CENTER, 10, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getCompanyname(), Element.ALIGN_CENTER, 10, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getAddress(), Element.ALIGN_CENTER, 10, 1, bf10);

				insertCell(table, invoice.getMonth().concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT, 10, 1,
						bfBold10);
				insertCell(table, "GST NUMBER".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)?"":invoice.getGstnumber().toUpperCase()),
						Element.ALIGN_LEFT, 5, 1, bfBold10);
				insertCell(table, "BANK ACC NAME".concat(": ").concat(dsaentity.getGstdetails().getBankaccountname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE CODE".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)?"":invoice.getGstnumber().substring(0,2)),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "IFSC CODE".concat(": ").concat(dsaentity.getGstdetails().getIfsccode()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE NAME".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)?"":inputDsaDto.getState()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "ACCOUNT NUMBER".concat(": ").concat(dsaentity.getGstdetails().getAccountno()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "PAN".concat(": ").concat(dsaentity.getGstdetails().getCompanypan()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				// invoice serial no
				String a[] = dsaentity.getDsacode().split("0");
				String b[] = LocalDate.now().toString().split("-");
				//String INVOICE_DATE = "IN".concat(a[2]).concat(b[2]).concat(b[1]).concat(b[0].substring(2, 4));
				
				insertCell(table, "BANK NAME".concat(": ").concat(dsaentity.getGstdetails().getBankname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "INVOICE SERIAL NO".concat(": ").concat(invoice.getInvoiceno()), Element.ALIGN_LEFT, 5, 1,
						bf10);
				
				insertCell(table, "DSA CODE".concat(": ").concat(dsaentity.getDsacode()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				
				insertCell(table, "INVOICE DATE".concat(": ").concat(LocalDate.now().toString()), Element.ALIGN_LEFT, 5,
						1, bf10);
				
				insertCell(table,"",Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "HSN NUMBER".concat(": ").concat((invoice.getGstnumber()=="")?"":"997159"),
						Element.ALIGN_LEFT, 5, 1, bf10);
				
				insertCell(table, "", Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "", Element.ALIGN_CENTER, 10, 1, bf10);

				insertCell(table, "Billed TO:", Element.ALIGN_LEFT, 5, 5, bf10);
				insertCell(table, "The Investment Trust Of India Limited", Element.ALIGN_LEFT, 5, 1, bfBold10);
				insertCell(table,
						"20th - 21st Floor, A Wing Naman Midtown, Elphinstone (W), Mumbai, Maharashtra 400013",
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "GST NUMBER".concat(": ").concat("27AAACF0610JIZ2"), Element.ALIGN_LEFT, 5, 1,
						bfBold10);
				insertCell(table, "STATE CODE".concat(": ").concat("27"), Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE NAME".concat(": ").concat("Maharashtra"), Element.ALIGN_LEFT, 5, 1, bf10);
				
				insertCell(table, "", Element.ALIGN_CENTER, 10, 1, bf10);
				insertCell(table, "Sr.No", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Company Name", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Net Pay Rate", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Final Payout Amount", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "CGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "SGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "IGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);

				// invoice calculation
				List<ListLosId> list = invoice.getListlos();
				
				String statecode=(invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)?"":invoice.getGstnumber().substring(0, 2);
				long sizelist = list.size();
				long z = 1;
				for (ListLosId losid : list) {

					insertCell(table, String.valueOf(z), Element.ALIGN_CENTER, 1, 1, bf10);
					z++;
					insertCell(table, String.valueOf(losid.getCompanyname()), Element.ALIGN_CENTER, 1, 1, bf8);
					insertCell(table, String.valueOf(losid.getNetpayrate()), Element.ALIGN_CENTER, 1, 1, bf8);
					insertCell(table, String.valueOf((long) losid.getFinalpayoutamount()), Element.ALIGN_CENTER, 1, 1,
							bf8);
					
					if((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)){
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);

				}else{
					if (statecode.equalsIgnoreCase("27")) {
						insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, String.valueOf((long) losid.getFinalpayoutamount() * 0.09),
								Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, String.valueOf((long) losid.getFinalpayoutamount() * 0.09),
								Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					} else {
						insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
						insertCell(table, String.valueOf((long) losid.getFinalpayoutamount() * 0.18),
								Element.ALIGN_CENTER, 1, 1, bf10);
					}
					
				}}

				for (int i = 1; i <= 10; i++) {
					insertCell(table, "", Element.ALIGN_CENTER, 1, 1, bf10);
				}

				long totalinvoice = (long) (total * 0.18) + total;
				insertCell(table, "Invoice Value(In Words)", Element.ALIGN_CENTER, 6, 1, bfBold10);
				insertCell(table, "Total", Element.ALIGN_RIGHT, 3, 1, bfBold10);
				insertCell(table, String.valueOf(total), Element.ALIGN_RIGHT, 2, 1, bf10);
				insertCell(table, (invoice.getGstnumber()=="")?NumberToWord(String.valueOf(total)):NumberToWord(String.valueOf(totalinvoice)), Element.ALIGN_CENTER, 6, 4, bfBold10);
				
				if((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)){
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.00)", Element.ALIGN_RIGHT, 1, 1, bf10);
				}else{
					if (statecode.equalsIgnoreCase("27")) {
						insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, String.valueOf((long) total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, String.valueOf((long) total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, "(0.06)", Element.ALIGN_RIGHT, 1, 1, bfBold10);
					} else {
						insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, String.valueOf((long) total * 0.18), Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
						insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
						insertCell(table, "(0.00)", Element.ALIGN_RIGHT, 1, 1, bf10);
					}
				}
				insertCell(table, "TOTAL INVOICE AMOUNT IN RUPEES", Element.ALIGN_CENTER, 9, 1, bfBold10);
				insertCell(table, ((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null))?(String.valueOf(total)):(String.valueOf(totalinvoice)), Element.ALIGN_RIGHT, 1, 1, bfBold10);
				doc.add(table);
				doc.add(new Paragraph("\n\n"));

				PdfPTable table12 = new PdfPTable(4);
				table12.setWidthPercentage(100);
				table12.setTotalWidth(510);
				table12.setLockedWidth(true);
				table12.setKeepTogether(true);
				insertCell1(table12,"Declaration:",Element.ALIGN_LEFT, 4, 1, bfBold10);
				insertCell1(table12,"We declare that this invoice shows the actual price of the services declared and that all particulars are true and correct.",Element.ALIGN_LEFT, 4, 1, bfBold10);

				doc.add(table12);

				// add details in inoice table
				invoice.setUpdated_date(new Date());
				invoice.setInvoicepath(path);
				String invoicename = invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
						.concat(invoice.getMonth()).concat("_").concat(invoice.getYear()).concat("_")
						.concat(String.valueOf(invoice.getState())).concat(".pdf");

				invoice.setInvoicename(invoicename);
				invoice.setInvoiceamount(((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null))?total:totalinvoice);
				long count1=dsaDao.checkInvoice(invoice);
				if(count1==0){
				 dsaDao.addinvoiceInfo(invoice);
				 //cnt++;
				}else{
					dsaDao.updateInvoice(invoice);
					//cnt++;
				}
			} catch (DocumentException dex) {
				dex.printStackTrace();
			} catch (Exception exception) {
				LOGGER.debug("Exception occured while createPDF from database.Reason : " + exception);
			} finally {
				if (doc != null) {
					doc.close();
				}
				if (docWriter != null) {
					docWriter.close();
				}
			}
			//if(cnt!=0)
				//responseMessage="success";
			LOGGER.info("DSAServiceImpl createPDF ends");
		}
		
		return path;
	}

	public String createPDFSBL(Invoice invoice) throws Exception {
		LOGGER.info("DSAServiceImpl createPDF start");
		String responseMessage=null;
		Document doc = new Document();
		PdfWriter docWriter = null;
		DSAEntity dsaentity = dsaDao.getDsaOndsacode(invoice.getDsacode());
		long count = dsaDao.getinvoiceno(invoice);
		count++;
		String path = invoicepath + invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
				.concat(invoice.getMonth()).concat("_").concat(invoice.getYear()).concat("_")
				.concat(String.valueOf(invoice.getState())).concat(".pdf");
		// total calculation
		long total = Math.round(dsaDao.getsumlos(invoice.getListlos()));
		if (total > 0) {
			try {
				// special font sizes
				Font bfBold12 = new Font(FontFamily.TIMES_ROMAN, 12, Font.BOLD, new BaseColor(0, 0, 0));
				Font bfBold10 = new Font(FontFamily.TIMES_ROMAN, 10, Font.BOLD, new BaseColor(0, 0, 0));
				Font bf10 = new Font(FontFamily.TIMES_ROMAN, 10);
				Font bf8 = new Font(FontFamily.TIMES_ROMAN, 8);
				// file path

				docWriter = PdfWriter.getInstance(doc, new FileOutputStream(path));
				// document header attributes
				doc.addCreationDate();
				doc.addProducer();
				doc.addCreator("vivekpatil");
				doc.setPageSize(PageSize.LETTER);
				// open document
				doc.open();
				doc.add(new Paragraph("\n\n\n\n"));
				PdfPTable table = new PdfPTable(9);
				table.setWidthPercentage(100f);
				table.setTotalWidth(new float[] { 30, 75, 70, 55, 55, 55, 55, 55, 55 });
				table.setLockedWidth(true);
				table.setSplitLate(false);
				InputDsaDto inputDsaDto=dsaDao.getStateCode((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":invoice.getGstnumber().substring(0,2));
				
				insertCell(table, "", Element.ALIGN_LEFT, 2, 3, bf10);
				insertCell(table, "INVOICE", Element.ALIGN_CENTER, 9, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getCompanyname(), Element.ALIGN_CENTER, 9, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getAddress(), Element.ALIGN_CENTER, 9, 1, bf10);
				insertCell(table, invoice.getMonth().concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT, 9, 1,
						bfBold10);

				insertCell(table, "GST NUMBER".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":invoice.getGstnumber().toUpperCase()),
						Element.ALIGN_LEFT, 4, 1, bfBold10);
				insertCell(table, "BANK ACC NAME".concat(": ").concat(dsaentity.getGstdetails().getBankaccountname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE CODE".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":invoice.getGstnumber().substring(0,2)),
						Element.ALIGN_LEFT, 4, 1, bf10);
				insertCell(table, "IFSC CODE".concat(": ").concat(dsaentity.getGstdetails().getIfsccode()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE NAME".concat(": ").concat((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":inputDsaDto.getState()),
						Element.ALIGN_LEFT, 4, 1, bf10);
				insertCell(table, "ACCOUNT NUMBER".concat(": ").concat(dsaentity.getGstdetails().getAccountno()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "PAN".concat(": ").concat(dsaentity.getGstdetails().getCompanypan()),
						Element.ALIGN_LEFT, 4, 1, bf10);
				// invoice serial no
				String a[] = dsaentity.getDsacode().split("0");
				String b[] = LocalDate.now().toString().split("-");
				//String INVOICE_DATE = "IN".concat(a[2]).concat(b[2]).concat(b[1]).concat(b[0].substring(2, 4));
				insertCell(table, "BANK NAME".concat(": ").concat(dsaentity.getGstdetails().getBankname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "INVOICE SERIAL NO".concat(": ").concat(invoice.getInvoiceno()), Element.ALIGN_LEFT, 4, 1,
						bf10);
				
				insertCell(table, "DSA CODE".concat(": ").concat(dsaentity.getDsacode()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				
				insertCell(table, "INVOICE DATE".concat(": ").concat(LocalDate.now().toString()), Element.ALIGN_LEFT, 4,
						1, bf10);
				
				insertCell(table,"",Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "HSN NUMBER".concat(": ").concat("997159"),
						Element.ALIGN_LEFT, 4, 1, bf10);
				insertCell(table, "", Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "", Element.ALIGN_CENTER, 9, 1, bf10);

				insertCell(table, "Billed TO:", Element.ALIGN_LEFT, 4, 5, bf10);
				insertCell(table, "The Investment Trust Of India Limited", Element.ALIGN_LEFT, 5, 1, bfBold10);
				insertCell(table,
						"20th - 21st Floor, A Wing Naman Midtown, Elphinstone (W), Mumbai, Maharashtra 400013",
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "GST NUMBER".concat(": ").concat(" 27AAACF0610JIZ2"), Element.ALIGN_LEFT, 5, 1,
						bfBold10);
				insertCell(table, "STATE CODE".concat(": ").concat("27"), Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE NAME".concat(": ").concat("Maharashtra"), Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "", Element.ALIGN_CENTER, 9, 1, bf10);
				insertCell(table, "Sr.No", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Description", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Total", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "CGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "SGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "IGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "1", Element.ALIGN_CENTER, 1, 1, bf10);
				insertCell(table, "Total Payout Amount", Element.ALIGN_CENTER, 1, 1, bf8);
				insertCell(table, String.valueOf(total), Element.ALIGN_CENTER, 1, 1, bf10);
				String statecode=(invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null) ?"":invoice.getGstnumber().substring(0, 2);
				
				if((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)){
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
				}
				else{
				if (statecode.equalsIgnoreCase("27")) {
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
				} else {
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.18), Element.ALIGN_CENTER, 1, 1, bf10);
				}
				}
				for (int i = 1; i <= 18; i++) {
					insertCell(table, "", Element.ALIGN_CENTER, 1, 1, bf10);
				}

				long totalinvoice = (long) (total * 0.18) + total;
				insertCell(table, "Invoice Value(In Words)", Element.ALIGN_CENTER, 5, 1, bfBold10);
				insertCell(table, "Total", Element.ALIGN_RIGHT, 3, 1, bfBold10);
				insertCell(table, String.valueOf(total), Element.ALIGN_RIGHT, 1, 1, bf10);
				insertCell(table, (invoice.getGstnumber()=="")?NumberToWord(String.valueOf(total)):NumberToWord(String.valueOf(totalinvoice)), Element.ALIGN_CENTER, 5, 4, bfBold10);
				
				if((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null)){
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.00)", Element.ALIGN_RIGHT, 1, 1, bf10);
				}else{
				if (statecode.equalsIgnoreCase("27")) {
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.06)", Element.ALIGN_RIGHT, 1, 1, bfBold10);
				} else {
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.18), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.00)", Element.ALIGN_RIGHT, 1, 1, bf10);
				}
				}
				insertCell(table, "TOTAL INVOICE AMOUNT IN RUPEES", Element.ALIGN_CENTER, 8, 1, bfBold10);
				insertCell(table, ((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null))?(String.valueOf(total)):(String.valueOf(totalinvoice)), Element.ALIGN_RIGHT, 1, 1, bfBold10);
				doc.add(table);
				doc.add(new Paragraph("\n\n"));

				PdfPTable table12 = new PdfPTable(4);
				table12.setWidthPercentage(100);
				table12.setTotalWidth(510);
				table12.setLockedWidth(true);
				table12.setKeepTogether(true);
				insertCell1(table12,"Declaration:",Element.ALIGN_LEFT, 4, 1, bfBold10);
				insertCell1(table12,"We declare that this invoice shows the actual price of the services declared and that all particulars are true and correct.",Element.ALIGN_LEFT, 4, 1, bfBold10);

				doc.add(table12);

				// add details in inoice table
				String invoicename = invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
						.concat(invoice.getMonth()).concat("_").concat(invoice.getYear()).concat("_")
						.concat(String.valueOf(invoice.getState())).concat(".pdf");

				invoice.setInvoicename(invoicename);
				invoice.setUpdated_date(new Date());
				invoice.setInvoicepath(path);
				invoice.setInvoiceamount(((invoice.getGstnumber()=="") ||(invoice.getGstnumber()==null))?total:totalinvoice);

				long count1=dsaDao.checkInvoice(invoice);
				if(count1==0){
				 dsaDao.addinvoiceInfo(invoice);
				 
				}else{
					dsaDao.updateInvoice(invoice);
					
				}
			} catch (DocumentException dex) {
				dex.printStackTrace();
			} catch (Exception exception) {
				LOGGER.debug("Exception occured while createPDF from database.Reason : " + exception);
			} finally {
				if (doc != null) {
					doc.close();
				}
				if (docWriter != null) {
					docWriter.close();
				}
			}
			LOGGER.info("DSAServiceImpl createPDF ends");
		}
		return path;
	}

	@Override
	public String generateinvoice(String dsacode, String year, String month) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Invoice generateinvoicequarterly(Invoice invoice) throws Exception {
		Invoice invoice1 = null;
		if (invoice.getProductname().equalsIgnoreCase("UBL") || invoice.getProductname().equalsIgnoreCase("BL")) {
			invoice1 = createPDFUBLQuarterly(invoice);
		}
		return invoice1;
	}

	private Invoice createPDFUBLQuarterly(Invoice invoice) throws Exception {
		LOGGER.info("DSAServiceImpl createPDF start");
		Document doc = new Document();
		PdfWriter docWriter = null;
		DSAEntity dsaentity = dsaDao.getDsaOndsacode(invoice.getDsacode());
		String path = null;
		Invoice in = null;

		long total = dsaDao.getquarterlypayout(dsaentity.getDsacode(), invoice.getQuarter(), invoice.getYear());
		if (total > 0) {
			if (null != invoice.getQuarter() && null == invoice.getMonth()) {
				path = invoicepath + invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
						.concat(invoice.getQuarter()).concat("_").concat(invoice.getYear()).concat(".pdf");
			}
			try {
				// special font sizes
				Font bfBold12 = new Font(FontFamily.TIMES_ROMAN, 12, Font.BOLD, new BaseColor(0, 0, 0));
				Font bfBold10 = new Font(FontFamily.TIMES_ROMAN, 10, Font.BOLD, new BaseColor(0, 0, 0));
				Font bf10 = new Font(FontFamily.TIMES_ROMAN, 10);
				Font bf8 = new Font(FontFamily.TIMES_ROMAN, 8);
				// file path

				docWriter = PdfWriter.getInstance(doc, new FileOutputStream(path));
				// document header attributes
				doc.addCreationDate();
				doc.addProducer();
				doc.addCreator("vivekpatil");
				doc.setPageSize(PageSize.LETTER);
				// open document
				doc.open();
				doc.add(new Paragraph("\n\n\n\n"));
				PdfPTable table = new PdfPTable(9);
				table.setWidthPercentage(100f);
				table.setTotalWidth(new float[] { 30, 75, 70, 55, 55, 55, 55, 55, 55 });
				table.setLockedWidth(true);
				insertCell(table, "", Element.ALIGN_LEFT, 2, 3, bf10);
				insertCell(table, "INVOICE", Element.ALIGN_CENTER, 9, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getCompanyname(), Element.ALIGN_CENTER, 9, 1, bfBold12);
				insertCell(table, dsaentity.getGstdetails().getAddress(), Element.ALIGN_CENTER, 9, 1, bf10);
				// quarterly months showing
				if (null == invoice.getMonth() && invoice.getQuarter().equalsIgnoreCase("Q1")) {
					insertCell(table, "April - June".concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT, 9, 1,
							bfBold10);
				} else if (null == invoice.getMonth() && invoice.getQuarter().equalsIgnoreCase("Q2")) {
					insertCell(table, "July - September".concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT, 9,
							1, bfBold10);
				} else if (null == invoice.getMonth() && invoice.getQuarter().equalsIgnoreCase("Q3")) {
					insertCell(table, "October - December".concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT,
							9, 1, bfBold10);
				} else if (null == invoice.getMonth() && invoice.getQuarter().equalsIgnoreCase("Q4")) {
					insertCell(table, "January - March".concat("  ").concat(invoice.getYear()), Element.ALIGN_LEFT, 9,
							1, bfBold10);
				}
				insertCell(table, "GST NUMBER".concat(": ").concat(invoice.getGstnumber()),
						Element.ALIGN_LEFT, 4, 1, bfBold10);
				insertCell(table, "BANK ACC NAME".concat(": ").concat(dsaentity.getGstdetails().getBankaccountname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "STATE CODE".concat(": ").concat(dsaentity.getGstdetails().getStatecode()),
						Element.ALIGN_LEFT, 4, 1, bf10);
				insertCell(table, "IFSC CODE".concat(": ").concat(dsaentity.getGstdetails().getIfsccode()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				// invoice serial no
				String a[] = dsaentity.getDsacode().split("0");
				String b[] = LocalDate.now().toString().split("-");
				String INVOICE_DATE = "IN".concat(a[2]).concat(b[2]).concat(b[1]).concat(b[0].substring(2, 4));
				insertCell(table, "INVOICE SERIAL NO".concat(": ").concat(invoice.getInvoiceno()), Element.ALIGN_LEFT, 4, 1,
						bf10);
				insertCell(table, "ACCOUNT NUMBER".concat(": ").concat(dsaentity.getGstdetails().getAccountno()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "INVOICE DATE".concat(": ").concat(LocalDate.now().toString()), Element.ALIGN_LEFT, 4,
						1, bf10);
				insertCell(table, "BANK NAME".concat(": ").concat(dsaentity.getGstdetails().getBankname()),
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "HSN NUMBER".concat(": ").concat("997159"),
						Element.ALIGN_LEFT, 4, 1, bf10);
				insertCell(table, "", Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "", Element.ALIGN_CENTER, 9, 1, bf10);

				insertCell(table, "Billed TO:", Element.ALIGN_LEFT, 4, 4, bf10);
				insertCell(table, "United Petro Finance Ltd.", Element.ALIGN_LEFT, 5, 1, bfBold10);
				insertCell(table,
						"20th - 21st Floor, A Wing Naman Midtown, Elphinstone (W), Mumbai, Maharashtra 400013",
						Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "GST NUMBER".concat(": ").concat(" 27AAACU2773M1ZX"), Element.ALIGN_LEFT, 5, 1,
						bfBold10);
				insertCell(table, "STATE CODE".concat(": ").concat("27"), Element.ALIGN_LEFT, 5, 1, bf10);
				insertCell(table, "", Element.ALIGN_CENTER, 9, 1, bf10);
				insertCell(table, "Sr.No", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Description", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "Total", Element.ALIGN_CENTER, 1, 2, bfBold10);
				insertCell(table, "CGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "SGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "IGST", Element.ALIGN_CENTER, 2, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Rate", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "Amount", Element.ALIGN_CENTER, 1, 1, bfBold10);
				insertCell(table, "1", Element.ALIGN_CENTER, 1, 1, bf10);
				insertCell(table, "Total Payout Amount", Element.ALIGN_CENTER, 1, 1, bf8);

				insertCell(table, String.valueOf(total), Element.ALIGN_CENTER, 1, 1, bf10);
				if (dsaentity.getGstdetails().getStatecode().equalsIgnoreCase("27")) {
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
				} else {
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "9%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "-", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, "18%", Element.ALIGN_CENTER, 1, 1, bf10);
					insertCell(table, String.valueOf(total * 0.18), Element.ALIGN_CENTER, 1, 1, bf10);
				}
				for (int i = 1; i <= 18; i++) {
					insertCell(table, "", Element.ALIGN_CENTER, 1, 1, bf10);
				}

				long totalinvoice = (long) (total * 0.18) + total;
				insertCell(table, "Invoice Value(In Words)", Element.ALIGN_CENTER, 5, 1, bfBold10);
				insertCell(table, "Total", Element.ALIGN_RIGHT, 3, 1, bfBold10);
				insertCell(table, String.valueOf(total), Element.ALIGN_RIGHT, 1, 1, bf10);
				insertCell(table, NumberToWord(String.valueOf(totalinvoice)), Element.ALIGN_CENTER, 5, 4, bfBold10);
				if (dsaentity.getGstdetails().getStatecode().equalsIgnoreCase("27")) {
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.09), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.06)", Element.ALIGN_RIGHT, 1, 1, bfBold10);
				} else {
					insertCell(table, "IGST 18%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, String.valueOf(total * 0.18), Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "SGST 9%", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "-", Element.ALIGN_RIGHT, 1, 1, bf10);
					insertCell(table, "CESS", Element.ALIGN_LEFT, 3, 1, bfBold10);
					insertCell(table, "(0.00)", Element.ALIGN_RIGHT, 1, 1, bf10);
				}

				insertCell(table, "TOTAL INVOICE AMOUNT IN RUPEES", Element.ALIGN_CENTER, 8, 1, bfBold10);
				insertCell(table, (String.valueOf(totalinvoice)), Element.ALIGN_RIGHT, 1, 1, bfBold10);
				doc.add(table);

				doc.add(new Paragraph("\n\n"));

				PdfPTable table12 = new PdfPTable(3);
				table12.setWidthPercentage(100);
				table12.setTotalWidth(510);
				table12.setLockedWidth(true);
				table12.setKeepTogether(true);
				insertCell1(table12,
						"Note: This is a computer generated invoice which contains the estimated payout amount along with the GST details. The payout is subjected to change and might differ with the actual payout amount mentioned in the invoice. For any such discrepancies, if any, please directly contact the concerned representative.",
						Element.ALIGN_LEFT, 3, 1, bfBold10);

				doc.add(table12);

				// add details in inoice table
				invoice.setUpdated_date(new Date());
				invoice.setInvoicepath(path);

				String invoicename = invoice.getProductname().concat("_").concat(invoice.getDsacode()).concat("_")
						.concat(invoice.getQuarter()).concat("_").concat(invoice.getYear()).concat(".pdf");
				long x = dsaDao.getinvoiceid(invoicename);
				if (x != 0) {
					invoice.setInvoiceid(x);
				}
				invoice.setInvoicename(invoicename);

				in = dsaDao.addinvoiceInfo(invoice);

			} catch (DocumentException dex) {
				dex.printStackTrace();
			} catch (Exception exception) {
				LOGGER.debug("Exception occured while createPDF from database.Reason : " + exception);
			} finally {
				if (doc != null) {
					doc.close();
				}
				if (docWriter != null) {
					docWriter.close();
				}
			}
			LOGGER.info("DSAServiceImpl createPDF ends");
		}
		return in;
	}

	@Override
	public List<Invoice> getinvoicelist(Invoice dsanameEntity) throws Exception {
		return dsaDao.getinvoicelist(dsanameEntity);
	}

	@Override
	public List<DsaDetailsEntity> getadminaccount(DsaDetailsEntity dsanameEntity) throws Exception {
		return dsaDao.getadminaccount(dsanameEntity);
	}

	@Override
	public void addaccountadminlist(List<DsaDetailsEntity> listdsadetails) throws Exception {
		dsaDao.addaccountadminlist(listdsadetails);

	}

	@Override
	public List<DsaDetailsEntity> getgklistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		return dsaDao.getgklistdetails(dsanameEntity);
	}

	public long getinvoiceid(String invoicename) throws Exception {
		return dsaDao.getinvoiceid(invoicename);
	}

	@Override
	public String getchecklos(long losid) throws Exception {
		// TODO Auto-generated method stub
		return dsaDao.getchecklos(losid);
	}

	@Override
	public InputDsaDto getproductbyuserid(Long userid) throws Exception {
		return dsaDao.getproductbyuserid(userid);
	}

	@Override
	public long addSMInsentiveInfo(SMInsentive sminsentive) throws Exception {
		return dsaDao.addSMInsentiveInfo(sminsentive);
	}

	@Override
	public SMInsentive getSMInsentiveInfo(long id) throws Exception {
		return dsaDao.getSMInsentiveInfo(id);
	}

	@Override
	public List<InputDsaDto> getcmdetails(String role) throws Exception {
		LOGGER.info("DSAServiceImpl getcmdetails start");
		return dsaDao.getcmdetails(role);
	}

	@Override
	public List<InputDsaDto> getuppercmdetails(long smid) throws Exception {
		LOGGER.info("DSAServiceImpl getmapsmdetails start");
		return dsaDao.getuppercmdetails(smid);
	}

	@Override
	public List<InputDsaDto> getmapcmdetails(long cmid) throws Exception {
		LOGGER.info("DSAServiceImpl getmapsmdetails start");
		return dsaDao.getmapcmdetails(cmid);
	}

	@Override
	public void addpincode(List<String> listpincode) throws Exception {
		LOGGER.info("DSAServiceImpl addpincode start");
		dsaDao.addpincode(listpincode);

	}

	@Override
	public List<InputDsaDto> getNsmData() throws Exception {
		LOGGER.info("DSAServiceImpl getNsmData start");
		return dsaDao.getNsmData();
		
	}
	
	@Override
	public List<InputDsaDto> getAccountData() throws Exception {
		LOGGER.info("DSAServiceImpl getAccountData start");
		return dsaDao.getAccountData();
		
	}
	
	@Override
	public List<InputDsaDto>  getInvoiceData(String date) throws Exception {
		LOGGER.info("DSAServiceImpl getInvoiceData start");
		return dsaDao.getInvoiceData(date);
	}

	@Override
	public double getFinalPayoutTotal() throws Exception {
		LOGGER.info("DSAServiceImpl getFinalPayoutTotal start");
		return dsaDao.getFinalPayoutTotal();
	}

	@Override
	public InputDsaDto getStateCode(String state) throws Exception {
		LOGGER.info("DSAServiceImpl getStateCode start");
		return dsaDao.getStateCode(state);
	}

	@Override
	public long checkInvoiceData(String date) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceData start");
		return dsaDao.checkInvoiceData(date);
	}

	@Override
	public void deleteInvoice(List<Invoice> invoice) throws Exception {
		LOGGER.info("DSAServiceImpl deleteInvoice start");
		dsaDao.deleteInvoice(invoice);
	}
	
	@Override
	public Invoice getInvoicePath(DsaDetailsEntity dsa) throws Exception {
		LOGGER.info("DSAServiceImpl getInvoicePath start");
		return dsaDao.getInvoicePath(dsa);
	}
	
	@Override
	public List<InputDsaDto> getStatedata() throws Exception {
		LOGGER.info("DSAServiceImpl getStatedata start");
		return dsaDao.getStatedata();
	}

	@Override
	public String checkInvoiceNo(Invoice invoice) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceNo start");
		return dsaDao.checkInvoiceNo(invoice);
		}

	@Override
	public String getPaymentFlagStatus(Invoice in) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceNo start");
		return dsaDao.getPaymentFlagStatus(in);
	}

	@Override
	public ArrayList<DSAEntity> getUnverifiedDsaClientInfo() {
		LOGGER.info("DSAServiceImpl getUnverifiedDsaClientInfo start");
		return dsaDao.getUnverifiedDsaClientInfo();
	}
	
	@Override
	public List<InputDsaDto> getStateFromDsadetails(DsaDetailsEntity dsadto) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceNo start");
		return dsaDao.getStateFromDsadetails(dsadto);
	}

	@Override
	public DSAEntity getDsaOndsacode(String dsacode) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceNo start");
		return dsaDao.getDsaOndsacode(dsacode);
	}

	@Override
	public String checkDsaOnDsacode(String dsacode) throws Exception {
		LOGGER.info("DSAServiceImpl checkInvoiceNo start");
		return dsaDao.checkDsaOnDsacode(dsacode);
	}

	@Override
	public long getDsaCount(DsaDetailsEntity dsadto) throws Exception {
		LOGGER.info("DSAServiceImpl getDsaCount start");
		return dsaDao.getDsaCount(dsadto);
	}

	@Override
	public long addPayout(PayoutDate blMonthlySlab) throws Exception {
		LOGGER.info("DSAServiceImpl getDsaCount start");
		return dsaDao.addPayout(blMonthlySlab);
	}

	@Override
	public PayoutDate getPayoutdate(String date) throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getPayoutdate(date);
	}

	@Override
	public long addFestivalPayout(FestivalPayout festivalPayout) throws Exception {
		LOGGER.info("DSAServiceImpl getDsaCount start");
		return dsaDao.addFestivalPayout(festivalPayout);
	}

	

	@Override
	public PayoutDate getPayout(PayoutDate payoutDate) throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getPayout(payoutDate);
	}

	@Override
	public List<BLMonthlyPayout> getBlmonthlypayout() throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getBlmonthlypayout();
	}

	@Override
	public FestivalPayout getFestivalPayout(FestivalPayout festivalPayout) throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getFestivalPayout(festivalPayout);
	}

	@Override
	public List<FestivalMonthlyPayout> getFestivalBlmonthlypayout() throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getFestivalBlmonthlypayout();
	}

	@Override
	public FestivalPayout getPayoutFestivaldate(String year,String month) throws Exception {
		LOGGER.info("DSAServiceImpl getPayoutdate start");
		return dsaDao.getPayoutFestivaldate( year, month);
	}



}