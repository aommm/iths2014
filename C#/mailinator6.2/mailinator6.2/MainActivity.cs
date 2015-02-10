using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

using AUri = Android.Net.Uri;

namespace mailinator62
{
	[Activity (Label = "mailinator6.2", MainLauncher = true, Icon = "@drawable/icon")]
	public class MainActivity : Activity
	{
		private Button sendButton;
		private CheckBox capsCheckBox;
		private CheckBox leetCheckBox;
		private CheckBox repeatCheckBox;
		private EditText subjectEdit;
		private EditText textEdit;

		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);
			SetContentView (Resource.Layout.Main);

			// Find elements
			sendButton = FindViewById<Button> (Resource.Id.send_button);
			capsCheckBox = FindViewById<CheckBox> (Resource.Id.caps_check);
			leetCheckBox = FindViewById<CheckBox> (Resource.Id.leet_check);
			repeatCheckBox = FindViewById<CheckBox> (Resource.Id.repeat_check);
			subjectEdit = FindViewById<EditText> (Resource.Id.subject_edit);
			textEdit = FindViewById<EditText> (Resource.Id.text_edit);

			sendButton.Click += sendMail;
		}

		private void sendMail(object sender, EventArgs args)
		{
			string text = textEdit.Text;
			string subject = subjectEdit.Text;

			if (capsCheckBox.Checked)
			{
				text = text.ToUpper();
				subject = text.ToUpper();
			}
			if (repeatCheckBox.Checked)
			{
				for (int i = 0; i < 5; i++) {
					text += text;
					subject += subject;
				}
			}
			if (leetCheckBox.Checked)
			{
				text = text.Replace ('l', '1').Replace('e','3').Replace('t','7');
				text = text.Replace ('L', '1').Replace('E','3').Replace('T','7');
			}

			AUri u = AUri.Parse ("mailto:");
			Intent emailIntent = new Intent(Intent.ActionSendto, u);
			emailIntent.PutExtra(Intent.ExtraSubject, subject);
			emailIntent.PutExtra(Intent.ExtraText, text);
			StartActivity(Intent.CreateChooser(emailIntent, "Send email..."));

		}
	}
}


