package com.example.f141_databas;

import java.util.List;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;


public class MainActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ((Button) findViewById(R.id.add_button)).setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View arg0) {
				String name = ((EditText) findViewById(R.id.name_edit)).getText().toString();
				int points = Integer.parseInt(((EditText) findViewById(R.id.points_edit)).getText().toString());
				addScore(name, points);
			}
        });

    }
    
    private void addScore(String name, int points) {
    	// TODO
    	DBHelper db = new DBHelper(this);
    	db.addHighscore(name, points);
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
