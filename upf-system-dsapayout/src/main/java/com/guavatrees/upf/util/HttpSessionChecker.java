package com.guavatrees.upf.util;

import java.util.Date;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpSessionChecker implements HttpSessionListener{
	
	private static Logger LOGGER = LoggerFactory.getLogger(HttpSessionChecker.class);
	
	@Override
 	public void sessionCreated(HttpSessionEvent event) {
		LOGGER.info("Session ID "+ event.getSession().getId()+" created at "+ new Date());
    }
	@Override
    public void sessionDestroyed(HttpSessionEvent event) {
        LOGGER.info("Session ID "+ event.getSession().getId()+" destroyed at "+ new Date());
    }
}
