using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace f1._2._2
{
    class Car
    {
        public bool Started { get; set; }
        private string seat1, seat2, seat3;

        public static Car operator !(Car c)
        {
            c.Started = !c.Started;
            return c;
        }

        public string this[int i]
        {
            get
            {
                switch (i)
                {
                    case 1:
                        return seat1;
                    case 2:
                        return seat2;
                    case 3:
                        return seat3;
                    default:
                        return null;
                }
            }
            set
            {
                if (!Started)
                {
                    switch (i)
                    {
                        case 1:
                            seat1 = value;
                            break;
                        case 2:
                            seat2 = value;
                            break;
                        case 3:
                            seat3 = value;
                            break;
                    }
                }
            }
        }

    }
}
