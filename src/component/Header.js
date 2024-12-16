import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

function Header({
  selectedCategory,
  setSelectedCategory,
  setIsSidebarOpen,
  departmentType = "multimedia",
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 부서별 카테고리 정의
  const departmentCategories = {
    multimedia: ["All", "Product Manager", "Developer", "Designer"],
    videoMedia: ["All", "Video Producer", "2D", "3D", "Game Developer"],
    teamProject: ["All", "U300", "M-Team", "GonGunGames", "Media Façade"], // 팀 프로젝트 카테고리 수정
  };

  // 현재 부서에 맞는 카테고리 선택
  const categories =
    departmentCategories[departmentType] || departmentCategories.multimedia;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부서가 변경될 때 카테고리를 'All'로 리셋
  useEffect(() => {
    setSelectedCategory("All");
  }, [departmentType, setSelectedCategory]);

  return (
    <div
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="header-content">
        <div className="mobile-header">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="로고"
            className="header-logo"
          />
          <div className="mobile-actions">
            <button
              className="menu-toggle"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
