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
    public class QuestionAdapter : BaseAdapter
    {
        private List<Question> questions;
        private Activity context;

        public QuestionAdapter(List<Question> questions, 
                               Activity activity)
        {
            this.questions = questions;
            this.context = activity;
        }

        public override int Count
        {
            get {
                return questions.Count;
            }
        }

        public override Java.Lang.Object GetItem(int position)
        {
            return null;
        }

        public override long GetItemId(int position)
        {
            return questions[position].Id;
        }

        public override View GetView(int position, View convertView, ViewGroup parent)
        {
            View v;
            if (convertView == null)
            {
                v = context.LayoutInflater.Inflate(Resource.Layout.question_item, 
                parent, false);
            }
            else
            {
                v = convertView;
            }
            TextView tv = v.FindViewById<TextView>(Resource.Id.question_text);
            tv.Text = questions[position].Quest;
            return v;
        }
    }
}