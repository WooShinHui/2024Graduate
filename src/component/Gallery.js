import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Gallery.css";

Modal.setAppElement("#root");

function Gallery() {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  // Fisher-Yates 셔플 알고리즘
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    // 초기 이미지 배열 생성 및 섞기
    const initialImages = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      src: `/images/gallery/img${index + 1}.jpg`,
      alt: `Gallery Image ${index + 1}`,
    }));

    setGalleryImages(shuffleArray(initialImages));
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  useEffect(() => {
    const checkWebP = async () => {
      const webpData =
        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
      try {
        const img = new Image();
        img.onload = () => setSupportsWebP(true);
        img.onerror = () => setSupportsWebP(false);
        img.src = webpData;
      } catch {
        setSupportsWebP(false);
      }
    };

    checkWebP();
  }, []);

  const getImageSource = (src) => {
    if (supportsWebP) {
      return `${process.env.PUBLIC_URL}${src.replace(
        /\.(jpg|jpeg|png)$/i,
        ".webp"
      )}`;
    }
    return `${process.env.PUBLIC_URL}${src}`;
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="sections-wrapper">
      <div className="gallery-banner">
        <img
          src={getImageSource("/images/gallery/gallery.jpg")}
          alt="gallery banner"
        />
      </div>
      <div className="gallery-container">
        <div className="location-header">
          <div className="location-title-wrapper">
            <h1 className="location-title">Gallery</h1>
            <span className="circle"></span>
          </div>
          <p className="subtitle">
            서원대학교 미디어콘텐츠학부 2024 END TO AND 졸업전시회
          </p>
          <div className="underline"></div>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={getImageSource(image.src)} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Gallery Image"
        className="Gallery-modal-content"
        overlayClassName="Gallery-overlay"
      >
        <div className="Gallery-modal-inner">
          <img
            src={getImageSource(galleryImages[currentImageIndex]?.src)}
            alt={galleryImages[currentImageIndex]?.alt}
          />
        </div>
      </Modal>

      {isOpen && (
        <>
          <button
            className="Gallery-arrow Gallery-left-arrow"
            onClick={goToPrevious}
          >
            <FaArrowLeft />
          </button>
          <button
            className="Gallery-arrow Gallery-right-arrow"
            onClick={goToNext}
          >
            <FaArrowRight />
          </button>
          <button className="Gallery-close-button" onClick={closeModal}>
            X
          </button>
        </>
      )}
    </div>
  );
}

export default Gallery;
