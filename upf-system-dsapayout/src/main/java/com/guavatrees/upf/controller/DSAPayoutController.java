package com.guavatrees.upf.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.Set;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.guavatrees.upf.dao.entity.BLInsentive;
import com.guavatrees.upf.dao.entity.BLMonthlyPayout;
import com.guavatrees.upf.dao.entity.BLMonthlySlab;
import com.guavatrees.upf.dao.entity.DSADocument;
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
import com.guavatrees.upf.service.DSAService;
import com.guavatrees.upf.util.DateUtil;
import com.guavatrees.upf.util.ReadConfigurationFile;
import com.guavatrees.upf.util.TokenEncrytedDecrypted;
import com.guavatrees.upf.util.UnzipUtility;

/**
 * Class is used for dsapayout operations
 * 
 * @author Vivek Patil
 * @since 4-1-2017
 *
 */
@Controller
@RequestMapping(value = "/dsa")
public class DSAPayoutController {

	private static Logger LOGGER = LoggerFactory.getLogger(DSAPayoutController.class);

	private static final Properties props1 = ReadConfigurationFile.getProperties("upf.properties");
	private static final String HOSTNAME = props1.getProperty("HOSTNAME");
	private static final String SMTPPORT = props1.getProperty("SMTPPORT");
	private static final String USERNAME = props1.getProperty("userName");
	private static final String PASSWORD = props1.getProperty("pwd");
	private static final String digiUser = props1.getProperty("DIGIMILES_USERNAME");
	private static final String digiPassword = props1.getProperty("DIGIMILES_PASSWORD");

	@Value("${file_upload_path_dsa}")
	private String fileuploadUrl;

	@Value("${zip_upload_path_dsa}")
	private String zipuploadurl;

	@Autowired
	DSAService dsaService;

	/**
	 * This api is used for posting data into dsaclientinfo table
	 * 
	 * @param DSAEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/addDsaInfo", method = RequestMethod.POST, consumes = "application/json")
	public String addDsaInfo(@RequestBody DSAEntity dsaEntity) {
		LOGGER.info("DSAController addDsaInfo start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			if (dsaEntity.getDsacode() == null || dsaEntity.getDsacode().equals("")) {
				dsaEntity.setDsacode(dsaService.getdsacode());
			}
			dsaEntity.setUpdated_date(new Date());
			if (dsaEntity.getCreated_date() == null) {
				dsaEntity.setCreated_date(new Date());
			}
			DSAEntity dsa1 = dsaService.addDsaInfo(dsaEntity);
			jsonResponse.put("id", dsa1.getDsaid());
			jsonResponse.put("reply", "success");
			jsonResponse.put("dsacode", dsa1.getDsacode());
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting dsaEntity details. Reason : " + exception);
		}
		LOGGER.info("DSAController addDsaInfo end");
		return responseMessage;

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
	@ResponseBody
	@RequestMapping(value = "/getDsaInfo", method = RequestMethod.GET, produces = "application/json")
	public DSAEntity getDsaInfo(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getDsaInfo start");
		DSAEntity dsaEntity = null;
		if (!(request.getParameter("id").equals("")) && null != request.getParameter("id")) {
			dsaEntity = dsaService.getDsaInfo(Long.parseLong(request.getParameter("id")));
		}
		if (dsaEntity == null) {
			dsaEntity = new DSAEntity();
		}
		LOGGER.info("DSAController getDsaInfo end");
		return dsaEntity;

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
	@ResponseBody
	@RequestMapping(value = "/getDsabyuserid", method = RequestMethod.GET, produces = "application/json")
	public DSAEntity getDsaOnUserID(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getDsaInfo start");
		DSAEntity dsaEntity = null;
		if (!(request.getParameter("userid").equals("")) && null != request.getParameter("userid")) {
			dsaEntity = dsaService.getDsaOnUserID(Long.parseLong(request.getParameter("userid")));
		}
		if (dsaEntity == null) {
			dsaEntity = new DSAEntity();
		}
		LOGGER.info("DSAController getDsaInfo end");
		return dsaEntity;

	}

	/**
	 * This api is used for posting data into sminfo table
	 * 
	 * @param xEntity
	 * @param request
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/addEmpInfo", method = RequestMethod.POST, consumes = "application/json")
	public String addEmpInfo(@RequestBody EmployeeEntity smentity) {
		LOGGER.info("DSAController addSmInfo start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			smentity.setUpdated_date(new Date());
			long appid = dsaService.addEmpInfo(smentity);
			jsonResponse.put("id", appid);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addSmInfo details. Reason : " + exception);
		}
		LOGGER.info("DSAController addSmInfo end");
		return responseMessage;

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
	@ResponseBody
	@RequestMapping(value = "/getEmpInfo", method = RequestMethod.GET, produces = "application/json")
	public EmployeeEntity getEmpInfo(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getDsaInfo start");
		EmployeeEntity smEntity = null;
		if (!(request.getParameter("id").equals("")) && null != request.getParameter("id")) {
			smEntity = dsaService.getEmpInfo(Long.parseLong(request.getParameter("id")));
		}
		LOGGER.info("DSAController getDsaInfo end");
		if (smEntity == null) {
			smEntity = new EmployeeEntity();
		}

		return smEntity;

	}

	/**
	 * This api is used for uploadingzip
	 * 
	 * @param file
	 * @return responseMessage
	 * @throws IOException
	 */
	@ResponseBody
	@RequestMapping(value = "/uploaddoc", method = RequestMethod.POST)
	public String uploadfiles(@RequestParam("file1") MultipartFile file1) throws IOException {
		LOGGER.info("DSAController uploadfiles start");
		JSONObject responseMessage = new JSONObject();
		if (null != file1) {
			String fileName1 = file1.getOriginalFilename();
			String fileNameWithOutExt = FilenameUtils.removeExtension(fileName1);
			file1.transferTo(new File(zipuploadurl + fileName1));
			String srcDirectory = (zipuploadurl + fileName1);
			String destDirectory = fileuploadUrl + fileNameWithOutExt;
			UnzipUtility unzipper = new UnzipUtility();
			unzipper.unzip(srcDirectory, destDirectory);
			updatefilepathindatabase(fileNameWithOutExt);
		}
		responseMessage.put("reply", "success");
		LOGGER.info("DSAController uploadfiles end");
		return responseMessage.toString();

	}

