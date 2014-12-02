package com.example.f151_extendcursoradapter;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;


public class MainActivity extends ActionBarActivity {

	DBHelper db;
	ListView list;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        db = new DBHelper(this);
        		
        list = (ListView) findViewById(R.id.contacts_list);
        
        // Demo 1
        Cursor allContactsCursor = db.getAllContacts();
        ContactsAdapter adapter = new ContactsAdapter(this, allContactsCursor);        
        list.setAdapter(adapter);
        
        // Demo 2
        list.setOnItemClickListener(new OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view, int position,
					long id) {
				Intent i = new Intent(MainActivity.this, ContactActivity.class);
				Log.d("hej", "id:"+id);
				i.putExtra("id", id);
				startActivity(i);
//				Cursor c = (Cursor) parent.getAdapter().getItem(position);
//				int id2 = c.getInt(c.getColumnIndex("_id"));
			}
		});
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
