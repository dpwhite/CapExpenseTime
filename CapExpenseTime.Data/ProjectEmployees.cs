using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapExpenseTime.Data
{
    public class ProjectEmployees
    {
        public Guid ProjectId { get; set; }
        public Guid EmployeeId { get; set; }
        public DateTime DateAdded { get; set; }
        public string Afe { get; set; }
        public double ProjectManagement { get; set; }
        public double GapAnalysis { get; set; }
        public double SolutionDesign { get; set; }
        public double  SolutionBuild { get; set; }
        public double DataConversion { get; set; }
        public double Testing { get; set; }
        public double Training { get; set; }
        public string Comments { get; set; }
        public int YearMonth { get; set; }
    }
}
