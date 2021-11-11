using CapExpenseTime.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CapExpenseTime.API.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : Controller
    {
        readonly CapExpenseTimeContext _context;

        public EmployeesController(CapExpenseTimeContext context)
        {
            this._context = context;
        }
        // GET: api/<EmployeesController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var employees = this._context.Employees.ToList();
            return employees;
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmployeesController>
        [HttpPost]
        public void Post([FromBody] Employee value)
        {
            this._context.Employees.Add(value);
            this._context.SaveChanges();
        }

        // PUT api/<EmployeesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("employeesbyproject/{id}")]
        public Task<List<ProjectEmployee>> GetEmployeesByProject(string id)
        {
            Guid projectId;
            if (!Guid.TryParse(id, out projectId))
            {
                return (Task<List<ProjectEmployee>>)Task.Run(() => new List<ProjectEmployee>());
            }
            var employeeIds = this._context.ProjectEmployees.Where(pe => pe.ProjectId == projectId).Select(e => e.EmployeeId).ToList();

            var employeeProjects = this._context.ProjectEmployeeView.Where(pe => employeeIds.Contains(pe.EmployeeId)).ToList();
            return Task.Run(() => employeeProjects);
        }

        [HttpGet("employeesbyprojectandyearmonth/{id}/{monthYear}")]
        public Task<List<ProjectEmployee>> GetEmployeesByProjectAndYearMonth(string id, string monthYear)
        {
            Guid projectId;
            if (!Guid.TryParse(id, out projectId))
            {
                return (Task<List<ProjectEmployee>>)Task.Run(() => new List<ProjectEmployee>());
            }
            var month = monthYear.Split("-");
            var monthNumber = (int)((Months)Enum.Parse(typeof(Months), month[0]));
            var currentYearMonth = Convert.ToInt32($"{month[1]}{monthNumber}");
            var prevYearMonth = Convert.ToInt32($"{month[1]}{monthNumber-1}");
            var employeeIds = this._context.ProjectEmployees.Where(pe => pe.ProjectId == projectId && pe.YearMonth >= prevYearMonth && pe.YearMonth <= currentYearMonth).Select(e => e.EmployeeId).ToList();

            var employeeProjects = this._context.ProjectEmployeeView.Where(pe => employeeIds.Contains(pe.EmployeeId) && pe.YearMonth >= prevYearMonth && pe.YearMonth <= currentYearMonth).ToList();
            return Task.Run(() => employeeProjects);
        }
    }
}
