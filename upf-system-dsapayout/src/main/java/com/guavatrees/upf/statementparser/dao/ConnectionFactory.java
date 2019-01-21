package com.guavatrees.upf.statementparser.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ConnectionFactory {
	private static Logger		logger	= LoggerFactory.getLogger(ConnectionFactory.class);
	private static Properties	props	= new Properties();

	public static Connection getConnection() throws Exception {
		if (props.isEmpty()) {
			loadProperties();
		}
		String className = props.getProperty("DB_DRIVER_CLASS");
		String url = props.getProperty("DB_URL");
		String userName = props.getProperty("DB_USERNAME");
		String password = props.getProperty("DB_PASSWORD");

		Class.forName(className);
		Connection connection = DriverManager.getConnection(url, userName, password);
		logger.info("Connection success.");
		return connection;
	}
	
	public static Connection getDexterConnection() throws Exception {
		if (props.isEmpty()) {
			loadProperties();
		}
		String className = props.getProperty("DB_DEXTER_DRIVER_CLASS");
		String url = props.getProperty("DB_DEXTER_URL");
		String userName = props.getProperty("DB_DEXTER_USERNAME");
		String password = props.getProperty("DB_DEXTER_PASSWORD");

		Class.forName(className);
		Connection connection = DriverManager.getConnection(url, userName, password);
		logger.info("Connection success.");
		return connection;
	}

	private static void loadProperties() {
		try {
			props.load(ConnectionFactory.class.getClassLoader()
					.getResourceAsStream("db.properties"));
		} catch (Exception e) {
			logger.error("Error occurred while loading db property file:" + e);
		}
	}
	
	public static void closeConnection(Connection connection) throws Exception {
		if(connection!=null){
			connection.close();
		}
	}

}