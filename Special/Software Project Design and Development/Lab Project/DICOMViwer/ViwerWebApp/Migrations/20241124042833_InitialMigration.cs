using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ViwerWebApp.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DicomInformations",
                columns: table => new
                {
                    PatientId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PatientSex = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientAge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientSize = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientBirthName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InstitutionName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InstitutionAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudyType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DicomInformations", x => x.PatientId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DicomInformations");
        }
    }
}
