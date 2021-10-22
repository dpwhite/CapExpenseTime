using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapExpenseTime.Data
{
    public abstract class Entity
    {
        public Guid Id { get; set; }

        public Entity()
        {
            Id = SequentialGuid.Generate();
        }
    }
}
