package com.example.kamera;

import java.io.File;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;


public class MainActivity extends ActionBarActivity {

	private static final int REQUEST_CAMERA_CODE = 24;
	
	private OnClickListener buttonListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			showCamera();
		}
	};
	private ImageView imageView;
	private Button button;
	private Uri fileUri;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        imageView = (ImageView) findViewById(R.id.camera_image);
        button = (Button) findViewById(R.id.camera_button);
        button.setOnClickListener(buttonListener);
       
    }

    
    
    private void showCamera() {
    	// Show camera here
    	Intent i = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    	File photo = createFile();
    	fileUri = Uri.fromFile(photo);
    	i.putExtra(MediaStore.EXTRA_OUTPUT, fileUri);
    	if (i.resolveActivity(getPackageManager()) != null) {
    		startActivityForResult(i, REQUEST_CAMERA_CODE);
    	}
    }
    
    private File createFile() {
    	return new File(createDirectory(), "minFil.jpg");
    }
    
    private File createDirectory() {
    	File picDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
    	File ithsDir = new File(picDir, "ithsDir");
    	if (!ithsDir.exists()) {
    		if (!ithsDir.mkdirs()) {
    			Log.d("hej", "Couldn't create folder");
    		}
    	}
    	return ithsDir;
    }
    
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
    	if (requestCode == REQUEST_CAMERA_CODE) {
    		if (resultCode == RESULT_OK) {
    			Bitmap bild = (Bitmap) BitmapFactory.decodeFile(fileUri.getPath());
    			imageView.setImageBitmap(bild);
    		}
    	}
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
