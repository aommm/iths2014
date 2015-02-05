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
    [Activity(Label = "InfoActivity")]
    public class InfoActivity : Activity
    {
        private TextView questionsText;
        private ListView questionList;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            SetContentView(Resource.Layout.stats_activity);

            questionsText = FindViewById<TextView>(Resource.Id.question_count_text);
            int count = QuestionManager.Instance.Count;
            questionsText.Text = "Antal frågor: "+count;

            questionList = FindViewById<ListView>(Resource.Id.question_list);
            List<Question> questions = QuestionManager.Instance.Questions;
            questionList.Adapter = new QuestionAdapter(questions,this);

            questionList.ItemClick += listItem_OpenDetailedQuestionView;
        }

        private void listItem_OpenDetailedQuestionView(object sender, 
            AdapterView.ItemClickEventArgs e)
        {
            int id = (int)questionList.Adapter.GetItemId(e.Position);
            Intent i = new Intent(this, typeof(DetailedQuestionActivity));
            i.PutExtra("id", id);
            StartActivity(i);
        }
    }
}