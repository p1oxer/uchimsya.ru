// generate-images-json.mjs или .js (если "type": "module")
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Эмуляция __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.resolve(__dirname, "public/assets/images");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

const extractBaseName = (filename) => {
    const name = path.parse(filename).name;
    return name.replace(/-\d+$/, ""); // удаляем -500, -900 и т.п.
};

const generateJsonForFolder = (folderPath) => {
    const files = fs.readdirSync(folderPath);
    const baseNames = new Set();

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (!SUPPORTED_EXTENSIONS.includes(ext)) return;

        const base = extractBaseName(file);
        baseNames.add(base);
    });

    const jsonPath = path.join(folderPath, "images.json");
    fs.writeFileSync(jsonPath, JSON.stringify([...baseNames], null, 2), "utf8");
    console.log(`✅ Сгенерирован: ${jsonPath}`);
};

const run = () => {
    if (!fs.existsSync(IMAGE_DIR)) {
        console.error("❌ Папка public/assets/images не найдена");
        return;
    }

    const folders = fs.readdirSync(IMAGE_DIR);

    folders.forEach((folder) => {
        const folderPath = path.join(IMAGE_DIR, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            generateJsonForFolder(folderPath);
        }
    });

    console.log("🎉 Генерация завершена!");
};

run();
