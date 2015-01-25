using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace ManyButtons_3._1._2
{
    [Activity(Label = "_3._1._2ManyButtons", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        int count = 1;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.layout1);

            
            //Button b3 = FindViewById<Button>(Resource.Id.button3);
            //EditText t1 = FindViewById<EditText>(Resource.Id.editText1);


            int bookId = Intent.GetIntExtra("bookId", -1);

        }
    }
}

