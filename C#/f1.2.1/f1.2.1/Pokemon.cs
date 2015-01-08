using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace f1._2._1
{

    public class Pokemon
    {
        private string name = "Pokemon";
        public string Name
        {
            get { return name; }
            set
            {
                if (value != null && value.Length > 0)
                {
                    name = value;
                }
            }
        }
    }

}
