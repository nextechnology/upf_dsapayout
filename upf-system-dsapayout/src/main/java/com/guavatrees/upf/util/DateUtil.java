/**
 * 
 */
package com.guavatrees.upf.util;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Rinkesh
 * 
 */
public class DateUtil {

	private static final Logger LOGGER = LoggerFactory.getLogger(DateUtil.class);

	public static String dateToString(Date date, String dateFormat) {
		try {
			SimpleDateFormat formatter = new SimpleDateFormat(dateFormat);
			String stringDate = formatter.format(date);
			return stringDate;
		} catch (Exception e) {
			LOGGER.error("Error converting date to string " + date
					+ " Error : " + e.getMessage());
		}
		return null;
	}

	public static Date stringToDate(String date, String dateFormat) {
		try {
			SimpleDateFormat formatter = new SimpleDateFormat(dateFormat);
			Date formattedDate = formatter.parse(date);
			return formattedDate;
		} catch (ParseException e) {
			LOGGER.error("Error Parsing date: " + date);
		}
		return null;
	}
	
	public static int getMonthDiff(int year, int month, int day){
		Calendar calendar = Calendar.getInstance();
		Date endDate = new Date(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH));
		Date startDate = new Date(year, month, day);
		Calendar startCalendar = new GregorianCalendar();
		startCalendar.setTime(startDate);
		Calendar endCalendar = new GregorianCalendar();
		endCalendar.setTime(endDate);

		int diffYear = endCalendar.get(Calendar.YEAR) - startCalendar.get(Calendar.YEAR);
		return diffYear * 12 + endCalendar.get(Calendar.MONTH) - startCalendar.get(Calendar.MONTH);
	}
	
	public static String dateConvert(String D) {
		try {
			SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
			SimpleDateFormat format2 = new SimpleDateFormat("dd-MMM-yyyy");
			String dateString = format2.format(format1.parse(D));
			return dateString;
		} catch (Exception e) {
		}
		return D;
	}
	

	public static String dateMMMtoMM(String date) throws ParseException {
		SimpleDateFormat format1 = new SimpleDateFormat("dd-MMM-yyyy");
		SimpleDateFormat format2 = new SimpleDateFormat("dd-MM-yyyy");
		String[] split = date.split("-");
		if (split[1].substring(0, 1).matches("[0-9]")) {
			return date;
		} else { 
			String dateString = format2.format(format1.parse(date));
			return dateString;

		}
	}
}
