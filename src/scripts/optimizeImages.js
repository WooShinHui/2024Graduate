const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const COMPRESSION_QUALITY = 80;
const IMAGE_DIRS = [
  "public/images/thumbnail",
  "public/images/profile",
  "public/images/banner",
  "public/images/professors",
  "public/images/gallery",
  "public/images",
];

async function optimizeImage(inputPath) {
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
      console.log(`처리 시작: ${path.basename(inputPath)}`);
    }

    const originalSize = (await fs.stat(inputPath)).size;

    // 원본 이미지 압축
    await sharp(inputPath)
      .resize(3000, 3000, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .toFormat(path.extname(inputPath).substring(1), {
        quality: COMPRESSION_QUALITY,
      })
      .toFile(inputPath + ".tmp");

    // 압축된 파일을 원본으로 교체
    await fs.rename(inputPath + ".tmp", inputPath);

    // WebP 변환
    await sharp(inputPath)
      .webp({ quality: COMPRESSION_QUALITY })
      .toFile(webpOutputPath);

    const compressedSize = (await fs.stat(inputPath)).size;
    const webpSize = (await fs.stat(webpOutputPath)).size;

    console.log(`최적화 완료: ${path.basename(inputPath)}`);
    console.log(`원본 크기: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`압축 후 크기: ${(compressedSize / 1024).toFixed(2)}KB`);
    console.log(`WebP 크기: ${(webpSize / 1024).toFixed(2)}KB`);
    console.log(
      `절약: ${(((originalSize - webpSize) / originalSize) * 100).toFixed(
        2
      )}%\n`
    );
  } catch (error) {
    console.error(`에러 발생 (${inputPath}):`, error);
  }
}

async function run() {
  console.log("이미지 최적화 시작...\n");

  for (const dir of IMAGE_DIRS) {
    try {
      console.log(`\n${dir} 처리 중...`);
      const files = await fs.readdir(dir);

      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if ([".jpg", ".jpeg", ".png"].includes(ext)) {
          await optimizeImage(path.join(dir, file));
        }
      }
    } catch (error) {
      console.error(`디렉토리 처리 중 에러 (${dir}):`, error);
    }
  }

  console.log("\n모든 이미지 최적화 완료!");
}

run();
