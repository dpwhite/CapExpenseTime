using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapExpenseTime.API
{
    public class ProjectViewModel
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string ProjectType { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public List<EmployeeViewModel> Employees { get; set; }
    }
}
