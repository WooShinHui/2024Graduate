import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Multi from "./component/Multi";
import Video from "./component/Video";
import Team from "./component/Team";
import Department from "./component/Department";
import Gallery from "./component/Gallery";
import Location from "./component/Location";
import "./App.css";
import { NO_HEADER_PATHS } from "./component/Sidebar";
import SocialLinks from "./component/SocialLinks";

const getDepartmentType = (pathname) => {
  if (pathname.includes("/multi")) {
    return "multimedia";
  } else if (pathname.includes("/video")) {
    return "videoMedia";
  } else if (pathname.includes("/team")) {
    return "teamProject";
  }
  return "multimedia"; // 기본값
};

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [departmentType, setDepartmentType] = useState("multimedia"); // 초기값 설정
  const navigate = useNavigate();

  // departmentType 업데이트
  useEffect(() => {
    const newDepartmentType = getDepartmentType(location.pathname);
    setDepartmentType(newDepartmentType);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 헤더 표시 여부 로직 수정
  const shouldShowHeader = () => {
    // 모바일에서는 항상 헤더 표시
    if (windowWidth <= 1024) {
      return true;
    }
    // 그 외에는 기존 로직 유지
    return !NO_HEADER_PATHS.includes(location.pathname);
  };

  // 초기 경로 설정
  useEffect(() => {
    if (location.pathname === "/2024" || location.pathname === "/2024/") {
      navigate("/2024/multi");
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className={`app-container ${shouldShowHeader() ? "has-header" : ""}`}>
      {shouldShowHeader() && (
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setIsSidebarOpen={setIsSidebarOpen}
          departmentType={departmentType}
        />
      )}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="main-content">
        <div className="content-area">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to="/2024/multi" replace state={{ from: "root" }} />
              }
            />
            <Route
              path="/2024"
              element={
                <Navigate to="/2024/multi" replace state={{ from: "2024" }} />
              }
            />
            <Route
              path="/2024/multi"
              element={
                <Multi
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchKeyword={searchKeyword}
                  departmentType={departmentType}
                />
              }
            />
            <Route
              path="/2024/video"
              element={
                <Video
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchKeyword={searchKeyword}
                  departmentType={departmentType}
                />
              }
            />
            <Route
              path="/2024/team"
              element={
                <Team
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchKeyword={searchKeyword}
                  departmentType={departmentType}
                />
              }
            />
            <Route path="/2024/department" element={<Department />} />
            <Route path="/2024/gallery" element={<Gallery />} />
            <Route path="/2024/location" element={<Location />} />
          </Routes>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
