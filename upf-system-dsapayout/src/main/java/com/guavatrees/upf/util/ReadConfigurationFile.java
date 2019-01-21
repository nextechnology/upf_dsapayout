package com.guavatrees.upf.util;

import java.io.InputStream;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ReadConfigurationFile {

	private static Logger					LOGGER			= LoggerFactory.getLogger(ReadConfigurationFile.class);
	public static Properties getProperties(String resourceName) {
		

		InputStream stream = ReadConfigurationFile.class.getClassLoader().getResourceAsStream(
				resourceName);
		Properties p = new Properties();
		try {
			p.load(stream);
		} catch (Exception e) {
			LOGGER.error("Exception in ReadConfigurationFile",e);
		}
		return p;
	}

}