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
		  openAcessUrls.add("/upf-system-dsapayout/dsa/getPayout");

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
