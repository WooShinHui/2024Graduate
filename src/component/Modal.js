import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";
import {
  IoChevronBack,
  IoChevronForward,
  IoCall,
  IoMail,
} from "react-icons/io5";

function Modal({ isOpen, onClose, data, onNext, onPrev, variant = "default" }) {
  const [activeTab, setActiveTab] = useState("banner");
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [mouseDownOnOverlay, setMouseDownOnOverlay] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const clickX = window.mouseX || window.innerWidth / 2;
      const clickY = window.mouseY || window.innerHeight / 2;

      if (contentRef.current) {
        contentRef.current.style.transformOrigin = `${clickX}px ${clickY}px`;
      }

      setTimeout(() => {
        overlayRef.current?.classList.add("active");
      }, 10);
    }
  }, [isOpen]);

  const handleMouseDown = (e) => {
    if (e.target === overlayRef.current) {
      setMouseDownOnOverlay(true);
    }
  };

  const handleMouseUp = (e) => {
    if (e.target === overlayRef.current && mouseDownOnOverlay) {
      onClose();
    }
    setMouseDownOnOverlay(false);
  };

  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "video":
        return (
          <div className="video-container">
            <iframe
              width="100%"
              style={{ height: "65vh" }}
              src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?rel=0&modestbranding=1&origin=https://media.seowon.ac.kr&enablejsapi=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="origin"
            ></iframe>
          </div>
        );
      case "banner":
        return (
          <div className="tab-content banner-container">
            <div className="image-wrapper">
              <picture>
                <source
                  srcSet={data.bannerImage.replace(
                    /\.(jpg|jpeg|png)$/,
                    ".webp"
                  )}
                  type="image/webp"
                />
                <img
                  src={data.bannerImage}
                  alt="현수막"
                  className={`banner-image ${
                    variant === "team" ? "team-modal" : ""
                  }`}
                  style={{ userSelect: "none" }}
                  onLoad={(e) => {
                    const img = e.target;
                    const wrapper = img.closest(".image-wrapper");
                    const updateHeight = () => {
                      if (wrapper) {
                        const clipPercent = variant === "team" ? 0.072 : 0.0587;
                        const height = img.offsetHeight * (1 - clipPercent);
                        wrapper.style.height = `${height}px`;
                      }
                    };
                    updateHeight();
                    window.addEventListener("resize", updateHeight);
                    return () =>
                      window.removeEventListener("resize", updateHeight);
                  }}
                />
              </picture>
            </div>
          </div>
        );
      case "introduce":
        return (
          <div className="video-container">
            <iframe
              width="100%"
              style={{ height: "65vh" }}
              src={`https://www.youtube-nocookie.com/embed/${data.introduceYoutubeId}?rel=0&modestbranding=1&origin=https://media.seowon.ac.kr&enablejsapi=0`}
              title="YouTube introduce video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="origin"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="modal-overlay"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div ref={contentRef} className="modal-content">
          <div
            className={`modal-grid ${
              variant === "team" ? "modal-grid-team" : ""
            }`}
          >
            <div
              className={`modal-left ${
                variant === "team" ? "modal-left-team" : ""
              }`}
            >
              {variant === "team" ? (
                <div className="modal-profile-team">
                  <h2 className="team-brand">{data.brand}</h2>
                  <picture>
                    <source
                      srcSet={data.profileImage.replace(
                        /\.(jpg|jpeg|png)$/,
                        ".webp"
                      )}
                      type="image/webp"
                    />
                    <img
                      src={data.profileImage}
                      alt="프로필"
                      className="profile-image-team"
                    />
                  </picture>
                  <div className="team-info-divider" />
                  <div className="team-members">
                    <h4 className="project-title-team">{data.title}</h4>
                    <h4 className="team-name">{data.name}</h4>
                  </div>
                  <h4 className="project-team-name">{data.project}</h4>
                  <p className="project-description">{data.fullDescription}</p>
                  <div className="contact-info-team">
                    <div className="contact-item">
                      <IoCall className="contact-icon" />
                      <span>{data.phone}</span>
                    </div>
                    <div className="contact-item">
                      <IoMail className="contact-icon" />
                      <span>{data.email}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="modal-section-title">{data.sectionTitle}</h2>
                  <div className="modal-profile">
                    <div className="profile-info">
                      <h3>{data.name}</h3>
                      <span>{data.title}</span>
                      <br />
                      <span>{data.position}</span>
                    </div>
                    <div className="profile-info">
                      <picture>
                        <source
                          srcSet={data.profileImage.replace(
                            /\.(jpg|jpeg|png)$/,
                            ".webp"
                          )}
                          type="image/webp"
                        />
                        <img
                          src={data.profileImage}
                          alt="프로필"
                          className="profile-image"
                        />
                      </picture>
                    </div>
                  </div>
                  <p className="profile-description">{data.fullDescription}</p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <IoCall className="contact-icon" />
                      <span>{data.phone}</span>
                    </div>
                    <div className="contact-item">
                      <IoMail className="contact-icon" />
                      <span>{data.email}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className={`modal-right ${
                variant === "team" ? "modal-right-team" : ""
              }`}
            >
              {renderTabContent()}
              {variant !== "team" && (
                <div className="tab-buttons">
                  <button
                    className={`tab-button ${
                      activeTab === "banner" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("banner")}
                  >
                    프로젝트 제안
                  </button>
                  <button
                    className={`tab-button ${
                      activeTab === "video" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("video")}
                  >
                    제안 발표
                  </button>
                  <button
                    className={`tab-button ${
                      activeTab === "introduce" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("introduce")}
                  >
                    1분 자기소개
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="modal-nav prev" onClick={onPrev}>
        <IoChevronBack />
      </button>
      <button className="modal-nav next" onClick={onNext}>
        <IoChevronForward />
      </button>
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
    </>
  );
}

export default Modal;
