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
using Autocomplete4._1._1.model;
using Android.Provider;
using AFile = Java.IO.File;
using AUri = Android.Net.Uri;
using AEnvironment = Android.OS.Environment;
using Autocomplete4._1._1.util;
using Android.Graphics;

namespace Autocomplete4._1._1
{
    [Activity(Label = "ViewUserActivity")]
    public class ViewUserActivity : Activity
    {
        AUri uri;
        User user;

        Button b ;
        ImageView photo;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.activity_view_user);

            b = FindViewById<Button>(Resource.Id.button1);
            photo = FindViewById<ImageView>(Resource.Id.imageView1);

            int id = Intent.GetIntExtra("userId", -1);
            if (id != -1)
            {
                user = Backend.Instance.GetUser(id);
                FindViewById<TextView>(Resource.Id.textView1).Text = "Viewing user "+user.ToString();
                b.Click += delegate { TakePhoto(); };

                LoadPhoto();
            }
            else
            {
                FindViewById<TextView>(Resource.Id.textView1).Text = "User not found!";
                b.Visibility = ViewStates.Invisible;
                photo.Visibility = ViewStates.Invisible;
            }
            
        }

        private void TakePhoto()
        {
            Intent i = new Intent(MediaStore.ActionImageCapture);
            // Get directory
            AFile dir = new AFile(AEnvironment.GetExternalStoragePublicDirectory(AEnvironment.DirectoryPictures), "MyFacebook");
            if (!dir.Exists()) dir.Mkdirs();
            // Create file/uri
            uri = AUri.FromFile(new AFile(dir, string.Format("photo_{0}.jpg", user.Id)));
            // Add to intent
            i.PutExtra(MediaStore.ExtraOutput, uri);
            // Start camera yo
            StartActivityForResult(i, 0);
        }

        private void LoadPhoto()
        {
            if (user.ImagePath != null)
            {
                Bitmap b = ImageUtils.LoadAndScaleBitmap(user.ImagePath, photo.Width, Resources.DisplayMetrics.HeightPixels);
                if (b != null)
                {
                    photo.SetImageBitmap(b);
                }
            }
                
        }

        protected override void OnActivityResult(int requestCode, Result resultCode, Intent data)
        {
            if (requestCode == 0 && resultCode == Result.Ok)
            {
                Bitmap b = ImageUtils.LoadAndScaleBitmap(uri.Path, photo.Width, Resources.DisplayMetrics.HeightPixels);
                photo.SetImageBitmap(b);

                // We have a direct reference to User instance, so it is updated in backend when we do this as well
                user.ImagePath = uri.Path; 
            }
            else
            {
                base.OnActivityResult(requestCode, resultCode, data);
            }
            
        }
    }
}