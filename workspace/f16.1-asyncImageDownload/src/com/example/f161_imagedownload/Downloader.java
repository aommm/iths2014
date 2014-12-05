package com.example.f161_imagedownload;

import java.io.InputStream;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.CookieStore;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.entity.BufferedHttpEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

public class Downloader {
	
	/**
	 * Downloads and returns an image in bitmap format.
	 * May take a long time!
	 */
	public static Bitmap downloadImage(String url) {

		HttpParams hparams = new BasicHttpParams();
		HttpConnectionParams.setConnectionTimeout(hparams, 10000);
		HttpConnectionParams.setSoTimeout(hparams, 10000);
		HttpGet get = new HttpGet(url);
		DefaultHttpClient client;
		try {
			client = new DefaultHttpClient(hparams);
			HttpResponse response = null;
			response = client.execute(get);
			HttpEntity responseEntity = response.getEntity();
			BufferedHttpEntity httpEntity = new BufferedHttpEntity(
					responseEntity);
			InputStream imageStream = httpEntity.getContent();
			return BitmapFactory.decodeStream(imageStream);

		} catch (Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}

}
