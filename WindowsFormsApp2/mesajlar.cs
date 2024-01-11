using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsApp2
{
    internal class mesajlar : kullanicihesabi
    {
        public string mesaj;
        public override string ToString()
        {
            return this.Isim;
        }
    }
}
