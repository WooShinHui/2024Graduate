import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Multi.css";

function Video({ selectedCategory, setSelectedCategory, searchKeyword }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [supportsWebP, setSupportsWebP] = useState(false);

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

  const getImagePath = (path) => {
    return {
      webp: path.replace(/\.(jpg|png)$/, ".webp"),
      original: path,
    };
  };

  const categories = ["All", "Video Producer", "3D", "2D", "Game Developer"];

  const sections = [
    {
      title: "Video Producer",
      contents: [
        {
          id: 1,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박수빈_썸네일.jpg`
          ).webp,
          title: "마피아100",
          description: "",
          tags: ["영상 콘텐츠 기획", "파일럿 프로그램", "서바이벌"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박수빈.png`
          ).webp,
          name: "박수빈",
          position: "Video Producer",
          brand: "마피아100",
          fullDescription:
            "기존 마피아 게임에는 다양한 직업이 존재하지만, 최대 인원 제한으로 인해 한 게임에서 모든 직업을 활용하기는 어렵습니다. 만약 모든 직업이 한 게임에 모인다면 어떨까요? 마피아100은 이러한 발상에서 출발하여, 모든 직업이 등장할 수 있는 초대형 마피아 실사 게임을 구현할 것을 제안합니다.",
          youtubeId: "JKw8lE1_QCM",
          introduceYoutubeId: "LVSW4bJoygA",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박수빈_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "soobin2172@naver.com",
        },
        {
          id: 2,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박수연_썸네일.jpg`
          ).webp,
          title: "플레이스테이션",
          description: "아티스트 뮤직비디오 연출",
          tags: ["영상 콘텐츠 기획", "플레이스테이션", "브랜드 광고 기획"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박수연.png`
          ).webp,
          name: "박수연",
          position: "Video Producer",
          brand: "플레이스테이션",
          fullDescription:
            "소니 플레이스테이션은 혁신적인 기술과 성능으로 높은 소비자 만족도를 자랑하며, 콘솔 시장에서 강력한 입지를 다졌습니다. 이번 광고는 가족이 플레이스테이션을 통해 서로 이해하며 소통하는 과정을 담아 브랜드의 따뜻한 유대감을 강조하고, 브랜드 인지도를 높이는 가족 간 유대감을 형성하는 광고 기획을 제안합니다.",
          youtubeId: "WfMhBx947QY",
          introduceYoutubeId: "phSGVV8ALm8",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박수연_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "qkrtndus2021@naver.com",
        },
        {
          id: 3,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/최윤민_썸네일.jpg`
          ).webp,
          title: "食도락",
          description: "환경 다큐멘터리 제작",
          tags: ["영상 콘텐츠 기획", "유튜브 콘텐츠", "미식 여정"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/최윤민.png`
          ).webp,
          name: "최윤민",
          position: "Video Producer",
          brand: "Documentary Studio",
          fullDescription:
            "현재 음식 콘텐츠 시장은 유사한 형식의 프로그램의 포화로 인해 경험과 시청자 참여를 유도할 수 있는 참여형 콘텐츠가 필요합니다. 따라서 음식과 개인의 이야기를 통해 차별화된 접근을 제공하며, 시청자에게 깊은 공감과 재미를 선사하는 ‘食도락’ 웹 예능 프로그램을 제안합니다.",
          youtubeId: "2Fv_ri5OuoY",
          introduceYoutubeId: "04nH9IFBIgg",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/최윤민_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "cym4051@naver.com",
        },
        {
          id: 4,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박다정_썸네일.jpg`
          ).webp,
          title: "밴드 체인지업 : 60s",
          description: "청춘 웹드라마 연출",
          tags: ["60초 음악", "음악 챌린지", "참여형 콘텐츠"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박다정.png`
          ).webp,
          name: "박다정",
          position: "Video Producer",
          brand: "Web Content Studio",
          fullDescription:
            "짧아야 살아남는 숏폼시대, 음악도 짧게 들을 수 없을까? MZ세대의 숏폼 소비 트렌드와 챌린지 열풍을 반영하여 재미있고 쉽게 참여할 수 있는 콘텐츠를 제안합니다.",
          youtubeId: "PW0mrobDe4k",
          introduceYoutubeId: "kIMl_CqHfaA",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박다정_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "da0j61@gmail.com",
        },
        {
          id: 5,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/고정민_썸네일.jpg`
          ).webp,
          title: "새로 살구",
          description: "제품 광고 캠페인",
          tags: ["영상 기획", "제품 광고", "유튜브 광고"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/고정민.png`
          ).webp,
          name: "고정민",
          position: "Video Producer",
          brand: "AD Agency",
          fullDescription:
            "새로 살구는 부드럽고 달콤한 맛과 낮은 도수로 인해 술을 잘 못하는 분들도 부담 없이 편안하게 즐길 수 있는 음료입니다. 이러한 특성 덕분에 새로 살구는 친구들과의 즐거운 모임부터 특별한 기념일까지, 일상 속 다양한 순간에 자연스럽게 어울리는 술로 자리 잡고 있습니다. 이번 광고 기획의 핵심은, 새로 살구가 단순히 술을 마시는 경험을 넘어 일상의 특별한 순간을 만들어 주는 동반자가 될 수 있다는 메시지를 전달하는 데 있습니다. 새로 살구와 함께라면 사람들은 평소와는 다른 상큼한 설렘을 느낄 수 있고, 소중한 사람들과의 추억을 한층 더 빛나게 할 수 있습니다. 이를 통해 새로 살구가 갖는 일상적이고도 특별한 매력을 더 많은 소비자들이 체감할 수 있는 광고를 제안합니다.",
          youtubeId: "mteCsw-W-TA",
          introduceYoutubeId: "DIR_INTRO_5",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/고정민_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "nhp7227@gmail.com",
        },
        {
          id: 6,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박지수_썸네일.jpg`
          ).webp,
          title: "출동 봉사맨",
          description: "온라인 교육 프로그램",
          tags: ["영상 기획", "자원 봉사", "유튜브 콘텐츠"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박지수.png`
          ).webp,
          name: "박지수",
          position: "Video Producer",
          brand: "EduTech",
          fullDescription:
            "유튜브 콘텐츠 시장에서는 봉사와 나눔 관련 콘텐츠의 부재로 인해 봉사 활동에 대한 정보 접근성이 낮고, 참여를 위한 진입 장벽이 높습니다.이에 따라 봉사 관련 콘텐츠의 부재를 해결하고 젊은 세대의 봉사 활동 참여를 늘리기 위해 레벨 업, 보상, 배지 획득 등의 게임 컨셉과 '봉사맨' 이라는 캐릭터를 설정하여 재미있고 가볍게 다가갈 수 있는 있도록 하였습니다. 젊은 세대의 자발적인 참여를 유도하며, 봉사를 재미있고 가치 있는 경험으로 만드는 유튜브 콘텐츠를 제안합니다.",
          youtubeId: "tgsZBy40unI",
          introduceYoutubeId: "1dxAHSSAtMc",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박지수_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "pjss7475@naver.com",
        },
        {
          id: 7,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/강해인_썸네일.jpg`
          ).webp,
          title: "현대자동차",
          description: "스포츠 경기 생중계",
          tags: ["영상 콘텐츠 기획", "현대자동차", "브랜드 광고 기획"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/강해인.png`
          ).webp,
          name: "강해인",
          position: "Video Producer",
          brand: "Sports Media",
          fullDescription:
            "'아버지'와 '나'의 대화와 작은 행동을 통해 아버지의 진심을 보여줍니다. 평소 무뚝뚝한 모습과는 달리, 이 안에서는 나를 향한 깊은 사랑과 진심이 드러나며, 이를 통해 시청자가 가족의 소중함을 다시 느낄 수 있는 광고를 제안합니다.",
          youtubeId: "wV-yNQPjlH8",
          introduceYoutubeId: "WJss0Ibc4NU",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/강해인_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "albap339@naver.com",
        },
        {
          id: 8,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김민지_썸네일.jpg`
          ).webp,
          title: "요즘 추구미",
          description: "크리에이터 콘텐츠",
          tags: ["영상 콘텐츠 기획", "유튜브 콘텐츠", "혼합형 포맷"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김민지.png`
          ).webp,
          name: "김민지",
          position: "Video Producer",
          brand: "Creator Studio",
          fullDescription:
            "다변화된 라이프스타일과 취향 기반 콘텐츠의 성장 속에서, 시청자들은 점차 자신만의 개성과 가치를 반영하는 콘텐츠를 찾고 있습니다. '요즘 추구미'는 '추구미'라는 개성과 탐구를 아우르는 키워드를 통해 시청자가 각자의 고유한 가치와 특색을 발견할 수 있는 방향성을 제안합니다.",
          youtubeId: "Eb_1dk5YCqs",
          introduceYoutubeId: "0IG8fe7fae4",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김민지_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "alswlalswl0525@naver.com",
        },
      ],
    },
    {
      title: "3D",
      contents: [
        {
          id: 12,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/유동관_썸네일.jpg`
          ).webp,
          title: "나이키조던",
          description: "게임 캐릭터 3D 모델링",
          tags: ["3D 모션그래픽 디자인", "애니메이션", "나이키"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/유동관.png`
          ).webp,
          name: "유동관",
          position: "3D Motion Graphic Designer",
          brand: "나이키조던",
          fullDescription:
            "나이키는 스니커즈와 스포츠 패션시장에서 중심적인 역할을 하며 재판매 시장에서도 높은가치를 지니고있습니다. 소비자들이 희소성과 소장가치뿐만 아니라 다양한 컬러와 조던의 혁신 정신을 경험할 수 있도록 역동적인 스토리와 이를 통해 다양한 스타일로 개성과 열정을 표현을 제안합니다.",
          youtubeId: "SWz9bmaTJ8o",
          introduceYoutubeId: "7RwuNkTyYDU",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/유동관_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "3dartist1@example.com",
        },
        {
          id: 13,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박소희_썸네일.jpg`
          ).webp,
          title: "롤렉스",
          description: "게임 환경 3D 모델링",
          tags: ["3D 모션그래픽", "그래픽 디자인", "디지털 아트"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박소희.png`
          ).webp,
          name: "박소희",
          position: "3D Motion Graphic Designer",
          brand: "Rolex",
          fullDescription:
            "롤렉스의 독창적인 디자인을 통해 브랜드의 세련된 이미지를 효과적으로 전달하고자 기획했습니다. 간결한 모션으로 정교함과 품격을 부각하고, 브랜드의 상징적인 요소를 강조하여 롤렉스의 정체성을 구현하고자 합니다. 또한, 시간에 대한 철학과 고급스러움을 담아내어 타임리스한 가치를 제안합니다.",
          youtubeId: "gRx53f8YyYg",
          introduceYoutubeId: "3x5j21mAuoo",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박소희_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "thgml806@naver.com",
        },
        {
          id: 14,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/조민지_썸네일.jpg`
          ).webp,
          title: "게임 배경 모델링",
          description: "게임 배경 3D 모델링",
          tags: ["3D", "3D 배경 모델링", "게임 배경 모델링"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/조민지.png`
          ).webp,
          name: "조민지",
          position: "3D Modeler",
          brand: "게임 배경 모델링",
          fullDescription:
            "The Last of us 게임 속 아포칼립스 폐허가 된 세상에서 소녀가 놀이공원의 회전목마를 바라보며 상실감과 희망을 느끼는 모습을 표현했습니다. 회전목마는 과거의 즐거움과 희망의 상징으로, 소녀는 잃어버린 순간들을 회상하는 장면으로 콘솔 게임 배경에 적합한 모델링을 제안합니다.",
          youtubeId: "-QFElUg_FZ4",
          introduceYoutubeId: "5VzIdJzmbJ0",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/조민지_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "3dartist3@example.com",
        },
        {
          id: 15,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/황인애_썸네일.jpg`
          ).webp,
          title: "게임 시네마틱 모델링",
          description: "게임 시네마틱 모델링",
          tags: ["3D", "3D 배경 모델링", "게임 배경 모델링", "MAYA"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/황인애.png`
          ).webp,
          name: "황인애",
          position: "3D Modeler",
          brand: "Design Lab",
          fullDescription:
            "이 에셋은 Life is Strange와 같은 감성 어드벤처 게임에서 영감을 받아 제작되었습니다. 주인공의 어린 시절 추억과 떠나지 못한 기억이 깃든 공간을 디테일하게 표현하며, 바랜 가구와 소품으로 내적 갈등과 정서를 전달합니다. 플레이어가 이야기와 감정에 깊이 몰입할 수 있는 경험을 제안합니다.",
          youtubeId: "oPAMOinoULY",
          introduceYoutubeId: "mJgzjtms0PU",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/황인애_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "inaeh99@gmail.com",
        },
        {
          id: 16,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/권정은_썸네일.jpg`
          ).webp,
          title: "게임 시네마틱 모델링",
          description: "게임 시네마틱 모델링",
          tags: ["3D", "3D 배경 모델링", "MAYA"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/권정은.png`
          ).webp,
          name: "권정은",
          position: "3D Modeler",
          brand: "게임 시네마틱 모델링",
          fullDescription:
            "이 에셋은 The Outlast Trials 게임에서 영감을 받아 제작하게 되었습니다. 창문 하나 없는 폐쇄된 공간에 놓인 수술대와 생활 흔적이 뭍은 방은, 사이코패스 살인자의 은신처를 연상시키면서 플레이어의 긴장과 불안을 자극해 공포감을 극대화하는 게임 시네마틱 모델링은 제안합니다.",
          youtubeId: "_PiQTGi145I",
          introduceYoutubeId: "K3iwASAl7S8",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/권정은_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "rnjswjddms@gmail.com",
        },
        {
          id: 17,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김지현_썸네일.jpg`
          ).webp,
          title: "영화 3D 배경 모델링",
          description: "영화 3D 배경 모델링",
          tags: ["3D", "3D 배경 모델링", "시네마틱"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김지현.png`
          ).webp,
          name: "김지현",
          position: "3D Modeler",
          brand: "VFX Studio",
          fullDescription:
            "19세기 영국을 배경으로 고딕 양식의 건물들을 배치하고, 블루톤의 배경으로 차가운 밤의 분위기를 연출하였습니다. 오렌지빛 조명은 따뜻함과 환영의 느낌을 더해 대비를 이루도록 하여, 시청자가 영화 ‘해리 포터’나 ‘폴라 익스프레스’와 같은 판타지 세계에 몰입할 수 있는 경험을 제공하고자 이 작품을 제안합니다.",
          youtubeId: "8BbJhueTgXU",
          introduceYoutubeId: "3qIBoTKb1Gc",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김지현_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "3dartist6@example.com",
        },
        {
          id: 18,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/조승연_썸네일.jpg`
          ).webp,
          title: "게임 배경 세트 디자인 모델링",
          description: "언리얼 엔진 개발",
          tags: [
            "3D 모델링",
            "3D 배경 모델링",
            "3D 게임 디자인",
            "그래픽 디자인",
            "b3b",
          ],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/조승연.png`
          ).webp,
          name: "조승연",
          position: "3D Modeler",
          brand: "게임 배경 세트 디자인 모델링",
          fullDescription:
            "스릴러 게임 작품을 위해 일상적인 지하철 공간을 어둡고 음산하게 재구성하였으며, 폐쇄감과 제한된 빛을 통해 지하철이라는 일상적인 공간에 불안과 공포를 자아내도록 디자인하였습니다. 플레이어 시청자 미지의 존재와 마주하는 긴장감과 이질적인 공포감을 체험할 수 있는 공간을 제안합니다.",
          youtubeId: "s0FvnxhZij4",
          introduceYoutubeId: "3D_INTRO_7",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/조승연_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "josy1231@naver.com",
        },
      ],
    },
    {
      title: "2D",
      contents: [
        {
          id: 9,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/정채연_썸네일.jpg`
          ).webp,
          title: "도로교통공단",
          description: "도로교통공단",
          tags: ["도로교통공단", "캠페인", "2D 모션그래픽"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/정채연.png`
          ).webp,
          name: "정채연",
          position: "2D Motion Graphic Designer",
          brand: "도로교통공단",
          fullDescription:
            "고령자를 단순한 교통약자가 아닌, 우리 사회의 소중한 구성원으로 바라보는 따뜻한 시선을 담아 작품을 제작했습니다. 이 작품을 통해 사람들이 고령자에 대한 인식을 새롭게 하고, 고령자를 위한 사회적 관심을 높여 더불어 살아가는 사회를 만들어 나가는 데 기여하고자 이를 제안합니다.",
          youtubeId: "3Rqz-4R-MX8",
          introduceYoutubeId: "5B7B4YHGYII",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/정채연_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "wjdcodus0731@naver.com",
        },
        {
          id: 10,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/신서연_썸네일.jpg`
          ).webp,
          title: "모두 네 덕 뿐이야!",
          description: "브랜드 모션그래픽",
          tags: ["2D 모션그래픽", "애니메이션", "캐릭터"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/신서연.png`
          ).webp,
          name: "신서연",
          position: "2D Motion Graphic Designer",
          brand: "Design Studio",
          fullDescription:
            "‘친구와 사이좋게 지내라고들 하지만, 그 방법을 잘 모르겠어’\n아이들이 자연스럽게 학습하고, 사회성을 기르고, 창의력을 발휘할 수 있는 콘텐츠의 필요성을 느꼈습니다. 이에 네 마리의 오리 형제와 함께 배우며 성장하는 유아용 애니메이션 콘텐츠를 제안합니다.",
          youtubeId: "aIxAa74k3JQ",
          introduceYoutubeId: "3_GyoPsJdFE",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/신서연_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "someaovo@gmail.com",
        },
      ],
    },
    {
      title: "Game Developer",
      contents: [
        {
          id: 19,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/주영훈_썸네일.jpg`
          ).webp,
          title: "Tokyo Quest / Zombie Survivor",
          description: "Tokyo Quest / Zombie Survivor",
          tags: ["3D", "2D", "쿼터뷰 액션", "뱀서라이크", "Unity"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/주영훈.png`
          ).webp,
          name: "주영훈",
          position: "Game Developer",
          brand: "Tokyo Quest / Zombie Survivor",
          fullDescription:
            "짧고 가볍게 즐길 수 있는 게임으로 쿼터뷰 액션 게임인 Tokyo Quest와 뱀서라이크류 게임인 Zombie Survivor을 게임 제작을 제안합니다.",
          youtubeId: "eFbqIHiy9X8",
          introduceYoutubeId: "y1rfIWtwJp0",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/주영훈_현수막.jpg`
          ).webp,
          phone: "043-299-8590",
          email: "juhanul0128@naver.com",
        },
      ],
    },
  ];

  const filteredSections = sections
    .map((section) => ({
      ...section,
      contents: section.contents
        .filter(
          (content) =>
            content.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            content.description
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            content.tags.some((tag) =>
              tag.toLowerCase().includes(searchKeyword.toLowerCase())
            )
        )
        .sort((a, b) => a.name.localeCompare(b.name, "ko-KR")),
    }))
    .filter((section) =>
      selectedCategory === "All"
        ? section.contents.length > 0
        : section.title === selectedCategory && section.contents.length > 0
    );

  const handleCardClick = (content, sectionTitle, event) => {
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
    const processedContent = {
      ...content,
      image:
        typeof content.image === "object" ? content.image.webp : content.image,
      profileImage:
        typeof content.profileImage === "object"
          ? content.profileImage.webp
          : content.profileImage,
      bannerImage:
        typeof content.bannerImage === "object"
          ? content.bannerImage.webp
          : content.bannerImage,
    };
    setSelectedContent({ ...processedContent, sectionTitle });
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const currentSection = filteredSections.find(
      (section) => section.title === selectedContent.sectionTitle
    );
    const currentIndex = currentSection.contents.findIndex(
      (content) => content.id === selectedContent.id
    );

    if (currentIndex < currentSection.contents.length - 1) {
      const nextContent = currentSection.contents[currentIndex + 1];
      setSelectedContent({
        ...nextContent,
        sectionTitle: currentSection.title,
      });
    } else {
      const currentSectionIndex = filteredSections.findIndex(
        (section) => section.title === selectedContent.sectionTitle
      );
      if (currentSectionIndex < filteredSections.length - 1) {
        const nextSection = filteredSections[currentSectionIndex + 1];
        const nextContent = nextSection.contents[0];
        setSelectedContent({ ...nextContent, sectionTitle: nextSection.title });
      }
    }
  };

  const handlePrev = () => {
    const currentSection = filteredSections.find(
      (section) => section.title === selectedContent.sectionTitle
    );
    const currentIndex = currentSection.contents.findIndex(
      (content) => content.id === selectedContent.id
    );

    if (currentIndex > 0) {
      const prevContent = currentSection.contents[currentIndex - 1];
      setSelectedContent({
        ...prevContent,
        sectionTitle: currentSection.title,
      });
    } else {
      const currentSectionIndex = filteredSections.findIndex(
        (section) => section.title === selectedContent.sectionTitle
      );
      if (currentSectionIndex > 0) {
        const prevSection = filteredSections[currentSectionIndex - 1];
        const prevContent =
          prevSection.contents[prevSection.contents.length - 1];
        setSelectedContent({ ...prevContent, sectionTitle: prevSection.title });
      }
    }
  };

  return (
    <div className="sections-wrapper">
      {filteredSections.map((section, index) => (
        <div key={index} className="content-wrapper">
          <div className="section-header">
            <h2 className="content-title">{section.title}</h2>
            {index === 0 && (
              <div className="category-filter mobile-only">
                <div className="category-dropdown">
                  <button
                    className={`selected-category ${
                      selectedCategory ? "active" : ""
                    }`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {selectedCategory}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`dropdown-item ${
                            selectedCategory === category ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="content-grid">
            {section.contents.map((content) => (
              <div
                key={content.id}
                className="content-card"
                onClick={(event) =>
                  handleCardClick(content, section.title, event)
                }
              >
                <div className="card-image">
                  <img
                    src={`/2024/multi/images/thumbnail/${content.name}_썸네일.webp`}
                    alt={content.title}
                  />
                </div>
                <div className="card-info">
                  <h3 className="card-title">{content.title}</h3>
                  <p className="card-description">{content.name}</p>
                  <div className="card-tags">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedContent}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default Video;
