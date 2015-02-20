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

namespace Quiz
{
    [Activity(Label = "DetailedQuestionActivity")]
    public class DetailedQuestionActivity : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            SetContentView(Resource.Layout.detailed_question_activity);

            int id = Intent.GetIntExtra("id", -1);

            Question q = QuestionManager.Instance.GetQuestion(id);

            TextView tv = FindViewById<TextView>(Resource.Id.detailed_text);
            tv.Text = q.Quest + "\n\n";
            tv.Text += "Answer 1: " + q.Answer1+"\n";
            tv.Text += "Answer 2: " + q.Answer2 + "\n";
            tv.Text += "Answer 3: " + q.Answer3 + "\n";
            tv.Text += "Answer 4: " + q.Answer4 + "\n";
        }
    }
}