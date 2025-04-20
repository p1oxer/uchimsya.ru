import sharp from "sharp";
import fs from "fs";
import path from "path";

// Функция для рекурсивного получения всех файлов
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Размеры для конвертации
const sizes = [{ width: 1920 }, { width: 1200 }, { width: 900 }, { width: 500 }];

export async function processImages() {
    const inputDir = path.resolve(__dirname, "src/assets/images"); // Папка с исходными изображениями
    const outputDir = path.resolve(__dirname, "public/images"); // Папка для сохранения результатов

    if (!fs.existsSync(inputDir)) {
        console.error(`Input directory does not exist: ${inputDir}`);
        return;
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const allFiles = getAllFiles(inputDir);

    for (const file of allFiles) {
        if (/\.(jpe?g|png)$/i.test(file)) {
            console.log(`Processing file: ${file}`);

            const fileName = path.basename(file, path.extname(file));
            const fileExt = path.extname(file);

            for (const size of sizes) {
                const outputSubDir = path.join(outputDir, `${size.width}x${size.height}`);
                if (!fs.existsSync(outputSubDir)) {
                    fs.mkdirSync(outputSubDir, { recursive: true });
                }

                const resizedFileName = `${fileName}-${size.width}x${size.height}${fileExt}`;
                const outputFilePath = path.join(outputSubDir, resizedFileName);

                // Конвертация в нужный размер
                await sharp(file)
                    .resize(size.width, size.height, { fit: "inside" })
                    .toFile(outputFilePath);

                console.log(`Resized: ${file} -> ${outputFilePath}`);

                // Создание WebP версии
                const webpFileName = `${fileName}-${size.width}x${size.height}.webp`;
                const webpFilePath = path.join(outputSubDir, webpFileName);
                await sharp(outputFilePath).webp({ quality: 80 }).toFile(webpFilePath);

                console.log(`Created WebP: ${webpFilePath}`);

                // Создание AVIF версии
                const avifFileName = `${fileName}-${size.width}x${size.height}.avif`;
                const avifFilePath = path.join(outputSubDir, avifFileName);
                await sharp(outputFilePath).avif({ quality: 80 }).toFile(avifFilePath);

                console.log(`Created AVIF: ${avifFilePath}`);
            }
        }
    }
}

processImages();
