import fs from "fs/promises";
import path from "path";
import ExifReader from "exifreader";

export interface PhotoData {
  id: string;
  title: string;
  url: string;
  lat: number;
  lng: number;
  date: string;
}

export async function getPhotosWithExif(
  directory: string = "public/images/galleries/paris-2024"
): Promise<PhotoData[]> {
  const photos: PhotoData[] = [];

  try {
    const files = await fs.readdir(directory);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of imageFiles) {
      const filePath = path.join(directory, file);
      const buffer = await fs.readFile(filePath);

      try {
        const tags = await ExifReader.load(buffer);

        if (tags.GPSLatitude && tags.GPSLongitude) {
          // Convert GPS coordinates
          const lat = convertDMSToDD(
            tags.GPSLatitude.description,
            tags?.GPSLatitudeRef?.value[0] || "N"
          );

          const lng = convertDMSToDD(
            tags.GPSLongitude.description,
            tags?.GPSLongitudeRef?.value[0] || "E"
          );

          const date = tags.DateTime?.description || new Date().toISOString();

          photos.push({
            id: Buffer.from(filePath).toString("base64"),
            title: path.basename(file),
            url: `/images/galleries/paris-2024/${file}`,
            lat,
            lng,
            date,
          });
        }
      } catch (error) {
        console.error(`Error processing EXIF for ${file}:`, error);
      }
    }
  } catch (error) {
    console.error("Error reading photo directory:", error);
  }

  return photos;
}

function convertDMSToDD(dmsStr: string, direction: string): number {
  // Parse DMS string like "40/1 28/1 35/1"
  const parts = dmsStr.split(" ").map((part) => {
    const [num, denom] = part.split("/").map(Number);
    return num / (denom || 1);
  });

  const dd = parts[0] + parts[1] / 60 + (parts[2] || 0) / 3600;
  return direction === "S" || direction === "W" ? -dd : dd;
}
