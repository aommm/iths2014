using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaFun
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] ss = new string[] { "khej", "bobobo", "adidjskdlfijf" };
            // returnerar “adidjskdlfijf” (störst längd)
            Console.WriteLine(MaxString(ss, s => s.Length));
            // returnerar “khej” (störst första bokstav)
            Console.WriteLine(MaxString(ss, s => -s[0])); 

        }

        public delegate int StringToInt(string s);

        static string MaxString(string[] ss, StringToInt fn)
        {
            string biggestString = null;
            int biggestValue = 0;
            bool firstRun = true;

            for (int i = 0; i < ss.Length; i++)
            {
                int currentValue = fn(ss[i]);
                if (firstRun || (biggestValue < currentValue))
                {
                    biggestValue = currentValue;
                    biggestString = ss[i];
                    firstRun = false;
                }
            }
            return biggestString;
        }

    }
}
