using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace App1
{
    [Activity(Label = "App1", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        private int id = 0;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);

            // Get our button from the layout resource,
            // and attach an event to it
            Button button = FindViewById<Button>(Resource.Id.not_button);
            button.Click += button_ShowNotification;
        }

        private void button_ShowNotification(object sender, EventArgs e)
        {
            Intent i = new Intent(this, typeof(MainActivity));
            PendingIntent pi = PendingIntent.GetActivity(
                this, 0, i, PendingIntentFlags.OneShot);

            Notification.BigTextStyle style = 
                new Notification.BigTextStyle();

            style.BigText("Hejhejhejhejhejhejhejhejhej"
                +"hejhejhejhejhejehjehjehjehjehjehjehej"
                + "hejhejhejhejhejehjehjehjehjehjehjehej"
                + "hejhejhejhejhejehjehjehjehjehjehjehej");
            style.SetBigContentTitle("Tjabba");
            style.SetSummaryText("Hejdå");
            string text = FindViewById<EditText>
                    (Resource.Id.not_text).Text;
            Notification.Builder builder =
                  new Notification.Builder(this)
            .SetStyle(style)
            .SetSmallIcon(Resource.Drawable.Icon)
            .SetAutoCancel(true)
            .SetContentIntent(pi);

            Notification notification = builder.Build();
            

            NotificationManager manager =
                  GetSystemService(Context.NotificationService)
                  as NotificationManager;

            manager.Notify(id, notification);
        }
    }
}

