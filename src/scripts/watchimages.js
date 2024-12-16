const chokidar = require("chokidar");
const path = require("path");
const { convertToWebP } = require("./convertToWebP");
const { compressImage } = require("./compressImages");

const IMAGE_DIRS = [
  "public/images/thumbnail",
  "public/images/profile",
  "public/images/banner",
];

// 와치러 설정
const watcher = chokidar.watch(IMAGE_DIRS, {
  ignored: /(^|[\/\\])\../, // 숨김 파일 무시
  persistent: true,
});

// 이미지 처리 함수
async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    console.log(`새 이미지 감지됨: ${filePath}`);

    // WebP 변환
    await convertToWebP(filePath);

    // 원본 이미지 압축
    const directory = path.dirname(filePath);
    const filename = path.basename(filePath);
    const outputPath = path.join(
      directory,
      `${path.basename(filename, ext)}_compressed${ext}`
    );
    await compressImage(filePath, outputPath);
  }
}

// 이벤트 리스너 설정
watcher
  .on("add", (filePath) => {
    processImage(filePath);
  })
  .on("ready", () => {
    console.log("초기 스캔 완료. 파일 변경 감시 중...");
  });

console.log("이미지 디렉토리 모니터링 시작...");
