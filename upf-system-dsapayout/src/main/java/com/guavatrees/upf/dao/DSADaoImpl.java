package com.guavatrees.upf.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.guavatrees.upf.dao.entity.BLInsentive;
import com.guavatrees.upf.dao.entity.BLMonthlyPayout;
import com.guavatrees.upf.dao.entity.BLMonthlySlab;
import com.guavatrees.upf.dao.entity.ClientInfo;
import com.guavatrees.upf.dao.entity.ClientInfoWeb;
import com.guavatrees.upf.dao.entity.DSAEntity;
import com.guavatrees.upf.dao.entity.DsaDetailsEntity;
import com.guavatrees.upf.dao.entity.EmployeeEntity;
import com.guavatrees.upf.dao.entity.FestivalBLMonthlySlab;
import com.guavatrees.upf.dao.entity.FestivalMonthlyPayout;
import com.guavatrees.upf.dao.entity.FestivalPayout;
import com.guavatrees.upf.dao.entity.Invoice;
import com.guavatrees.upf.dao.entity.ListLosId;
import com.guavatrees.upf.dao.entity.PayoutDate;
import com.guavatrees.upf.dao.entity.SMInsentive;
import com.guavatrees.upf.dao.entity.SblInsentive;
import com.guavatrees.upf.dto.InputDsaDto;
import com.guavatrees.upf.dto.Losdata;
import com.guavatrees.upf.statementparser.dao.ConnectionFactory;
import com.guavatrees.upf.util.ReadConfigurationFile;

/**
 * class is used for dsapayout dao layer
 * 
 * @author Vivek Patil
 * @since 4-1-2017
 *
 */
@Repository
public class DSADaoImpl implements DSADao {

	@Autowired
	SessionFactory sessionFactory;

	private Logger LOGGER = LoggerFactory.getLogger(DSADaoImpl.class);

	private static final Properties props = ReadConfigurationFile.getProperties("mssqldetails.properties");
	private final static String MSSQL_DB_DRIVER = props.getProperty("MSSQL_DB_DRIVER");
	private final static String MSSQL_URL = props.getProperty("MSSQL_URL");
	private final static String MSSQL_DB_USERNAME = props.getProperty("MSSQL_DB_USERNAME");
	private final static String MSSQL_DB_PASSWORD = props.getProperty("MSSQL_DB_PASSWORD");

