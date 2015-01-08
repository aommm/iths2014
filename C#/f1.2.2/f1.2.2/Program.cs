using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace f1._2._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Car c = new Car();
            c[1] = "Niklas";
            c = !c;
            Console.WriteLine(c[1]);
            c[2] = "J";
            Console.WriteLine(c[2]);
        }
    }
}
