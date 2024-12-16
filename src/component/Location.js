import React, { useEffect, useState } from "react";
import "./Location.css";

function Location() {
  const [isKakaoMapLoaded, setIsKakaoMapLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  // WebP 지원 여부 확인
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

  // 이미지 소스 선택 함수
  const getImageSource = (src) => {
    if (supportsWebP) {
      return `${process.env.PUBLIC_URL}${src.replace(
        /\.(jpg|jpeg|png)$/i,
        ".webp"
      )}`;
    }
    return `${process.env.PUBLIC_URL}${src}`;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=972e8fba9d0bd80198f32390a1eb54db`;
    script.async = true;

    script.onload = () => {
      setIsKakaoMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isKakaoMapLoaded && window.kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(36.6247, 127.4822),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(36.6247, 127.4822);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 인포윈도우 생성
      const iwContent =
        '<div style="padding:5px; font-size:12px; color: #000; white-space: nowrap;"> 서원대학교 미래창조관 상상플러스 3F</div>';
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: false,
      });

      // 인포윈도우를 마커 위에 표시
      infowindow.open(map, marker);

      marker.setMap(map);
    }
  }, [isKakaoMapLoaded]);

  return (
    <div className="sections-wrapper">
      <div className="location-banner">
        <img src={getImageSource("/images/come.jpg")} alt="location banner" />
      </div>
      <div className="location-container">
        <div className="location-header">
          <h1 className="location-title">Location</h1>
          <span className="circle"></span>
          <p className="subtitle">
            서원대학교 미디어콘텐츠학부 2024 END TO AND 졸업전시회
          </p>
          <div className="underline"></div>
        </div>
        <div className="location-content">
          <div className="location-info">
            <div className="info-item">
              <span>Address</span>
              <div className="address-container">
                <p>(우)28674 충북 청주시 서원구 무심서로 377-3(모충동)</p>
                <p>서원대학교 미래창조관 상상플러스 3F</p>
              </div>
            </div>
            <div className="info-item">
              <span>Date</span>2024.11.18 - 2024.11.20
            </div>
            <div className="info-item">
              <span>Time</span>AM 09:00 - PM 17:00
            </div>
            <div className="info-item">
              <span>Tell</span>
              <div className="tell-container">
                <p>Tel.(84+)043-299-8590</p>
                <p>FAX.(84+)043-299-8590</p>
              </div>
            </div>
          </div>
          <div id="map" style={{ width: "60%", height: "400px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Location;
