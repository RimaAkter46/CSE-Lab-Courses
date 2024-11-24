namespace ViwerWebApp.Models
{
    public class PatientHistory
    {
        public string? status { get; set; }
        public int statusCode { get; set; }
        public List<string>? Files { get; set; }
        public DicomInformation? Information { get; set; }
    }
}
