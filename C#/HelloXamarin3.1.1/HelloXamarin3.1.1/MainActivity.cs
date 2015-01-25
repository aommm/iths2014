using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace HelloXamarin3._1._1
{
    [Activity(Label = "HelloXamarin3._1._1", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        int count = 1;




        public delegate int MyThing(int x);

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            // Get our button from the layout resource,
            // and attach an event to it
            Button button = FindViewById<Button>(Resource.Id.MyButton);

            button.Click += delegate { button.Text = string.Format("{0} clicks!", count++); };

            MyThing t = x => x + 1;

            button.Click += (sender, e) =>
            {
                Console.WriteLine("hej!");
            };

            string[] ss = new string[] {"hej", "bobobo", "asodkapsodaopsfk"};
            Console.WriteLine(MaxString(ss, s => s.Length)); // returnerar “asodkapsodaopsfk”
            Console.WriteLine(  MaxString(ss, s => s[0])); // returnerar “bobobo”

        }


        int Max<T>(T[] ts, Func<T,int> fn) {
            return 0;
        }

        string MaxString(string[] ss, Func<string, int> fn)
        {
            string maxs = null;
            int maxval = -1;
            foreach (var s in ss)
            {
                int sval = fn(s);
                if (sval > maxval)
                {
                    maxs = s;
                    maxval = sval;
                }
            }
            return maxs;
        }

        void myFunction(object sender, EventArgs e)
        {
            Console.WriteLine("hej!");
        }
    }
}

