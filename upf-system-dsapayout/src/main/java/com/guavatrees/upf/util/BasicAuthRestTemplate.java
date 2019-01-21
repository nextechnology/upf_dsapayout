package com.guavatrees.upf.util;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.InterceptingClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

public class BasicAuthRestTemplate extends RestTemplate {
	
	private static Logger LOGGER = LoggerFactory.getLogger(BasicAuthRestTemplate.class);
	
	public void resetPassword(String username, String password){
		LOGGER.info("Re-initiate BasicAuthRestTemplate with username:"+username);
		addAuthentication(username, password);
	}

	private void addAuthentication(String username, String password) {
		if (null == username || null == password) {
			LOGGER.error("BasicAuthRestTemplate initiation failed due to bad username and password");
			return;
		}else{
			LOGGER.info("BasicAuthRestTemplate initiated with username:"+username);
			List<ClientHttpRequestInterceptor> interceptors = Collections
					.<ClientHttpRequestInterceptor> singletonList(
							new BasicAuthorizationInterceptor(username, password));
			setRequestFactory(new InterceptingClientHttpRequestFactory(getRequestFactory(),
					interceptors));
		}
		
	}

	private static class BasicAuthorizationInterceptor implements
			ClientHttpRequestInterceptor {

		private final String username;

		private final String password;

		public BasicAuthorizationInterceptor(String username, String password) {
			this.username = username;
			this.password = (password == null ? "" : password);
		}

		@Override
		public ClientHttpResponse intercept(HttpRequest request, byte[] body,
				ClientHttpRequestExecution execution) throws IOException {
			String token = Base64.encodeBase64Chunked((this.username + ":" + this.password).getBytes()).toString();
			request.getHeaders().add("Authorization", "Basic " + new String(token));
			request.getHeaders().setContentType(MediaType.APPLICATION_JSON);
			return execution.execute(request, body);
		}

	}
}