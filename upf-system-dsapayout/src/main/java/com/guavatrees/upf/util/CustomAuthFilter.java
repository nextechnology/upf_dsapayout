package com.guavatrees.upf.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.OncePerRequestFilter;

import com.guavatrees.upf.constants.UpfConstants;
import org.apache.commons.lang.StringUtils;
import org.json.JSONObject;

public class CustomAuthFilter extends OncePerRequestFilter {
	private static Logger LOGGER = LoggerFactory.getLogger(CustomAuthFilter.class);

	private static List<String> openAcessUrls = new ArrayList<String>();

	static {
		openAcessUrls.add("/upf-system/login/bootstrap.min.css");
		openAcessUrls.add("/upf-system/login/sb-admin-2.css");
		openAcessUrls.add("/upf-system/login/jquery.min.js");
		openAcessUrls.add("/upf-system/login/bootstrap.min.js");
		openAcessUrls.add("/upf-system/login/glimpse.toastr.js");
		openAcessUrls.add("/upf-system/login/glimpse.js");
		openAcessUrls.add("/upf-system/login/toastr.min.js");
		openAcessUrls.add("/upf-system/login/toastr.min.css");
		openAcessUrls.add("/upf-system/login/theme.min.css");
		/*
		openAcessUrls.add("/upf-system/upf/clientdetails/gk1Request");
		openAcessUrls.add("/upf-system/upf/clientInformation/ispresent");
		openAcessUrls.add("/upf-system/upf/clientdetails/gkData");
		openAcessUrls.add("/upf-system/upf/clientdetails/getCibil");
		openAcessUrls.add("/upf-system/upf/clientdetails/getCibilDirect");
		*/
		// Urls open for Dexter shiny page
		openAcessUrls.add("/upf-system/upf/clientdetails/checkPincode");
		openAcessUrls.add("/upf-system/upf/authentication/forgotPassword");
		openAcessUrls.add("/upf-system/upf/authentication/authenticate");
		openAcessUrls.add("/upf-system/upf/dextershiny/getdexterdata");
		  openAcessUrls.add("/upf-system/upf/dextershiny/adddexteroutput");
		  openAcessUrls.add("/upf-system/upf/dextershiny/adddextershiny");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getindustrymaster");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getbusinesssegment");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getmultiplier");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getdexteresc");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getdexteroutput");
		  openAcessUrls.add("/upf-system/upf/dextershiny/getcompname");
		  openAcessUrls.add("/upf-system/upf/debitCredit/dexter");

	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String uri = request.getRequestURI();
		LOGGER.debug("Requested Resource::" + uri+"tokenId="+request.getHeader("tokenId")+"access token"+request.getHeader("accessToken"));
		HttpSession session = request.getSession(false);
		String token = null, decryptedToken = null, userId = null;
		TokenEncrytedDecrypted encdecrptoken = new TokenEncrytedDecrypted();
		if (request.getHeader("accessToken") != null && request.getHeader("tokenId") != null) {
			token = (String) request.getHeader("accessToken");
			decryptedToken = encdecrptoken.DecryptText(token);
			userId = (String) request.getHeader("tokenId");
		}

		LOGGER.debug("Requested Resource::" + uri);
		boolean isStatic = isStaticResource(uri);
		if (isStatic) {
			filterChain.doFilter(request, response);
		}else {
			if (StringUtils.isNotBlank(token) && StringUtils.isNotBlank(userId)
					&& StringUtils.isNotBlank(decryptedToken)) {
				if (decryptedToken.equalsIgnoreCase(userId)) {
					filterChain.doFilter(request, response);
				} else {
					response.sendRedirect(
							System.getProperty(UpfConstants.UPF_WEB_CONTEXT_URL) + "/upf-system/upf/authentication/login");
				}

			} else {
			if (session == null) {
				LOGGER.info("Session value found null. So Redirecting to home page.");
				session = request.getSession(true);
				response.sendRedirect(
						System.getProperty(UpfConstants.UPF_WEB_CONTEXT_URL) + "/upf-system/upf/authentication/login");

			} else {
				if (uri.contains("/upf-system/upf/authentication/login")
						|| uri.contains("/upf-system/upf/authentication/authenticate")) {
					filterChain.doFilter(request, response);
				} else if (session.getAttribute(UpfConstants.USER) == null) {
					LOGGER.info("Unauthorized access request.Landing to login screen.");
					getServletContext().log("Unauthorized access request");

				} else {
					filterChain.doFilter(request, response);
				}
			}
		}
	}
	}

	private boolean isStaticResource(String uri) {
		for (String urlMatch : openAcessUrls) {
			if (uri.matches(urlMatch)) {
				return true;
			}
		}
		return false;
	}
}
