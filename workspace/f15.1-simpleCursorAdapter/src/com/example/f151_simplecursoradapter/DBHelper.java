package com.example.f151_simplecursoradapter;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabase.CursorFactory;
import android.database.sqlite.SQLiteOpenHelper;

public class DBHelper extends SQLiteOpenHelper {

	public DBHelper(Context context) {
		super(context, "MyDb", null, 3);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL("CREATE TABLE Contacts ("+
			"_id INTEGER PRIMARY KEY AUTOINCREMENT, "+
			"name VARCHAR(100) NOT NULL, "+
			"phoneNumber VARCHAR(15));");
		db.execSQL("INSERT INTO Contacts (name, phoneNumber) "+
			"VALUES(\"Niklas\", \"0730123456\")");
		db.execSQL("INSERT INTO Contacts (name, phoneNumber) "+
				"VALUES(\"Jonathan\", \"123\")");


	}

	public Cursor getAllContacts() {
		return getReadableDatabase().query("Contacts", null, null, null, null, null, null);
	}
	
	
	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS Contacts;");
		onCreate(db);
	}

}
