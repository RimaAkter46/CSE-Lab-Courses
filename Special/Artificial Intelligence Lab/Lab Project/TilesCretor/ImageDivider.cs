using SkiaSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TilesCretor
{
    public class ImageDivider
    {
        public static void DivideImageIntoTiles(string inputImagePath, string outputDirectory)
        {
            // Ensure the output directory exists
            if (!Directory.Exists(outputDirectory))
            {
                Directory.CreateDirectory(outputDirectory);
            }

            // Load the image
            var inputImage = SKBitmap.Decode(inputImagePath);

            int gridSize = 4; // 4x4 grid
            int tileWidth = inputImage.Width / gridSize;
            int tileHeight = inputImage.Height / gridSize;

            int tileCount = 1;

            for (int row = 0; row < gridSize; row++)
            {
                for (int col = 0; col < gridSize; col++)
                {
                    // Skip the last tile (empty space)
                    if (tileCount == gridSize * gridSize) break;

                    // Calculate tile boundaries
                    int left = col * tileWidth;
                    int top = row * tileHeight;
                    int right = left + tileWidth;
                    int bottom = top + tileHeight;

                    // Crop the tile
                    var tile = new SKBitmap(tileWidth, tileHeight);
                    using (var canvas = new SKCanvas(tile))
                    {
                        var srcRect = new SKRectI(left, top, right, bottom);
                        var destRect = new SKRectI(0, 0, tileWidth, tileHeight);
                        canvas.DrawBitmap(inputImage, srcRect, destRect);
                    }

                    // Save the tile
                    string outputFilePath = Path.Combine(outputDirectory, $"tile_{tileCount}.png");
                    using (var image = SKImage.FromBitmap(tile))
                    using (var data = image.Encode(SKEncodedImageFormat.Png, 100))
                    {
                        using (var stream = File.OpenWrite(outputFilePath))
                        {
                            data.SaveTo(stream);
                        }
                    }

                    tileCount++;
                }
            }

            Console.WriteLine($"Tiles saved in: {outputDirectory}");
        }
    }

}
