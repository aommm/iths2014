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

namespace Autocomplete4._1._1.model
{
    class Backend
    {

        private static Backend instance;
        public static Backend Instance
        {
            get
            {
                if (instance == null) instance = new Backend();
                return instance;
            }
        }

        int nextUserId = 0;
        public List<User> Users { get; private set; }

        private Backend()
        {
            Users = new List<User>();
            Users.Add(new User() { Id = nextUserId++, FirstName = "Niklas", LastName = "Logren" });
            Users.Add(new User() { Id = nextUserId++, FirstName = "Jonathan", LastName = "Orrö" });
            Users.Add(new User() { Id = nextUserId++, FirstName = "Hoola", LastName = "Badoola" });

        }

        public User GetUser(int id)
        {
            return Users.Where(u => u.Id == id).First();
        }

    }
}