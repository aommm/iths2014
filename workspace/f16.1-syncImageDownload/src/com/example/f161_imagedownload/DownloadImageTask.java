package com.example.f161_imagedownload;

import android.graphics.Bitmap;
import android.os.AsyncTask;

public class DownloadImageTask extends AsyncTask<String, Void, Bitmap> {

	private ImageDownloadedListener listener;
	public DownloadImageTask(ImageDownloadedListener listener) {
		this.listener = listener;
	}
	
	
	@Override
	protected Bitmap doInBackground(String... params) {
		Bitmap img = Downloader.downloadImage(params[0]);
		return img;
	}
	
	@Override
	protected void onPostExecute(Bitmap result) {
		listener.imageDownloaded(result);
	}
	
}

