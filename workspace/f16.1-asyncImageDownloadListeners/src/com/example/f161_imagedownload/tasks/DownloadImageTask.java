package com.example.f161_imagedownload.tasks;

import android.graphics.Bitmap;
import android.os.AsyncTask;

import com.example.f161_imagedownload.Downloader;
import com.example.f161_imagedownload.MainActivity;

public class DownloadImageTask extends AsyncTask<String, Void, Bitmap> {

	private ImageDownloadedListener listener;
	
	public DownloadImageTask(ImageDownloadedListener listener) {
		this.listener = listener;
	}
	
	@Override
	protected Bitmap doInBackground(String... params) {
		Bitmap bitmap = Downloader.downloadImage(params[0]);
		return bitmap;
	}
	
	@Override
	protected void onPostExecute(Bitmap result) {
		listener.imageDownloaded(result);
	}
}

