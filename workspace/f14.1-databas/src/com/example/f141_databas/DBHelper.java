package com.example.f141_databas;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

public class DBHelper extends SQLiteOpenHelper {

	private static final String TABLE_HIGHSCORES = "Highscores";
	private static final String COLUMN_ID = "_id";
	private static final String COLUMN_NAME = "name";
	private static final String COLUMN_POINTS = "points";
	
	private static final String CREATE_HIGHSCORES =
	"CREATE TABLE "+TABLE_HIGHSCORES+"("+
	COLUMN_ID+" INTEGER PRIMARY KEY AUTOINCREMENT, "+
	COLUMN_NAME+" VARCHAR(50) NOT NULL," +
	COLUMN_POINTS+" INTEGER);";
	private static final String DROP_HIGHSCORES = "DROP TABLE IF EXISTS "+TABLE_HIGHSCORES+";";
		
	public DBHelper(Context c) {
		super(c, "MyAppDb", null, 1);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL(CREATE_HIGHSCORES);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL(DROP_HIGHSCORES);
		onCreate(db);
		
	}
	
	public void addHighscore(String name, int points) {
		SQLiteDatabase db = getWritableDatabase();
		
		ContentValues row = new ContentValues();
		row.put("name", name);
		row.put("points", points);
		
		long rowId = db.insert(TABLE_HIGHSCORES, null , row);
		Log.d("hej", "new rowId "+rowId);
		
		db.close();
	}
	
}
