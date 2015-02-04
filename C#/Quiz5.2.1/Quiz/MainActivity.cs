using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace Quiz
{
    [Activity(Label = "Quiz", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        private Button questionButton, infoButton, newQuestionButton;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.main_activity);

            questionButton = FindViewById<Button>(Resource.Id.quest);
            infoButton = FindViewById<Button>(Resource.Id.info);
            newQuestionButton = FindViewById<Button>(Resource.Id.new_quest);

            questionButton.Click += delegate
            {
                Intent i = new Intent(this, typeof(QuestionActivity));
                StartActivity(i);
            };

            newQuestionButton.Click += delegate
            {
                Intent i = new Intent(this, typeof(NewQuestionActivity));
                StartActivity(i);
            };
        }
    }
}

