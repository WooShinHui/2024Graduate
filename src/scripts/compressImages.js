const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// 압축 설정
const COMPRESSION_QUALITY = 80; // 0-100 사이, 높을수록 품질 좋음
const PUBLIC_PATH = path.join(__dirname, "../../public/images");

// 이미지 압축 함수
async function compressImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // 이미지 타입에 따른 처리
    if (metadata.format === "jpeg" || metadata.format === "jpg") {
      await image.jpeg({ quality: COMPRESSION_QUALITY }).toFile(outputPath);
    } else if (metadata.format === "png") {
      await image.png({ quality: COMPRESSION_QUALITY }).toFile(outputPath);
    }

    const originalSize = (await fs.stat(inputPath)).size;
    const compressedSize = (await fs.stat(outputPath)).size;
    const savings = (
      ((originalSize - compressedSize) / originalSize) *
      100
    ).toFixed(2);

    console.log(`압축 완료: ${path.basename(inputPath)}`);
    console.log(`원본 크기: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`압축 후 크기: ${(compressedSize / 1024).toFixed(2)}KB`);
    console.log(`절약: ${savings}%\n`);
  } catch (error) {
    console.error(`에러 발생 (${inputPath}):`, error);
  }
}

// 디렉토리 내의 모든 이미지 처리
async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        // 하위 디렉토리 처리
        await processDirectory(filePath);
      } else {
        // 이미지 파일 확인
        const ext = path.extname(file).toLowerCase();
        if ([".jpg", ".jpeg", ".png"].includes(ext)) {
          // 압축된 이미지를 저장할 경로
          const outputPath = path.join(
            directory,
            `${path.basename(file, ext)}_compressed${ext}`
          );
          await compressImage(filePath, outputPath);
        }
      }
    }
  } catch (error) {
    console.error("디렉토리 처리 중 에러:", error);
  }
}

// 스크립트 실행
async function run() {
  console.log("이미지 압축 시작...\n");
  await processDirectory(PUBLIC_PATH);
  console.log("모든 이미지 압축 완료!");
}

run();

// 파일 끝에 추가
module.exports = { compressImage };
