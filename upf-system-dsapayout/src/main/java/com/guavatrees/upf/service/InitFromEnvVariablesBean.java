package com.guavatrees.upf.service;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class InitFromEnvVariablesBean implements UpfConfigVariables{
private static final Logger LOGGER = Logger.getLogger(InitFromEnvVariablesBean.class.getName());
	
	private Properties properties;
	
	public void setProperties(Properties properties) {
		this.properties = properties;
	}
	
	@Override
	public void init() {
		Map<String, String> envVariables = System.getenv();
		for (Object key : properties.keySet()) {
			String value = null;
			if (envVariables.containsKey(key)) {
				value = envVariables.get(key);
			} else {
				value = properties.getProperty(key.toString());
			}
			System.setProperty(key.toString(), value);
			LOGGER.log(Level.INFO, "Environment variable: " + key + " => " + value);
		}
	}
	
	@Override
	public String getProperty(String key) {
		return System.getProperty(key);
	}

	@Override
	public Properties getConfigurationFile() {
		return properties;
	}

}
