import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaVideo,
  FaUsers,
  FaUniversity,
  FaImages,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Sidebar.css";
export const NO_HEADER_PATHS = [
  "/2024/department",
  "/2024/gallery",
  "/2024/location",
];
function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("/2024/multi");

  useEffect(() => {
    if (location.pathname.startsWith("/2024/multi")) {
      setActiveItem("/2024/multi");
    } else {
      setActiveItem(location.pathname);
    }
  }, [location.pathname]);

  const menuItems = [
    {
      id: 1,
      path: "/2024/multi",
      name: "멀티미디어",
      description: "UX/UI DESIGN & DEVELOPMENT",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      path: "/2024/video",
      name: "영상미디어",
      description: "PRODUCTION & MOTION GRAPHIC",
      icon: <FaVideo />,
    },
    {
      id: 3,
      path: "/2024/team",
      name: "팀 프로젝트",
      description: "TEAM PROJECT",
      icon: <FaUsers />,
    },
    {
      id: 4,
      path: "/2024/department",
      name: "학부 소개",
      description: "DEPARTMENT INFO",
      icon: <FaUniversity />,
    },
    {
      id: 5,
      path: "/2024/gallery",
      name: "갤러리",
      description: "GALLERY",
      icon: <FaImages />,
    },
    {
      id: 6,
      path: "/2024/location",
      name: "오시는 길",
      description: "LOCATION",
      icon: <FaMapMarkerAlt />,
    },
  ];

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (path) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate(path);
    setActiveItem(path);
    closeSidebar();
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content-wrapper">
          <div
            className="logo-container"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.location.href = "https://media.seowon.ac.kr/2024/";
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="로고"
              className="logo"
            />
          </div>
          <nav className="menu-container">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`menu-item ${
                  item.path === activeItem ? "active" : ""
                }`}
                onClick={() => handleMenuClick(item.path)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="menu-content">
                  <span className="menu-icon">{item.icon}</span>
                  <div className="menu-text">
                    <div className="menu-title">{item.name}</div>
                    {(hoveredItem === item.name ||
                      item.path === activeItem) && (
                      <div className="menu-description">{item.description}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* 소셜 미디어 아이콘과 이미지 추가 */}
          <div className="sidebar-footer">
            <div className="footer-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/서원대학교미디어콘텐츠학부.png`}
                alt="Footer"
                className="footer-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
