using System.IO;

namespace TilesCretor
{
    internal class Program
    {
        static void Main(string[] args)
        {
			try
			{
                string inputImagePath = "E:\\Rima_Akter\\CSE-Lab-Courses\\Special\\Artificial Intelligence Lab\\Lab Project\\PuzzleGame\\wwwroot\\Images\\human.jpg";
                string outputDirectory = Path.Combine("E:\\Rima_Akter\\CSE-Lab-Courses\\Special\\Artificial Intelligence Lab\\Lab Project\\PuzzleGame\\wwwroot\\Images\\", "tiles"); // Save tiles in app data

                ImageDivider.DivideImageIntoTiles(inputImagePath, outputDirectory);
            }
			catch (System.Exception ex)
			{

				throw ex;
			}
        }
    }
}
