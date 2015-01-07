using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App1._1._1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int numChocolateBars;
            do
            {
                Console.WriteLine("How many chocolate bars do you eat per day? (<0 to quit)");
                numChocolateBars = Convert.ToInt32(Console.ReadLine());
                if (numChocolateBars < 0)
                {
                    Console.WriteLine("Good-by");
                }
                else if (numChocolateBars >= 10)
                {
                    Console.WriteLine(numChocolateBars + "!? Good work soldier!");
                }
                else
                {
                    Console.WriteLine(numChocolateBars + "!? Eat more!");
                }
            } while (numChocolateBars >= 0);

            Console.ReadKey();

        }
    }
}
