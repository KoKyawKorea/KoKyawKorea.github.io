// generate-cars-json.js
import fs from "fs";

const folder = "./src/cars";
const files = fs
  .readdirSync(folder)
  .filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i))
  .map(f => `src/cars/${f}`);

fs.writeFileSync("cars.json", JSON.stringify(files, null, 2));
console.log("✅ cars.json generated successfully!");
