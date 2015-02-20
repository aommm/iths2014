using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using SQLite;
using System.Collections.Generic;


namespace App2
{
    [Activity(Label = "App2", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        private String dbPath;
        private EditText nameText, ageText, idText;
        private TextView personList;
        private Button addButton, updateButton, getButton, deleteButton;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            dbPath = System.Environment.GetFolderPath(
                System.Environment.SpecialFolder.Personal);
            dbPath += "\\database.db";

            SQLiteConnection db = new SQLiteConnection(dbPath);
            db.CreateTable<Person>();
            db.Close();

            nameText = FindViewById<EditText>(Resource.Id.name_text);
            ageText = FindViewById<EditText>(Resource.Id.age_text);
            idText = FindViewById<EditText>(Resource.Id.id_text);
            personList = FindViewById<TextView>(Resource.Id.person_list);
            addButton = FindViewById<Button>(Resource.Id.add_button);
            getButton = FindViewById<Button>(Resource.Id.get_button);
            updateButton = FindViewById<Button>(Resource.Id.update_button);
            deleteButton = FindViewById<Button>(Resource.Id.delete_button);

            addButton.Click += button_AddPerson;
            getButton.Click += button_GetPerson;
            updateButton.Click += button_UpdatePerson;
            deleteButton.Click += button_DeletePerson;

            UpdatePersonList();
        }

        private void button_DeletePerson(object sender, EventArgs e)
        {
            int id = int.Parse(idText.Text);
            SQLiteConnection db = new SQLiteConnection(dbPath);
            db.Delete<Person>(id);
            db.Close();
            UpdatePersonList();
        }

        private void button_UpdatePerson(object sender, EventArgs e)
        {
            string name;
            int age, id;

            name = nameText.Text;
            age = int.Parse(ageText.Text);
            id = int.Parse(idText.Text);

            SQLiteConnection db = new SQLiteConnection(dbPath);
            Person p = db.Get<Person>(id);
            p.Name = name;
            p.Age = age;
            db.Update(p);
            db.Close();
            UpdatePersonList();
        }

        private void button_GetPerson(object sender, EventArgs e)
        {
            int id = int.Parse(idText.Text);

            SQLiteConnection db = new SQLiteConnection(dbPath);
            Person p = db.Get<Person>(id);
            db.Close();
            nameText.Text = p.Name;
            ageText.Text = p.Age.ToString();
        }

        private void button_AddPerson(object sender, EventArgs e)
        {
            string name;
            int age;
            name = nameText.Text;
            age = int.Parse(ageText.Text);
            Person p = new Person() { Name = name, Age = age };

            SQLiteConnection db = new SQLiteConnection(dbPath);
            db.Insert(p);
            db.Close();
            UpdatePersonList();
        }

        private void UpdatePersonList()
        {
            SQLiteConnection db = new SQLiteConnection(dbPath);
            IEnumerable<Person> persons = db.Table<Person>()
                .Take(5).Skip(2);

            personList.Text = "";
            foreach(Person p in persons)
            {
                personList.Text += p.Name + "    " + p.Age + "\n";
            }
        }
    }
}

