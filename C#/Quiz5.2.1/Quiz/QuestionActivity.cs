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
    [Activity(Label = "QuestionActivity")]
    public class QuestionActivity : Activity
    {
        private Button ansButton1, ansButton2, ansButton3, ansButton4;
        private TextView questionView;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            SetContentView(Resource.Layout.quest_activity);

            ansButton1 = FindViewById<Button>(Resource.Id.answer1);
            ansButton2 = FindViewById<Button>(Resource.Id.answer2);
            ansButton3 = FindViewById<Button>(Resource.Id.answer3);
            ansButton4 = FindViewById<Button>(Resource.Id.answer4);
            questionView = FindViewById<TextView>(Resource.Id.quest_text);

            Question q = QuestionManager.Instance.RandomQuestion;

            ansButton1.Text = q.Answer1;
            ansButton2.Text = q.Answer2;
            ansButton3.Text = q.Answer3;
            ansButton4.Text = q.Answer4;

            questionView.Text = q.Quest;

            switch (q.RightAnswer)
            {
                case 1: 
                    ansButton1.Click += button_RightAnswerClicked;
                    ansButton2.Click += button_WrongAnswerClicked;
                    ansButton3.Click += button_WrongAnswerClicked;
                    ansButton4.Click += button_WrongAnswerClicked;
                    break;
                case 2: 
                    ansButton1.Click += button_WrongAnswerClicked;
                    ansButton2.Click += button_RightAnswerClicked;
                    ansButton3.Click += button_WrongAnswerClicked;
                    ansButton4.Click += button_WrongAnswerClicked;
                    break;
                case 3: 
                    ansButton1.Click += button_WrongAnswerClicked;
                    ansButton2.Click += button_WrongAnswerClicked;
                    ansButton3.Click += button_RightAnswerClicked;
                    ansButton4.Click += button_WrongAnswerClicked;
                    break;
                case 4: 
                    ansButton1.Click += button_WrongAnswerClicked;
                    ansButton2.Click += button_WrongAnswerClicked;
                    ansButton3.Click += button_WrongAnswerClicked;
                    ansButton4.Click += button_RightAnswerClicked;
                    break;
            }
        }

        private void LockButtons()
        {
            ansButton1.Clickable = false;
            ansButton2.Clickable = false;
            ansButton3.Clickable = false;
            ansButton4.Clickable = false;
        }

        private void button_WrongAnswerClicked(object sender, EventArgs e)
        {
            Button b = sender as Button;
            b.SetBackgroundColor(Android.Graphics.Color.Red);
            LockButtons();
        }

        private void button_RightAnswerClicked(object sender, EventArgs e)
        {
            Button b = sender as Button;
            b.SetBackgroundColor(Android.Graphics.Color.Green);
            LockButtons();
        }
    }
}