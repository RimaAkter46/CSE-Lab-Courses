using Microsoft.EntityFrameworkCore;
using ViwerWebApp.Models;

namespace ViwerWebApp.DB
{
    public class DicomContext : DbContext
    {
        public DicomContext(DbContextOptions<DicomContext> options) : base(options)
        {
            
        }

        public virtual DbSet<DicomInformation> DicomInformations { get; set; }
    }
}
