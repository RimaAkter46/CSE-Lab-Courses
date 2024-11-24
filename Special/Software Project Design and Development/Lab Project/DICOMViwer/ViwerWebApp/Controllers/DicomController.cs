using Azure;
using FellowOakDicom;
using FellowOakDicom.Imaging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using Microsoft.VisualBasic;
using SixLabors.ImageSharp;
using System.Text.RegularExpressions;
using ViwerWebApp.DB;
using ViwerWebApp.Models;

namespace ViwerWebApp.Controllers
{
    public class DicomController : Controller
    {
        private readonly ILogger<DicomController> _logger;
        private readonly DicomContext _context;
        private readonly IWebHostEnvironment _env;
        public DicomController(ILogger<DicomController> logger
            , DicomContext context
            , IWebHostEnvironment env)
        {
            _logger = logger;
            _context = context;
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Viwer(string id)
        {
            try
            {
                
            }
            catch (Exception ex)
            {

                _logger.LogError(ex, ex.Message);
            }
            return View();
        }

        [ActionName("information")]
        public ActionResult GetPatientHistoryByPatientId(string id)
        {
            PatientHistory? result = new PatientHistory()
            {
                Files = new List<string>(),
                Information = new DicomInformation()
            };
            try
            {
                string parentPath = $"File_Storage/dicoms/{id}";
                string dcmImageUrl = Path.Combine(_env.WebRootPath, parentPath);

                if (Directory.Exists(dcmImageUrl))
                {
                    var directories = Directory.EnumerateFiles(dcmImageUrl, "*.png", SearchOption.AllDirectories);

                    foreach (var directory in directories)
                    {
                        string urlWithoutServer = Regex.Replace(directory, "^" + Regex.Escape(_env.WebRootPath), "");
                        result.Files.Add(urlWithoutServer);
                    }
                }

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
            }
            return Ok(result);
        }


        private async Task<IActionResult> LoadData()
        {
            List<DicomInformation> summaryInfos = new List<DicomInformation>();
            try
            {
                string dcmServerLocation = Path.Combine(_env.WebRootPath, "DCM");
                string fileName = String.Empty;
                IEnumerable<string> listOfDicomFiles = new List<string>();

                if (Directory.Exists(dcmServerLocation))
                {
                    listOfDicomFiles = Directory.EnumerateFiles(dcmServerLocation, "*", SearchOption.AllDirectories);
                }

                string dcmImageUrl = Path.Combine(_env.WebRootPath, $"File_Storage/dicoms");
                if (Directory.Exists(dcmImageUrl))
                {
                    Directory.Delete(dcmImageUrl, true);
                }



                foreach (string file in listOfDicomFiles)
                {
                    DicomInformation? information = await GetDicomInstanceByFilePathAsync(file);

                    var patientInfo = summaryInfos.Where(x => x.PatientId == information.PatientId).FirstOrDefault();
                    if(patientInfo == null)
                    {
                        summaryInfos.Add(information);
                    }
                    string parentPath = $"File_Storage/dicoms/{information?.PatientId}";
                    string tempImagePath = Path.Combine($"{parentPath}/{Guid.NewGuid().ToString()}.png");
                    string fileLocation = Path.Combine(_env.WebRootPath, tempImagePath);

                    if (!Directory.Exists(Path.Combine(_env.WebRootPath, parentPath)))
                        Directory.CreateDirectory(Path.Combine(_env.WebRootPath, parentPath));

                    var image = new DicomImage(file);
                    image.RenderImage().AsSharpImage().SaveAsPng(fileLocation);
                }

                if(summaryInfos.Count > 0)
                {
                    await _context.DicomInformations.AddRangeAsync(summaryInfos);
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
            }

            return View();
        }



        private async Task<DicomInformation?> GetDicomInstanceByFilePathAsync(string filePath)
        {

            DicomInformation? information = null;
            string patientID = string.Empty;
            string patientSex = string.Empty;
            string patientAge = string.Empty;
            string patientSize = string.Empty;
            string patientAddress = string.Empty;
            string patientName = string.Empty;
            string patientBirthName = string.Empty;
            string institutionName = string.Empty;
            string institutionAddress = string.Empty;
            string reportDate = string.Empty;
            string studyType = string.Empty;

            var dicomFile = await DicomFile.OpenAsync(filePath);
            dicomFile.Dataset.TryGetString(DicomTag.PatientID, out patientID);
            dicomFile.Dataset.TryGetString(DicomTag.PatientSex, out patientSex);
            dicomFile.Dataset.TryGetString(DicomTag.PatientAge, out patientAge);
            dicomFile.Dataset.TryGetString(DicomTag.PatientSize, out patientSize);
            dicomFile.Dataset.TryGetString(DicomTag.PatientAddress, out patientAddress);
            dicomFile.Dataset.TryGetString(DicomTag.PatientName, out patientName);
            dicomFile.Dataset.TryGetString(DicomTag.PatientBirthName, out patientBirthName);
            dicomFile.Dataset.TryGetString(DicomTag.InstitutionName, out institutionName);
            dicomFile.Dataset.TryGetString(DicomTag.InstitutionAddress, out institutionAddress);
            dicomFile.Dataset.TryGetString(DicomTag.StudyCommentsRETIRED, out studyType);

            if (!string.IsNullOrEmpty(patientID))
            {
                patientAge = (string.IsNullOrEmpty(patientAge)) ? ExtractAgeFromPatientName(patientName) : patientAge;
                patientName = ExtractNameFromNameString(patientName);


                information = new DicomInformation()
                {
                    PatientId = patientID,
                    PatientSex = patientSex,
                    PatientAge = patientAge,
                    PatientSize = patientSize,
                    PatientAddress = patientAddress,
                    PatientName = patientName,
                    PatientBirthName = patientBirthName,
                    InstitutionName = institutionName,
                    InstitutionAddress = institutionAddress,
                    StudyType = studyType,
                };
            }
            return information;
        }

        private string ExtractAgeFromPatientName(string patientName)
        {
            string age = string.Empty;
            string ageFromString = Regex.Match(patientName, @"\d+").Value;
            if (!string.IsNullOrEmpty(ageFromString))
            {
                var nameAgeSeparetorArray = patientName.Split(new string[] { ageFromString }, StringSplitOptions.None);
                if (nameAgeSeparetorArray != null && nameAgeSeparetorArray.Length > 1)
                {
                    string ageDiameter = Regex.Replace(nameAgeSeparetorArray[1], @"[^0-9a-zA-Z]+", "");
                    ageDiameter = (ageDiameter.Length > 1) ? ageDiameter.Substring(0, 1) : ageDiameter;

                    switch (ageDiameter.ToLower())
                    {

                        case "y":
                            age = $"{ageFromString}-Years";
                            break;

                        case "d":
                            age = $"{ageFromString}-Days";
                            break;

                        case "m":
                            age = $"{ageFromString}-Months";
                            break;

                        default:
                            age = $"{ageFromString}-Years";
                            break;
                    }
                }
                else
                {
                    age = ageFromString;
                }
            }

            return age.ToUpper();
        }


        private string ExtractNameFromNameString(string patientName)
        {
            string orginalName = string.Empty;
            string ageFromString = Regex.Match(patientName, @"\d+").Value;
            if (!string.IsNullOrEmpty(ageFromString))
            {
                var nameAgeSeparetorArray = patientName.Split(new string[] { ageFromString }, StringSplitOptions.None);
                if (nameAgeSeparetorArray != null && nameAgeSeparetorArray.Length > 0)
                {
                    orginalName = Regex.Replace(nameAgeSeparetorArray[0], @"[^0-9a-zA-Z]+", " ");
                }
                else
                {
                    orginalName = Regex.Replace(nameAgeSeparetorArray[0], @"[^0-9a-zA-Z]+", " ");
                }
                return orginalName;
            }

            return patientName;
        }
    }
}
