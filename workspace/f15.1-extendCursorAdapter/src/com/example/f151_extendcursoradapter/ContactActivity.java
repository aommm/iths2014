package com.example.f151_extendcursoradapter;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;

public class ContactActivity extends ActionBarActivity {

	private DBHelper db;
	Contact c;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_contact);
		db = new DBHelper(this);
		
		long id = getIntent().getExtras().getLong("id");
		Log.d("hej", "id:"+id);
		c = db.getContact(id);
		Log.d("hej", "contact exists: "+(c!=null));
		
		((TextView) findViewById(R.id.name_text)).setText(c.getName());
		((TextView) findViewById(R.id.phone_text)).setText(c.getPhoneNumber());
		((Button)   findViewById(R.id.call_button)).setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				Uri uri = Uri.parse("tel:"+c.getPhoneNumber());
				Intent i = new Intent(Intent.ACTION_CALL, uri);
				ContactActivity.this.startActivity(i);
			}
		});
		
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.contact, menu);
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
