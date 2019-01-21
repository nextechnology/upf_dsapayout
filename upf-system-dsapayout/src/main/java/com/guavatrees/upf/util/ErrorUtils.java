package com.guavatrees.upf.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.ObjectError;

public class ErrorUtils {

	// Compliant
	private ErrorUtils() {
		// Empty private constructor to prevent class instantiation.
	}

	public static String getValidationErrorMessage(List<ObjectError> objectErrors) {
		StringBuilder stringBuilder = new StringBuilder("Following are the errors : ");
		for (ObjectError objectError : objectErrors) {
			stringBuilder.append(objectError.getDefaultMessage());
		}
		return stringBuilder.toString();
	}

	public static List<String> getValidationErrorMessages(List<ObjectError> objectErrors) {
		List<String> allErrors = new ArrayList();
		for (ObjectError objectError : objectErrors) {
			String error = objectError.getDefaultMessage();
			allErrors.add(error);
		}
		return allErrors;
	}

}