	/**
	 * This method is used for updatefilepathindatabase
	 * 
	 * @param id
	 * @return responseMessage
	 * @throws IOException
	 */
	public void updatefilepathindatabase(String id) {
		LOGGER.info("DSAController updatefilepathindatabase start");
		try {
			DSAEntity applicant = dsaService.getDsaInfo(Long.valueOf(id));
			List<DSADocument> doclist = applicant.getDsaDocuments();
			for (DSADocument document : doclist) {
				StringBuilder str = new StringBuilder();
				String path = str.append(fileuploadUrl).append(id).append("/").append(document.getDocumentname())
						.toString();
				document.setDocumentpath(path);
				document.setUpdateddate(new Date());
			}

			dsaService.addDsaInfo(applicant);
			LOGGER.info("DSAController updatefilepathindatabase ends");
		} catch (Exception exception) {
			LOGGER.error("Error while getting updatefilepathindatabase. Reason : " + exception);
		}
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
	@ResponseBody
	@RequestMapping(value = "/getlistcity", method = RequestMethod.GET, produces = "application/json")
	public String getcitylist(HttpServletRequest request) {
		LOGGER.info("DSAController getcitylist start");
		String responseMessage = null;
		if (!(request.getParameter("state").equals("")) && null != request.getParameter("state")) {
			String state = request.getParameter("state");

			List<JSONObject> list = new ArrayList<JSONObject>();
			JSONObject outerObject = new JSONObject();
			try {
				List<String> listcity = dsaService.getCitylist(state);
				for (String city : listcity) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("city", city);
					list.add(jsonResponse);
				}
				outerObject.put("data", list);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getcitylist details. Reason : " + exception);
			}
			LOGGER.info("DSAController getcitylist ends");
		}
		return responseMessage;

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
	@ResponseBody
	@RequestMapping(value = "/getliststate", method = RequestMethod.GET, produces = "application/json")
	public String getstatelist(HttpServletRequest request) {
		LOGGER.info("DSAController getstatelist start");
		String responseMessage = null;
		List<JSONObject> list = new ArrayList<JSONObject>();
		JSONObject outerObject = new JSONObject();
		try {
			List<String> liststate = dsaService.getStatelist();
			for (String state : liststate) {
				JSONObject jsonResponse = new JSONObject();
				jsonResponse.put("state", state);
				list.add(jsonResponse);
			}
			outerObject.put("data", list);
			responseMessage = outerObject.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getstatelist details in DSAController. Reason : " + exception);
		}
		LOGGER.info("DSAController getstatelist ends");
		return responseMessage;
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
	@RequestMapping(value = "/dsaList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String dsaList(HttpServletRequest reuqest) throws JSONException, Exception {
		LOGGER.info("DSAController dsaList start");
		List<JSONObject> jsonObjectList = new ArrayList<JSONObject>();
		List<DSAEntity> listdsa = dsaService.getdsalist();
		for (DSAEntity dsaLoop : listdsa) {
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("id", dsaLoop.getDsaid());
			jsonObject.put("dsacode", dsaLoop.getDsacode());
			jsonObject.put("companyName", dsaLoop.getCompanyname());
			jsonObject.put("pan", dsaLoop.getCompanypan());
			String date = DateUtil.dateToString(dsaLoop.getUpdated_date(), "dd-MMM-yyyy hh:mm:ss a");
			jsonObject.put("updatedDate", date);
			jsonObject.put("city", dsaLoop.getCity());
			jsonObject.put("state", dsaLoop.getState());
			jsonObject.put("emailid", dsaLoop.getEmailid());
			jsonObjectList.add(jsonObject);
		}
		LOGGER.info("DSAController dsaList ends");
		return jsonObjectList.toString();
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
	@RequestMapping(value = "/empList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String smList(HttpServletRequest request) throws JSONException, Exception {
		LOGGER.info("DSAController smList start");
		List<JSONObject> jsonObjectList = new ArrayList<JSONObject>();
		if (!(request.getParameter("role").equals("")) && null != request.getParameter("role")
				&& !(request.getParameter("product").equals("")) && null != request.getParameter("product")) {
			String role = request.getParameter("role");
			String product = request.getParameter("product");
			List<EmployeeEntity> listsm = dsaService.getsmlist(role, product);
			for (EmployeeEntity smLoop : listsm) {
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("id", smLoop.getEmpid());
				jsonObject.put("name", smLoop.getName());
				jsonObject.put("employeeid", smLoop.getEmployeeid());
				String date = DateUtil.dateToString(smLoop.getUpdated_date(), "dd-MMM-yyyy hh:mm:ss a");
				jsonObject.put("updatedDate", date);
				jsonObjectList.add(jsonObject);
			}
			LOGGER.info("DSAController smList ends");
		}
		return jsonObjectList.toString();
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
	@RequestMapping(value = "/getmapList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String smDsamappingList(@RequestParam(value = "dsaid", required = true) String dsaid,
			HttpServletRequest reuqest) throws JSONException, Exception {
		LOGGER.info("DSAController smDsamappingList start");
		String responseMessage = null;
		if (!(dsaid.equals(""))) {
			List<JSONObject> jsonObjectList = new ArrayList<JSONObject>();
			List<InputDsaDto> listsm = dsaService.getdsasmmappingdetails(Long.valueOf(dsaid));

			for (InputDsaDto smLoop : listsm) {
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("sm_id", smLoop.getSm_id());
				jsonObject.put("state", smLoop.getState());
				jsonObject.put("product", smLoop.getProduct());
				jsonObject.put("employeeid", smLoop.getEmployeeid());
				jsonObject.put("employeename", smLoop.getName());
				jsonObject.put("dsasmid", smLoop.getDsasmid());
				jsonObjectList.add(jsonObject);
			}
			responseMessage = jsonObjectList.toString();

			LOGGER.info("DSAController smDsamappingList ends");
		}
		return responseMessage;
	}

	/**
	 * This api is used for getting empListonCity on city
	 * 
	 * 
	 * @param city
	 * @param session
	 * @return smLists
	 * @throws Exception
	 */
	@RequestMapping(value = "/empListonCity", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String smListonCity(@RequestParam(value = "state", required = true) String state,
			@RequestParam(value = "role", required = true) String role,
			@RequestParam(value = "product", required = true) String product,
			@RequestParam(value = "purpose", required = true) String purpose, HttpServletRequest reuqest)
					throws JSONException, Exception {
		LOGGER.info("DSAController smListonCity start");
		String responseMessage = null;
		List<JSONObject> jsonObjectList = new ArrayList<JSONObject>();
		if (!(state.equals("")) && !(role.equals("")) && null != role && null != state && !(product.equals(""))
				&& null != product && !(purpose.equals("")) && null != purpose) {
			List<EmployeeEntity> listsm = dsaService.smListonCity(state, role, product, purpose);

			for (EmployeeEntity smLoop : listsm) {
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("id", smLoop.getEmpid());
				jsonObject.put("name", smLoop.getName());
				jsonObject.put("employeeid", smLoop.getEmployeeid());
				String date = DateUtil.dateToString(smLoop.getUpdated_date(), "dd-MMM-yyyy hh:mm:ss a");
				jsonObject.put("updatedDate", date);
				jsonObjectList.add(jsonObject);

			}
			responseMessage = jsonObjectList.toString();
		}
		LOGGER.info("DSAController smListonCity ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/addsmdsa", method = RequestMethod.POST, consumes = "application/json")
	public String addsmdsa(@RequestBody List<InputDsaDto> listdsasm, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController addsmdsa start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addsmdsa(listdsasm);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addsmdsa details. Reason : " + exception);
		}
		LOGGER.info("DSAController addsmdsa ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/deletemap", method = RequestMethod.POST, consumes = "application/json")
	public String deletemapping(@RequestBody InputDsaDto inputdsadto, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController deletemapping starts");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			String status = dsaService.deletesmdsa(inputdsadto);
			jsonResponse.put("reply", status);
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting deletemapping details. Reason : " + exception);
		}
		LOGGER.info("DSAController deletemapping ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/getlistdsa", method = RequestMethod.GET, produces = "application/json")
	public String getlistdsa(HttpServletRequest request) {
		LOGGER.info("DSAController getlistdsa start");
		String responseMessage = null;

		if (!(request.getParameter("userid").equals("")) && null != request.getParameter("userid")) {
			String userId = request.getParameter("userid");

			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				List<InputDsaDto> listdsa = dsaService.getdsadetails(Long.valueOf(userId));
				if (listdsa.size() != 0) {
					for (InputDsaDto dsa : listdsa) {
						JSONObject jsonResponse = new JSONObject();
						jsonResponse.put("dsa_name", dsa.getCompanyname());
						jsonResponse.put("sm_id", dsa.getSm_id());
						jsonResponse.put("dsa_id", dsa.getDsa_id());
						list.add(jsonResponse);
					}

				}
				responseMessage = list.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getlistdsa details. Reason : " + exception);
			}
		}
		LOGGER.info("DSAController getlistdsa ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/getemailstatus", method = RequestMethod.GET, produces = "application/json")
	public String getemailstatus(HttpServletRequest request) {
		LOGGER.info("DSAController getemailstatus start");
		String responseMessage = null;

		if (!(request.getParameter("emailid").equals("")) && null != request.getParameter("emailid")) {
			String emailid = request.getParameter("emailid");
			JSONObject outerObject = new JSONObject();
			try {
				String status = dsaService.getemailstatus(emailid);
				outerObject.put("status", status);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getemailstatus details. Reason : " + exception);
			}
			LOGGER.info("DSAController getemailstatus ends");
		}
		return responseMessage;
	}

	/**
	 * This api is used for addadmindsa mapping
	 * 
	 * 
	 * @param List
	 *            DsaDetailsEntity
	 * @param session
	 * @return reply
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/addadmindsa", method = RequestMethod.POST, consumes = "application/json")
	public String adddsalist(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController addadmindsa start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			for (DsaDetailsEntity dsadetails : listdsasm) {
				dsadetails.setUpdated_date(new Date());
				dsaService.addDsaAdminInfo(dsadetails);

			}
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			exception.printStackTrace();
			LOGGER.error("Error while posting addadmindsa details. Reason : " + exception);
		}
		LOGGER.info("DSAController addadmindsa ends");
		return responseMessage;
	}

	/**
	 * This api is used for getlistdsaadmin
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getlistdsaadmin", method = RequestMethod.POST, produces = "application/json")
	public String getdsaadmindetails(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getlistdsaadmin start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			if(dsadto.getStartdate()!=null && dsadto.getEnddate()!=null ){
			dsadto.setStartdate(getdate(dsadto.getStartdate()));
			dsadto.setEnddate(getdate(dsadto.getEnddate()));
			}
			List<DsaDetailsEntity> listdsa = dsaService.getdsaadmindetails(dsadto);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					JSONObject jsonResponse = new JSONObject();
					// values coming from los database
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("roi", dsa.getRoi());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("processingamount", dsa.getPfamount());
					jsonResponse.put("pf", dsa.getPf());
					jsonResponse.put("gatekeeperid", dsa.getGatekeeperid());
					jsonResponse.put("dsacode", dsa.getDsacode());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("definedpayrate", dsa.getPayrate());
					jsonResponse.put("productname", dsa.getProductname());
					jsonResponse.put("frequency", dsa.getFrequency());
					// getting data from dsatble
					jsonResponse.put("subinvention", dsa.getSubvention());
					jsonResponse.put("include", dsa.getInclude());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					jsonResponse.put("intamt", dsa.getInterestamount());
					jsonResponse.put("dsadetailsid", dsa.getDsadetailsid());
					jsonResponse.put("sanctioned_amount_total", dsa.getSanctioned_amount_total());
					jsonResponse.put("avgnetpayrate", dsa.getAvgnetpayrate());
					jsonResponse.put("finalpayoutamount_total", dsa.getFinalpayoutamount_total());
					jsonResponse.put("avgroi", dsa.getAvgroi());
					jsonResponse.put("int_amount_total", dsa.getInt_amount_total());
					jsonResponse.put("avgpf", dsa.getAvgpf());
					jsonResponse.put("pfamounttotal", dsa.getPfamounttotal());
					jsonResponse.put("paymentFlag", dsa.getPaymentFlag());
					jsonResponse.put("misFlag", dsa.getMisFlag());
					jsonResponse.put("state", dsa.getState());
					jsonResponse.put("remark", StringUtils.isBlank(dsa.getRemark()) ? "" : dsa.getRemark());
					jsonResponse.put("constatus", StringUtils.isBlank(dsa.getConstatus()) ? "" : dsa.getConstatus());

					jsonResponse.put("paymentdate", dsa.getPaymentdate());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getlistdsaadmin details. Reason : " + exception);
		}
		LOGGER.info("DSAController getlistdsaadmin ends");
		return responseMessage;
	}

	/**
	 * This api is used for getlistdsa
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getlistdsa", method = RequestMethod.POST, produces = "application/json")
	public String getlistdsa(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getlistdsa start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getdsalistdetails(dsadto);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("dsaname", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("disbmonth", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("productname", dsa.getProductname());
					jsonResponse.put("customer", dsa.getCustomer());
					jsonResponse.put("camdate", dsa.getCamdate());
					jsonResponse.put("hold_pending", dsa.getHold_pending());
					jsonResponse.put("pddate", dsa.getPd_date());
					jsonResponse.put("appliedloanamount", dsa.getApplied_loan_amount());
					jsonResponse.put("state", dsa.getState());
					jsonResponse.put("accept", dsa.getGkaccept());
					jsonResponse.put("rejectreason", dsa.getGkrejectreason());
					jsonResponse.put("disbdate", dsa.getDisb_date());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getlistdsa details. Reason : " + exception);
		}
		LOGGER.info("DSAController getlistdsa ends");
		return responseMessage;
	}

	/**
	 * This api is used for getdsabasedlist
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getdsabasedlist", method = RequestMethod.POST, produces = "application/json")
	public String getdsabasedlist(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getdsabasedlist start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getdsabasedlist(dsadto);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("roi", dsa.getRoi());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("pf", dsa.getPf());
					jsonResponse.put("gatekeeperid", dsa.getGatekeeperid());
					jsonResponse.put("dsacode", dsa.getDsacode());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("definedpayrate", dsa.getPayrate());
					jsonResponse.put("productname", dsa.getProductname());
					jsonResponse.put("frequency", dsa.getFrequency());
					// getting data from dsatble
					jsonResponse.put("subvention", dsa.getSubvention());
					jsonResponse.put("include", dsa.getInclude());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					jsonResponse.put("intamt", dsa.getInterestamount());
					jsonResponse.put("dsadetailsid", dsa.getDsadetailsid());
					jsonResponse.put("sanctioned_amount_total", dsa.getSanctioned_amount_total());
					jsonResponse.put("avgnetpayrate", dsa.getAvgnetpayrate());
					jsonResponse.put("finalpayoutamount_total", dsa.getFinalpayoutamount_total());
					jsonResponse.put("avgroi", dsa.getAvgroi());
					jsonResponse.put("int_amount_total", dsa.getInt_amount_total());
					jsonResponse.put("avgpf", dsa.getAvgpf());
					jsonResponse.put("pfamounttotal", dsa.getPfamounttotal());
					jsonResponse.put("paymentFlag", dsa.getPaymentFlag());
					jsonResponse.put("misFlag", dsa.getMisFlag());
					jsonResponse.put("quarterlypayrate", dsa.getQuarterlypayrate());
					jsonResponse.put("quarterlytotalpayout", dsa.getQuarterlytotalpayout());
					jsonResponse.put("pfamount", dsa.getPfamount());
					jsonResponse.put("remark", StringUtils.isBlank(dsa.getRemark()) ? "" : dsa.getRemark());
					jsonResponse.put("constatus", StringUtils.isBlank(dsa.getConstatus()) ? "" : dsa.getConstatus());
					jsonResponse.put("paymentdate", dsa.getPaymentdate());
					jsonResponse.put("state", dsa.getState());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getdsabasedlist details. Reason : " + exception);
		}
		LOGGER.info("DSAController getdsabasedlist ends");
		return responseMessage;
	}

	/**
	 * This api is used for getstatecode
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getstatecode", method = RequestMethod.GET, produces = "application/json")
	public String getstatecode(HttpServletRequest request) {
		LOGGER.info("DSAController getstatecode start");
		String responseMessage = null;
		if (!(request.getParameter("state").equals("")) && null != request.getParameter("state")) {
			String state = request.getParameter("state");
			JSONObject outerObject = new JSONObject();
			try {
				String statecode = dsaService.getstatecode(state);
				outerObject.put("statecode", statecode);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getstatecode details. Reason : " + exception);
			}
			LOGGER.info("DSAController getstatecode ends");
		}
		return responseMessage;
	}

	/**
	 * This api is used for getting smlist based on role
	 * 
	 * 
	 * @param roleid
	 * @param session
	 * @return listsm
	 * @throws Exception
	 */

	@ResponseBody
	@RequestMapping(value = "/getlistsm", method = RequestMethod.GET, produces = "application/json")
	public String getlistsm(HttpServletRequest request) {
		LOGGER.info("DSAController getlistsm start");
		String responseMessage = null;
		if (!(request.getParameter("roleid").equals("")) && null != request.getParameter("roleid")) {
			String roleid = request.getParameter("roleid");
			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				List<InputDsaDto> listsm = dsaService.getsmdetails(Long.valueOf(roleid));
				if (listsm.size() != 0) {
					for (InputDsaDto sm : listsm) {
						JSONObject jsonResponse = new JSONObject();
						jsonResponse.put("sm_name", sm.getName());
						jsonResponse.put("sm_id", sm.getSm_id());
						list.add(jsonResponse);
					}

				}
				responseMessage = list.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getlistsm details. Reason : " + exception);
			}
			LOGGER.info("DSAController getlistsm ends");
		}
		return responseMessage;
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

	@ResponseBody
	@RequestMapping(value = "/getmapsm", method = RequestMethod.GET, produces = "application/json")
	public String getmapsm(HttpServletRequest request) {
		LOGGER.info("DSAController getmapsm start");
		String responseMessage = null;
		if (!(request.getParameter("smid").equals("")) && null != request.getParameter("smid")) {
			String smid = request.getParameter("smid");
			String product = request.getParameter("product");

			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				List<InputDsaDto> listsm = dsaService.getmapsmdetails(Long.valueOf(smid), product);
				if (listsm.size() != 0) {
					for (InputDsaDto sm : listsm) {
						JSONObject jsonResponse = new JSONObject();
						jsonResponse.put("sm_name", sm.getName());
						jsonResponse.put("sm_id", sm.getSm_id());
						jsonResponse.put("employeeid", sm.getEmployeeid());
						jsonResponse.put("sm_state", sm.getState());
						jsonResponse.put("product", sm.getProduct());
						jsonResponse.put("reporter_id", sm.getReporter_id());
						list.add(jsonResponse);
					}

				}
				responseMessage = list.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getmapsm details. Reason : " + exception);
			}
			LOGGER.info("DSAController getmapsm ends");
		}
		return responseMessage;
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

	@ResponseBody
	@RequestMapping(value = "/addmapsm", method = RequestMethod.POST, consumes = "application/json")
	public String addmapsm(@RequestBody List<InputDsaDto> listmapsm, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController addmapsm start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addmapsm(listmapsm);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addmapsm details. Reason : " + exception);
		}
		LOGGER.info("DSAController addmapsm ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/deletemapsm", method = RequestMethod.POST, consumes = "application/json")
	public String deletemapsm(@RequestBody InputDsaDto inputdsadto, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController deletemapsm starts");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			String status = dsaService.deletemapsm(inputdsadto);
			jsonResponse.put("reply", status);
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting deletemapsm details. Reason : " + exception);
		}
		LOGGER.info("DSAController deletemapsm ends");
		return responseMessage;
	}

	/**
	 * This api is used for getting mapped lower sm
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return responseMessage
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getmapsmrole", method = RequestMethod.GET, produces = "application/json")
	public String getmapsmrole(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getmapsmrole start");
		String responseMessage = null;
		if (!(request.getParameter("userid").equals("")) && null != request.getParameter("userid")
				&& !(request.getParameter("product").equals("")) && null != request.getParameter("product")) {

			Long userId = Long.parseLong(request.getParameter("userid"));
			String product = request.getParameter("product");

			InputDsaDto input = dsaService.getEmpIdBasedOnUserID(userId);

			JSONObject jsonResponse = new JSONObject();

			try {
				String role = dsaService.getRole((Long.valueOf(userId)));

				/*
				 * if (role.equalsIgnoreCase("SSM")) { jsonResponse =
				 * sm(Long.valueOf(input.getSm_id()), jsonResponse,
				 * input.getProduct()); } else if
				 */if (role.equalsIgnoreCase("ASM")) {
					jsonResponse = ssm(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("RSM")) {
					jsonResponse = asm(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("ZSM")) {
					jsonResponse = rsm(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("NSM")) {
					jsonResponse = zsm(Long.valueOf(input.getSm_id()), jsonResponse, product);
				}

				responseMessage = jsonResponse.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getmapsmrole details. Reason : " + exception);
			}
		}
		LOGGER.info("DSAController getmapsmrole ends");

		return responseMessage;
	}

	private JSONObject zsm(long id, JSONObject jsonResponse, String product) throws Exception {
		List<JSONObject> list = new ArrayList<JSONObject>();
		List<InputDsaDto> listzsm = dsaService.getmapsmdetails(Long.valueOf(id), product);
		for (InputDsaDto zsm : listzsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = zsmObject(zsm.getName(), Long.valueOf(zsm.getEmployeeid()), zsm.getState(), zsm.getCity(),
					Long.valueOf(zsm.getSm_id()), zsm.getProduct(), zsm.getRole());
			Long zsmid = zsm.getSm_id();
			list.add(jsonResponse1);
			jsonResponse.put("zsm_data", list);
			rsm(zsmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject rsm(long id, JSONObject jsonResponse, String product) throws Exception {
		List<JSONObject> list = new ArrayList<JSONObject>();
		List<InputDsaDto> listrsm = dsaService.getmapsmdetails(Long.valueOf(id), product);
		for (InputDsaDto rsm : listrsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = rsmObject(rsm.getName(), Long.valueOf(rsm.getEmployeeid()), rsm.getState(), rsm.getCity(),
					Long.valueOf(rsm.getSm_id()), rsm.getProduct(), rsm.getRole());
			Long rsmid = rsm.getSm_id();
			list.add(jsonResponse1);
			jsonResponse.put("rsm_data", list);
			asm(rsmid, jsonResponse1, product);

		}
		return jsonResponse;

	}

	private JSONObject asm(long id, JSONObject jsonResponse, String product) throws Exception {
		List<JSONObject> list = new ArrayList<JSONObject>();
		List<InputDsaDto> listasm = dsaService.getmapsmdetails(Long.valueOf(id), product);
		for (InputDsaDto asm : listasm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = asmObject(asm.getName(), Long.valueOf(asm.getEmployeeid()), asm.getState(), asm.getCity(),
					Long.valueOf(asm.getSm_id()), asm.getProduct(), asm.getRole());
			Long asmid = asm.getSm_id();
			list.add(jsonResponse1);
			jsonResponse.put("asm_data", list);
			ssm(asmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject ssm(long id, JSONObject jsonResponse, String product) throws Exception {
		List<JSONObject> list = new ArrayList<JSONObject>();
		List<InputDsaDto> listssm = dsaService.getmapsmdetails(Long.valueOf(id), product);
		for (InputDsaDto ssm : listssm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = ssmObject(ssm.getName(), Long.valueOf(ssm.getEmployeeid()), ssm.getState(), ssm.getCity(),
					Long.valueOf(ssm.getSm_id()), ssm.getProduct(), ssm.getRole());
			Long ssmid = ssm.getSm_id();
			list.add(jsonResponse1);
			jsonResponse.put("ssm_data", list);
			// sm(ssmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject sm(long id, JSONObject jsonResponse, String product) throws Exception {
		List<JSONObject> list = new ArrayList<JSONObject>();
		List<InputDsaDto> listsm = dsaService.getmapsmdetails(Long.valueOf(id), product);
		for (InputDsaDto sm : listsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = smObject(sm.getName(), Long.valueOf(sm.getEmployeeid()), sm.getState(), sm.getCity(),
					Long.valueOf(sm.getSm_id()), sm.getProduct(), sm.getRole());
			list.add(jsonResponse1);
			jsonResponse.put("sm_data", list);
		}
		return jsonResponse;

	}

	private JSONObject smObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("sm_name", name);
		jsonResponse.put("sm_employeeid", employeeId);
		jsonResponse.put("sm_state", state);
		jsonResponse.put("sm_city", city);
		jsonResponse.put("sm_id", smid);
		jsonResponse.put("productType", product);
		return jsonResponse;

	}

	private JSONObject ssmObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("ssm_name", name);
		jsonResponse.put("ssm_employeeid", employeeId);
		jsonResponse.put("ssm_state", state);
		jsonResponse.put("ssm_city", city);
		jsonResponse.put("ssm_id", smid);
		jsonResponse.put("productType", product);
		jsonResponse.put("role", role);
		return jsonResponse;

	}

	private JSONObject asmObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("asm_name", name);
		jsonResponse.put("asm_employeeid", employeeId);
		jsonResponse.put("asm_state", state);
		jsonResponse.put("asm_city", city);
		jsonResponse.put("asm_id", smid);
		jsonResponse.put("productType", product);
		jsonResponse.put("role", role);
		return jsonResponse;

	}

	private JSONObject rsmObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("rsm_name", name);
		jsonResponse.put("rsm_employeeid", employeeId);
		jsonResponse.put("rsm_state", state);
		jsonResponse.put("rsm_city", city);
		jsonResponse.put("rsm_id", smid);
		jsonResponse.put("productType", product);
		jsonResponse.put("role", role);
		return jsonResponse;

	}

	private JSONObject zsmObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("zsm_name", name);
		jsonResponse.put("zsm_employeeid", employeeId);
		jsonResponse.put("zsm_state", state);
		jsonResponse.put("zsm_city", city);
		jsonResponse.put("zsm_id", smid);
		jsonResponse.put("productType", product);
		jsonResponse.put("role", role);
		return jsonResponse;

	}

	private JSONObject nsmObject(String name, long employeeId, String state, String city, long smid, String product,
			String role) throws Exception {
		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("nsm_name", name);
		jsonResponse.put("nsm_employeeid", employeeId);
		jsonResponse.put("nsm_state", state);
		jsonResponse.put("nsm_city", city);
		jsonResponse.put("nsm_id", smid);
		jsonResponse.put("productType", product);
		jsonResponse.put("role", role);
		return jsonResponse;

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
	@ResponseBody
	@RequestMapping(value = "/getuppersmrole", method = RequestMethod.GET, produces = "application/json")
	public String getuppersmrole(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getuppersmrole start");
		String responseMessage = null;
		if (!(request.getParameter("userid").equals("")) && null != request.getParameter("userid")
				&& !(request.getParameter("product").equals("")) && null != request.getParameter("product")) {

			JSONObject jsonResponse = new JSONObject();
			Long userId = Long.parseLong(request.getParameter("userid"));
			String product = request.getParameter("product");

			InputDsaDto input = dsaService.getEmpIdBasedOnUserID(userId);

			try {
				String role = dsaService.getRole((Long.valueOf(userId)));
				/*
				 * if (role.equalsIgnoreCase("SM")) { jsonResponse =
				 * ssmUpper(Long.valueOf(input.getSm_id()), jsonResponse); }
				 * else
				 */if (role.equalsIgnoreCase("SSM") || role.equalsIgnoreCase("SM")) {
					jsonResponse = asmUpper(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("ASM")) {
					jsonResponse = rsmUpper(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("RSM")) {
					jsonResponse = zsmUpper(Long.valueOf(input.getSm_id()), jsonResponse, product);
				} else if (role.equalsIgnoreCase("ZSM")) {
					jsonResponse = nsmUpper(Long.valueOf(input.getSm_id()), jsonResponse, product);
				}

				responseMessage = jsonResponse.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getuppersmrole details. Reason : " + exception);
			}
		}
		LOGGER.info("DSAController getuppersmrole ends");
		return responseMessage;
	}

	private JSONObject ssmUpper(long id, JSONObject jsonResponse, String product) throws Exception {
		List<InputDsaDto> listsm = dsaService.getuppersmdetails(Long.valueOf(id), product);
		for (InputDsaDto sm : listsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = ssmObject(sm.getName(), Long.valueOf(sm.getEmployeeid()), sm.getState(), sm.getCity(),
					Long.valueOf(sm.getSm_id()), sm.getProduct(), sm.getRole());
			Long asmid = sm.getSm_id();
			jsonResponse.put("ssm_data", jsonResponse1);
			asmUpper(asmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject asmUpper(long id, JSONObject jsonResponse, String product) throws Exception {
		List<InputDsaDto> listasm = dsaService.getuppersmdetails(Long.valueOf(id), product);
		for (InputDsaDto asm : listasm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = asmObject(asm.getName(), Long.valueOf(asm.getEmployeeid()), asm.getState(), asm.getCity(),
					Long.valueOf(asm.getSm_id()), asm.getProduct(), asm.getRole());
			Long rsmid = asm.getSm_id();
			jsonResponse.put("asm_data", jsonResponse1);
			rsmUpper(rsmid, jsonResponse1, product);
		}
		return jsonResponse;

	}

	private JSONObject rsmUpper(long id, JSONObject jsonResponse, String product) throws Exception {
		List<InputDsaDto> listrsm = dsaService.getuppersmdetails(Long.valueOf(id), product);
		for (InputDsaDto rsm : listrsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = rsmObject(rsm.getName(), Long.valueOf(rsm.getEmployeeid()), rsm.getState(), rsm.getCity(),
					Long.valueOf(rsm.getSm_id()), rsm.getProduct(), rsm.getRole());
			Long zsmid = rsm.getSm_id();
			jsonResponse.put("rsm_data", jsonResponse1);
			zsmUpper(zsmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject zsmUpper(long id, JSONObject jsonResponse, String product) throws Exception {
		List<InputDsaDto> listzsm = dsaService.getuppersmdetails(Long.valueOf(id), product);
		for (InputDsaDto zsm : listzsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = zsmObject(zsm.getName(), Long.valueOf(zsm.getEmployeeid()), zsm.getState(), zsm.getCity(),
					Long.valueOf(zsm.getSm_id()), zsm.getProduct(), zsm.getRole());
			Long nsmid = zsm.getSm_id();
			jsonResponse.put("zsm_data", jsonResponse1);
			nsmUpper(nsmid, jsonResponse1, product);
		}
		return jsonResponse;
	}

	private JSONObject nsmUpper(long id, JSONObject jsonResponse, String product) throws Exception {
		List<InputDsaDto> listnsm = dsaService.getuppersmdetails(Long.valueOf(id), product);
		for (InputDsaDto nsm : listnsm) {
			JSONObject jsonResponse1 = new JSONObject();
			jsonResponse1 = nsmObject(nsm.getName(), Long.valueOf(nsm.getEmployeeid()), nsm.getState(), nsm.getCity(),
					Long.valueOf(nsm.getSm_id()), nsm.getProduct(), nsm.getRole());
			jsonResponse.put("nsm_data", jsonResponse1);
		}
		return jsonResponse;
	}

	/**
	 * This api is used for getemployeeidstatus
	 * 
	 * 
	 * @param employeeid
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getemployeeidstatus", method = RequestMethod.GET, produces = "application/json")
	public String getemployeeidstatus(HttpServletRequest request) {
		LOGGER.info("DSAController getemployeeidstatus start");
		String responseMessage = null;

		if (!(request.getParameter("employeeid").equals("")) && null != request.getParameter("employeeid")) {
			String employeeid = request.getParameter("employeeid");
			JSONObject outerObject = new JSONObject();
			try {
				String status = dsaService.getemployeeidstatus(employeeid);
				outerObject.put("status", status);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getemployeeidstatus details. Reason : " + exception);
			}
			LOGGER.info("DSAController getemployeeidstatus ends");
		}
		return responseMessage;
	}

	/**
	 * This api is used for getdsalistquarterly
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getdsalistquarterly", method = RequestMethod.POST, produces = "application/json")
	public String getdsalistquarterly(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getdsalistquarterly start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			InputDsaDto listdsa = dsaService.getdsabasedlistQuarterly(dsadto);
			if (listdsa.getDsalist().size() != 0) {
				for (DsaDetailsEntity dsa : listdsa.getDsalist()) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("roi", dsa.getRoi());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("pf", dsa.getPf());
					jsonResponse.put("gatekeeperid", dsa.getGatekeeperid());
					jsonResponse.put("dsacode", dsa.getDsacode());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("definedpayrate", dsa.getPayrate());
					jsonResponse.put("productname", dsa.getProductname());
					jsonResponse.put("frequency", dsa.getFrequency());
					// getting data from dsatble
					jsonResponse.put("subvention", dsa.getSubvention());
					jsonResponse.put("include", dsa.getInclude());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					jsonResponse.put("intamt", dsa.getInterestamount());
					jsonResponse.put("dsadetailsid", dsa.getDsadetailsid());
					jsonResponse.put("sanctioned_amount_total", dsa.getSanctioned_amount_total());
					jsonResponse.put("avgnetpayrate", dsa.getAvgnetpayrate());
					jsonResponse.put("finalpayoutamount_total", dsa.getFinalpayoutamount_total());
					jsonResponse.put("avgroi", dsa.getAvgroi());
					jsonResponse.put("int_amount_total", dsa.getInt_amount_total());
					jsonResponse.put("avgpf", dsa.getAvgpf());
					jsonResponse.put("pfamounttotal", dsa.getPfamounttotal());
					jsonResponse.put("paymentFlag", dsa.getPaymentFlag());
					jsonResponse.put("misFlag", dsa.getMisFlag());
					jsonResponse.put("quarterlypayrate", dsa.getQuarterlypayrate());
					jsonResponse.put("quarterlytotalpayout", dsa.getQuarterlytotalpayout());
					jsonResponse.put("pfamount", dsa.getPfamount());
					jsonResponse.put("remark", StringUtils.isBlank(dsa.getRemark()) ? "" : dsa.getRemark());
					jsonResponse.put("constatus", StringUtils.isBlank(dsa.getConstatus()) ? "" : dsa.getConstatus());
					jsonResponse.put("state", dsa.getState());
					jsonResponse.put("paymentdate", dsa.getPaymentdate());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getdsalistquarterly details. Reason : " + exception);
		}
		LOGGER.info("DSAController getdsalistquarterly ends");
		return responseMessage;
	}

	/**
	 * This api is used for generateinvoice
	 * 
	 * 
	 * @param dsacode
	 * @param session
	 * @return status
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/generateinvoice", method = RequestMethod.GET, produces = "application/json")
	public String generateinvoice(HttpServletRequest request) {
		LOGGER.info("DSAController generateinvoice start");
		String responseMessage = null;
		if (!(request.getParameter("dsacode").equals("")) && !(request.getParameter("year").equals(""))
				&& !(request.getParameter("month").equals("")) && null != request.getParameter("dsacode")
				&& null != request.getParameter("year") && null != request.getParameter("month")) {
			String dsacode = request.getParameter("dsacode");
			String year = request.getParameter("year");
			String month = request.getParameter("month");
			JSONObject outerObject = new JSONObject();
			try {
				String status = null;
				String path = dsaService.generateinvoice(dsacode, year, month);
				if (path == null) {
					status = "failure";
				} else if (path.equals("gstabsent")) {
					status = "gstabsent";
				} else if (null != path) {
					status = "success";
					outerObject.put("path", path);
				}
				outerObject.put("reply", status);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting generateinvoice details. Reason : " + exception);
			}
			LOGGER.info("DSAController generateinvoice ends");
		}
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/quarterlyinvoice", method = RequestMethod.POST, produces = "application/json")
	public List<Invoice> generateinvoicequarterly(@RequestBody List<Invoice> invoice) {
		LOGGER.info("DSAController CreateInvoicePdfInfo start");
		List<Invoice> invoicelist = new ArrayList<Invoice>();
		try {
			for (Invoice invoice1 : invoice) {
				Invoice path = dsaService.generateinvoicequarterly(invoice1);
				invoicelist.add(path);
			}
		} catch (Exception exception) {
			LOGGER.error("Error while posting CreateInvoicePdfInfo details. Reason : " + exception);
		}
		LOGGER.info("DSAController CreateInvoicePdfInfo end");
		return invoicelist;

	}

	/**
	 * This api is used for getmonthlyhistoricaldata
	 * 
	 * 
	 * @param DsaDetailsEntity
	 * @param session
	 * @return listdsa
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getmnthdsalist", method = RequestMethod.POST, produces = "application/json")
	public String getmonthlyhistoricaldata(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getmonthlyhistoricaldata start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getmonthlyhistoricaldata(dsadto);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("roi", dsa.getRoi());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("processingamount", dsa.getPfamount());
					jsonResponse.put("pf", dsa.getPf());
					jsonResponse.put("gatekeeperid", dsa.getGatekeeperid());
					jsonResponse.put("dsacode", dsa.getDsacode());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("definedpayrate", dsa.getPayrate());
					jsonResponse.put("subinvention", dsa.getSubvention());
					jsonResponse.put("include", dsa.getInclude());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					jsonResponse.put("intamt", dsa.getInterestamount());
					jsonResponse.put("dsadetailsid", dsa.getDsadetailsid());
					jsonResponse.put("sanctioned_amount_total", dsa.getSanctioned_amount_total());
					jsonResponse.put("avgnetpayrate", dsa.getAvgnetpayrate());
					jsonResponse.put("finalpayoutamount_total", dsa.getFinalpayoutamount_total());
					jsonResponse.put("avgroi", dsa.getAvgroi());
					jsonResponse.put("int_amount_total", dsa.getInt_amount_total());
					jsonResponse.put("avgpf", dsa.getAvgpf());
					jsonResponse.put("pfamounttotal", dsa.getPfamounttotal());
					jsonResponse.put("paymentFlag", dsa.getPaymentFlag());
					jsonResponse.put("misFlag", dsa.getMisFlag());
					jsonResponse.put("customer", dsa.getCustomer());
					jsonResponse.put("camdate", dsa.getCamdate());
					jsonResponse.put("hold_pending", dsa.getHold_pending());
					jsonResponse.put("pd_date", dsa.getPd_date());
					jsonResponse.put("gkaccept", dsa.getGkaccept());
					jsonResponse.put("gkrejectreason", dsa.getGkrejectreason());
					jsonResponse.put("disb_date", dsa.getDisb_date());
					jsonResponse.put("frequency", dsa.getFrequency());

					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getmonthlyhistoricaldata details. Reason : " + exception);
		}
		LOGGER.info("DSAController getmonthlyhistoricaldata ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/getadminsm", method = RequestMethod.POST, produces = "application/json")
	public String getadminsm(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request) {
		LOGGER.info("DSAController getlistsm start");
		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getsmlistdetails(dsadto);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					JSONObject jsonResponse = new JSONObject();
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getlistsm details. Reason : " + exception);
		}
		LOGGER.info("DSAController getlistsm ends");
		return responseMessage;
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
	@ResponseBody
	@RequestMapping(value = "/getaccountstatus", method = RequestMethod.GET, produces = "application/json")
	public String getaccountstatus(HttpServletRequest request) {
		LOGGER.info("DSAController getaccountstatus start");
		String responseMessage = null;

		if (!(request.getParameter("accountno").equals("")) && null != request.getParameter("accountno")) {
			String accountno = request.getParameter("accountno");
			JSONObject outerObject = new JSONObject();
			try {
				String status = dsaService.getaccountstatus(accountno);
				outerObject.put("status", status);
				responseMessage = outerObject.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getaccountstatus details. Reason : " + exception);
			}
			LOGGER.info("DSAController getaccountstatus ends");
		}
		return responseMessage;
	}

	/**
	 * This api is used for getting list of bank
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return statelist
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/getlistbank", method = RequestMethod.GET, produces = "application/json")
	public String getbanklist(HttpServletRequest request) {
		LOGGER.info("DSAController getbanklist start");
		String responseMessage = null;
		List<JSONObject> list = new ArrayList<JSONObject>();
		JSONObject outerObject = new JSONObject();
		try {
			List<String> listbank = dsaService.getBanklist();
			for (String bank : listbank) {
				JSONObject jsonResponse = new JSONObject();
				jsonResponse.put("bankname", bank.trim());
				list.add(jsonResponse);
			}
			outerObject.put("data", list);
			responseMessage = outerObject.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getbanklist details in DSAController. Reason : " + exception);
		}
		LOGGER.info("DSAController getbanklist ends");
		return responseMessage;
	}

	@RequestMapping(value = "/getsblincentive", method = RequestMethod.GET)
	public ResponseEntity<List<SblInsentive>> getListmonthlyslab() {
		List<SblInsentive> userDetails = null;

		try {
			userDetails = dsaService.getListmonthlyslab();
		} catch (Exception exception) {
			LOGGER.error("Error while getting getListmonthlyslab details in DSAController. Reason : " + exception);
		}
		return new ResponseEntity<List<SblInsentive>>(userDetails, HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/addsblincentive", method = RequestMethod.POST, consumes = "application/json")
	public String addsblincentive(@RequestBody List<SblInsentive> listsbl, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController addsblincentive start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addsblincentive(listsbl);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addsmdsa details. Reason : " + exception);
		}
		LOGGER.info("DSAController addsblincentive ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/addBlincentive", method = RequestMethod.POST, consumes = "application/json")
	public String addBLInsentiveInfo(@RequestBody BLInsentive smentity) {
		LOGGER.info("DSAController addBLInsentiveInfo start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			long appid = dsaService.addBLInsentiveInfo(smentity);
			jsonResponse.put("id", appid);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addBLInsentiveInfo details. Reason : " + exception);
		}
		LOGGER.info("DSAController addBLInsentiveInfo end");
		return responseMessage;

	}

	@ResponseBody
	@RequestMapping(value = "/getBLInsentive", method = RequestMethod.GET, produces = "application/json")
	public BLInsentive getBLInsentive(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getBLInsentive start");
		BLInsentive blinsentive = null;
		if (!(request.getParameter("id").equals("")) && null != request.getParameter("id")) {
			blinsentive = dsaService.getBLInsentiveInfo(Long.parseLong(request.getParameter("id")));
		}
		LOGGER.info("DSAController getBLInsentive end");
		if (blinsentive == null) {
			blinsentive = new BLInsentive();
		}

		return blinsentive;

	}

	@ResponseBody
	@RequestMapping(value = "/createinvoicepdf", method = RequestMethod.POST, consumes = "application/json")
	public String CreateInvoicePdfInfo(@RequestBody List<Invoice> invoice) {
		LOGGER.info("DSAController CreateInvoicePdfInfo start");
		String responseMessage = null;
		JSONObject jsonResponse = new JSONObject();
		List<String> listpath = new ArrayList<String>();
		try {
			for (Invoice invoice1 : invoice) {
				String path = dsaService.CreateInvoicePdfInfo(invoice1);
			}

			jsonResponse.put("reply", "success");

			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting CreateInvoicePdfInfo details. Reason : " + exception);
		}
		LOGGER.info("DSAController CreateInvoicePdfInfo end");
		return responseMessage;

	}

	@RequestMapping(value = "/getinvoicelist", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<List<Invoice>> getinvoicelist(@RequestBody Invoice dsanameEntity) {
		List<Invoice> invoice = null;

		try {
			invoice = dsaService.getinvoicelist(dsanameEntity);

		} catch (Exception exception) {
			LOGGER.error("Error while getting getinvoicelist details in DSAController. Reason : " + exception);
		}
		return new ResponseEntity<List<Invoice>>(invoice, HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/getadminaccount", method = RequestMethod.POST, produces = "application/json")
	public String getadminaccount(@RequestBody DsaDetailsEntity dsanameEntity) {

		String responseMessage = null;

		List<JSONObject> list = new ArrayList<JSONObject>();
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getadminaccount(dsanameEntity);
			if (listdsa.size() != 0) {
				for (DsaDetailsEntity dsa : listdsa) {
					Invoice invoice = dsaService.getInvoicePath(dsa);
					JSONObject jsonResponse = new JSONObject();
					// values coming from los database
					jsonResponse.put("dsa", dsa.getDsa());
					jsonResponse.put("location", dsa.getLocation());
					jsonResponse.put("losid", dsa.getLosid());
					jsonResponse.put("roi", dsa.getRoi());
					jsonResponse.put("month", dsa.getMonth());
					jsonResponse.put("companyname", dsa.getCompanyname());
					jsonResponse.put("status", dsa.getStatus());
					jsonResponse.put("sanctionloanamount", dsa.getSanctionedamount());
					jsonResponse.put("salesmanger", dsa.getSalesmanager());
					jsonResponse.put("year", dsa.getYear());
					jsonResponse.put("processingamount", dsa.getPfamount());
					jsonResponse.put("pf", dsa.getPf());
					jsonResponse.put("gatekeeperid", dsa.getGatekeeperid());
					jsonResponse.put("dsacode", dsa.getDsacode());
					jsonResponse.put("applied_loan_amount", dsa.getApplied_loan_amount());
					jsonResponse.put("definedpayrate", dsa.getPayrate());
					jsonResponse.put("productname", dsa.getProductname());
					// getting data from dsatble
					jsonResponse.put("subinvention", dsa.getSubvention());
					jsonResponse.put("include", dsa.getInclude());
					jsonResponse.put("netpayrate", dsa.getNetpayrate());
					jsonResponse.put("finalpayoutamount", dsa.getFinalpayoutamount());
					jsonResponse.put("intamt", dsa.getInterestamount());
					jsonResponse.put("dsadetailsid", dsa.getDsadetailsid());
					jsonResponse.put("sanctioned_amount_total", dsa.getSanctioned_amount_total());
					jsonResponse.put("avgnetpayrate", dsa.getAvgnetpayrate());
					jsonResponse.put("finalpayoutamount_total", dsa.getFinalpayoutamount_total());
					jsonResponse.put("avgroi", dsa.getAvgroi());
					jsonResponse.put("int_amount_total", dsa.getInt_amount_total());
					jsonResponse.put("avgpf", dsa.getAvgpf());
					jsonResponse.put("pfamounttotal", dsa.getPfamounttotal());
					jsonResponse.put("paymentFlag", dsa.getPaymentFlag());
					jsonResponse.put("misFlag", dsa.getMisFlag());
					jsonResponse.put("customer", dsa.getCustomer());
					jsonResponse.put("camdate", dsa.getCamdate());
					jsonResponse.put("hold_pending", dsa.getHold_pending());
					jsonResponse.put("pd_date", dsa.getPd_date());
					jsonResponse.put("gkaccept", dsa.getGkaccept());
					jsonResponse.put("gkrejectreason", dsa.getGkrejectreason());
					jsonResponse.put("disb_date", dsa.getDisb_date());
					jsonResponse.put("frequency", dsa.getFrequency());
					jsonResponse.put("remark", dsa.getRemark());
					jsonResponse.put("constatus", dsa.getConstatus());
					jsonResponse.put("state", dsa.getState());
					jsonResponse.put("acc_constatus", dsa.getAcc_constatus());
					jsonResponse.put("acc_remark", dsa.getAcc_remark());
					jsonResponse.put("paymentdate", dsa.getPaymentdate());
					jsonResponse.put("pdfpath", invoice.getInvoicepath());
					jsonResponse.put("invoiceamount", invoice.getInvoiceamount());
					jsonResponse.put("invoiceid", invoice.getInvoiceid());
					list.add(jsonResponse);
				}

			}
			responseMessage = list.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while getting getadminaccount details in DSAController. Reason : " + exception);
		}
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/addaccountadminlist", method = RequestMethod.POST, consumes = "application/json")
	public String addaccountadminlist(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController addsmdsa start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addaccountadminlist(listdsasm);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addsmdsa details. Reason : " + exception);
		}
		LOGGER.info("DSAController addsmdsa ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/gklistlos", method = RequestMethod.GET, produces = "application/json")
	public List<DsaDetailsEntity> generateinvoicequarterly(HttpServletRequest request) {
		LOGGER.info("DSAController CreateInvoicePdfInfo start");
		List<DsaDetailsEntity> listdsasm = null;
		try {
			DsaDetailsEntity a = new DsaDetailsEntity();
			listdsasm = dsaService.getgklistdetails(a);

		} catch (Exception exception) {
			LOGGER.error("Error while posting CreateInvoicePdfInfo details. Reason : " + exception);
		}
		LOGGER.info("DSAController CreateInvoicePdfInfo end");
		return listdsasm;

	}

	@ResponseBody
	@RequestMapping(value = "/getmapcmrole", method = RequestMethod.GET, produces = "application/json")
	public String getmapcmrole(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getmapcmrole start");
		Long userId = Long.parseLong(request.getParameter("userid"));
		InputDsaDto input = dsaService.getEmpIdBasedOnUserID(userId);

		String responseMessage = null;
		List<JSONObject> list = new ArrayList<JSONObject>();
		JSONObject jsonResponse = new JSONObject();

		try {
			String role = dsaService.getRole((Long.valueOf(userId)));

			if (role.equalsIgnoreCase("CAM_CM")) {
				list = acm(list, input.getSm_id());
			} else if (role.equalsIgnoreCase("CAM_ACM")) {
				list = rcm(list, input.getSm_id());
			} else if (role.equalsIgnoreCase("CAM_RCM")) {
				list = zcm(list, input.getSm_id());
			} else if (role.equalsIgnoreCase("CAM_ZCM")) {
				list = ncm(list, input.getSm_id());
			}
			jsonResponse.put("data", list);
			responseMessage = jsonResponse.toString();

		} catch (Exception exception) {
			LOGGER.error("Error while getting getmapcmrole details. Reason : " + exception);
		}
		LOGGER.info("DSAController getmapcmrole ends");

		return responseMessage;
	}

	private List<JSONObject> acm(List<JSONObject> list, Long id) throws Exception {
		List<InputDsaDto> listcm = dsaService.getuppercmdetails(Long.valueOf(id));
		JSONObject jsonResponse = new JSONObject();
		for (InputDsaDto acm : listcm) {
			jsonResponse.put("name", acm.getName());
			jsonResponse.put("emailid", acm.getEmailid());
			jsonResponse.put("role", acm.getRole());
			list.add(jsonResponse);
			rcm(list, acm.getSm_id());
		}
		return list;
	}

	private List<JSONObject> rcm(List<JSONObject> list, Long id) throws Exception {
		List<InputDsaDto> listrcm = dsaService.getuppercmdetails(Long.valueOf(id));
		JSONObject jsonResponse = new JSONObject();
		for (InputDsaDto rcm : listrcm) {
			jsonResponse.put("name", rcm.getName());
			jsonResponse.put("emailid", rcm.getEmailid());
			jsonResponse.put("role", rcm.getRole());
			list.add(jsonResponse);
			zcm(list, rcm.getSm_id());
		}
		return list;
	}

	private List<JSONObject> zcm(List<JSONObject> list, Long id) throws Exception {
		List<InputDsaDto> listzcm = dsaService.getuppercmdetails(Long.valueOf(id));
		JSONObject jsonResponse = new JSONObject();
		for (InputDsaDto zcm : listzcm) {
			jsonResponse.put("name", zcm.getName());
			jsonResponse.put("emailid", zcm.getEmailid());
			jsonResponse.put("role", zcm.getRole());
			list.add(jsonResponse);
			ncm(list, zcm.getSm_id());
		}
		return list;
	}

	private List<JSONObject> ncm(List<JSONObject> list, Long id) throws Exception {
		List<InputDsaDto> listncm = dsaService.getuppercmdetails(Long.valueOf(id));
		JSONObject jsonResponse = new JSONObject();
		for (InputDsaDto ncm : listncm) {
			jsonResponse.put("name", ncm.getName());
			jsonResponse.put("emailid", ncm.getEmailid());
			jsonResponse.put("role", ncm.getRole());
			list.add(jsonResponse);
		}
		return list;
	}

	@ResponseBody
	@RequestMapping(value = "/checklosid", method = RequestMethod.GET, produces = "application/json")
	public String checklosid(HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController checklosid start");
		JSONObject jsonObject = new JSONObject();

		String responseMessage = null;
		if (!(request.getParameter("id").equals("")) && null != request.getParameter("id")) {
			String msg = dsaService.getchecklos(Long.parseLong(request.getParameter("id")));
			jsonObject.put("reply", msg);
			responseMessage = jsonObject.toString();
		}
		LOGGER.info("DSAController checklosid end");

		return responseMessage;

	}

	@ResponseBody
	@RequestMapping(value = "/getproductbyuserid", method = RequestMethod.GET, produces = "application/json")
	public String getproductbyuserid(HttpServletRequest request) {
		LOGGER.info("DSAController getproductbyuserid start");
		String responseMessage = null;
		if (!(request.getParameter("userid").equals(""))) {
			String userid = request.getParameter("userid");

			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				InputDsaDto dsaEntity = dsaService.getproductbyuserid(Long.valueOf(userid));
				JSONObject jsonResponse = new JSONObject();
				jsonResponse.put("product", dsaEntity.getProduct());

				responseMessage = jsonResponse.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting productbyuserid details. Reason : " + exception);
			}
			LOGGER.info("DSAController getproductbyuserid ends");
		}
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/getsmincentive", method = RequestMethod.GET)
	public ResponseEntity<SMInsentive> getsmincentive(HttpServletRequest request) {
		SMInsentive smincentive = null;

		try {
			if (!(request.getParameter("id").equals("")) && null != request.getParameter("id")) {
				smincentive = dsaService.getSMInsentiveInfo(Long.parseLong(request.getParameter("id")));
			}

		} catch (Exception exception) {
			LOGGER.error("Error while getting getListmonthlyslab details in DSAController. Reason : " + exception);
		}
		return new ResponseEntity<SMInsentive>(smincentive, HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/addsmincentive", method = RequestMethod.POST, consumes = "application/json")
	public String addsmincentive(@RequestBody SMInsentive sminsentive, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController addsmincentive start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addSMInsentiveInfo(sminsentive);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addsmincentive details. Reason : " + exception);
		}
		LOGGER.info("DSAController addsmincentive ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/getlistcm", method = RequestMethod.GET, produces = "application/json")
	public String getlistcm(HttpServletRequest request) {
		LOGGER.info("DSAController getlistcm start");
		String responseMessage = null;
		if (!(request.getParameter("role").equals("")) && null != request.getParameter("role")) {
			String role = request.getParameter("role");
			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				List<InputDsaDto> listcm = dsaService.getcmdetails(role);
				if (listcm.size() != 0) {
					for (InputDsaDto cm : listcm) {
						JSONObject jsonResponse = new JSONObject();
						jsonResponse.put("cm_name", cm.getName());
						jsonResponse.put("cm_id", cm.getSm_id());
						jsonResponse.put("cm_empid", cm.getEmployeeid());
						list.add(jsonResponse);
					}

				}
				responseMessage = list.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getlistcm details. Reason : " + exception);
			}
			LOGGER.info("DSAController getlistcm ends");
		}
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/getmapcm", method = RequestMethod.GET, produces = "application/json")
	public String getmapcm(HttpServletRequest request) {
		LOGGER.info("DSAController getmapcm start");
		String responseMessage = null;
		if (!(request.getParameter("cmid").equals("")) && null != request.getParameter("cmid")) {
			String cmid = request.getParameter("cmid");

			List<JSONObject> list = new ArrayList<JSONObject>();
			try {
				List<InputDsaDto> listcm = dsaService.getmapcmdetails(Long.valueOf(cmid));
				if (listcm.size() != 0) {
					for (InputDsaDto cm : listcm) {
						JSONObject jsonResponse = new JSONObject();
						jsonResponse.put("name", cm.getName());
						jsonResponse.put("id", cm.getSm_id());
						jsonResponse.put("employeeid", cm.getEmployeeid());
						jsonResponse.put("state", cm.getState());
						jsonResponse.put("product", cm.getProduct());
						jsonResponse.put("reporter_id", cm.getReporter_id());
						list.add(jsonResponse);
					}

				}
				responseMessage = list.toString();

			} catch (Exception exception) {
				LOGGER.error("Error while getting getmapcm details. Reason : " + exception);
			}
			LOGGER.info("DSAController getmapcm ends");
		}
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/addpincode", method = RequestMethod.POST, consumes = "application/json")
	public String addpincode(@RequestBody List<String> listpincode, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController addpincode start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.addpincode(listpincode);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addpincode details. Reason : " + exception);
		}
		LOGGER.info("DSAController addpincode ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/sendEmailNsmOnDisagree", method = RequestMethod.POST, produces = "application/json")
	public String sendEmailNsmOnDisagree(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController sendEmailNsmOnDisagree start");
		JSONObject object = new JSONObject();
		try {
			List<DsaDetailsEntity> disagreelist = new ArrayList<DsaDetailsEntity>();
			List<InputDsaDto> listemail = dsaService.getNsmData();

			for (DsaDetailsEntity entity : listdsasm) {
				if (entity.getConstatus().equalsIgnoreCase("disagree")) {
					disagreelist.add(entity);
				}
			}
			if (disagreelist.size() != 0)
				sendingMail(listemail, disagreelist);

			object.put("reply", "success");

		} catch (Exception e) {
			LOGGER.error("Error while sendEmailNsmOnDisagree. Reason : " + e.getMessage(), e);
		}
		LOGGER.info("DSAController sendEmailNsmOnDisagree end");
		return object.toString();

	}

	private void sendingMail(List<InputDsaDto> listemail, List<DsaDetailsEntity> disagreelist) throws Exception {

		Runnable task = new Runnable() {

			@Override
			public void run() {
				for (InputDsaDto dto : listemail) {

					StringBuffer sb = new StringBuffer();
					TokenEncrytedDecrypted userForMobileApp = new TokenEncrytedDecrypted();
					String passWord = userForMobileApp.DecryptText(PASSWORD);
					Properties props = new Properties();
					props.put("mail.smtp.auth", "true");
					props.put("mail.smtp.host", HOSTNAME);
					props.put("mail.smtp.port", SMTPPORT);
					// String appgenerateddate = DateUtil.dateToString(new
					// Date(),
					// "dd-MMM-yyyy hh:mm aa");

					Session session = Session.getInstance(props, new javax.mail.Authenticator() {
						protected PasswordAuthentication getPasswordAuthentication() {
							return new PasswordAuthentication(USERNAME, passWord);
						}
					});
					try {
						MimeMessage message = new MimeMessage(session);
						message.setFrom(new InternetAddress(USERNAME));
						message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(dto.getEmailid()));
						sb.append("Dear NSM,").append("<br><br>")
								.append("Following are the files which has discrepancy for some files as below")
								.append("<br><br>");

						sb.append("<table border='1' cellpadding='5'").append(
								"<tr><th>State</th><th>Location</th><th>Company Name</th><th>Sales Manager</th><th>Net Pay Rate</th><th>Sanctioned Loan Amount</th><th>FinalPayoutAmount</th></tr>");
						for (DsaDetailsEntity list : disagreelist) {
							message.setSubject("[DSA-STATUS BASED ON DISAGREE]: ".concat("DSA-CODE:")
									.concat(list.getDsacode().concat(" DSA:").concat(list.getDsa())));
							sb.append("<tr><td>").append(list.getState()).append("</td><td>").append(list.getLocation())
									.append("</td><td>").append(list.getCompanyname()).append("</td><td>")
									.append(list.getSalesmanager()).append("</td><td>").append(list.getNetpayrate())
									.append("</td><td>").append(list.getSanctionedamount()).append("</td><td>")
									.append(list.getFinalpayoutamount()).append("</td></tr>");
						}
						sb.append("</table>");
						message.setContent(sb.toString(), "text/html; charset=utf-8");
						Transport.send(message);
					} catch (Exception e) {
						LOGGER.debug("Exception occured during sending email.Reason : ", e);
					}
				}
			}
		};
		new Thread(task).start();
	}

	@ResponseBody
	@RequestMapping(value = "/sendSms", method = RequestMethod.POST, consumes = "application/json")
	public String sendSms(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController sendSms start");
		String responseMessage = null;
		String url1 = null;
		JSONObject object = new JSONObject();
		try {
			List<InputDsaDto> list = dsaService.getNsmData();
			for (InputDsaDto dto : list) {
				for (DsaDetailsEntity listdsa : listdsasm) {
					if (listdsa.getConstatus().equalsIgnoreCase("disagree")) {
						url1 = "http://sms.digimiles.in/bulksms/bulksms?username=" + digiUser + "&password="
								+ digiPassword + "&type=0&dlr=1&destination=" + dto.getPhoneno()
								+ "&source=KAPTCH&message=hiiii%20";

						sendSMSHttpConnection(url1);

						System.out.println("a : " + dto.getPhoneno());

					}
				}
			}
			object.put("reply", "success");
			responseMessage = object.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting sendSms details. Reason : " + exception);
		}
		LOGGER.info("DSAController sendSms ends");
		return responseMessage;
	}

	public void sendSMSHttpConnection(String url) throws Exception {
		LOGGER.info("DSAController sendSMSHttpConnection start");
		BufferedReader in = null;
		URL obj = new URL(url);

		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

		con.setRequestMethod("GET");
		int responseCode = con.getResponseCode();
		in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		LOGGER.info("DSAController sendSMSHttpConnection ends");
	}

	@ResponseBody
	@RequestMapping(value = "/sendemailaccount", method = RequestMethod.POST, produces = "application/json")
	public String sendEmailAccount(HttpServletRequest request, HttpSession session) throws Exception {
		LOGGER.info("DSAController sendEmailAccount start");
		JSONObject object = new JSONObject();
		try {
			List<InputDsaDto> listemail = dsaService.getAccountData();
			LocalDate localDate = LocalDate.now();
			String date = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(localDate);
			long count = dsaService.checkInvoiceData(date);
			if (count != 0) {
				List<InputDsaDto> invoice = dsaService.getInvoiceData(date);
				sendingMailToAccount(listemail, invoice);
				object.put("reply", "success");
			} else {
				object.put("reply", "failure");
			}

		} catch (Exception e) {
			LOGGER.error("Error while sendemailcm. Reason : " + e.getMessage(), e);
		}
		LOGGER.info("DSAController sendEmailAccount end");
		return object.toString();

	}

	private void sendingMailToAccount(List<InputDsaDto> listemail, List<InputDsaDto> invoice) throws Exception {

		Runnable task = new Runnable() {

			@Override
			public void run() {
				for (InputDsaDto dto : listemail) {

					StringBuffer sb = new StringBuffer();
					TokenEncrytedDecrypted userForMobileApp = new TokenEncrytedDecrypted();
					String passWord = userForMobileApp.DecryptText(PASSWORD);
					Properties props = new Properties();
					props.put("mail.smtp.auth", "true");
					props.put("mail.smtp.host", HOSTNAME);
					props.put("mail.smtp.port", SMTPPORT);
					// String appgenerateddate = DateUtil.dateToString(new
					// Date(),
					// "dd-MMM-yyyy hh:mm aa");

					Session session = Session.getInstance(props, new javax.mail.Authenticator() {
						protected PasswordAuthentication getPasswordAuthentication() {
							return new PasswordAuthentication(USERNAME, passWord);
						}
					});
					try {
						MimeMessage message = new MimeMessage(session);
						message.setFrom(new InternetAddress(USERNAME));
						message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(dto.getEmailid()));
						message.setSubject("[DSA-STATUS]:");
						sb.append("<table border='1' cellpadding='5'").append(
								"<tr><th>Dsa Code</th><th>Month</th><th>Year</th><th>Invoice No.</th><th>FinalPayoutAmount</th></tr>");
						for (InputDsaDto dsa : invoice) {
							sb.append("<tr><td>").append(dsa.getDsacode()).append("</td><td>").append(dsa.getMonth())
									.append("</td><td>").append(dsa.getYear()).append("</td><td>")
									.append(dsa.getInvoiceno()).append("</td><td>").append(dsa.getFinalpayoutamount())
									.append("</td></tr>");
						}
						sb.append("</table>");
						message.setContent(sb.toString(), "text/html; charset=utf-8");
						Transport.send(message);
					} catch (Exception e) {
						LOGGER.debug("Exception occured during sending email.Reason : ", e);
					}
				}
			}
		};
		new Thread(task).start();
	}

	@ResponseBody
	@RequestMapping(value = "/getStateData", method = RequestMethod.GET, consumes = "application/json")
	public String getStateCode(HttpServletRequest request, HttpSession session) throws Exception {
		LOGGER.info("DSAController getStateCode start");
		String responseMessage = null;
		String statecode = request.getParameter("statecode");
		try {
			InputDsaDto stateList = dsaService.getStateCode(statecode);
			JSONObject jsonResponse = new JSONObject();
			jsonResponse.put("state", stateList.getState());
			jsonResponse.put("statecode", stateList.getStatecode());
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting getStateCode details. Reason : " + exception);
		}
		LOGGER.info("DSAController getStateCode ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/sendemailDsaOnMis", method = RequestMethod.POST, produces = "application/json")
	public String sendemailDsaOnMis(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController sendemailDsaOnMis start");
		String emailid = request.getParameter("emailid");
		String month = request.getParameter("month");
		String year = request.getParameter("year");
		JSONObject object = new JSONObject();
		try {
			List<DsaDetailsEntity> list = new ArrayList<DsaDetailsEntity>();

			for (DsaDetailsEntity entity : listdsasm) {
				if (entity.getInclude().equalsIgnoreCase("yes")) {
					list.add(entity);
				}
			}
			if (list.size() != 0) {
				sendingMailToDsa(emailid, list, month, year);
			}
			object.put("reply", "success");

		} catch (Exception e) {
			LOGGER.error("Error while sendemailDsaOnMis. Reason : " + e.getMessage(), e);
		}
		LOGGER.info("DSAController sendemailDsaOnMis end");
		return object.toString();

	}

	private void sendingMailToDsa(String emailid, List<DsaDetailsEntity> list, String month, String year)
			throws Exception {

		Runnable task = new Runnable() {

			@Override
			public void run() {

				StringBuffer sb = new StringBuffer();
				TokenEncrytedDecrypted userForMobileApp = new TokenEncrytedDecrypted();
				String passWord = userForMobileApp.DecryptText(PASSWORD);
				Properties props = new Properties();
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.host", HOSTNAME);
				props.put("mail.smtp.port", SMTPPORT);

				Session session = Session.getInstance(props, new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(USERNAME, passWord);
					}
				});
				try {
					MimeMessage message = new MimeMessage(session);
					message.setFrom(new InternetAddress(USERNAME));
					message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailid));
					message.setSubject("[MIS STATUS]:");
					sb.append("Dear DSA ,").append("<br><br>")
							.append("Following are the files that has been approved for the Month of ").append(month)
							.append(" & year ").append(year)
							.append(".Kindly check & confirm in DSA Payout so that payment can be done.")
							.append("<br><br>");
					sb.append("<table border='1' cellpadding='5'").append(
							"<tr><th>State</th><th>Location</th><th>Company Name</th><th>Year</th><th>Month</th><th>FinalPayoutAmount</th></tr>");
					for (DsaDetailsEntity list : list) {
						sb.append("<tr><td>").append(list.getState()).append("</td><td>").append(list.getLocation())
								.append("</td><td>").append(list.getCompanyname()).append("</td><td>")
								.append(list.getYear()).append("</td><td>").append(list.getMonth()).append("</td><td>")
								.append(list.getFinalpayoutamount()).append("</td></tr>");
					}
					sb.append("</table>");
					message.setContent(sb.toString(), "text/html; charset=utf-8");
					Transport.send(message);
				} catch (Exception e) {
					LOGGER.debug("Exception occured during sending email.Reason : ", e);
				}
			}
		};
		new Thread(task).start();
	}

	@ResponseBody
	@RequestMapping(value = "/deleteinvoice", method = RequestMethod.POST, consumes = "application/json")
	public String deleteInvoice(@RequestBody List<Invoice> invoice, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController deleteinvoice starts");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			dsaService.deleteInvoice(invoice);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting deleteinvoice details. Reason : " + exception);
		}
		LOGGER.info("DSAController deleteinvoice ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/sendemaildsaOnPayDone", method = RequestMethod.POST, produces = "application/json")
	public String sendemaildsaOnPayDone(@RequestBody Invoice dsanameEntity, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController sendemaildsaOnPayDone start");
		String emailid = request.getParameter("emailid");
		JSONObject object = new JSONObject();
		List<Invoice> invoice1 = new ArrayList<Invoice>();
		try {
			List<Invoice> invoice = dsaService.getinvoicelist(dsanameEntity);

			for (Invoice in : invoice) {
				String flag = dsaService.getPaymentFlagStatus(in);
				if (flag.equalsIgnoreCase("YES"))
					invoice1.add(in);
			}

			if (invoice1.size() != 0) {
				sendingMailToDsaOnPayDone(emailid, invoice1, dsanameEntity.getMonth(), dsanameEntity.getYear());
			}
			object.put("reply", "success");

		} catch (Exception e) {
			LOGGER.error("Error while sendemaildsaOnPayDone. Reason : " + e.getMessage(), e);
		}
		LOGGER.info("DSAController sendemaildsaOnPayDone end");
		return object.toString();

	}

	@ResponseBody
	@RequestMapping(value = "/sendemaildsaOnDisagree", method = RequestMethod.POST, produces = "application/json")
	public String sendemaildsaOnDisagree(@RequestBody List<DsaDetailsEntity> listdsasm, HttpServletRequest request,
			HttpSession session) throws Exception {
		LOGGER.info("DSAController sendemaildsaOnDisagree start");
		String emailid = request.getParameter("emailid");
		String month = request.getParameter("month");
		String year = request.getParameter("year");
		JSONObject object = new JSONObject();
		try {
			List<DsaDetailsEntity> list = new ArrayList<DsaDetailsEntity>();

			for (DsaDetailsEntity entity : listdsasm) {
				if (entity.getConstatus().equalsIgnoreCase("disagree")) {
					list.add(entity);
				}
			}
			if (list.size() != 0) {
				sendingMailToDsaOnDisagree(emailid, list, month, year);
			}
			object.put("reply", "success");

		} catch (Exception e) {
			LOGGER.error("Error while sendemaildsaOnDisagree. Reason : " + e.getMessage(), e);
		}
		LOGGER.info("DSAController sendemaildsaOnDisagree end");
		return object.toString();

	}

	private void sendingMailToDsaOnPayDone(String emailid, List<Invoice> invoice, String month, String year)
			throws Exception {

		Runnable task = new Runnable() {

			@Override
			public void run() {

				StringBuffer sb = new StringBuffer();
				TokenEncrytedDecrypted userForMobileApp = new TokenEncrytedDecrypted();
				String passWord = userForMobileApp.DecryptText(PASSWORD);
				Properties props = new Properties();
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.host", HOSTNAME);
				props.put("mail.smtp.port", SMTPPORT);

				Session session = Session.getInstance(props, new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(USERNAME, passWord);
					}
				});
				try {
					MimeMessage message = new MimeMessage(session);
					message.setFrom(new InternetAddress(USERNAME));
					message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailid));
					message.setSubject("[PAYMENT DONE STATUS]:");
					sb.append("Dear DSA,").append("<br><br>").append("Payment for the month of ").append(month)
							.append(" & year ").append(year).append(" has been done.").append("<br><br>");
					sb.append("<table border='1' cellpadding='5'").append(
							"<tr><th>State</th><th>Month</th><th>Year</th><th>Invoice No</th><th>Invoice Amount</th></tr>");
					for (Invoice in : invoice) {
						sb.append("<tr><td>").append(in.getState()).append("</td><td>").append(in.getMonth())
								.append("</td><td>").append(in.getYear()).append("</td><td>").append(in.getInvoiceno())
								.append("</td><td>").append(in.getInvoiceamount()).append("</td></tr>");
					}
					sb.append("</table>");
					message.setContent(sb.toString(), "text/html; charset=utf-8");
					Transport.send(message);
				} catch (Exception e) {
					LOGGER.debug("Exception occured during sending email.Reason : ", e);
				}
			}
		};
		new Thread(task).start();
	}

	private void sendingMailToDsaOnDisagree(String emailid, List<DsaDetailsEntity> list, String month, String year)
			throws Exception {

		Runnable task = new Runnable() {

			@Override
			public void run() {

				StringBuffer sb = new StringBuffer();
				TokenEncrytedDecrypted userForMobileApp = new TokenEncrytedDecrypted();
				String passWord = userForMobileApp.DecryptText(PASSWORD);
				Properties props = new Properties();
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.host", HOSTNAME);
				props.put("mail.smtp.port", SMTPPORT);

				Session session = Session.getInstance(props, new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(USERNAME, passWord);
					}
				});
				try {
					MimeMessage message = new MimeMessage(session);
					message.setFrom(new InternetAddress(USERNAME));
					message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailid));
					message.setSubject("[DSA-STATUS BASED ON DISAGREE]:");
					sb.append("Dear DSA ,").append("<br><br>").append("Following invoice for the month of ")
							.append(month).append(" & year ").append(year)
							.append(" has discrepancy due to following reasons.").append("<br><br>");

					sb.append("<table border='1' cellpadding='5'").append(
							"<tr><th>State</th><th>Location</th><th>Company Name</th><th>Year</th><th>Month</th><th>FinalPayoutAmount</th><th>Invoice No</th><th>Remark</th></tr>");
					for (DsaDetailsEntity list1 : list) {
						Invoice in = dsaService.getInvoicePath(list1);

						sb.append("<tr><td>").append(list1.getState()).append("</td><td>").append(list1.getLocation())
								.append("</td><td>").append(list1.getCompanyname()).append("</td><td>")
								.append(list1.getYear()).append("</td><td>").append(list1.getMonth())
								.append("</td><td>").append(list1.getFinalpayoutamount()).append("</td><td>")
								.append(in.getInvoiceno()).append("</td><td>").append(list1.getRemark())
								.append("</td></tr>");
					}
					sb.append("</table>");
					sb.append("<br><br>").append("Kindly recheck and generate new invoice accordingly.");
					message.setContent(sb.toString(), "text/html; charset=utf-8");
					Transport.send(message);
				} catch (Exception e) {
					LOGGER.debug("Exception occured during sending email.Reason : ", e);
				}
			}
		};
		new Thread(task).start();
	}

	@ResponseBody
	@RequestMapping(value = "/getadmindata", method = RequestMethod.POST, produces = "application/json")
	public String getadmindata(@RequestBody DsaDetailsEntity dsanameEntity) {

		String responseMessage = null;
		List<JSONObject> list1 = new ArrayList<JSONObject>();

		int count = 0;
		try {
			List<DsaDetailsEntity> listdsa = dsaService.getadminaccount(dsanameEntity);
			List<InputDsaDto> dsadto = dsaService.getStatedata();
			if (listdsa.size() != 0) {
				for (InputDsaDto dto : dsadto) {
					JSONObject jsonObject = new JSONObject();
					jsonObject.put("state", dto.getState());
					List<JSONObject> list = new ArrayList<JSONObject>();
					for (DsaDetailsEntity dsa : listdsa) {
						if (dto.getState().equalsIgnoreCase(dsa.getState())) {
							JSONObject jsonObject1 = new JSONObject();
							jsonObject1.put("row", ++count);
							list.add(jsonObject1);
						}

					}
					jsonObject.put("rowid", list);
					list1.add(jsonObject);
				}

			}
			responseMessage = list1.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while getting getadminaccount details in DSAController. Reason : " + exception);
		}
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/checkInvoiceNo", method = RequestMethod.POST, consumes = "application/json")
	public String checkInvoiceNo(@RequestBody List<Invoice> invoice, HttpServletRequest request, HttpSession session)
			throws Exception {

		LOGGER.info("DSAController checkInvoiceNo starts");
		String responseMessage = null;
		String response = null;
		List<JSONObject> list = new ArrayList<JSONObject>();

		Set<String> invoiceSet = new HashSet<>();

		try {

			JSONObject jsonResponse = new JSONObject();

			for (Invoice in : invoice) {
				boolean add = invoiceSet.add(in.getInvoiceno());
				if (!add) {
					JSONObject jsonResponse1 = new JSONObject();
					jsonResponse1.put("reply", "present");
					jsonResponse1.put("invoiceno", in.getInvoiceno());
					list.add(jsonResponse1);
				} else {
					response = dsaService.checkInvoiceNo(in);

					if (response.equalsIgnoreCase("present")) {

						JSONObject jsonResponse1 = new JSONObject();
						jsonResponse1.put("reply", response);
						jsonResponse1.put("invoiceno", in.getInvoiceno());
						list.add(jsonResponse1);

					} else {

						JSONObject jsonResponse1 = new JSONObject();
						jsonResponse1.put("reply", response);
						jsonResponse1.put("invoiceno", in.getInvoiceno());
						list.add(jsonResponse1);

					}
				}
			}
			responseMessage = list.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting checkInvoiceNo details. Reason : " + exception);
		}
		LOGGER.info("DSAController checkInvoiceNo ends");
		return responseMessage;
	}

	@ResponseBody
	@RequestMapping(value = "/getDsaApp", method = RequestMethod.POST, consumes = "application/json")
	public String getDsaApp(@RequestBody DsaDetailsEntity dsadto, HttpServletRequest request, HttpSession session)
			throws Exception {
		LOGGER.info("DSAController getDsaApp starts");
		String response = null;
		//List<DsaDetailsEntity> listdsa1 =new ArrayList<DsaDetailsEntity>();
		
		//api for get dsacode related admin
		
		List<String> s = new ArrayList<String>();
		
			List<DsaDetailsEntity> dsaList = dsaService.getdsaadmindetails(dsadto);
			for(DsaDetailsEntity dsadata:dsaList){
				
				String reply=dsaService.checkDsaOnDsacode(dsadata.getDsacode());
				if(reply.equalsIgnoreCase("present")){
					dsadto.setDsa(dsadata.getDsacode());
					
				
		
		List<DsaDetailsEntity> listdsa = dsaService.getdsaadmindetails(dsadto);

		if (listdsa.size() != 0) {
			for (DsaDetailsEntity listdsadata : listdsa) {

				listdsadata.setInclude("YES");
				listdsadata.setMisFlag("YES");
				if (listdsadata.getPaymentFlag() == null)
					listdsadata.setPaymentFlag("NO");
				listdsadata.setNetpayrate(listdsadata.getPayrate() - listdsadata.getSubvention());
				double finalpayoutamount = Math.round((listdsadata.getSanctionedamount() * listdsadata.getNetpayrate()) / 100);
				listdsadata.setFinalpayoutamount(finalpayoutamount);
				double roi = Double.parseDouble(listdsadata.getRoi());
				double interestAmount = (listdsadata.getSanctionedamount() * roi) / 100;
				listdsadata.setInterestamount(interestAmount);

			}
		}
		if (listdsa.size() != 0) {
			response = adddsalist(listdsa, request, session);
		}
	
			DsaDetailsEntity entity=new DsaDetailsEntity();
			entity.setProductcode(dsadto.getProductcode());
			entity.setMonth(dsadto.getMonth());
			entity.setDsacode(dsadata.getDsacode());
			entity.setYear(dsadto.getYear());
			entity.setDsa(dsadata.getDsacode());
			
			entity.setMonth(getmonthon(entity.getMonth()));
			if (entity.getProductcode() == 1)
				entity.setProductname("UBL");
			else
				entity.setProductname("SBL");
			
		List<DsaDetailsEntity> listdsadetail = dsaService.getdsabasedlist(entity);
		List<InputDsaDto> dsaDtos = dsaService.getStateFromDsadetails(entity);
		if (listdsadetail.size() != 0) {

			List<Invoice> invoices = new ArrayList<>();
			for (InputDsaDto dto : dsaDtos) {
				Invoice invoice = new Invoice();
				List<ListLosId> listLosIds = new ArrayList<ListLosId>();
				for (DsaDetailsEntity list : listdsadetail) {

					list.setConstatus("Agree");

					if (dto.getState().equalsIgnoreCase(list.getState())) {
						invoice.setYear(list.getYear());
						invoice.setMonth(list.getMonth());
						invoice.setDsacode(list.getDsacode());
						invoice.setProductname(list.getProductname());
						invoice.setState(list.getState());
						invoice.setInvoiceno("1234567890");
						DSAEntity dsaEntity = dsaService.getDsaOndsacode(list.getDsacode());
						System.out.println(list.getState());
						InputDsaDto input = dsaService.getStateCode(list.getState());
						System.out.println(input.getStatecode());
						System.out.println(dsaEntity.getCompanypan());
						invoice.setGstnumber(input.getStatecode().concat(dsaEntity.getCompanypan()).concat("1Z5"));
						ListLosId listLosId = new ListLosId();
						listLosId.setCompanyname(list.getCompanyname());
						listLosId.setLosid(Long.toString(list.getLosid()));
						listLosId.setFinalpayoutamount(list.getFinalpayoutamount());
						listLosId.setNetpayrate(list.getNetpayrate());
						listLosIds.add(listLosId);
						invoice.setListlos(listLosIds);
					}
				}
				if (invoice.getGstnumber() != null)
					invoices.add(invoice);

			}
			response = adddsalist(listdsadetail, request, session);

			String path = CreateInvoicePdfInfo(invoices);
		}
		
		
				}
				else{
				s.add(dsadata.getDsacode()+"========"+dsadata.getLosid()+"============"+dsadata.getCompanyname());
				}
			}
			
			System.out.println(s);
			System.out.println(s.size());
		LOGGER.info("DSAController getDsaApp ends");
		return response;
	}

	public String getmonthon(String number) {
		LOGGER.info("DSADaoImpl getmonthon start");
		String month = null;
		switch (number) {
		case "01":
			month = "January";
			break;
		case "02":
			month = "February";
			break;
		case "03":
			month = "March";
			break;
		case "04":
			month = "April";
			break;
		case "05":
			month = "May";
			break;
		case "06":
			month = "June";
			break;
		case "07":
			month = "July";
			break;
		case "08":
			month = "August";
			break;
		case "09":
			month = "September";
			break;
		case "10":
			month = "October";
			break;
		case "11":
			month = "November";
			break;
		case "12":
			month = "December";
			break;
		default:
			// month = "nomonth";
			month = number;
		}
		LOGGER.info("DSADaoImpl getmonthon ends");
		return month;

	}
	
	@ResponseBody
	@RequestMapping(value = "/getDsaCount", method = RequestMethod.POST, produces = "application/json")
	public long getDsaCount(@RequestBody DsaDetailsEntity dsadto,HttpServletRequest request) throws Exception {
		LOGGER.info("DSAController getDsaCount start");
		String response=null;
		long count=dsaService.getDsaCount(dsadto);
		
		LOGGER.info("DSAController getDsaCount end");
		return count;

	}
	
	
	@ResponseBody
	@RequestMapping(value = "/addPayout", method = RequestMethod.POST, consumes = "application/json")
	public String addPayout(@RequestBody PayoutDate payoutDate) {
		LOGGER.info("DSAController addPayout start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			payoutDate.setStartdate(getdate(payoutDate.getStartdate()));
			payoutDate.setEnddate(getdate(payoutDate.getEnddate()));
			
			long appid = dsaService.addPayout(payoutDate);
			jsonResponse.put("id", appid);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addPayout details. Reason : " + exception);
		}
		LOGGER.info("DSAController addPayout end");
		return responseMessage;

	}
	
	@ResponseBody
	@RequestMapping(value = "/addFestivalPayout", method = RequestMethod.POST, consumes = "application/json")
	public String addFestivalPayout(@RequestBody FestivalPayout festivalPayout) {
		LOGGER.info("DSAController addFestivalPayout start");
		String responseMessage = null;
		try {
			JSONObject jsonResponse = new JSONObject();
			long appid = dsaService.addFestivalPayout(festivalPayout);
			jsonResponse.put("id", appid);
			jsonResponse.put("reply", "success");
			responseMessage = jsonResponse.toString();
		} catch (Exception exception) {
			LOGGER.error("Error while posting addFestivalPayout details. Reason : " + exception);
		}
		LOGGER.info("DSAController addFestivalPayout end");
		return responseMessage;

	}
	
	@ResponseBody
	@RequestMapping(value = "/getPayoutdate", method = RequestMethod.POST, consumes = "application/json")
	public String getPayoutdate(HttpServletRequest request) {
		LOGGER.info("DSAController getPayoutdate start");
		String jsonInString=null;
		ObjectMapper mapper = new ObjectMapper();
		PayoutDate payoutDate=new PayoutDate();
		List<FestivalPayout> festivalPayout=new ArrayList<>();
		try {
			String year=request.getParameter("year");
			String month=request.getParameter("month");
			festivalPayout=dsaService.getPayoutFestivaldate(year,month);
			if(festivalPayout.size()!=0){
			 jsonInString = mapper.writeValueAsString(festivalPayout);
			}
			else{
				payoutDate= dsaService.getPayoutdate(year,month);
				payoutDate.setStartdate(getDate1(payoutDate.getStartdate()));
				payoutDate.setEnddate(getDate1(payoutDate.getEnddate()));
			 jsonInString = mapper.writeValueAsString(payoutDate);
			}
			
			 
			
		} catch (Exception exception) {
			LOGGER.error("Error while  getPayoutdate details. Reason : " + exception);
		}
		LOGGER.info("DSAController getPayoutdate end");
		return jsonInString;

	}

	
	@ResponseBody
	@RequestMapping(value = "/getPayout", method = RequestMethod.GET, consumes = "application/json")
	public String getPayout(HttpServletRequest request) {
		LOGGER.info("DSAController getPayout start");
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString=null;
		List<PayoutDate> payoutDate2=new ArrayList<>();
		String producttype=request.getParameter("producttype");
	try {
		if(producttype.equalsIgnoreCase("BL")){
			payoutDate2= dsaService.getPayout();
			if(payoutDate2.size()!=0){
			for(PayoutDate paydate:payoutDate2){
				paydate.setStartdate(getDate1(paydate.getStartdate()));
				paydate.setEnddate(getDate1(paydate.getEnddate()));
				paydate.setMonth(getmonthon(paydate.getMonth()));
			}
			jsonInString = mapper.writeValueAsString(payoutDate2);
			}
			
		}
		} catch (Exception exception) {
			LOGGER.error("Error while  getPayout details. Reason : " + exception);
		}
		LOGGER.info("DSAController getPayout end");
		return jsonInString;

	}
	
	@ResponseBody
	@RequestMapping(value = "/getFestivalPayout", method = RequestMethod.POST, consumes = "application/json")
	public String getFestivalPayout(@RequestBody FestivalPayout festivalPayout,HttpServletRequest request) {
		LOGGER.info("DSAController getFestivalPayout start");
		String jsonInString=null;
		FestivalPayout festivalPayout1 =new FestivalPayout();
		List<FestivalMonthlyPayout> blMonthlyPayout=new ArrayList<>();
		ObjectMapper mapper = new ObjectMapper();
		try {
			festivalPayout1= dsaService.getFestivalPayout(festivalPayout);
			if(festivalPayout1!=null){
			 jsonInString = mapper.writeValueAsString(festivalPayout1);
		}
			else
			{
				blMonthlyPayout=dsaService.getFestivalBlmonthlypayout();
				jsonInString = mapper.writeValueAsString(blMonthlyPayout);
			}
		} catch (Exception exception) {
			LOGGER.error("Error while  getPayout details. Reason : " + exception);
		}
		LOGGER.info("DSAController getPayout end");
		return jsonInString;

	}
	
	
	
	public String getdate(String date){
		String date1=date.substring(6,10).concat(date.substring(3, 5).concat(date.substring(0, 2)));
		return date1;
	}
	
	public String getDate1(String date){
		String date1=date.substring(6, 8).concat("/").concat(date.substring(4,6).concat("/").concat(date.substring(0,4)));
		return date1;
	}
	
	
	@RequestMapping(value = "dsapayout", method = RequestMethod.GET)
	public ModelAndView dsapayout() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("LOSjsp/dsapayout");
		return mav;
	}

	@RequestMapping(value = "costMaintain", method = RequestMethod.GET)
	public ModelAndView costMaintain() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("LOSjsp/costMaintain");
		return mav;
	}

	// INCENTIVES
	@RequestMapping(value = "incentives", method = RequestMethod.GET)
	public ModelAndView incentives() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/incentives");
		return mav;
	}

	// ACCOUNTS INVOICE
	@RequestMapping(value = "accinvoice", method = RequestMethod.GET)
	public ModelAndView accinvoice() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/accinvoice");
		return mav;
	}

	// DSA
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ModelAndView dsa() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/dsa");
		return mav;
	}

	// hierarchy
	@RequestMapping(value = "hierarchy", method = RequestMethod.GET)
	public ModelAndView hierarchy() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/hierarchy");
		return mav;
	}

	// ACCOUNTS
	@RequestMapping(value = "accounts", method = RequestMethod.GET)
	public ModelAndView accounts() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/accounts");
		return mav;
	}

	// HISTORIC
	@RequestMapping(value = "historic", method = RequestMethod.GET)
	public ModelAndView historic() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("DSA/historic");
		return mav;
	}

	// F MONTHS
		@RequestMapping(value = "offerMonths", method = RequestMethod.GET)
		public ModelAndView offerMonths() {
			ModelAndView mav = new ModelAndView();
			mav.setViewName("DSA/offerMonths");
			return mav;
		}
	//new festival 
		@RequestMapping(value = "festivalOffer", method = RequestMethod.GET)
		public ModelAndView festivalOffer() {
			ModelAndView mav = new ModelAndView();
			mav.setViewName("DSA/festivalOffer");
			return mav;
		}
	
}