// 이미지 변환 유틸리티
export const convertToWebP = async (file) => {
  // 이미지가 아닌 경우 원본 반환
  if (!file.type.startsWith("image/")) {
    return file;
  }

  try {
    // 이미지를 Canvas에 그리기
    const image = await createImageBitmap(file);
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    // WebP로 변환 (품질 0.8)
    const webpBlob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/webp", 0.8);
    });

    // 새 파일 생성
    return new File(
      [webpBlob],
      file.name.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
      {
        type: "image/webp",
      }
    );
  } catch (error) {
    console.error("WebP 변환 실패:", error);
    return file; // 실패시 원본 반환
  }
};