	@Value("${blincentiveid}")
	private long blincentiveid;

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
	@Transactional
	public DSAEntity addDsaInfo(DSAEntity dsaEntity) throws Exception {
		LOGGER.info("DSADaoImpl addDsaInfo start");
		DSAEntity app = new DSAEntity();
		try {
			app = (DSAEntity) sessionFactory.getCurrentSession().merge(dsaEntity);
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding dsaInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addDsaInfo end");
		return app;

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
	@Transactional
	public long addEmpInfo(EmployeeEntity smentity) throws Exception {
		LOGGER.info("DSADaoImpl addSmInfo start");
		long id = 0;
		try {
			EmployeeEntity app = (EmployeeEntity) sessionFactory.getCurrentSession().merge(smentity);
			id = app.getEmpid();
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding dsaInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addSmInfo end");
		return id;

	}

	/**
	 * This api is used for getting data from sminfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	@Transactional
	public EmployeeEntity getEmpInfo(long id) throws Exception {
		LOGGER.info("DSADaoImpl getSMInfo start");
		try {
			String queryString = "select smEntity from EmployeeEntity smEntity where smEntity.empid =:id";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("id", id);
			return (EmployeeEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getSMInfo details.Reason : " + exception);
		}
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
	@Transactional
	public DSAEntity getDsaInfo(long id) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select dsaEntity from DSAEntity dsaEntity where dsaEntity.dsaid =:id";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("id", id);
			return (DSAEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaInfo details.Reason : " + exception);
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
	@Override
	@Transactional
	public List<String> getCitylist(String state) throws Exception {
		LOGGER.info("DSADaoImpl getCitylist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT DISTINCT city_name FROM cities WHERE city_state" + "=\"" + state
				+ "\" order by city_name";
		resultSet = statement.executeQuery(sqlQuery);
		List<String> citylist = new ArrayList<String>();
		String city = null;
		while (resultSet.next()) {
			city = resultSet.getString("city_name");
			citylist.add(city);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getCitylist end");
		return citylist;
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
	@Transactional
	public List<String> getStatelist() throws Exception {
		LOGGER.info("DSADaoImpl getCitylist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT DISTINCT city_state FROM cities order by city_state";
		resultSet = statement.executeQuery(sqlQuery);
		List<String> statelist = new ArrayList<String>();
		String state = null;
		while (resultSet.next()) {
			state = resultSet.getString("city_state");
			statelist.add(state);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getCitylist end");
		return statelist;
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
	@Transactional
	public List<DSAEntity> getdsaautolist(String searchstring) throws Exception {
		LOGGER.info("DSADaoImpl getdsaautolist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		List<DSAEntity> list = new ArrayList<DSAEntity>();

		ResultSet resultSet = statement.executeQuery(
				"SELECT ID AS id,companypan AS pan,companyname AS comp,updated_date AS DATE FROM dsaclientinfo WHERE `dsacode` LIKE '%"
						+ searchstring + "%' OR `companyname` LIKE '%" + searchstring + "%';");
		while (resultSet.next()) {
			DSAEntity dsa = new DSAEntity();
			dsa.setDsaid(resultSet.getLong("id"));
			dsa.setCompanyname(resultSet.getString("comp"));
			dsa.setCompanypan(resultSet.getString("pan"));
			dsa.setUpdated_date(resultSet.getTimestamp("date"));
			list.add(dsa);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsaautolist ends");
		return list;
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
	@Transactional
	public List<DSAEntity> getdsalist() throws Exception {
		LOGGER.info("DSADaoImpl getdsalist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		List<DSAEntity> list = new ArrayList<DSAEntity>();

		ResultSet resultSet = statement.executeQuery(
				"SELECT ID AS id,dsacode AS dsacode,companyname AS comp,companypan AS pan,city AS city,state AS state,updated_date AS DATE,emailid FROM dsaclientinfo");
		while (resultSet.next()) {
			DSAEntity dsa = new DSAEntity();
			dsa.setDsaid(resultSet.getLong("id"));
			dsa.setCompanyname(resultSet.getString("comp"));
			dsa.setDsacode(resultSet.getString("dsacode"));
			dsa.setUpdated_date(resultSet.getTimestamp("date"));
			dsa.setCompanypan(resultSet.getString("pan"));
			dsa.setState(resultSet.getString("state"));
			dsa.setCity(resultSet.getString("city"));
			dsa.setEmailid(resultSet.getString("emailid"));
			list.add(dsa);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsalist ends");
		return list;
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
	@Transactional
	public List<EmployeeEntity> smListonCity(String state, String role, String product) throws Exception {
		LOGGER.info("DSADaoImpl smListonCity start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		List<EmployeeEntity> list = new ArrayList<EmployeeEntity>();
		ResultSet resultSet = null;

		String query = "select employee.ID AS id,employee.NAME AS NAME,employee.employeeid AS employeeid,employee.updated_date AS DATE from ((employee INNER JOIN user ON user.`id`=employee.`userid`)INNER JOIN role on user.`role_id`=role.`id`) where role.`role` IN ('SM','SSM') and employee.state=\""
				+ state + "\" and employee.productype=\"" + product + "\"";
		String query1 = "select employee.ID AS id,employee.NAME AS NAME,employee.employeeid AS employeeid,employee.updated_date AS DATE from ((employee INNER JOIN user ON user.`id`=employee.`userid`)INNER JOIN role on user.`role_id`=role.`id`) where role.`role`= \""
				+ role + "\" and employee.productype=\"" + product + "\"";
		if (state.equalsIgnoreCase("none"))
			resultSet = statement.executeQuery(query1);
		else {
			resultSet = statement.executeQuery(query);
		}
		while (resultSet.next()) {
			EmployeeEntity sm = new EmployeeEntity();
			sm.setEmpid(resultSet.getLong("id"));
			sm.setName(resultSet.getString("name"));
			sm.setEmployeeid(resultSet.getString("employeeid"));
			sm.setUpdated_date(resultSet.getTimestamp("date"));
			list.add(sm);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl smListonCity ends");
		return list;
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
	@Transactional
	public List<EmployeeEntity> getsmlist(String role, String product) throws Exception {
		LOGGER.info("DSADaoImpl getsmlist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		List<EmployeeEntity> list = new ArrayList<EmployeeEntity>();
		ResultSet resultSet = null;
		String query1 = "select employee.ID AS id,employee.NAME AS NAME,employee.employeeid AS employeeid,employee.updated_date AS DATE from ((employee INNER JOIN user ON user.`id`=employee.`userid`)INNER JOIN role on user.`role_id`=role.`id`) where role.`role`= \""
				+ role + "\"";
		String query = "select employee.ID AS id,employee.NAME AS NAME,employee.employeeid AS employeeid,employee.updated_date AS DATE from ((employee INNER JOIN user ON user.`id`=employee.`userid`)INNER JOIN role on user.`role_id`=role.`id`) where role.`role`= \""
				+ role + "\" and employee.productype=\"" + product + "\"";

		if (product.equalsIgnoreCase("none"))
			resultSet = statement.executeQuery(query1);
		else {
			resultSet = statement.executeQuery(query);
		}

		while (resultSet.next()) {
			EmployeeEntity sm = new EmployeeEntity();
			sm.setEmpid(resultSet.getLong("id"));
			sm.setName(resultSet.getString("name"));
			sm.setEmployeeid(resultSet.getString("employeeid"));
			sm.setUpdated_date(resultSet.getTimestamp("date"));
			list.add(sm);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getsmlist ends");
		return list;
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
		LOGGER.info("DSADaoImpl addsmdsa start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		for (InputDsaDto input : listdsasm) {
			psmt = connection
					.prepareStatement("SELECT COUNT(*) as count FROM dsa_sm_mapping WHERE dsa_id=? AND sm_id=?;");
			psmt.setLong(1, input.getDsa_id());
			psmt.setLong(2, input.getSm_id());
			ResultSet rs = psmt.executeQuery();
			long count = 0;
			while (rs.next()) {
				count = rs.getLong("count");
			}
			if (count == 0) {
				psmt = connection.prepareStatement("INSERT INTO dsa_sm_mapping (dsa_id,sm_id)VALUES(?,?);");
				psmt.setLong(1, input.getDsa_id());
				psmt.setLong(2, input.getSm_id());
				int x = psmt.executeUpdate();
			}

		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl addsmdsa ends");
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
		LOGGER.info("DSADaoImpl deletesmdsa start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		String status = null;

		psmt = connection.prepareStatement("DELETE FROM dsa_sm_mapping WHERE dsa_id=? AND sm_id=?;");
		psmt.setLong(1, inputdsadto.getDsa_id());
		psmt.setLong(2, inputdsadto.getSm_id());
		int x = psmt.executeUpdate();
		if (x == 0) {
			status = "fail";
		} else {
			status = "success";
		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl deletesmdsa start");
		return status;
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
	@Transactional
	public List<InputDsaDto> getdsadetails(long userid) throws Exception {
		LOGGER.info("DSADaoImpl getdsadetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT dsaclientinfo.`companyname`,dsaclientinfo.`ID`AS dsaid,employee.`ID` AS smid FROM ((employee INNER JOIN dsa_sm_mapping ON employee.`ID`=dsa_sm_mapping.`sm_id`)INNER JOIN dsaclientinfo ON dsa_sm_mapping.`dsa_id`=dsaclientinfo.`ID`)WHERE employee.`userid`=\""
				+ userid + "\"";
		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> dsalist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setCompanyname(resultSet.getString("companyname"));
			inputdsa.setSm_id(resultSet.getLong("smid"));
			inputdsa.setDsa_id(resultSet.getLong("dsaid"));
			dsalist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsadetails ends");
		return dsalist;
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
	@Transactional
	public List<InputDsaDto> getdsasmmappingdetails(long dsaid) throws Exception {
		LOGGER.info("DSADaoImpl getdsasmmappingdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		String sqlQuery = "SELECT employee.`ID`,employee.`state`,employee.`productype`,employee.`employeeid`,employee.`name`,dsa_sm_mapping.id as mapid FROM ((employee INNER JOIN dsa_sm_mapping ON employee.`ID`=dsa_sm_mapping.`sm_id`)INNER JOIN dsaclientinfo ON dsa_sm_mapping.`dsa_id`=dsaclientinfo.`ID`)WHERE dsa_sm_mapping.dsa_id=\""
				+ dsaid + "\"";
		resultSet = statement.executeQuery(sqlQuery);
		while (resultSet.next()) {
			InputDsaDto sm = new InputDsaDto();
			sm.setSm_id(resultSet.getLong("ID"));
			sm.setState(resultSet.getString("state"));
			sm.setProduct(resultSet.getString("productype"));
			sm.setEmployeeid(resultSet.getString("employeeid"));
			sm.setName(resultSet.getString("name"));
			sm.setDsasmid(resultSet.getLong("mapid"));
			list.add(sm);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsasmmappingdetails ends");
		return list;

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
	@Transactional
	public String getemailstatus(String email) throws Exception {
		LOGGER.info("DSADaoImpl getemailstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT COUNT(*) FROM user WHERE emailId=?;");
		psmt.setString(1, email);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getemailstatus ends");
		return status;
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
	@Transactional
	public void addDsaAdminInfo(DsaDetailsEntity dsadetailsEntity) throws Exception {
		LOGGER.info("DSADaoImpl addDsaAdminInfo start");
		try {
			dsadetailsEntity.setMonth(getmonthon(dsadetailsEntity.getMonth()));
			DsaDetailsEntity app = (DsaDetailsEntity) sessionFactory.getCurrentSession().merge(dsadetailsEntity);

		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addDsaAdminInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addDsaAdminInfo end");

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
	 @Transactional
	 public InputDsaDto getdsaadmindetails(DsaDetailsEntity dsanameEntity) throws Exception {
	  LOGGER.info("DSADaoImpl getdsaadmindetails start");
	  // Create a variable for the connection string.
	  StringBuilder connectionUrl = new StringBuilder();
	  connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
	    .append("password=").append(MSSQL_DB_PASSWORD);
	  InputDsaDto input = new InputDsaDto();
	  List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
	  // Declare the JDBC objects.
	  Connection con = null;
	  Statement stmt = null;
	  ResultSet rs = null;
	  String SQL1 = null;
	  List<Double> amountlist = new ArrayList<Double>();
	  try {

	   Class.forName(MSSQL_DB_DRIVER);
	   con = DriverManager.getConnection(connectionUrl.toString());
	   double sumamount = 0.0;
	   long count = 0;

	   if (null != dsanameEntity.getDsa()) {
	    SQL1 = "SELECT DISTINCT [LOCATION] = c.ResCity,[Disbursal Dastatete] = CBSDIS.DisbDate ,[Applied Loan Amount]=L.Applied_Loan_Amt,[DisbYear] = Year(CBSDIS.DisbDate),[DisbMonth]= month(CBSDIS.DisbDate),[COMAPNY/ ESTABLISHMENT NAME] = C.name,[SALES MANAGER NAME] = L.VOFFICER,[DSA Code] = L.CRMSUPERVISOR ,[DSA Name] = DSA.Name,[Product Catesgory] = LS.ShortName,[STATUS] = SM.DESCRIPTION,[Sanctioned Loan Amount] = CBSDIS.DISBAMOUNT,[LOAN ID] = L.LOANNO,[GATE KEEPER ID] = L.FCSNO,[PAY RATE] = '',[RATE OF INTEREST (ROI)] = L.INTEREST,[PROCESSING FEES] = CAML.PROCESSINGCHARGES,[FREQUENCY] = CASE WHEN l.instalmentfrequency = 1 THEN 'Daily' WHEN l.instalmentfrequency = 7 THEN 'Weekly' WHEN l.instalmentfrequency IN ( 14, 15 ) THEN 'fortnightly' WHEN l.instalmentfrequency IN ( 30 ) THEN 'Monthly' END, [State]= St.NAME FROM cams..loandetails L (NOLOCK) INNER JOIN cams..loansubtype LS ON LS.subtypecode = L.loansubtype INNER JOIN cams..STATUSMASTER SM (NOLOCK) ON L.STATUS = SM.STATUSCODE AND UPPER(SM.LANGID) = 'EN-GB' LEFT JOIN CBS..CUSTOMER C (NOLOCK) ON L.CUSTOMERCODE = C.CODE LEFT JOIN CBS..INDUSTRY IND (NOLOCK) ON L.INDUSTRY = IND.CODE LEFT JOIN  CBS..users  DSA (NOLOCK) ON L.CRMSUPERVISOR = DSA.alphacode LEFT JOIN CBS..loandetails CAML (NOLOCK) ON CAML.ACNO = L.CBSACNO LEFT JOIN CBS..DISBURSEMENTSCHEDULE CBSDIS (NOLOCK) ON CBSDIS.ACNO = L.CBSACNO LEFT JOIN CBS..branchmaster Br ON Br.code = l.branchcode LEFT JOIN CBS..cities Ct ON CT.NAME = CASE  WHEN Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) = '' THEN Br.NAME ELSE Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) END  LEFT JOIN CBS..states St ON St.code = Ct.state  WHERE C.CustomerType =13 and CBSDIS.DisbDate is not null and L.CRMSUPERVISOR =? and Year(CBSDIS.DisbDate)=? and month(CBSDIS.DisbDate)=? and L.LoanSubType =? ORDER BY St.NAME";
	    PreparedStatement statement = con.prepareStatement(SQL1);
	    statement.setString(1, dsanameEntity.getDsa());
	    statement.setString(2, dsanameEntity.getYear());
	    statement.setString(3, dsanameEntity.getMonth());
	    statement.setLong(4, dsanameEntity.getProductcode());
	    rs = statement.executeQuery();
	   } else if (dsanameEntity.getDsa() == null && dsanameEntity.getStartdate()!=null && dsanameEntity.getEnddate()!=null){
		   
			    SQL1 = "SELECT DISTINCT [LOCATION] = c.ResCity,[Disbursal Date] = CBSDIS.DisbDate ,[Applied Loan Amount]=L.Applied_Loan_Amt,[DisbYear] = Year(CBSDIS.DisbDate),[DisbMonth]= month(CBSDIS.DisbDate),[COMAPNY/ ESTABLISHMENT NAME] = C.name,[SALES MANAGER NAME] = L.VOFFICER,[DSA Code] = L.CRMSUPERVISOR ,[DSA Name] = DSA.Name,[Product Catesgory] = LS.ShortName,[STATUS] = SM.DESCRIPTION,[Sanctioned Loan Amount] = CBSDIS.DISBAMOUNT,[LOAN ID] = L.LOANNO,[GATE KEEPER ID] = L.FCSNO,[PAY RATE] = '',[RATE OF INTEREST (ROI)] = L.INTEREST,[PROCESSING FEES] = CAML.PROCESSINGCHARGES,[FREQUENCY] = CASE WHEN l.instalmentfrequency = 1 THEN 'Daily' WHEN l.instalmentfrequency = 7 THEN 'Weekly' WHEN l.instalmentfrequency IN ( 14, 15 ) THEN 'fortnightly' WHEN l.instalmentfrequency IN ( 30 ) THEN 'Monthly' END, [State] = St.NAME  FROM cams..loandetails L (NOLOCK) INNER JOIN cams..loansubtype LS ON LS.subtypecode = L.loansubtype INNER JOIN cams..STATUSMASTER SM (NOLOCK) ON L.STATUS = SM.STATUSCODE AND UPPER(SM.LANGID) = 'EN-GB' LEFT JOIN CBS..CUSTOMER C (NOLOCK) ON L.CUSTOMERCODE = C.CODE LEFT JOIN CBS..INDUSTRY IND (NOLOCK) ON L.INDUSTRY = IND.CODE LEFT JOIN  CBS..users  DSA (NOLOCK) ON L.CRMSUPERVISOR = DSA.alphacode LEFT JOIN CBS..loandetails CAML (NOLOCK) ON CAML.ACNO = L.CBSACNO LEFT JOIN CBS..DISBURSEMENTSCHEDULE CBSDIS (NOLOCK) ON CBSDIS.ACNO = L.CBSACNO LEFT JOIN CBS..branchmaster Br ON Br.code = l.branchcode LEFT JOIN CBS..cities Ct ON CT.NAME = CASE WHEN Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) = '' THEN Br.NAME ELSE Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) END LEFT JOIN CBS..states St ON St.code = Ct.state  WHERE C.CustomerType =13 and CBSDIS.DisbDate is not null and convert(char,ActualDate, 112) BETWEEN '"+dsanameEntity.getStartdate()+"' AND '"+dsanameEntity.getEnddate()+"' and L.LoanSubType =? "
	    		+ "ORDER BY St.NAME"; 
	    		
	    PreparedStatement statement = con.prepareStatement(SQL1);
	    statement.setLong(1, dsanameEntity.getProductcode());
	    rs = statement.executeQuery();
	   }
	   stmt = con.createStatement();
	   while (rs.next()) {
	    DsaDetailsEntity dsadetails = new DsaDetailsEntity();
	    dsadetails.setYear(rs.getString("DisbYear"));
	    dsadetails.setLocation(rs.getString("LOCATION"));
	    dsadetails.setSalesmanager(rs.getString("SALES MANAGER NAME"));
	    dsadetails.setDsa(rs.getString("DSA Name"));
	    dsadetails.setLosid(rs.getLong("LOAN ID"));
	    dsadetails.setRoi(rs.getString("RATE OF INTEREST (ROI)"));
	    if (null != rs.getString("DisbMonth")) {
	     dsadetails.setMonth(getmonthon(rs.getString("DisbMonth")));
	    }
	    dsadetails.setCompanyname(rs.getString("COMAPNY/ ESTABLISHMENT NAME"));
	    dsadetails.setStatus(rs.getString("STATUS"));
	    dsadetails.setSanctionedamount(rs.getDouble("Sanctioned Loan Amount"));
	    dsadetails.setPfamount(rs.getDouble("PROCESSING FEES"));
	    dsadetails.setProductname(rs.getString("Product Catesgory"));
	    dsadetails.setGatekeeperid(rs.getString("GATE KEEPER ID"));
	    dsadetails.setDsacode(rs.getString("DSA Code"));
	    dsadetails.setFrequency(rs.getString("FREQUENCY"));
	    dsadetails.setState(rs.getString("State"));
	    dsadetails.setApplied_loan_amount(rs.getDouble("Applied Loan Amount"));
	    if (0 != rs.getDouble("Sanctioned Loan Amount") && 0 != rs.getDouble("PROCESSING FEES")) {
	     dsadetails
	       .setPf((100 / (rs.getDouble("Sanctioned Loan Amount") / rs.getDouble("PROCESSING FEES"))));
	    } else {
	     dsadetails.setPf(0.0);
	    }
	    amountlist.add(rs.getDouble("Sanctioned Loan Amount"));

	    listdsadetails.add(dsadetails);
	    input.setProduct(rs.getString("Product Catesgory"));

	   }
	   sumamount = amountlist.stream().mapToDouble(Double::doubleValue).sum();
	   count = amountlist.stream().count();
	   input.setDsalist(listdsadetails);
	   input.setCountdisbursalfile(count);
	   input.setTotalsanctionamount(sumamount);
	   input.setProduct(rs.getString("Product Catesgory"));

	  }

	  catch (Exception exception) {
	   LOGGER.debug("Exception occured while getdsaadmindetails from database.Reason : " + exception);
	  }
	  if (rs != null)
	   rs.close();
	  if (stmt != null)
	   stmt.close();
	  if (con != null)
	   con.close();
	  LOGGER.info("DSADaoImpl getdsaadmindetails ends");
	  return input;

	 }


	/**
	 * This api is used for getting months basedon number
	 * 
	 * @param number
	 * @param request
	 * @param session
	 * @return Stringmonth
	 * @throws Exception
	 */
	public String getmonthon(String number) {
		LOGGER.info("DSADaoImpl getmonthon start");
		String month = null;
		switch (number) {
		case "1":
			month = "January";
			break;
		case "2":
			month = "February";
			break;
		case "3":
			month = "March";
			break;
		case "4":
			month = "April";
			break;
		case "5":
			month = "May";
			break;
		case "6":
			month = "June";
			break;
		case "7":
			month = "July";
			break;
		case "8":
			month = "August";
			break;
		case "9":
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
			month = "nomonth";
			//month = number;
		}
		LOGGER.info("DSADaoImpl getmonthon ends");
		return month;

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
	@Transactional
	public List<DsaDetailsEntity> getdsalistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getdsalistdetails starts");
		StringBuilder connectionUrl = new StringBuilder();
		connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
				.append("password=").append(MSSQL_DB_PASSWORD);
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		// Declare the JDBC objects.
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {

			Class.forName(MSSQL_DB_DRIVER);
			con = DriverManager.getConnection(connectionUrl.toString());

			String SQL1 = "SELECT DISTINCT [LOCATION] = c.ResCity,[Customer] = C.name,[Disbursal date] = CBSDIS.DisbDate,[File no] = LoanNo ,[Loan amt applied]= L.Applied_Loan_Amt,[CAM date] = L.Entry_Dt,[Applied Loan Amount]=L.Applied_Loan_Amt,[Approved amount]= CBSDIS.DISBAMOUNT,[DisbYear] = Year(CBSDIS.DisbDate),[hold/PD pending/Reject] =Case when SM.DESCRIPTION ='Verified' then 'Hold/PD pending' when SM.DESCRIPTION ='Rejected' Then 'Rejected' End,[DisbMonth]= month(CBSDIS.DisbDate),[PD date] = 'Not Available',[COMAPNY/ ESTABLISHMENT NAME] = C.name,[SALES MANAGER NAME] = L.VOFFICER,[DSA Code] = L.CRMSUPERVISOR ,[DSA Name] = DSA.Name,[Product Catesgory] = LS.ShortName,[STATUS] = SM.DESCRIPTION,[Sanctioned Loan Amount] = CBSDIS.DISBAMOUNT,[LOAN ID] = L.LOANNO,[GATE KEEPER ID] = L.FCSNO,[PAY RATE] = '',[RATE OF INTEREST (ROI)] = L.INTEREST,[PROCESSING FEES] = CAML.PROCESSINGCHARGES,[FREQUENCY] = CASE WHEN l.instalmentfrequency = 1 THEN 'Daily' WHEN l.instalmentfrequency = 7 THEN 'Weekly' WHEN l.instalmentfrequency IN ( 14, 15 ) THEN 'fortnightly' WHEN l.instalmentfrequency IN ( 30 ) THEN 'Monthly' END, [State]= St.NAME FROM cams..loandetails L (NOLOCK) INNER JOIN cams..loansubtype LS ON LS.subtypecode = L.loansubtype INNER JOIN cams..STATUSMASTER SM (NOLOCK) ON L.STATUS = SM.STATUSCODE AND UPPER(SM.LANGID) = 'EN-GB' LEFT JOIN CBS..CUSTOMER C (NOLOCK) ON L.CUSTOMERCODE = C.CODE LEFT JOIN CBS..INDUSTRY IND (NOLOCK) ON L.INDUSTRY = IND.CODE LEFT JOIN  CBS..users  DSA (NOLOCK) ON L.CRMSUPERVISOR = DSA.alphacode LEFT JOIN CBS..loandetails CAML (NOLOCK) ON CAML.ACNO = L.CBSACNO LEFT JOIN CBS..DISBURSEMENTSCHEDULE CBSDIS (NOLOCK) ON CBSDIS.ACNO = L.CBSACNO LEFT JOIN CBS..branchmaster Br ON Br.code = l.branchcode LEFT JOIN CBS..cities Ct ON CT.NAME = CASE  WHEN Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) = '' THEN Br.NAME ELSE Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) END  LEFT JOIN CBS..states St ON St.code = Ct.state  WHERE C.CustomerType =13 and CBSDIS.DisbDate is not null and L.CRMSUPERVISOR =?  and L.LoanSubType =? ORDER BY C.name";
			PreparedStatement statement = con.prepareStatement(SQL1);
			statement.setString(1, dsanameEntity.getDsa());
			statement.setLong(2, dsanameEntity.getProductcode());
			rs = statement.executeQuery();
			stmt = con.createStatement();
			while (rs.next()) {
				DsaDetailsEntity dsadetails = new DsaDetailsEntity();
				dsadetails.setYear(rs.getString("DisbYear"));
				dsadetails.setLocation(rs.getString("LOCATION"));
				dsadetails.setSalesmanager(rs.getString("SALES MANAGER NAME"));
				dsadetails.setDsa(rs.getString("DSA Name"));
				dsadetails.setLosid(rs.getLong("File no"));
				if (null != rs.getString("DisbMonth")) {
					dsadetails.setMonth(getmonthon(rs.getString("DisbMonth")));
				}
				// dsadetails.setDsacode(rs.getString("DSA Code"));
				// dsadetails.setProductname(rs.getString("Product Catesgory"));
				// dsadetails.setCompanyname(rs.getString("COMAPNY/
				// ESTABLISHMENT NAME"));
				dsadetails.setStatus(rs.getString("STATUS"));
				dsadetails.setSanctionedamount(rs.getDouble("Approved amount"));
				dsadetails.setApplied_loan_amount(rs.getDouble("Loan amt applied"));
				dsadetails.setCustomer(rs.getString("Customer"));
				dsadetails.setCamdate(rs.getDate("CAM date"));
				dsadetails.setHold_pending(rs.getString("hold/PD pending/Reject"));
				dsadetails.setPd_date(rs.getString("PD date"));
				dsadetails.setState(rs.getString("State"));
				dsadetails.setDisb_date(rs.getDate("Disbursal date"));

				listdsadetails.add(dsadetails);
			}

		}

		catch (Exception exception) {
			LOGGER.debug("Exception occured while getdsalistdetails from database.Reason : " + exception);
		}
		if (rs != null)
			rs.close();
		if (stmt != null)
			stmt.close();
		if (con != null)
			con.close();
		LOGGER.info("DSADaoImpl getdsalistdetails ends");
		return listdsadetails;

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
	@Transactional
	public List<DsaDetailsEntity> getdsabasedlist(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getdsabasedlist starts");
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		String sqlQuery = null;
		if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode() && null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='NO' AND dsacode=\"" + dsanameEntity.getDsacode()
					+ "\" AND month=\"" + dsanameEntity.getMonth() + "\" AND productname=\""
					+ dsanameEntity.getProductname() + "\"order by state;";
		} else if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='NO' AND dsacode=\""
					+ dsanameEntity.getDsacode() + "\" AND month=\"" + dsanameEntity.getMonth()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\"order by state;";

		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='NO' AND month=\""
					+ dsanameEntity.getMonth() + "\" AND productname=\"" + dsanameEntity.getProductname()
					+ "\"order by state;";
		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='NO' AND dsacode=\""
					+ dsanameEntity.getDsacode() + "\" AND productname=\"" + dsanameEntity.getProductname()
					+ "\"order by state;";

		}

		else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='NO' AND productname=\""
					+ dsanameEntity.getProductname() + "\"order by state;";

		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='NO' AND month=\"" + dsanameEntity.getMonth()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\"order by state;";

		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='NO' AND dsacode=\"" + dsanameEntity.getDsacode()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\"order by state;";

		} else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='NO' AND productname=\"" + dsanameEntity.getProductname()
					+ "\"order by state;";

		}

		ResultSet rs = statement.executeQuery(sqlQuery);
		while (rs.next()) {
			DsaDetailsEntity dsadetails = new DsaDetailsEntity();
			dsadetails.setCompanyname(rs.getString("companyname"));
			dsadetails.setDsadetailsid(rs.getLong("ID"));
			dsadetails.setYear(rs.getString("year"));
			dsadetails.setLocation(rs.getString("location"));
			dsadetails.setSalesmanager(rs.getString("salesmanager"));
			dsadetails.setDsa(rs.getString("dsa"));
			dsadetails.setLosid(rs.getLong("losid"));
			dsadetails.setMonth(rs.getString("month"));
			dsadetails.setNetpayrate(rs.getDouble("netpayrate"));
			dsadetails.setStatus(rs.getString("status"));
			dsadetails.setDsacode(rs.getString("dsacode"));
			dsadetails.setSanctionedamount(rs.getDouble("sanctionedamount"));
			dsadetails.setApplied_loan_amount(rs.getDouble("appliedloanamount"));
			dsadetails.setFinalpayoutamount(rs.getDouble("finalpayoutamount"));
			dsadetails.setPaymentdate(rs.getDate("paymentdate"));
			dsadetails.setConstatus(rs.getString("constatus"));
			dsadetails.setRemark(rs.getString("remark"));
			dsadetails.setGatekeeperid(rs.getString("gatekeeperid"));
			dsadetails.setInterestamount(rs.getDouble("interestamount"));
			dsadetails.setPayrate(rs.getDouble("payrate"));
			dsadetails.setPf(rs.getDouble("pf"));
			dsadetails.setPfamount(rs.getDouble("pfamount"));
			dsadetails.setRoi(rs.getString("roi"));
			dsadetails.setProductname(rs.getString("productname"));
			dsadetails.setFrequency(rs.getString("frequency"));
			dsadetails.setSubvention(rs.getDouble("subvention"));
			dsadetails.setInclude(rs.getString("include"));
			dsadetails.setState(rs.getString("state"));
			dsadetails.setInterestamount(rs.getDouble("interestamount"));
			dsadetails.setFinalpayoutamount_total(rs.getDouble("finalpayoutamount_total"));
			dsadetails.setSanctioned_amount_total(rs.getLong("sanctioned_amount_total"));
			dsadetails.setAvgnetpayrate(rs.getDouble("avgnetpayrate"));
			dsadetails.setAvgroi(rs.getDouble("avgroi"));
			dsadetails.setInt_amount_total(rs.getDouble("int_amount_total"));
			dsadetails.setAvgpf(rs.getDouble("avgpf"));
			dsadetails.setPfamounttotal(rs.getDouble("pfamounttotal"));
			dsadetails.setPaymentFlag(rs.getString("paymentflag"));
			dsadetails.setMisFlag(rs.getString("misflag"));
			dsadetails.setQuarterlypayrate(rs.getDouble("quarterlypayrate"));
			dsadetails.setQuarterlytotalpayout(rs.getDouble("quarterlytotalpayout"));
			listdsadetails.add(dsadetails);
		}
		if (rs != null)
			rs.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsabasedlist ends");
		return listdsadetails;

	}

