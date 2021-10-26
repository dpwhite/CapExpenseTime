using CapExpenseTime.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CapExpenseTime.Domain
{
    public class ProjectService
    {
        readonly CapExpenseTimeContext context;
        public ProjectService(CapExpenseTimeContext context)
        {
            this.context = context;
        }

        public List<Project> GetAllProjects()
        {
            var projects = context.Projects
                .AsNoTracking()
                .ToList();          

            
            return projects;
        }
    }
}
