using System.ComponentModel.DataAnnotations;

namespace ViwerWebApp.Models
{
    public class DicomInformation
    {
        [Key]
        public string? PatientId { get; set; }
        public string? PatientSex { get; set; }
        public string? PatientAge { get; set; }
        public string? PatientSize { get; set; }
        public string? PatientAddress { get; set; }
        public string? PatientName { get; set; }
        public string? PatientBirthName { get; set; }
        public string? InstitutionName { get; set; }
        public string? InstitutionAddress { get; set; }
        public string? StudyType { get; set; }
    }
}
