using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ViwerWebApp.DB;
using ViwerWebApp.Models;

namespace ViwerWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DicomContext _context;
        public HomeController(ILogger<HomeController> logger
              , DicomContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ActionName("patient-list")]
        public ActionResult GetPatientListAsync()
        {
            PatientResponse? result = new PatientResponse() { Data = new List<DicomInformation>() };

            try
            {
                List<DicomInformation> data = new List<DicomInformation>()
                {

                    new DicomInformation()
                    {
                        PatientId="27008",
                        PatientSex="F",
                        PatientAge="50-YEARS",
                        PatientName="SAMELA ",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES"
                    },
                     new DicomInformation()
                    {
                        PatientId="27016",
                        PatientSex="M",
                        PatientAge="23-YEARS",
                        PatientName="RAZIB",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES , COLLEGE MORE,  KUSHTIA"
                    },
                     new DicomInformation()
                    {
                        PatientId="27028",
                        PatientSex="F",
                        PatientAge="17-YEARS",
                        PatientName="HALIMA ",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES"
                    },
                     new DicomInformation()
                    {
                        PatientId="27039",
                        PatientSex="F",
                        PatientAge="02-DAYS",
                        PatientName="DIPONNA BISWAS ",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES , COLLEGE MORE,  KUSHTIA"
                    },
                     new DicomInformation()
                    {
                        PatientId="27053",
                        PatientSex="F",
                        PatientAge="25-YEARS",
                        PatientName="SHANTA",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES , COLLEGE MORE,  KUSHTIA"
                    },
                     new DicomInformation()
                    {
                        PatientId="27068",
                        PatientSex="F",
                        PatientAge="08-YEARS",
                        PatientName="AYESHA ",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES , COLLEGE MORE,  KUSHTIA"
                    },
                    new DicomInformation()
                    {
                        PatientId="27113",
                        PatientSex="M",
                        PatientAge="24-YEARS",
                        PatientName="SHAKIL ",
                        InstitutionName="AMIN DIAGNOSTIC & MEDICAL SERVICES , COLLEGE MORE,  KUSHTIA"
                    },
                    new DicomInformation()
                    {
                        PatientId="U-09157",
                        PatientSex="F",
                        PatientAge="025Y",
                        PatientName="MRS.MONI",
                        InstitutionName="UPDATE DIAGNOSTIC",
                        InstitutionAddress="HOSPITAL ROAD  KURIGRAM  KURIGRAM  BD"
                    }
                };
                result.Data = data; // await _context.DicomInformations.ToListAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
            }
            return Ok(result?.Data);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
