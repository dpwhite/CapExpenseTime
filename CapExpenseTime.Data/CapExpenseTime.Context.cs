using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapExpenseTime.Data
{
    public class CapExpenseTimeContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }
        public DbSet<Employee> Employees { get; set; }

        public DbSet<ProjectEmployees> ProjectEmployees { get; set; }

        public DbSet<ProjectEmployee> ProjectEmployeeView { get; set; }

        public CapExpenseTimeContext() { }

        public CapExpenseTimeContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=CapExpenseTime;Trusted_Connection=True;")
                .LogTo(System.Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information)
                .EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .HasMany(s => s.Projects)
                .WithMany(m => m.Employees)
                .UsingEntity<ProjectEmployees>
                (pm => pm.HasOne<Project>().WithMany(),
                pm => pm.HasOne<Employee>().WithMany())
                .Property(bs => bs.DateAdded)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<ProjectEmployee>()
                .ToView(nameof(ProjectEmployeeView))
                .HasKey(t => t.EmployeeId);
        }
    }
}
