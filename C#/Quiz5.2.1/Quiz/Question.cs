using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SQLite;

namespace Quiz
{
    public class Question
    {
        [PrimaryKey, AutoIncrement]
        public int Id { get; private set; }
        public string Quest { get; set; }
        public String Answer1 { get; set; }
        public String Answer2 { get; set; }
        public String Answer3 { get; set; }
        public String Answer4 { get; set; }
        public int RightAnswer { get; set; }
    }
}