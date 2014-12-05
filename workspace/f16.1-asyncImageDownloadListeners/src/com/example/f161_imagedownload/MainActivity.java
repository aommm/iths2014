package com.example.f161_imagedownload;

import com.example.f161_imagedownload.tasks.DownloadImageTask;
import com.example.f161_imagedownload.tasks.ImageDownloadedListener;

import android.annotation.SuppressLint;
import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.StrictMode;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

public class MainActivity extends ActionBarActivity implements ImageDownloadedListener {

	private Button downloadButton;
	private Button stillAliveButton;
	private ImageView image;
		
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		downloadButton = (Button) findViewById(R.id.download_button);
		stillAliveButton = (Button) findViewById(R.id.still_alive_button);
		image = (ImageView) findViewById(R.id.image);
		downloadButton.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				downloadClicked();
			}
		});
		stillAliveButton.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				Toast.makeText(MainActivity.this, "yep, still alive!", Toast.LENGTH_SHORT).show();
			}
		});
	}
	
	private void downloadClicked() {
		// Create task
		DownloadImageTask task = new DownloadImageTask(this);
		// Run task
		task.execute("http://www.pafamilysafety.com/wp-content/uploads/2013/06/PHOTO-Hiker-on-Mountain.jpg");		
	}
	
	/**
	 * Is called when image has finished downloading (by task) 
	 * @param b - the downloaded image
	 */
	public void imageDownloaded(Bitmap b) {
		image.setImageBitmap(b);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
}
