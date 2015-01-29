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
    class User
    {
        public int Id { get;  set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string ImagePath { get; set; }

        public byte[] Image { get; set; }

        public override string ToString()
        {
            return FirstName + " " + LastName;
        }

    }
}