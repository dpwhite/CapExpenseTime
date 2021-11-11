using Microsoft.EntityFrameworkCore.Migrations;

namespace CapExpenseTime.Data.Migrations
{
    public partial class Project_Employee_View : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            string viewScript = @"CREATE VIEW[dbo].[ProjectEmployeeView] 
            AS SELECT dbo.Employees.Id as EmployeeId, dbo.Employees.FirstName + ' ' + dbo.Employees.LastName AS Name, dbo.ProjectEmployees.Afe, 
            dbo.ProjectEmployees.ProjectManagement, dbo.ProjectEmployees.GapAnalysis, 
            dbo.ProjectEmployees.SolutionDesign, dbo.ProjectEmployees.SolutionBuild, dbo.ProjectEmployees.DataConversion,
            dbo.ProjectEmployees.Testing, dbo.ProjectEmployees.Training, 
            dbo.ProjectEmployees.Comments 
            FROM dbo.Employees INNER JOIN dbo.ProjectEmployees ON dbo.Employees.Id = dbo.ProjectEmployees.EmployeeId";

            migrationBuilder.Sql(viewScript);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DROP VIEW [dbo].[ProjectEmployeeView]");
        }
    }
}
