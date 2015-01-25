using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Autocomplete4._1._1.Resources.model;

namespace Autocomplete4._1._1
{
    [Activity(Label = "ViewUserActivity")]
    public class ViewUserActivity : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.activity_view_user);
            int id = Intent.GetIntExtra("userId", -1);
            if (id != -1)
            {
                User u = Backend.Instance.GetUser(id);
                FindViewById<TextView>(Resource.Id.textView1).Text = "Viewing user "+u.ToString();
            }
            else
            {
                FindViewById<TextView>(Resource.Id.textView1).Text = "User not found!";
            }
            
        }
    }
}