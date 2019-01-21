package com.guavatrees.upf.service;

import java.util.Properties;

public interface UpfConfigVariables {
	void init();
	Properties getConfigurationFile();
	String getProperty(String key);
}