	/**
	 * This api is used for getting dsapayout
	 * 
	 * @param DsaDetailsEntity
	 * @param noFile,amount,dsacode
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	@Transactional
	public double getdsapayout(long noFile, double amount, String dsacode) throws Exception {
		LOGGER.info("DSADaoImpl getdsapayout starts");
		double dsapayout = 0.0;
		Connection connection = ConnectionFactory.getConnection();
		CallableStatement callableStatement = connection.prepareCall("{CALL SP_GET_MONTHLYPAYOUT(?,?,?)}");
		callableStatement.setLong(1, noFile);
		callableStatement.setDouble(2, amount);
		callableStatement.setLong(3, blincentiveid);
		callableStatement.execute();
		ResultSet rs = callableStatement.getResultSet();
		while (rs.next()) {
			dsapayout = rs.getDouble("v_MONTHLYPAYOUT");
		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getdsapayout ends");
		return dsapayout;

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
	@Transactional
	public DSAEntity getDsaOnUserID(long userid) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select dsaEntity from DSAEntity dsaEntity where dsaEntity.userid =:id";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("id", userid);
			return (DSAEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaOnUserID details.Reason : " + exception);
		}
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
	@Transactional
	public String getstatecode(String state) throws Exception {
		LOGGER.info("DSADaoImpl getstatecode starts");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		psmt = connection.prepareStatement("SELECT statecode FROM statecode WHERE state=?;");
		psmt.setString(1, state);
		ResultSet rs = psmt.executeQuery();
		String statecode = null;
		while (rs.next()) {
			statecode = rs.getString("statecode");
		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getstatecode ends");
		return statecode;

	}

	/**
	 * This api is used for getting getDsadetail
	 * 
	 *
	 * @param dsacode,losid
	 * @param session
	 * @return DsaDetailsEntity
	 * @throws Exception
	 */
	@Override
	@Transactional
	public DsaDetailsEntity getDsadetail(String dsacode, long losid) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.losid =:losid and dsa.dsacode=:dsacode";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("dsacode", dsacode);
			query.setParameter("losid", losid);
			return (DsaDetailsEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaInfo details.Reason : " + exception);
		}
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
		LOGGER.info("DSADaoImpl addmapsm start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		for (InputDsaDto input : listmapsm) {
			psmt = connection.prepareStatement(
					"SELECT COUNT(*) as count FROM sm_role_mapping WHERE  reporter_id=? AND reporting_id=?;");
			psmt.setLong(1, input.getReporter_id());
			psmt.setLong(2, input.getReporting_id());
			rs = psmt.executeQuery();
			long count = 0;
			while (rs.next()) {
				count = rs.getLong("count");
			}
			if (count == 0) {
				psmt = connection
						.prepareStatement("INSERT INTO sm_role_mapping (reporter_id,reporting_id)VALUES(?,?);");
				psmt.setLong(1, input.getReporter_id());
				psmt.setLong(2, input.getReporting_id());
				int x = psmt.executeUpdate();
			}

		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl addmapsm ends");
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
		LOGGER.info("DSADaoImpl deletemapsm start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		String status = null;

		psmt = connection.prepareStatement("DELETE FROM sm_role_mapping WHERE reporter_id=? AND reporting_id=?;");
		psmt.setLong(1, inputdsadto.getReporter_id());
		psmt.setLong(2, inputdsadto.getReporting_id());
		int x = psmt.executeUpdate();
		if (x == 0) {
			status = "fail";
		} else {
			status = "success";
		}
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl deletemapsm start");
		return status;
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
	@Transactional
	public List<InputDsaDto> getsmdetails(long roleid) throws Exception {
		LOGGER.info("DSADaoImpl getsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT employee.`name`,employee.`ID`AS empid " + "FROM employee INNER JOIN upf.`user` AS u "
				+ "INNER JOIN upf.`role` AS r ON u.`ID`=employee.`userid` AND u.`role_id`=r.`ID`"
				+ "WHERE  u.`role_id`=\"" + roleid + "\"";
		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> smlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("empid"));
			smlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getsmdetails ends");
		return smlist;
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
	@Transactional
	public List<InputDsaDto> getmapsmdetails(long smid, String product) throws Exception {
		LOGGER.info("DSADaoImpl getmapsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT srm.reporter_id,employee.`name`,employee.`state`,employee.`productype`,employee.`ID` AS empid,"
				+ "employee.`employeeid` ,r.`role` FROM employee INNER JOIN upf.user AS u INNER JOIN upf.role AS r INNER JOIN upf.`sm_role_mapping` AS srm  ON employee.`ID`=srm.`reporter_id` AND u.id=employee.`userid` AND u.`role_id`=r.`id`"
				+ " WHERE srm.reporting_id=\"" + smid + "\"AND employee.productype=\"" + product + "\"";

		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> smlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("empid"));
			inputdsa.setEmployeeid(resultSet.getString("employeeid"));
			inputdsa.setState(resultSet.getString("state"));
			inputdsa.setProduct(resultSet.getString("productype"));
			inputdsa.setReporter_id(resultSet.getLong("reporter_id"));
			inputdsa.setRole(resultSet.getString("role"));
			smlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getmapsmdetails ends");
		return smlist;
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
	@Transactional
	public List<InputDsaDto> getuppersmdetails(long smid, String product) throws Exception {
		LOGGER.info("DSADaoImpl getmapsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT srm.reporting_id,srm.`reporter_id`,employee.`name`,employee.`productype`,employee.`state`,employee.`emailid`,employee.`city`,employee.`ID` AS empid,employee.`employeeid`,r.`role` FROM employee INNER JOIN upf.user AS u INNER JOIN upf.role AS r INNER JOIN upf.`sm_role_mapping` AS srm  ON employee.`ID`=srm.`reporting_id` AND u.id=employee.`userid` AND u.`role_id`=r.`id` WHERE srm.reporter_id=\""
				+ smid + "\"AND employee.productype=\"" + product + "\"";

		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> smlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("empid"));
			inputdsa.setEmployeeid(resultSet.getString("employeeid"));
			inputdsa.setState(resultSet.getString("state"));
			inputdsa.setCity(resultSet.getString("city"));
			inputdsa.setReporting_id(resultSet.getLong("reporting_id"));
			inputdsa.setEmailid(resultSet.getString("emailid"));
			inputdsa.setRole(resultSet.getString("role"));
			inputdsa.setProduct(resultSet.getString("productype"));
			smlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getmapsmdetails ends");
		return smlist;
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
	@Transactional
	public String getemployeeidstatus(String employeeid) throws Exception {
		LOGGER.info("DSADaoImpl getemployeeidstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("select count(*) from employee where employeeid=?;");
		psmt.setString(1, employeeid);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getemployeeidstatus ends");
		return status;
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
		LOGGER.info("DSADaoImpl getdsacode starts");
		Statement st = null;
		ResultSet rs = null;
		int result = 0;
		String response = null;
		try {
			Connection connection = ConnectionFactory.getConnection();
			st = connection.createStatement();
			rs = st.executeQuery("select ID from dsaclientinfo order by ID desc limit 1");
			if (rs.next()) {
				result = rs.getInt(1);
			}
			result++;
			if (result <= 9)
				response = "DSA000" + result;
			else if (result <= 99)
				response = "DSA00" + result;
			else if (result <= 999)
				response = "DSA0" + result;
			else
				response = "DSA" + result;
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while getdsacode from database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl getdsacode ends");
		return response;

	}

	/**
	 * ; This api is used for getdsabasedlistQuarterly
	 * 
	 *
	 * @param DsaDetailsEntity
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	@Transactional
	public InputDsaDto getdsabasedlistQuarterly(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getdsabasedlistQuarterly starts");
		InputDsaDto input = new InputDsaDto();
		// calculate quarterly payrate and payamoount
		double qpayout = 0.0, qslab = 0.0;
		long activecount = 0;
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		Connection connection = ConnectionFactory.getConnection();
		// calculating active loan in last two months
		CallableStatement callableStatement2 = connection.prepareCall("{CALL SP_GET_COUNTQUARTERLY(?,?,?)}");
		callableStatement2.setString(1, dsanameEntity.getYear());
		callableStatement2.setString(2, dsanameEntity.getMonth());
		callableStatement2.setString(3, dsanameEntity.getDsacode());
		callableStatement2.execute();
		ResultSet rs2 = callableStatement2.getResultSet();
		while (rs2.next()) {
			activecount = rs2.getInt("v_QUARTERLYCOUNT");
		}
		if (activecount == 1) {

			CallableStatement callableStatement = connection.prepareCall("{CALL SP_GET_DSADETAILSQUARTERLY(?,?,?,?)}");
			callableStatement.setString(1, dsanameEntity.getYear());
			callableStatement.setString(2, dsanameEntity.getMonth());
			callableStatement.setString(3, dsanameEntity.getDsacode());
			callableStatement.setLong(4, blincentiveid);

			callableStatement.execute();
			ResultSet rs = callableStatement.getResultSet();
			while (rs.next()) {
				qpayout = rs.getDouble("V_QPAYOUT");
				qslab = rs.getDouble("V_QSLAB");
			}
			if (callableStatement != null)
				callableStatement.close();
			if (rs != null)
				rs.close();
		}
		// calcualting getting data from db
		CallableStatement callableStatement1 = connection.prepareCall("{CALL SP_GET_DSADETAILSMONTH(?,?,?)}");
		callableStatement1.setString(1, dsanameEntity.getYear());
		callableStatement1.setString(2, dsanameEntity.getMonth());
		callableStatement1.setString(3, dsanameEntity.getDsacode());
		callableStatement1.execute();
		ResultSet rs1 = callableStatement1.getResultSet();
		while (rs1.next()) {
			DsaDetailsEntity dsadetails = new DsaDetailsEntity();
			dsadetails.setCompanyname(rs1.getString("companyname"));
			dsadetails.setDsadetailsid(rs1.getLong("ID"));
			dsadetails.setYear(rs1.getString("year"));
			dsadetails.setLocation(rs1.getString("location"));
			dsadetails.setSalesmanager(rs1.getString("salesmanager"));
			dsadetails.setDsa(rs1.getString("dsa"));
			dsadetails.setLosid(rs1.getLong("losid"));
			dsadetails.setMonth(rs1.getString("month"));
			dsadetails.setNetpayrate(rs1.getDouble("netpayrate"));
			dsadetails.setStatus(rs1.getString("status"));
			dsadetails.setDsacode(rs1.getString("dsacode"));
			dsadetails.setSanctionedamount(rs1.getDouble("sanctionedamount"));
			dsadetails.setApplied_loan_amount(rs1.getDouble("appliedloanamount"));
			dsadetails.setFinalpayoutamount(rs1.getDouble("finalpayoutamount"));
			dsadetails.setPaymentdate(rs1.getDate("paymentdate"));
			dsadetails.setConstatus(rs1.getString("constatus"));
			dsadetails.setRemark(rs1.getString("remark"));
			dsadetails.setGatekeeperid(rs1.getString("gatekeeperid"));
			dsadetails.setInterestamount(rs1.getDouble("interestamount"));
			dsadetails.setPayrate(rs1.getDouble("payrate"));
			dsadetails.setPf(rs1.getDouble("pf"));
			dsadetails.setPfamount(rs1.getDouble("pfamount"));
			dsadetails.setRoi(rs1.getString("roi"));
			dsadetails.setProductname(rs1.getString("productname"));
			dsadetails.setFrequency(rs1.getString("frequency"));
			dsadetails.setSubvention(rs1.getDouble("subvention"));
			dsadetails.setInclude(rs1.getString("include"));
			dsadetails.setState(rs1.getString("state"));
			dsadetails.setInterestamount(rs1.getDouble("interestamount"));
			dsadetails.setFinalpayoutamount_total(rs1.getDouble("finalpayoutamount_total"));
			dsadetails.setSanctioned_amount_total(rs1.getLong("sanctioned_amount_total"));
			dsadetails.setAvgnetpayrate(rs1.getDouble("avgnetpayrate"));
			dsadetails.setAvgroi(rs1.getDouble("avgroi"));
			dsadetails.setInt_amount_total(rs1.getDouble("int_amount_total"));
			dsadetails.setAvgpf(rs1.getDouble("avgpf"));
			dsadetails.setPfamounttotal(rs1.getDouble("pfamounttotal"));
			dsadetails.setPaymentFlag(rs1.getString("paymentflag"));
			dsadetails.setMisFlag(rs1.getString("misflag"));
			dsadetails.setQuarterlypayrate(rs1.getDouble("quarterlypayrate"));
			dsadetails.setQuarterlytotalpayout(rs1.getDouble("quarterlytotalpayout"));
			listdsadetails.add(dsadetails);
		}
		input.setDsalist(listdsadetails);
		input.setQuarterlypayout(qpayout);
		input.setQuarterlypayrate(qslab);

		if (callableStatement2 != null)
			callableStatement2.close();
		if (rs2 != null)
			rs2.close();
		if (rs1 != null)
			rs1.close();

		if (callableStatement1 != null)
			callableStatement1.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getdsabasedlistQuarterly ends");
		return input;

	}

	/**
	 * This api is used for getRole
	 * 
	 *
	 * @param smid
	 * @param session
	 * @return Role
	 * @throws Exception
	 */
	@Override
	@Transactional
	public String getRole(long smid) throws Exception {
		LOGGER.info("DSADaoImpl getRole start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		psmt = connection.prepareStatement(
				"SELECT r.`role` FROM upf.`employee` AS emp INNER JOIN upf.user AS u INNER JOIN upf.`role` AS r ON emp.`userid`=u.`id` AND u.`role_id`=r.`id` WHERE u.id=?; ");

		psmt.setLong(1, smid);
		ResultSet rs = psmt.executeQuery();
		String role = null;
		while (rs.next()) {
			role = rs.getString("role");
		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getRole ends");
		return role;

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
	@Transactional
	public DSAEntity getDsaOndsacode(String dsacode) throws Exception {
		LOGGER.info("DSADaoImpl getDsaOndsacode start");
		try {
			String queryString = "select dsaEntity from DSAEntity dsaEntity where dsaEntity.dsacode =:dsacode";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("dsacode", dsacode);
			return (DSAEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaOndsacode details.Reason : " + exception);
		}
	}

	/**
	 * This api is used for getting data from getmonthlypayout
	 * 
	 * @param dsacode,month,year
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	@Transactional
	public long getmonthlypayout(String dsacode, String month, String year, String product) throws Exception {
		LOGGER.info("DSADaoImpl getmonthlypayout start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement(
				"SELECT SUM(finalpayoutamount) AS payout FROM dsadetails WHERE include='YES' AND paymentflag='NO' AND dsacode=? AND year=? AND month=? AND productname=?;");
		psmt.setString(1, dsacode);
		psmt.setString(2, year);
		psmt.setString(3, month);
		psmt.setString(4, product);
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getLong("payout");
		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getmonthlypayout ends");
		return x;
	}

	/**
	 * This api is used for getting empid based on userid
	 * 
	 * 
	 * @param userid
	 * @param session
	 * @return empid
	 * @throws Exception
	 */
	@Override
	@Transactional
	public InputDsaDto getEmpIdBasedOnUserID(long userid) throws Exception {
		LOGGER.info("DSADaoImpl getEmpIdBasedOnUserID start");
		Connection connection = ConnectionFactory.getConnection();
		InputDsaDto input = new InputDsaDto();
		PreparedStatement psmt = null;
		psmt = connection.prepareStatement(
				"SELECT emp.id ,emp.productype FROM upf.`employee` AS emp INNER JOIN upf.user AS u INNER JOIN upf.`role` AS r ON emp.`userid`=u.`id` AND u.`role_id`=r.`id` WHERE u.id=?; ");

		psmt.setLong(1, userid);
		ResultSet rs = psmt.executeQuery();
		while (rs.next()) {
			input.setSm_id(rs.getLong("id"));
			input.setProduct(rs.getString("productype"));
		}
		LOGGER.info("DSADaoImpl getEmpIdBasedOnUserID end");
		return input;

	}

	/**
	 * This api is used for getting data from getmonthlypayout
	 * 
	 * @param dsacode,month,year
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	@Transactional
	public long getquarterlypayout(String dsacode, String month, String year) throws Exception {
		LOGGER.info("DSADaoImpl getquarterlypayout start");
		Connection connection = ConnectionFactory.getConnection();
		double qpayout = 0.0, qslab = 0.0;
		CallableStatement callableStatement = connection.prepareCall("{CALL SP_GET_DSADETAILSQUARTERLY(?,?,?,?)}");
		callableStatement.setString(1, year);
		callableStatement.setString(2, month);
		callableStatement.setString(3, dsacode);
		callableStatement.setLong(4, blincentiveid);
		callableStatement.execute();
		ResultSet rs = callableStatement.getResultSet();
		while (rs.next()) {
			qpayout = rs.getDouble("V_QPAYOUT");
			qslab = rs.getDouble("V_QSLAB");
		}

		if (rs != null)
			rs.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getquarterlypayout ends");
		return (long) qpayout;
	}

	/**
	 * This api is used for getting getmonthlyhistoricaldata
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	@Transactional
	public List<DsaDetailsEntity> getmonthlyhistoricaldata(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getmonthlyhistoricaldata starts");
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		String sqlQuery = null;
		if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode() && null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='YES' AND dsacode=\"" + dsanameEntity.getDsacode()
					+ "\" AND month=\"" + dsanameEntity.getMonth() + "\" AND productname=\""
					+ dsanameEntity.getProductname() + "\";";
		} else if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='YES' AND dsacode=\""
					+ dsanameEntity.getDsacode() + "\" AND month=\"" + dsanameEntity.getMonth()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\";";

		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='YES' AND month=\""
					+ dsanameEntity.getMonth() + "\" AND productname=\"" + dsanameEntity.getProductname() + "\";";
		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='YES' AND dsacode=\""
					+ dsanameEntity.getDsacode() + "\" AND productname=\"" + dsanameEntity.getProductname() + "\";";

		}

		else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE include='YES' AND paymentflag='YES' AND productname=\""
					+ dsanameEntity.getProductname() + "\";";

		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='YES' AND month=\"" + dsanameEntity.getMonth()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\";";

		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='YES' AND dsacode=\"" + dsanameEntity.getDsacode()
					+ "\" AND productname=\"" + dsanameEntity.getProductname() + "\";";

		} else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			sqlQuery = "SELECT * FROM dsadetails WHERE year=\"" + dsanameEntity.getYear()
					+ "\" AND include='YES' AND paymentflag='YES' AND productname=\"" + dsanameEntity.getProductname()
					+ "\";";

		}
		ResultSet rs = statement.executeQuery(sqlQuery);
		while (rs.next()) {
			DsaDetailsEntity dsadetails = new DsaDetailsEntity();
			dsadetails.setDsadetailsid(rs.getLong("ID"));
			dsadetails.setLocation(rs.getString("location"));
			dsadetails.setMonth(rs.getString("month"));
			dsadetails.setCompanyname(rs.getString("companyname"));
			dsadetails.setSalesmanager(rs.getString("salesmanager"));
			dsadetails.setDsa(rs.getString("dsa"));
			dsadetails.setDsacode(rs.getString("dsacode"));
			dsadetails.setStatus(rs.getString("status"));
			dsadetails.setSanctionedamount(rs.getDouble("sanctionedamount"));
			dsadetails.setPayrate(rs.getDouble("payrate"));
			dsadetails.setSubvention(rs.getDouble("subvention"));
			dsadetails.setNetpayrate(rs.getDouble("netpayrate"));
			dsadetails.setInclude(rs.getString("include"));
			dsadetails.setFinalpayoutamount(rs.getDouble("finalpayoutamount"));
			dsadetails.setInterestamount(rs.getDouble("interestamount"));
			dsadetails.setPf(rs.getDouble("pf"));
			dsadetails.setPfamount(rs.getDouble("pfamount"));
			dsadetails.setQuarterlypayrate(rs.getDouble("quarterlypayrate"));
			dsadetails.setQuarterlytotalpayout(rs.getDouble("quarterlytotalpayout"));
			dsadetails.setYear(rs.getString("year"));
			dsadetails.setGatekeeperid(rs.getString("gatekeeperid"));
			dsadetails.setSanctioned_amount_total(rs.getLong("sanctioned_amount_total"));
			dsadetails.setApplied_loan_amount(rs.getDouble("appliedloanamount"));
			dsadetails.setAvgnetpayrate(rs.getDouble("avgnetpayrate"));
			dsadetails.setFinalpayoutamount_total(rs.getDouble("finalpayoutamount_total"));
			dsadetails.setAvgroi(rs.getDouble("avgroi"));
			dsadetails.setInt_amount_total(rs.getDouble("int_amount_total"));
			dsadetails.setAvgpf(rs.getDouble("avgpf"));
			dsadetails.setPfamounttotal(rs.getDouble("pfamounttotal"));
			dsadetails.setPaymentFlag(rs.getString("paymentflag"));
			dsadetails.setMisFlag(rs.getString("misflag"));
			dsadetails.setRoi(String.valueOf(rs.getDouble("roi")));
			dsadetails.setAvgroi(rs.getDouble("avgroi"));
			dsadetails.setLosid(Long.valueOf(rs.getString("losid")));
			dsadetails.setFrequency(rs.getString("frequency"));
			listdsadetails.add(dsadetails);

		}
		if (rs != null)
			rs.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getmonthlyhistoricaldata ends");
		return listdsadetails;

	}

	/**
	 * This api is used for getting getsmlistdetails
	 * 
	 * @param DsaDetailsEntity
	 * @param request
	 * @param session
	 * @return InputDsaDto
	 * @throws Exception
	 */
	@Override
	@Transactional
	public List<DsaDetailsEntity> getsmlistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getsmlistdetails starts");
		StringBuilder connectionUrl = new StringBuilder();
		connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
				.append("password=").append(MSSQL_DB_PASSWORD);
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		// Declare the JDBC objects.
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {

			Class.forName(MSSQL_DB_DRIVER);
			con = DriverManager.getConnection(connectionUrl.toString());

			String SQL1 = "SELECT DISTINCT [LOCATION] = c.rescity,[Date] = CASE WHEN SM.description = 'Entry' THEN L.entry_dt WHEN SM.description = 'Verified' THEN L.verify_dt WHEN SM.description = 'Query' THEN L.query_dt WHEN SM.description = 'Rating' THEN L.rating_dt WHEN SM.description = 'Recommended' THEN L.recommended_dt WHEN SM.description = 'Sanctioned' THEN L.sanctioned_dt WHEN SM.description = 'Executed' THEN L.execution_dt WHEN SM.description = 'Rejected' THEN L.rejected_dt WHEN SM.description = 'Closed' THEN L.closed_dt END,[DisbYear] = Year(L.sanctioned_dt),[DisbMonth]= Month(L.sanctioned_dt), [COMAPNY/ ESTABLISHMENT NAME] =  C.name,[SALES MANAGER NAME] = L.vofficer,[DSA Name] = DSA.NAME,[STATUS] = SM.description,[Applied Loan Amount]=L.Applied_Loan_Amt,[Sanctioned Loan Amount] = L.sanctionamt,[LOAN ID] = L.loanno ,[GATE KEEPER ID] = L.FCSNO,[PAY RATE] = '',[RATE OF INTEREST (ROI)] = L.INTEREST,[PROCESSING FEES] = CAML.PROCESSINGCHARGES FROM  CAMSTEST..loandetails L (nolock)INNER JOIN CAMSTEST..loansubtype LS ON LS.subtypecode = L.loansubtype INNER JOIN CAMSTEST..statusmaster SM (nolock) ON L.status = SM.statuscode AND Upper(SM.langid) = 'EN-GB' LEFT JOIN CBSTEST..customer C (nolock) ON L.customercode = C.code LEFT JOIN CBSTEST..industry IND (nolock) ON L.industry = IND.code LEFT JOIN CBSTEST..users DSA (nolock) ON L.crmsupervisor = DSA.alphacode LEFT JOIN CBSTEST..loandetails CAML (nolock) ON CAML.acno = L.cbsacno Where  C.CustomerType =13 and L.vofficer=? and DSA.NAME=?";
			PreparedStatement statement = con.prepareStatement(SQL1);
			statement.setString(1, dsanameEntity.getSalesmanager());
			statement.setString(2, dsanameEntity.getDsa());
			rs = statement.executeQuery();
			stmt = con.createStatement();
			while (rs.next()) {
				DsaDetailsEntity dsadetails = new DsaDetailsEntity();
				dsadetails.setYear(rs.getString("DisbYear"));
				dsadetails.setLocation(rs.getString("LOCATION"));
				dsadetails.setSalesmanager(rs.getString("SALES MANAGER NAME"));
				dsadetails.setDsa(rs.getString("DSA Name"));
				dsadetails.setLosid(rs.getLong("LOAN ID"));
				if (null != rs.getString("DisbMonth")) {
					dsadetails.setMonth(getmonthon(rs.getString("DisbMonth")));
				}
				dsadetails.setCompanyname(rs.getString("COMAPNY/ ESTABLISHMENT NAME"));
				dsadetails.setStatus(rs.getString("STATUS"));
				dsadetails.setSanctionedamount(rs.getDouble("Sanctioned Loan Amount"));
				dsadetails.setApplied_loan_amount(rs.getDouble("Applied Loan Amount"));
				listdsadetails.add(dsadetails);
			}

		}

		catch (Exception exception) {
			LOGGER.debug("Exception occured while getdsalistdetails from database.Reason : " + exception);
		}
		if (rs != null)
			rs.close();
		if (stmt != null)
			stmt.close();
		if (con != null)
			con.close();
		LOGGER.info("DSADaoImpl getsmlistdetails ends");
		return listdsadetails;

	}

	/**
	 * This api is used for getting getDsadetailonlos
	 * 
	 * @param losid
	 * @param request
	 * @param session
	 * @return DsaDetailsEntity
	 * @throws Exception
	 */
	@Override
	@Transactional
	public DsaDetailsEntity getDsadetailonlos(long losid) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.losid =:losid";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("losid", losid);
			return (DsaDetailsEntity) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaInfo details.Reason : " + exception);
		}
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
	@Transactional
	public String getaccountstatus(String accountno) throws Exception {
		LOGGER.info("DSADaoImpl getaccountstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT COUNT(*) FROM dsaclientinfo WHERE accountno=?;");
		psmt.setString(1, accountno);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getaccountstatus ends");
		return status;
	}

	/**
	 * This api is used for getting list of banks
	 * 
	 * 
	 * @param request
	 * @param session
	 * @return statelist
	 * @throws Exception
	 */
	@Override
	@Transactional
	public List<String> getBanklist() throws Exception {
		LOGGER.info("DSADaoImpl getBanklist start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT bank_name FROM banks_list";
		resultSet = statement.executeQuery(sqlQuery);
		List<String> banklist = new ArrayList<String>();
		String bank = null;
		while (resultSet.next()) {
			bank = resultSet.getString("bank_name");
			banklist.add(bank);
		}
		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getBanklist end");
		return banklist;
	}

	@Override
	@Transactional
	public String getcheckmapping(long empid) throws Exception {
		LOGGER.info("DSADaoImpl getaccountstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT COUNT(*) FROM sm_role_mapping WHERE reporter_id=?;");
		psmt.setLong(1, empid);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getaccountstatus ends");
		return status;
	}

	@Override
	@Transactional
	public String getchecklos(long losid) throws Exception {
		LOGGER.info("DSADaoImpl getaccountstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT COUNT(*) FROM `client_info_web` WHERE LOS_ID=?;");
		psmt.setLong(1, losid);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getaccountstatus ends");
		return status;
	}

	@Override
	@Transactional
	public List<SblInsentive> getListmonthlyslab() throws Exception {
		String queryString1 = "select qt from SblInsentive qt";
		@SuppressWarnings("unchecked")
		List<SblInsentive> applist = (List<SblInsentive>) sessionFactory.getCurrentSession().createQuery(queryString1)
				.list();
		return applist;

	}

	@Override
	@Transactional
	public double getsblpayout(double amount) throws Exception {
		LOGGER.info("DSADaoImpl getdsapayout starts");
		double dsapayout = 0.0;
		Connection connection = ConnectionFactory.getConnection();
		CallableStatement callableStatement = connection.prepareCall("{CALL SP_GET_SBLMONTHLYPAYOUT(?)}");
		callableStatement.setDouble(1, amount);
		callableStatement.execute();
		ResultSet rs = callableStatement.getResultSet();
		while (rs.next()) {
			dsapayout = rs.getDouble("v_MONTHLYPAYOUT");
		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getdsapayout ends");
		return dsapayout;

	}

	@Override
	@Transactional
	public void addsblincentive(List<SblInsentive> listsbl) throws Exception {
		for (SblInsentive sbl : listsbl) {
			SblInsentive app = (SblInsentive) sessionFactory.getCurrentSession().merge(sbl);

		}

	}

	@Override
	@Transactional
	public long addBLInsentiveInfo(BLInsentive blinsentive) throws Exception {
		LOGGER.info("DSADaoImpl addBLInsentiveInfo start");
		long id = 0;
		try {
			BLInsentive app = (BLInsentive) sessionFactory.getCurrentSession().merge(blinsentive);
			id = app.getBlincentiveid();
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addBLInsentiveInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addBLInsentiveInfo end");
		return id;

	}

	/**
	 * This api is used for getting data from sminfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	@Transactional
	public BLInsentive getBLInsentiveInfo(long id) throws Exception {
		LOGGER.info("DSADaoImpl getBLInsentiveInfo start");
		try {
			String queryString = "select blinsentive from BLInsentive blinsentive where blinsentive.blincentiveid =:id";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("id", id);
			return (BLInsentive) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException(
					"Exception occured while getting getBLInsentiveInfo details.Reason : " + exception);
		}
	}

	@Override
	@Transactional
	public double getsumlos(List<ListLosId> empid) throws Exception {
		LOGGER.info("DSADaoImpl getsumlos start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		List<Long> empNoList = new ArrayList<Long>();
		StringBuilder builder = new StringBuilder();
		double sum = 0.0;

		for (ListLosId number : empid) {
			builder.append(Long.valueOf(number.getLosid())).append(",");
		}

		String sqlQuery = "SELECT SUM(finalpayoutamount) AS payout FROM dsadetails WHERE `losid` IN ("
				+ builder.deleteCharAt(builder.length() - 1).toString() + ")";
		resultSet = statement.executeQuery(sqlQuery);

		while (resultSet.next()) {
			sum = resultSet.getDouble("payout");
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getsumlos ends");
		return sum;
	}

	@Override
	@Transactional
	public Invoice addinvoiceInfo(Invoice invoice) throws Exception {
		LOGGER.info("DSADaoImpl addBLInsentiveInfo start");
		Invoice app = null;
		try {
			app = (Invoice) sessionFactory.getCurrentSession().merge(invoice);

		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addBLInsentiveInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addBLInsentiveInfo end");
		return app;

	}

	@Override
	@Transactional
	public List<Invoice> getinvoicelist(Invoice dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getinvoicelist start");
		Query query = null;
		if (dsanameEntity.getQuarter().equalsIgnoreCase("none")) {
			String queryString = "select invoice from Invoice invoice where invoice.month =:month and invoice.year =:year and invoice.dsacode =:dsacode and invoice.productname =:productname";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("month", dsanameEntity.getMonth());
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
			query.setParameter("productname", dsanameEntity.getProductname());
		} else {
			String queryString = "select invoice from Invoice invoice where invoice.quarter =:quarter and invoice.year =:year and invoice.dsacode =:dsacode and invoice.productname =:productname";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("quarter", dsanameEntity.getQuarter());
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
			query.setParameter("productname", dsanameEntity.getProductname());
		}

		LOGGER.info("DSADaoImpl getinvoicelist end");
		return query.list();

	}

	@Override
	@Transactional
	public Long getinvoiceno(Invoice invoice) throws Exception {
		LOGGER.info("DSADaoImpl getaccountstatus start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement(
				"SELECT COUNT(*) FROM invoice AS d WHERE d.month=? AND d.year=? AND d.dsacode=? AND d.productname=?;");
		psmt.setString(1, invoice.getMonth());
		psmt.setString(2, invoice.getYear());
		psmt.setString(3, invoice.getDsacode());
		psmt.setString(4, invoice.getProductname());
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getaccountstatus ends");
		return x + 1;
	}

	@Override
	@Transactional
	public List<DsaDetailsEntity> getadminaccount(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getinvoicelist start");
		Query query = null;
		if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode() && null != dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.month =:month and dsa.year =:year and dsa.dsacode =:dsacode and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("month", dsanameEntity.getMonth());
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("productname", dsanameEntity.getProductname());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
		} else if (null != dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.month =:month and dsa.dsacode =:dsacode and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("month", dsanameEntity.getMonth());
			query.setParameter("productname", dsanameEntity.getProductname());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.month =:month and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("month", dsanameEntity.getMonth());
			query.setParameter("productname", dsanameEntity.getProductname());
		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.dsacode =:dsacode and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("productname", dsanameEntity.getProductname());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
		}

		else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null == dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.productname =:productname	ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("productname", dsanameEntity.getProductname());
		} else if (null != dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.month =:month and dsa.year =:year and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("month", dsanameEntity.getMonth());
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("productname", dsanameEntity.getProductname());

		}

		else if (null == dsanameEntity.getMonth() && null != dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.dsacode =:dsacode and dsa.year =:year and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("productname", dsanameEntity.getProductname());
			query.setParameter("dsacode", dsanameEntity.getDsacode());
		} else if (null == dsanameEntity.getMonth() && null == dsanameEntity.getDsacode()
				&& null != dsanameEntity.getYear()) {
			String queryString = "select dsa from DsaDetailsEntity dsa where dsa.year =:year and dsa.productname =:productname ORDER BY dsa.state";
			query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("year", dsanameEntity.getYear());
			query.setParameter("productname", dsanameEntity.getProductname());

		}
		LOGGER.info("DSADaoImpl getinvoicelist end");
		return query.list();

	}

	@Override
	@Transactional
	public ClientInfoWeb getclientdetail(long losid) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select c from ClientInfoWeb c where c.losid =:losid";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("losid", losid);
			return (ClientInfoWeb) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaInfo details.Reason : " + exception);
		}
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
	@Transactional
	public void addaccountadminlist(List<DsaDetailsEntity> listdsadetails) throws Exception {
		LOGGER.info("DSADaoImpl addsmdsa start");
		if (listdsadetails.size() > 0)
			for (DsaDetailsEntity dsa : listdsadetails) {
				dsa.setUpdated_date(new Date());
				if (dsa.getPaymentFlag().equalsIgnoreCase("yes")) {
					if (dsa.getPaymentdate() == null) {
						dsa.setPaymentdate(new Date());
					}
				}
				DsaDetailsEntity app = (DsaDetailsEntity) sessionFactory.getCurrentSession().merge(dsa);
			}
		LOGGER.info("DSADaoImpl addsmdsa ends");
	}

	@Override
	@Transactional
	public List<DsaDetailsEntity> getgklistdetails(DsaDetailsEntity dsanameEntity) throws Exception {
		LOGGER.info("DSADaoImpl getdsalistdetails starts");
		StringBuilder connectionUrl = new StringBuilder();
		connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
				.append("password=").append(MSSQL_DB_PASSWORD);
		List<DsaDetailsEntity> listdsadetails = new ArrayList<DsaDetailsEntity>();
		// Declare the JDBC objects.
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {

			Class.forName(MSSQL_DB_DRIVER);
			con = DriverManager.getConnection(connectionUrl.toString());

			String SQL1 = "SELECT [DisbYear] = Year(CBSDIS.DisbDate),[DisbMonth]= month(CBSDIS.DisbDate),[STATUS] = SM.DESCRIPTION,[Sanctioned Loan Amount] = CBSDIS.DISBAMOUNT,[LOAN ID] = L.LOANNO,[GATE KEEPER ID] = L.FCSNO FROM CAMSTEST..loandetails L (NOLOCK) INNER JOIN CAMSTEST..STATUSMASTER SM (NOLOCK) ON L.STATUS = SM.STATUSCODE AND UPPER(SM.LANGID) = 'EN-GB' LEFT JOIN CBSTEST..DISBURSEMENTSCHEDULE CBSDIS (NOLOCK) ON CBSDIS.ACNO = L.CBSACNO LEFT JOIN CBSTEST..CUSTOMER C (NOLOCK) ON L.CUSTOMERCODE = C.CODE WHERE  C.CustomerType =13 and CBSDIS.DisbDate is not null and LoanSubType = 1 and  L.FCSNO is not null";
			PreparedStatement statement = con.prepareStatement(SQL1);
			rs = statement.executeQuery();
			stmt = con.createStatement();
			while (rs.next()) {
				DsaDetailsEntity dsadetails = new DsaDetailsEntity();
				dsadetails.setYear(rs.getString("DisbYear"));
				dsadetails.setLocation(rs.getString("LOCATION"));
				dsadetails.setSalesmanager(rs.getString("SALES MANAGER NAME"));
				dsadetails.setDsa(rs.getString("DSA Name"));
				dsadetails.setLosid(rs.getLong("File no"));
				if (null != rs.getString("DisbMonth")) {
					dsadetails.setMonth(getmonthon(rs.getString("DisbMonth")));
				}
				dsadetails.setStatus(rs.getString("STATUS"));
				dsadetails.setSanctionedamount(rs.getDouble("Approved amount"));
				dsadetails.setApplied_loan_amount(rs.getDouble("Loan amt applied"));
				dsadetails.setCustomer(rs.getString("Customer"));
				dsadetails.setCamdate(rs.getDate("CAM date"));
				dsadetails.setHold_pending(rs.getString("hold/PD pending/Reject"));
				dsadetails.setPd_date(rs.getString("PD date"));
				dsadetails.setState(rs.getString("Region"));
				dsadetails.setDisb_date(rs.getDate("Disbursal date"));

				listdsadetails.add(dsadetails);
			}

		}

		catch (Exception exception) {
			LOGGER.debug("Exception occured while getdsalistdetails from database.Reason : " + exception);
		}
		if (rs != null)
			rs.close();
		if (stmt != null)
			stmt.close();
		if (con != null)
			con.close();
		LOGGER.info("DSADaoImpl getdsalistdetails ends");
		return listdsadetails;

	}

	@Override
	public long getinvoiceid(String invoicename) throws Exception {
		LOGGER.info("DSADaoImpl getinvoiceid start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT ID FROM invoice WHERE invoicename=?;");
		psmt.setString(1, invoicename);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getinvoiceid ends");

		return x;
	}

	@Override
	@Transactional
	public List<Losdata> getcamdatafromlos() throws Exception {
		LOGGER.info("DSADaoImpl getdsalistdetails starts");
		StringBuilder connectionUrl = new StringBuilder();
		connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
				.append("password=").append(MSSQL_DB_PASSWORD);
		List<Losdata> listlosdata = new ArrayList<Losdata>();
		// Declare the JDBC objects.
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {

			Class.forName(MSSQL_DB_DRIVER);
			con = DriverManager.getConnection(connectionUrl.toString());
			String SQL1 = "select LoanNo,Name,Applied_Loan_Amt,Entry_Dt,[Description] =S.Description from Camstest.dbo.loandetails a INNER JOIN Camstest.dbo.branchmaster Br ON Br.code = left(a.LoanNo,4) INNER JOIN Camstest.dbo.statusmaster s on  StatusCode = [status]";
			PreparedStatement statement = con.prepareStatement(SQL1);
			rs = statement.executeQuery();
			stmt = con.createStatement();
			while (rs.next()) {
				Losdata los = new Losdata();
				los.setLosid((rs.getLong("LoanNo")));
				los.setLoanamt(rs.getDouble("Applied_Loan_Amt"));
				los.setLocation(rs.getString("Name"));
				los.setStatus(rs.getString("Description"));
				listlosdata.add(los);
			}

		}

		catch (Exception exception) {
			LOGGER.debug("Exception occured while getcamdatafromlos from database.Reason : " + exception);
		}
		if (rs != null)
			rs.close();
		if (stmt != null)
			stmt.close();
		if (con != null)
			con.close();
		LOGGER.info("DSADaoImpl getcamdatafromlos ends");
		return listlosdata;

	}

	@Override
	@Transactional
	public List<Losdata> getcamdatafromclientinfoweb() throws Exception {
		LOGGER.info("DSADaoImpl getdsabasedlist starts");
		List<Losdata> listlosdata = new ArrayList<Losdata>();
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		String sqlQuery = "SELECT ID,LOS_ID,UPDATED_DATE FROM client_info_web WHERE UPDATED_DATE BETWEEN DATE_SUB(NOW(), INTERVAL 60 DAY) AND NOW();";
		ResultSet rs = statement.executeQuery(sqlQuery);
		while (rs.next()) {
			Losdata los = new Losdata();
			los.setLosid((rs.getLong("LOS_ID")));
			los.setGklogindate(rs.getString("UPDATED_DATE"));
			los.setGkid(String.valueOf(rs.getLong("ID")));
			listlosdata.add(los);
		}
		if (rs != null)
			rs.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsabasedlist ends");
		return listlosdata;

	}

	@Override
	@Transactional
	public List<Losdata> getstatusfromexceldetails() throws Exception {
		LOGGER.info("DSADaoImpl getdsabasedlist starts");
		List<Losdata> listlosdata = new ArrayList<Losdata>();
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		String sqlQuery = "SELECT e.cliendid,e.status,em.`name` FROM exceldetails e INNER JOIN employee em ON e.`cmuserid`=em.`userid`;";
		ResultSet rs = statement.executeQuery(sqlQuery);
		while (rs.next()) {
			Losdata los = new Losdata();
			los.setCmname(rs.getString("name"));
			los.setGkid(String.valueOf(rs.getLong("cliendid")));
			los.setAllocated(rs.getString("status"));
			listlosdata.add(los);
		}
		if (rs != null)
			rs.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsabasedlist ends");
		return listlosdata;

	}

	@Override
	public InputDsaDto getproductbyuserid(Long userid) throws Exception {
		LOGGER.info("DSADaoImpl getdsadetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		InputDsaDto inputdsa = new InputDsaDto();
		String sqlQuery = "SELECT employee.productype FROM `employee` INNER JOIN user ON employee.userid=user.id WHERE user.`id`=\""
				+ userid + "\"";
		resultSet = statement.executeQuery(sqlQuery);

		while (resultSet.next()) {

			inputdsa.setProduct(resultSet.getString("productype"));
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getdsadetails ends");
		return inputdsa;
	}

	@Override
	@Transactional
	public long addSMInsentiveInfo(SMInsentive sminsentive) throws Exception {
		LOGGER.info("DSADaoImpl addSMInsentiveInfo start");
		long id = 0;
		try {
			SMInsentive app = (SMInsentive) sessionFactory.getCurrentSession().merge(sminsentive);
			id = app.getSmincentiveid();
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addSMInsentiveInfo details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addSMInsentiveInfo end");
		return id;

	}

	/**
	 * This api is used for getting data from sminfo
	 * 
	 * @param Id
	 * @param request
	 * @param session
	 * @return Applicant
	 * @throws Exception
	 */
	@Override
	@Transactional
	public SMInsentive getSMInsentiveInfo(long id) throws Exception {
		LOGGER.info("DSADaoImpl getSMInsentiveInfo start");
		try {
			String queryString = "select sminsentive from SMInsentive sminsentive where sminsentive.smincentiveid =:id";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("id", id);
			return (SMInsentive) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException(
					"Exception occured while getting getSMInsentiveInfo details.Reason : " + exception);
		}
	}

	@Override
	@Transactional
	public List<InputDsaDto> getcmdetails(String role) throws Exception {
		LOGGER.info("DSADaoImpl getsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT employee.`name`,employee.`ID`AS cmid ,employee.`employeeid`"
				+ "FROM employee INNER JOIN upf.`user` AS u "
				+ "INNER JOIN upf.`role` AS r ON u.`ID`=employee.`userid` AND u.`role_id`=r.`ID`" + "WHERE  r.`role`=\""
				+ role + "\"";
		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> cmlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("cmid"));
			inputdsa.setEmployeeid(resultSet.getString("employeeid"));
			cmlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getsmdetails ends");
		return cmlist;
	}

	@Override
	@Transactional
	public List<InputDsaDto> getmapcmdetails(long cmid) throws Exception {
		LOGGER.info("DSADaoImpl getmapsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT srm.reporter_id,employee.`name`,employee.`state`,employee.`productype`,employee.`ID` AS empid,"
				+ "employee.`employeeid` FROM employee INNER JOIN upf.`sm_role_mapping` AS srm  ON employee.`ID`=srm.`reporter_id`"
				+ " WHERE srm.reporting_id=\"" + cmid + "\"";

		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> smlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("empid"));
			inputdsa.setEmployeeid(resultSet.getString("employeeid"));
			inputdsa.setState(resultSet.getString("state"));
			inputdsa.setProduct(resultSet.getString("productype"));
			inputdsa.setReporter_id(resultSet.getLong("reporter_id"));
			smlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getmapsmdetails ends");
		return smlist;
	}

	@Override
	@Transactional
	public List<InputDsaDto> getuppercmdetails(long smid) throws Exception {
		LOGGER.info("DSADaoImpl getmapsmdetails start");
		Connection connection = ConnectionFactory.getConnection();
		Statement statement = connection.createStatement();
		ResultSet resultSet = null;
		String sqlQuery = "SELECT srm.reporting_id,srm.`reporter_id`,employee.`name`,employee.`state`,employee.`emailid`,employee.`city`,employee.`ID` AS empid,employee.`employeeid`,r.`role` FROM employee INNER JOIN upf.user AS u INNER JOIN upf.role AS r INNER JOIN upf.`sm_role_mapping` AS srm  ON employee.`ID`=srm.`reporting_id` AND u.id=employee.`userid` AND u.`role_id`=r.`id` WHERE srm.reporter_id=\""
				+ smid + "\"";

		resultSet = statement.executeQuery(sqlQuery);
		List<InputDsaDto> smlist = new ArrayList<InputDsaDto>();
		while (resultSet.next()) {
			InputDsaDto inputdsa = new InputDsaDto();
			inputdsa.setName(resultSet.getString("name"));
			inputdsa.setSm_id(resultSet.getLong("empid"));
			inputdsa.setEmailid(resultSet.getString("emailid"));
			inputdsa.setRole(resultSet.getString("role"));
			smlist.add(inputdsa);
		}

		if (resultSet != null)
			resultSet.close();
		if (statement != null)
			statement.close();
		if (connection != null)
			connection.close();
		LOGGER.info("DSADaoImpl getmapsmdetails ends");
		return smlist;
	}

	@Override
	@Transactional
	public void addpincode(List<String> listpincode) throws Exception {
		LOGGER.info("DSADaoImpl addpincode start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		for (String pincode : listpincode) {
			psmt = connection.prepareStatement("SELECT COUNT(*) as count FROM ogl_validation WHERE pincode=?;");
			psmt.setString(1, pincode);
			ResultSet rs = psmt.executeQuery();
			long count = 0;
			while (rs.next()) {
				count = rs.getLong("count");
			}
			if (count == 0) {
				psmt = connection.prepareStatement("INSERT INTO ogl_validation (pincode,sbl)VALUES(?,?);");
				psmt.setString(1, pincode);
				psmt.setString(2, "yes");
				int x = psmt.executeUpdate();
			}

		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl addpincode ends");

	}

	@Override
	@Transactional
	public List<InputDsaDto> getNsmData() throws Exception {
		LOGGER.info("DSADaoImpl getNsmData start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		psmt = connection.prepareStatement(
				"SELECT * FROM employee INNER JOIN role INNER JOIN user ON user.`role_id`=role.`id` AND employee.`userid`=user.`id` WHERE role.`role`='NSM'; ");

		ResultSet rs = psmt.executeQuery();
		String emailid = null;
		while (rs.next()) {
			InputDsaDto dto = new InputDsaDto();
			dto.setEmailid(rs.getString("emailid"));
			dto.setPhoneno(rs.getLong("phoneno"));
			list.add(dto);

		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getNsmData ends");
		return list;

	}

	@Override
	@Transactional
	public List<InputDsaDto> getAccountData() throws Exception {
		LOGGER.info("DSADaoImpl getAccountData start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		psmt = connection.prepareStatement(
				"SELECT * FROM employee INNER JOIN role INNER JOIN user ON user.`role_id`=role.`id` AND employee.`userid`=user.`id` WHERE role.`role`='ACCOUNT'; ");

		ResultSet rs = psmt.executeQuery();
		String emailid = null;
		while (rs.next()) {
			InputDsaDto dto = new InputDsaDto();
			dto.setEmailid(rs.getString("emailid"));
			dto.setPhoneno(rs.getLong("phoneno"));
			list.add(dto);

		}
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getAccountData ends");
		return list;

	}

	@Override
	@Transactional
	public List<InputDsaDto> getInvoiceData(String date) throws Exception {
		LOGGER.info("DSADaoImpl getInvoiceData start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		ResultSet rs2 = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		psmt = connection
				.prepareStatement("SELECT COUNT(*) as count from invoice where updated_date like '" + date + "%'");
		rs2 = psmt.executeQuery();
		long count = 0;
		while (rs2.next()) {
			count = rs2.getLong("count");
		}
		if (count != 0) {
			psmt = connection.prepareStatement(
					"SELECT DISTINCT dsacode,month,year,quarter,invoiceno from invoice where updated_date like '" + date
							+ "%'");
			rs = psmt.executeQuery();

			while (rs.next()) {
				InputDsaDto dto = new InputDsaDto();
				dto.setMonth(rs.getString("month"));
				dto.setYear(rs.getString("year"));
				dto.setDsacode(rs.getString("dsacode"));
				dto.setInvoiceno(rs.getString("invoiceno"));

				psmt = connection.prepareStatement(
						"SELECT DISTINCT finalpayoutamount_total FROM dsadetails WHERE month=? AND year=? AND dsacode=?;");
				psmt.setString(1, dto.getMonth());
				psmt.setString(2, dto.getYear());
				psmt.setString(3, dto.getDsacode());
				rs1 = psmt.executeQuery();
				while (rs1.next()) {
					dto.setFinalpayoutamount(rs1.getDouble("finalpayoutamount_total"));
				}

				list.add(dto);
			}
		}
		if (rs1 != null)
			rs.close();
		if (rs != null)
			rs.close();
		if (psmt != null)
			psmt.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getInvoiceData ends");
		return list;

	}

	@Override
	public double getFinalPayoutTotal() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional
	public InputDsaDto getStateCode(String statecode) throws Exception {
		LOGGER.info("DSADaoImpl getStateCode start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		InputDsaDto inputDsaDto = new InputDsaDto();
		psmt = connection.prepareStatement("SELECT * FROM statecode WHERE statecode=?");
		psmt.setString(1, statecode);

		rs = psmt.executeQuery();
		while (rs.next()) {
			inputDsaDto.setState(rs.getString("state"));
			inputDsaDto.setStatecode(rs.getString("statecode"));
		}

		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getStateCode ends");
		return inputDsaDto;
	}

	@Override
	@Transactional
	public long checkInvoiceData(String date) throws Exception {
		LOGGER.info("DSADaoImpl checkInvoiceData start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection
				.prepareStatement("SELECT COUNT(*) as count from invoice where updated_date like '" + date + "%'");
		rs = psmt.executeQuery();
		long count = 0;
		while (rs.next()) {
			count = rs.getLong("count");
		}
		if (rs != null)
			rs.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl checkInvoiceData ends");
		return count;
	}

	@Override
	public void deleteInvoice(List<Invoice> invoice) throws Exception {
		LOGGER.info("DSADaoImpl deleteInvoice start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		String status = null;

		for (Invoice in : invoice) {
			psmt = connection.prepareStatement("DELETE FROM listlos WHERE invoiceid=?");
			psmt.setLong(1, in.getInvoiceid());
			psmt.executeUpdate();

			psmt = connection.prepareStatement("DELETE FROM invoice WHERE id=?");
			psmt.setLong(1, in.getInvoiceid());
			int x1 = psmt.executeUpdate();

		}
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl deleteInvoice end");

	}

	@Override
	@Transactional
	public long checkInvoice(Invoice invoice) throws Exception {
		LOGGER.info("DSADaoImpl checkInvoice start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement(
				"SELECT COUNT(*) as count FROM invoice WHERE dsacode=? AND productname=? AND MONTH=? AND YEAR=? AND state=?");
		psmt.setString(1, invoice.getDsacode());
		psmt.setString(2, invoice.getProductname());
		psmt.setString(3, invoice.getMonth());
		psmt.setString(4, invoice.getYear());
		psmt.setString(5, invoice.getState());
		rs = psmt.executeQuery();
		long count = 0;
		while (rs.next()) {
			count = rs.getLong("count");
		}
		if (rs != null)
			rs.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl checkInvoice ends");
		return count;
	}

	@Override
	@Transactional
	public void updateInvoice(Invoice invoice) throws Exception {
		LOGGER.info("DSADaoImpl updateInvoice start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement(
				"UPDATE invoice SET invoicepath=?,invoicename=?,gstnumber=?,invoiceno=?,invoiceamount=?,loan_billing_state=?,submit_flag=? WHERE dsacode=? AND productname=? AND month=? AND year=? AND state=?;");
		psmt.setString(1, invoice.getInvoicepath());
		psmt.setString(2, invoice.getInvoicename());
		psmt.setString(3, invoice.getGstnumber());
		psmt.setString(4, invoice.getInvoiceno());
		psmt.setLong(5, invoice.getInvoiceamount());
		psmt.setString(6, invoice.getLoan_billing_state());
		psmt.setString(7, invoice.getSubmit_flag());
		psmt.setString(8, invoice.getDsacode());
		psmt.setString(9, invoice.getProductname());
		psmt.setString(10, invoice.getMonth());
		psmt.setString(11, invoice.getYear());
		psmt.setString(12, invoice.getState());

		psmt.executeUpdate();

		if (rs != null)
			rs.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl updateInvoice ends");

	}

	@Override
	public Invoice getInvoicePath(DsaDetailsEntity dsa) throws Exception {
		LOGGER.info("DSADaoImpl getInvoicePath start");
		Connection connection = ConnectionFactory.getConnection();
		ResultSet rs = null;
		PreparedStatement psmt = null;
		Invoice invoice = new Invoice();
		psmt = connection.prepareStatement(
				"SELECT DISTINCT invoiceno,invoicepath,invoiceamount,ID FROM invoice WHERE dsacode=? AND productname=? AND month=? AND year=? AND state=?;");
		psmt.setString(1, dsa.getDsacode());
		psmt.setString(2, dsa.getProductname());
		psmt.setString(3, dsa.getMonth());
		psmt.setString(4, dsa.getYear());
		psmt.setString(5, dsa.getState());
		rs = psmt.executeQuery();
		if (rs.next()) {
			invoice.setInvoiceno(rs.getString("invoiceno"));
			invoice.setInvoicepath(rs.getString("invoicepath"));
			invoice.setInvoiceamount(rs.getLong("invoiceamount"));
			invoice.setInvoiceid(rs.getLong("ID"));
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getInvoicePath ends");
		return invoice;
	}

	@Override
	@Transactional
	public List<InputDsaDto> getStatedata() throws Exception {
		LOGGER.info("DSADaoImpl getStatedata start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		psmt = connection.prepareStatement("SELECT DISTINCT state FROM invoice order by state;");
		rs = psmt.executeQuery();
		while (rs.next()) {
			InputDsaDto inputDsaDto = new InputDsaDto();
			inputDsaDto.setState(rs.getString("state"));
			list.add(inputDsaDto);
		}

		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getStatedata ends");
		return list;
	}

	@Override
	@Transactional
	public String checkInvoiceNo(Invoice invoice) throws Exception {

		LOGGER.info("DSADaoImpl checkInvoiceNo start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		String status = null;
		long x = 0;
		String submitFlag = "";

		if (invoice.getInvoiceid() == 0) {

			psmt = connection.prepareStatement("SELECT COUNT(*) FROM invoice WHERE invoiceno=? AND dsacode=?;");
			psmt.setString(1, invoice.getInvoiceno());
			psmt.setString(2, invoice.getDsacode());
			rs = psmt.executeQuery();

			while (rs.next()) {
				x = rs.getInt(1);

			}
		}
		if (invoice.getInvoiceid() != 0) {

			psmt = connection
					.prepareStatement("SELECT COUNT(*),submit_flag FROM invoice WHERE invoiceno=? AND dsacode=?;");
			psmt.setString(1, invoice.getInvoiceno());
			psmt.setString(2, invoice.getDsacode());
			rs = psmt.executeQuery();

			while (rs.next()) {
				x = rs.getInt(1);
				submitFlag = rs.getString(2) == null ? "" : rs.getString(2);

			}
		}
		if (!submitFlag.equalsIgnoreCase("Yes")) {
			if (invoice.getSubmit_flag().equalsIgnoreCase("No") && (invoice.getInvoiceid() != 0)) {
				psmt = connection.prepareStatement(
						"SELECT COUNT(*) FROM invoice WHERE invoiceno=? AND dsacode=? and submit_flag!=false;");
				psmt.setString(1, invoice.getInvoiceno());
				psmt.setString(2, invoice.getDsacode());
				rs = psmt.executeQuery();

				while (rs.next()) {
					x = rs.getInt(1);
				}
			}
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl checkInvoiceNo ends");
		return status;
	}

	@Override
	@Transactional
	public String getPaymentFlagStatus(Invoice in) throws Exception {
		LOGGER.info("DSADaoImpl getStateCode start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		String flag = null;
		psmt = connection.prepareStatement(
				"SELECT DISTINCT paymentflag FROM dsadetails WHERE dsacode=? AND MONTH=? AND YEAR=? AND state=?;");

		psmt.setString(1, in.getDsacode());
		psmt.setString(2, in.getMonth());
		psmt.setString(3, in.getYear());
		psmt.setString(4, in.getState());

		rs = psmt.executeQuery();
		while (rs.next()) {
			flag = rs.getString("paymentflag");

		}

		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getStateCode ends");
		return flag;
	}

	@Override
	@Transactional
	public ArrayList<DSAEntity> getUnverifiedDsaClientInfo() {
		LOGGER.info("DSADaoImpl getUnverifiedDsaClientInfo start");
		ArrayList<DSAEntity> listOfObj = null;
		try {
			Session currentSession = sessionFactory.getCurrentSession();
			Criteria query = currentSession.createCriteria(DSAEntity.class);
			query.add(Restrictions.like("companyname", "UNVERIFIED", MatchMode.START));
			listOfObj = (ArrayList<DSAEntity>) query.list();
			LOGGER.info("listOfObj==" + listOfObj.size());
			return listOfObj;
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getSMInfo details.Reason : " + exception);
		}
	}
	
	@Override
	@Transactional
	public ClientInfo getclientinfodetail(long losid) throws Exception {
		LOGGER.info("DSADaoImpl getDsaInfo start");
		try {
			String queryString = "select c from ClientInfo c where c.losid =:losid";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("losid", losid);
			return (ClientInfo) query.uniqueResult();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getDsaInfo details.Reason : " + exception);
		}
	}
	
	@Override
	@Transactional
	public void updateClientInfo(String cname, long losid) throws Exception {
		LOGGER.info("DSADaoImpl updateClientInfo start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("UPDATE client_info SET LOS_ID=? WHERE COMPANY_NAME=?;");
		psmt.setLong(1, losid);
		psmt.setString(2, cname);
		psmt.executeUpdate();

		if (rs != null)
			rs.close();
		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl updateClientInfo ends");

	}

	@Override
	@Transactional
	public List<InputDsaDto> getStateFromDsadetails(DsaDetailsEntity in) throws Exception {
		LOGGER.info("DSADaoImpl getStateCode start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		String flag = null;
		List<InputDsaDto> list = new ArrayList<InputDsaDto>();
		psmt = connection.prepareStatement(
				"SELECT DISTINCT state FROM dsadetails WHERE dsacode=? AND MONTH=? AND YEAR=? AND productname=?;");

		psmt.setString(1, in.getDsa());
		psmt.setString(2, in.getMonth());
		psmt.setString(3, in.getYear());
		psmt.setString(4, in.getProductname());

		rs = psmt.executeQuery();
		while (rs.next()) {
			InputDsaDto dto = new InputDsaDto();
			dto.setState(rs.getString("state"));
			list.add(dto);
		}

		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl getStateCode ends");
		return list;
	}

	@Override
	@Transactional
	public String checkDsaOnDsacode(String dsacode) throws Exception {
		LOGGER.info("DSADaoImpl checkDsaOnDsacode start");
		Connection connection = ConnectionFactory.getConnection();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		psmt = connection.prepareStatement("SELECT COUNT(*) FROM `dsaclientinfo` WHERE dsacode=?;");
		psmt.setString(1, dsacode);
		String status = null;
		long x = 0;
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt(1);
		}

		if (x == 0) {
			status = "absent";
		} else {
			status = "present";
		}
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(connection);
		LOGGER.info("DSADaoImpl checkDsaOnDsacode ends");
		return status;
	}

	@Override
	@Transactional
	public long getDsaCount(DsaDetailsEntity dsadto) throws Exception {
		LOGGER.info("DSADaoImpl getDsaCount start");
		  StringBuilder connectionUrl = new StringBuilder();
		  Connection con = null;
		  connectionUrl.append(MSSQL_URL).append(";").append("user=").append(MSSQL_DB_USERNAME).append(";")
		    .append("password=").append(MSSQL_DB_PASSWORD);
		  Class.forName(MSSQL_DB_DRIVER);
			con = DriverManager.getConnection(connectionUrl.toString());
		PreparedStatement psmt = null;
		ResultSet rs = null;
		long x = 0;
		psmt = con.prepareStatement("SELECT COUNT(*) as count FROM cams..loandetails L (NOLOCK) INNER JOIN cams..loansubtype LS ON LS.subtypecode = L.loansubtype INNER JOIN cams..STATUSMASTER SM (NOLOCK) ON L.STATUS = SM.STATUSCODE AND UPPER(SM.LANGID) = 'EN-GB' LEFT JOIN CBS..CUSTOMER C (NOLOCK) ON L.CUSTOMERCODE = C.CODE LEFT JOIN CBS..INDUSTRY IND (NOLOCK) ON L.INDUSTRY = IND.CODE LEFT JOIN  CBS..users  DSA (NOLOCK) ON L.CRMSUPERVISOR = DSA.alphacode LEFT JOIN CBS..loandetails CAML (NOLOCK) ON CAML.ACNO = L.CBSACNO LEFT JOIN CBS..DISBURSEMENTSCHEDULE CBSDIS (NOLOCK) ON CBSDIS.ACNO = L.CBSACNO LEFT JOIN CBS..branchmaster Br ON Br.code = l.branchcode LEFT JOIN CBS..cities Ct ON CT.NAME = CASE WHEN Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) = '' THEN Br.NAME ELSE Substring(Br.NAME, 1, Charindex(' ', Br.NAME)) END LEFT JOIN CBS..states St ON St.code = Ct.state  WHERE C.CustomerType =13 and CBSDIS.DisbDate is not null and Year(CBSDIS.DisbDate)=? and month(CBSDIS.DisbDate)=? and L.LoanSubType =? ");
		psmt.setString(1, dsadto.getYear());
		psmt.setString(2, dsadto.getMonth());
		psmt.setLong(3, dsadto.getProductcode());
		rs = psmt.executeQuery();
		if (rs.next()) {
			x = rs.getInt("count");
		}
		
		if (rs != null)
			rs.close();

		ConnectionFactory.closeConnection(con);
		LOGGER.info("DSADaoImpl getDsaCount ends");
		return x;
	}

	@Override
	@Transactional
	public PayoutDate getPayoutdate(String year,String month) throws Exception {
		PayoutDate festivalPayoutDate=new PayoutDate();
		try{
			String queryString = "select monthlyslab from PayoutDate monthlyslab  WHERE year=:year AND month=:month";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("year", year);
			query.setParameter("month", month);
			PayoutDate payoutDate= (PayoutDate) query.uniqueResult();
			
			return payoutDate;
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	
	@Override
	@Transactional
	public List<FestivalPayout> getPayoutFestivaldate(String year,String month) throws Exception {
		FestivalPayout festivalPayout=new FestivalPayout();
		try{
			String queryString = "select monthlyslab from FestivalPayout monthlyslab  WHERE  year=:year AND month=:month";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("year", year);
			query.setParameter("month", month);
			return query.list();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	@Override
	@Transactional
	public long addPayout(PayoutDate blMonthlySlab) throws Exception {
		LOGGER.info("DSADaoImpl addBLMonthlyslab start");
		long id = 0;
		try {
			PayoutDate app = (PayoutDate) sessionFactory.getCurrentSession().merge(blMonthlySlab);
			id = app.getDateid();
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addBLMonthlyslab details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addBLMonthlyslab end");
		return id;

	}

	
	@Override
	@Transactional
	public long addFestivalPayout(FestivalPayout festivalPayout) throws Exception {
		LOGGER.info("DSADaoImpl addBLMonthlyslab start");
		long id = 0;
		try {
			FestivalPayout app = (FestivalPayout) sessionFactory.getCurrentSession().merge(festivalPayout);
			id = app.getDateid();
		} catch (Exception exception) {
			LOGGER.debug("Exception occured while adding addBLMonthlyslab details in database.Reason : " + exception);
		}
		LOGGER.info("DSADaoImpl addBLMonthlyslab end");
		return id;

	}

	@Override
	@Transactional
	public List<PayoutDate> getPayout(String producttype) throws Exception {
		//PayoutDate payoutDate1=new PayoutDate();
		try{
			String queryString = "select monthlyslab from PayoutDate monthlyslab where producttype=:producttype";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("producttype", producttype);
			return query.list();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	
	@Override
	@Transactional
	public List<BLMonthlyPayout> getBlmonthlypayout()throws Exception {
		BLMonthlyPayout payoutDate=new BLMonthlyPayout();
		try{
			
			String queryString = "select monthlyslab from BLMonthlyPayout monthlyslab ";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			return query.list();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	
	
	@Override
	@Transactional
	public FestivalPayout getFestivalPayout(FestivalPayout festivalPayout) throws Exception {
		FestivalPayout festivalPayout1=new FestivalPayout();
		try{
			
			String queryString = "select monthlyslab from FestivalPayout monthlyslab  WHERE  year=:year AND month=:month AND producttype=:producttype";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			query.setParameter("year",festivalPayout.getYear());
			query.setParameter("month",festivalPayout.getMonth());
			query.setParameter("producttype",festivalPayout.getProducttype());
			festivalPayout1= (FestivalPayout) query.uniqueResult();
			
			return festivalPayout1;
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	
	
	@Override
	@Transactional
	public List<FestivalMonthlyPayout> getFestivalBlmonthlypayout() throws Exception {
		try{
			String queryString = "select monthlyslab from FestivalMonthlyPayout monthlyslab ";
			Query query = sessionFactory.getCurrentSession().createQuery(queryString);
			return query.list();
		} catch (Exception exception) {
			throw new RuntimeException("Exception occured while getting getPayoutdate details.Reason : " + exception);
		}
	}
	
}