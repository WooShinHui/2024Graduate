const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const COMPRESSION_QUALITY = 80;
const IMAGE_DIRS = [
  "public/images/thumbnail",
  "public/images/profile",
  "public/images/banner",
];

async function convertToWebP(inputPath) {
  try {
    const webpOutputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    // WebP 파일이 이미 존재하는지 확인
    try {
      await fs.access(webpOutputPath);
      console.log(
        `건너뜀: ${path.basename(inputPath)} (WebP 파일이 이미 존재함)`
      );
      return;
    } catch {
      // WebP 파일이 없는 경우 계속 진행
    }

    if (inputPath.toLowerCase() === webpOutputPath.toLowerCase()) {
      console.log(`건너뜀: ${inputPath} (입출력 파일명이 같음)`);
      return;
    }

    await sharp(inputPath)
      .resize(3000, 3000, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: COMPRESSION_QUALITY })
      .toFile(webpOutputPath);

    const originalSize = (await fs.stat(inputPath)).size;
    const webpSize = (await fs.stat(webpOutputPath)).size;
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(
      2
    );

    console.log(`변환 완료: ${path.basename(inputPath)}`);
    console.log(`원본 크기: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`WebP 크기: ${(webpSize / 1024).toFixed(2)}KB`);
    console.log(`절약: ${savings}%\n`);
  } catch (error) {
    console.error(`에러 발생 (${inputPath}):`, error);
  }
}

async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(directory, file);
        await convertToWebP(inputPath);
      }
    }
  } catch (error) {
    console.error(`디렉토리 처리 중 에러 (${directory}):`, error);
  }
}

async function main() {
  for (const dir of IMAGE_DIRS) {
    console.log(`\n${dir} 처리 중...`);
    await processDirectory(dir);
  }
}

main();

module.exports = { convertToWebP };
