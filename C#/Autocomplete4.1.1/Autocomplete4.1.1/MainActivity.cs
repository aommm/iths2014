using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using System.Collections.Generic;
using Autocomplete4._1._1.Resources.model;

namespace Autocomplete4._1._1
{
    [Activity(Label = "Autocomplete4._1._1", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        Backend b;
        User selectedUser = null;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            b = Backend.Instance;

            // Get our button from the layout resource,
            // and attach an event to it
            Button button = FindViewById<Button>(Resource.Id.MyButton);
            AutoCompleteTextView tv = FindViewById<AutoCompleteTextView>(Resource.Id.editText1);
            

            List<string> things = new List<string>() { "hej", "då", "re" };
            tv.Adapter = new ArrayAdapter<User>(
                this,
                Resource.Layout.autocomplete_list_item, // layout for each item
                Resource.Id.textview, // textview id in layout
                b.Users); // what to show

            tv.ItemClick += (sender, args) =>
            {
                Console.WriteLine("Selected a user");
                selectedUser = ((ArrayAdapter<User>)tv.Adapter).GetItem((int)args.Id);
            };

            button.Click += (sender, args) =>
            {
                if (selectedUser != null)
                {
                    Console.WriteLine("Sending user away");
                    Intent i = new Intent(this, typeof(ViewUserActivity));
                    i.PutExtra("userId", selectedUser.Id);
                    StartActivity(i);
                }
                else
                {
                    Console.WriteLine("Not sending user away");
                    Toast.MakeText(this, "You must select a user while searching!", ToastLength.Short).Show();
                }
            };

        }
    }
}

