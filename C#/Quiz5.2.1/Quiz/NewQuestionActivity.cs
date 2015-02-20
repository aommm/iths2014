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
    [Activity(Label = "NewQuestionActivity")]
    public class NewQuestionActivity : Activity
    {
        private EditText ans1, ans2, ans3, ans4, question;
        private RadioButton but1, but2, but3, but4;
        private Button done;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            SetContentView(Resource.Layout.new_question_activity);

            question = FindViewById<EditText>(Resource.Id.question_edit);

            ans1 = FindViewById<EditText>(Resource.Id.ans1_edit);
            ans2 = FindViewById<EditText>(Resource.Id.ans2_edit);
            ans3 = FindViewById<EditText>(Resource.Id.ans3_edit);
            ans4 = FindViewById<EditText>(Resource.Id.ans4_edit);

            but1 = FindViewById<RadioButton>(Resource.Id.b1);
            but2 = FindViewById<RadioButton>(Resource.Id.b2);
            but3 = FindViewById<RadioButton>(Resource.Id.b3);
            but4 = FindViewById<RadioButton>(Resource.Id.b4);

            but1.Checked = true;

            done = FindViewById<Button>(Resource.Id.done);
            done.Click += button_AddQuestion;
        }

        private void button_AddQuestion(object sender, EventArgs e)
        {
            Question q = new Question();
            q.Quest = question.Text;
            q.Answer1 = ans1.Text;
            q.Answer2 = ans2.Text;
            q.Answer3 = ans3.Text;
            q.Answer4 = ans4.Text;

            if (but1.Checked)
            {
                q.RightAnswer = 1;
            }
            else if (but2.Checked)
            {
                q.RightAnswer = 2;
            }
            else if (but3.Checked)
            {
                q.RightAnswer = 3;
            }
            else
            {
                q.RightAnswer = 4;
            }

            QuestionManager.Instance.AddQuestion(q);
        }
    }
}