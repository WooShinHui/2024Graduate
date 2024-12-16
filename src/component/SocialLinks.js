import React, { useState, useEffect } from "react";
import { FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import "./SocialLinks.css";

function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="social-links">
      <button
        className={`top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="페이지 상단으로"
      >
        <FaArrowUp />
      </button>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/swu_mediacontents/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          data-tooltip="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@%EB%AF%B8%EB%94%94%EC%96%B4%EC%BD%98%ED%85%90%EC%B8%A0%ED%95%99%EB%B6%80"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
          data-tooltip="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
