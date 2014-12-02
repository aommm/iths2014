package com.example.f151_extendcursoradapter;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Color;
import android.support.v4.widget.CursorAdapter;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class ContactsAdapter extends CursorAdapter {

	public ContactsAdapter(Context context, Cursor c) {
		super(context, c, 0);
	}

	@Override
	public void bindView(View view, Context context, Cursor cursor) {
		Log.d("hej", "cursor:"+cursor.getColumnCount());
		for (int i = 0; i < cursor.getColumnCount(); i++) {
			Log.d("hej", "column name "+cursor.getColumnName(i));
		}
		// cursor points to right row automatically!
		TextView nameText = (TextView)view.findViewById(R.id.name_text);
		TextView phoneText = (TextView)view.findViewById(R.id.phone_text);
		String name = cursor.getString(cursor.getColumnIndex("name"));
		String phone = cursor.getString(cursor.getColumnIndex("phoneNumber"));
		nameText.setText(name);
		phoneText.setText(phone);
		
		// Change background color on every other row
		if (cursor.getPosition()%2 == 1) {
			view.setBackgroundColor(Color.WHITE);
		} else {
			view.setBackgroundColor(Color.LTGRAY);
		}
	}

	@Override
	public View newView(Context context, Cursor cursor, ViewGroup parent) {
		// Get "inflater" from context 
		LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		// Inflate list item XML
		View v = inflater.inflate(R.layout.list_item, null);
		// Return it
		return v;
	}

}
