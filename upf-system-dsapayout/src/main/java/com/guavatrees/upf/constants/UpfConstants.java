package com.guavatrees.upf.constants;
import java.util.HashSet;

public class UpfConstants {
	public static final String STATUS = "Invalid";
	public static final String ROLE_TYPE = "AMDIN";
	public static final String USER = "USER";
	public static final String X_FORWARDED_FOR = "X-FORWARDED-FOR";
	public static final String USERBOOLEANVAL = "USERBOOLEANVAL";

	public static String UPF_WEB_CONTEXT_URL = "UPF_WEB_CONTEXT_URL";

	public static HashSet<String> environmentProperties = new HashSet();

	static {
		environmentProperties.add(UPF_WEB_CONTEXT_URL);
	}

	public enum UpfConstant {
		WebUI, Rest

	}
}
