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

namespace ManyButtons_3._1._2
{
    [Activity(Label = "Activity1")]
    public class Activity1 : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            
            
            SetContentView(Resource.Layout.activity_main);
            
            
            // Create your application here
        }
    }
}