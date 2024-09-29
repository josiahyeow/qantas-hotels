import { promises as fs } from "fs";

export async function getHotels() {
  const file = await fs.readFile(
    process.cwd() + "/app/hotel-list/hotel-data.json",
    "utf8"
  );
  return JSON.parse(file);
}
