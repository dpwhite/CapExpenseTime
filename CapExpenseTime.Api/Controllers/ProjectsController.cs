using CapExpenseTime.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CapExpenseTime.API.Controllers
{
    [ApiController]
    [Route("api/projects")]
    [Authorize]
    public class ProjectsController : ControllerBase
    {
        readonly CapExpenseTimeContext context;
        readonly AutoMapper.Mapper mapper;
        public ProjectsController(CapExpenseTimeContext context)
        {
            this.context = context;
            this.mapper = new AutoMapper.Mapper(ConfigurationMapper.config);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await context.Projects
                .AsNoTracking()
                .ToListAsync();

            var projectEmployees = context.ProjectEmployees
                .AsNoTracking();

            var employees = await context.Employees
                .AsNoTracking()
                .ToListAsync();

            var projectViewList = mapper.Map<ProjectViewModel[]>(projects);
            var employeeViewList = mapper.Map<EmployeeViewModel[]>(employees);

            foreach (var project in projectViewList)
            {
                var employeeIds = projectEmployees.Where(e => e.ProjectId == project.Id).Select(e => e.EmployeeId).ToList();
                var employeeList = employeeViewList.Where(e => employeeIds.Contains(e.Id)).ToList();
                project.Employees = employeeList;
                project.EmployeeCount = employeeList.Count();
            }

            return Ok(projectViewList);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProject(string id)
        {
            if (!Guid.TryParse(id, out Guid projectId))
            {
                return NotFound();
            }

            var project = await context.Projects
                .Where(p => p.Id == projectId)
                .AsNoTracking()
                .SingleAsync();

            return Ok(project);
        }

        [HttpGet("employee/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProjectsForEmployee(string id)
        {
            if (!Guid.TryParse(id, out Guid employeeId))
            {
                return NotFound();
            }

            var projectIds = context.ProjectEmployees
                .Where(pe => pe.EmployeeId == employeeId)
                .Select(pe => pe.ProjectId)
                .ToList();

            var employeeProjects = await context.Projects
                .Where(p => projectIds.Contains(p.Id))
                .ToListAsync();

            var mapper = new AutoMapper.Mapper(ConfigurationMapper.config);
            var projectView = mapper.Map<ProjectViewModel[]>(employeeProjects);
            return Ok(projectView);
        }

        [HttpPut("project/{id}")]
        public void UpdateProject(string id, [FromBody] Project project)
        {
            var p = context.Projects.Update(project);
            context.SaveChanges();
        }


        //[AllowAnonymous]
        //[HttpGet("test")]
        //public async Task<IActionResult> Test()
        //{
        //    var message = await GetInfo();
        //    return Ok(message);
        //}

        //private Task<string> GetInfo()
        //{
        //    return Task.Run(() => "login works");
        //}
    }
}
