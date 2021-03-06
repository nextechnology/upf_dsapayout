package com.guavatrees.upf.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveInputStream;
import org.apache.commons.io.IOUtils;

/**
 * This utility extracts files and directories of a standard zip file to a
 * destination directory.
 * 
 * @author www.codejava.net
 *
 */
public class UnzipUtility {
	/**
	 * Size of the buffer to read/write data
	 */
	// private static final int BUFFER_SIZE = 4096;

	/**
	 * Extracts a zip file specified by the zipFilePath to a directory specified
	 * by destDirectory (will be created if does not exists)
	 * 
	 * @param zipFilePath
	 * @param destDirectory
	 * @throws IOException
	 */
	// public void unzip(String zipFilePath, String destDirectory)
	// throws IOException {
	// File destDir = new File(destDirectory);
	// if (!destDir.exists()) {
	// destDir.mkdir();
	// }
	// ZipInputStream zipIn = new ZipInputStream(new FileInputStream(
	// zipFilePath));
	// ZipEntry entry = zipIn.getNextEntry();
	// // iterates over entries in the zip file
	// while (entry != null) {
	// System.out.println("UnzipFileName : " + entry.getName());
	// String filePath = destDirectory + File.separator + entry.getName();//
	// .replace(" ",
	// // "_");
	// System.out.println("filePath : " + filePath);
	// if (!entry.isDirectory()) {
	// // if the entry is a file, extracts it
	// extractFile(zipIn, filePath);
	// } else {
	// // if the entry is a directory, make the directory
	// File dir = new File(filePath);
	// dir.mkdir();
	// }
	// zipIn.closeEntry();
	// entry = zipIn.getNextEntry();
	// }
	// zipIn.close();
	// }

	public String unzip(String zipFilePath, String destDirectory)
			throws IOException {
		String filePath = null;
		File destDir = new File(destDirectory);
		if (!destDir.exists()) {
			destDir.mkdir();
		}
		InputStream inputStream = new FileInputStream(zipFilePath);
		ZipArchiveInputStream in = new ZipArchiveInputStream(inputStream);
		ZipArchiveEntry entry = in.getNextZipEntry();
		while (entry != null) {
			if (entry.isDirectory()) {
				entry = in.getNextZipEntry();
				continue;
			}
			File curfile = new File(destDir, entry.getName());
			File parent = curfile.getParentFile();
			
			filePath = parent.getPath();
			if (!parent.exists()) {
				parent.mkdirs();
			}
			OutputStream out = new FileOutputStream(curfile);
			IOUtils.copy(in, out);
			out.close();
			entry = in.getNextZipEntry();
		}
		in.close();
		return filePath;
	}

	/**
	 * Extracts a zip entry (file entry)
	 * 
	 * @param zipIn
	 * @param filePath
	 * @throws IOException
	 */
	// private void extractFile(ZipInputStream zipIn, String filePath)
	// throws IOException {
	// System.out.println(">> Extract");
	// BufferedOutputStream bos = new BufferedOutputStream(
	// new FileOutputStream(filePath));
	// byte[] bytesIn = new byte[BUFFER_SIZE];
	// int read = 0;
	// while ((read = zipIn.read(bytesIn)) != -1) {
	// bos.write(bytesIn, 0, read);
	// }
	// bos.close();
	// System.out.println("Extract <<");
	// }

	// public static void main(String[] args) throws IOException {
	// new UnzipUtility()
	// .unzip("/Users/basitazeemsheikh/Documents/Er.Basit/MyProjects/Harshal-NextTech/upf_project/resources/file_upload_issue/Highness.zip",
	// "/Users/basitazeemsheikh/Documents/Er.Basit/MyProjects/Harshal-NextTech/upf_project/resources/file_upload_issue/prog_unzip");
	// }
}
