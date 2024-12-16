import React, { useState, useEffect } from "react";
import "./Department.css";

function Department() {
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

  const eduContents = [
    {
      title: "실무 중심 콘텐츠 전문가 교육과정",
      description: [
        "직무 전공별 특화 실무 교육 진행",
        "국가직무능력표준기반 교육 커리큘럼 윤영",
        "스마트콘텐츠, 영상미디어, 게임 등 진로디자인 로드맵 운영",
        "실무 중심 교수진 및 교과·비교과 프로그램 구성",
      ],
      image: "/images/edu1.png",
    },
    {
      title: "멀티미디어 융복합콘텐츠 연구개발",
      description: [
        "스마트 디바이스를 활용한 스마트콘텐츠 제작 및 구현",
        "[New Media Contents Zone] 영상미디어콘텐츠 제작",
        "[XR Contents Zone] 3D, 게임, VR·AR, 홀로그램 개발",
        "[Co-working Space] 콘텐츠 아이디어·아이템 개발 구현",
      ],
      image: "/images/edu2.png",
    },
    {
      title: "산학협력 프로젝트",
      description: [
        "첨단 융합 스튜디오 운영 및 활성화",
        "실무 프로젝트 취·창업 동아리와 산학협력 연계",
        "창업캡스톤디자인 과목 연계를 통한 산학연 프로젝트 진행",
        "공모전, 경진대회 등 현업 실무자 지도 및 컨설팅 진행",
      ],
      image: "/images/edu3.png",
    },
  ];
  const professors = [
    {
      name: "김병완",
      position: "미디어콘텐츠학부 학부장",
      image: "/images/professors/김병완_학부소개_IMG.PNG",
    },
    {
      name: "최흥렬",
      position: "미디어콘텐츠학부 지도교수",
      image: "/images/professors/최흥렬_학부소개_IMG.PNG",
    },
    {
      name: "이병권",
      position: "미디어콘텐츠학부 지도교수",
      image: "/images/professors/이병권_학부소개_IMG.PNG",
    },
    {
      name: "김금영",
      position: "미디어콘텐츠학부 지도교수",
      image: "/images/professors/김금영_학부소개_IMG.PNG",
    },
    {
      name: "유해영",
      position: "미디어콘텐츠학부 지도교수",
      image: "/images/professors/유해영_학부소개_IMG.PNG",
    },
    {
      name: "김명미",
      position: "미디어콘텐츠학부 지도교수",
      image: "/images/professors/김명미_학부소개_IMG.PNG",
    },
    {
      name: "최인라",
      position: "미디어콘텐츠학부 겸임교수",
      image: "/images/professors/최인라_학부소개_IMG.PNG",
    },
    {
      name: "조한주",
      position: "미디어콘텐츠학부 겸임교수",
      image: "/images/professors/조한주_학부소개_IMG.PNG",
    },
  ];
  return (
    <div className="section-wrapper">
      <div className="department-container">
        <img src={getImageSource("/images/department.png")} alt="학과 소개" />
      </div>
      <div className="department-container">
        <div className="department-Media">
          <div className="department-Media-title">
            <h2 className="department-Media-title-text">Media Contents</h2>
            <p>
              미래산업의 핵심·인재·창의 융함형 멀티미디어 콘텐츠 전문가를
              양성하는 미디어콘텐츠학부를 소개합니다.
            </p>
          </div>
          <div className="department-Media-description">
            <h2 className="department-Media-description-text">
              미디어콘텐츠학부 목표
            </h2>
            <p>
              멀티미디어환경에 유기적으로 대응할 수 있는 첨단실용학문으로
              실무에서 요구하는 "멀티형 인재"로 성장하기 위한
              <br />
              지능형 · 감성형 ·실감형 3단계 융합미디어교육과정을 통해
              스마트미디어콘텐츠전문가를 양성합니다.
            </p>
          </div>
          <div className="department-Media-content">
            <img
              src={getImageSource("/images/Department.svg")}
              alt="미디어콘텐츠학부 소개"
            />
          </div>
          <div className="department-Media-content-type">
            <div className="department-Media-content-type-item">
              <p>지능형 콘텐츠</p>
            </div>
            <div className="department-Media-content-type-item">
              <p>감성형 콘텐츠</p>
            </div>
            <div className="department-Media-content-type-item">
              <p>실감형 콘텐츠</p>
            </div>
          </div>
        </div>
        <div className="content-edu">
          {eduContents.map((content, index) => (
            <div
              key={index}
              className={`edu-item ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="edu-image">
                <img src={getImageSource(content.image)} alt={content.title} />
              </div>
              <div
                className={`edu-text ${index === 1 ? "edu-text-second" : ""}`}
              >
                <h3>{content.title}</h3>
                {Array.isArray(content.description) ? (
                  content.description.map((item, i) => (
                    <p key={i} className="description-item">
                      {item}
                    </p>
                  ))
                ) : (
                  <p>{content.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="professors-section">
        <div className="department-Media">
          <div className="department-Media-title">
            <h2 className="department-Media-title-text">Media Contents</h2>
            <p>미디어콘텐츠학부 교수진을 소개합니다.</p>
          </div>
        </div>
        <div className="professors-grid">
          {professors.map((professor, index) => (
            <div key={index} className="professor-card">
              <div className="professor-image">
                <img
                  src={getImageSource(professor.image)}
                  alt={professor.name}
                />
              </div>
              <div className="professor-info">
                <h3 className="professor-name">{professor.name}</h3>
                <p className="professor-position">{professor.position}</p>
                <p className="professor-field">{professor.field}</p>
                <p className="professor-email">{professor.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Department;
