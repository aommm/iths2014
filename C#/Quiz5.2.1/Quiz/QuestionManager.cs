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

using SQLite;

namespace Quiz
{
    public class QuestionManager
    {
        private static QuestionManager instance;
        public static QuestionManager Instance
        {
            get
            {
                instance = instance ?? new QuestionManager();
                return instance; 
            }
        }

        private string dbPath;
        private Random r;
        public Question RandomQuestion
        {
            get
            {
                SQLiteConnection db = new SQLiteConnection(dbPath);
                List<Question> questions = db.Table<Question>().ToList();
                
                return questions[r.Next(questions.Count())];
            }
        }

        public List<Question> Questions
        {
            get
            {
                SQLiteConnection db = new SQLiteConnection(dbPath);
                return db.Table<Question>().ToList();
            }
        }

        public int Count
        {
            get
            {
                SQLiteConnection db = new SQLiteConnection(dbPath);
                int count = db.Table<Question>().Count();
                db.Close();
                return count;
            }
        }

        public Question GetQuestion(int id)
        {
            SQLiteConnection db = new SQLiteConnection(dbPath);
            return db.Get<Question>(id);
        }

        public void AddQuestion(Question q)
        {
            SQLiteConnection db = new SQLiteConnection(dbPath);
            db.Insert(q);
            db.Close();
        }
        private QuestionManager()
        {
            dbPath = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal) + @"/database.db";
            SQLiteConnection db = new SQLiteConnection(dbPath);
            db.CreateTable<Question>();

            r = new Random();

            if (db.Table<Question>().Count() == 0)
            {
                db.Insert(new Question()
                {
                    Quest = "Vad heter jag?",
                    Answer1 = "Jonathan",
                    Answer2 = "Niklas",
                    Answer3 = "Bonathan",
                    Answer4 = "Biklas",
                    RightAnswer = 1
                });
                db.Insert(new Question()
                {
                    Quest = "Vilken färg är blå?",
                    Answer1 = "Röd",
                    Answer2 = "Grön",
                    Answer3 = "Brun",
                    Answer4 = "Svart",
                    RightAnswer = 3
                });
            }
        }
    }
}