using Microsoft.EntityFrameworkCore.Migrations;

namespace CapExpenseTime.Data.Migrations
{
    public partial class ProjectEmployeeMonthYear : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "YearMonth",
                table: "ProjectEmployees",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "YearMonth",
                table: "ProjectEmployees");
        }
    }
}
