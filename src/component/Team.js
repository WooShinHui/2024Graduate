import React, { useState } from "react";
import Modal from "./Modal";
import "./Multi.css";

function Team({
  selectedCategory = "All",
  setSelectedCategory,
  searchKeyword = "",
}) {
  // State 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  // 카테고리 목록
  const categories = ["All", "U300", "M-Team", "GonGunGames"];

  const sections = [
    {
      title: "U300",
      contents: [
        {
          id: 1,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/최강박설남_썸네일.png`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/최강박설남_썸네일.webp`,
          title: "최강박설남",
          description: "외국 이주민들을 위한 메타버스 문화체험 서비스",
          tags: ["외국 이주민", "메타버스", "문화 체험", "VR"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/최강박설남.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/최강박설남.webp`,
          name: "남용현 설지훈 최윤민 강주희 박수빈",
          project: "외국 이주민들을 위한\n메타버스 문화체험 서비스",
          brand: "U300",
          fullDescription:
            "한국은 인구 감소와 외국 이주민 증가로 다문화 사회로의 전환이 가속화되고 있습니다. 이주민들은 문화적 차이로 인해 소외감을 느끼며 정착에 어려움을 겪고 있습니다. 이를 해결하기 위해, 가상 공간을 활용한 다국적 커뮤니티 플랫폼이 필요합니다. 가상 환경에서 다양한 문화 콘텐츠를 제공하고, 모바일 접근성을 강화하여 이주민들이 쉽게 참여할 수 있도록 제안합니다.",
          youtubeId: "U300_VIDEO_1",
          introduceYoutubeId: "U300_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/최강박설남_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/최강박설남_현수막.webp`,
          phone: "043-299-8590",
          email: "dydgus0054@naver.com",
        },
        {
          id: 2,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/하이어_썸네일.png`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/하이어_썸네일.webp`,
          title: "하이어",
          description: "거동이 불편한 사람들을 위한 인테리어 리노베이션",
          tags: ["사회적 약자", "인테리어 리노베이션"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/하이어.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/하이어.webp`,
          name: "이상윤 우신희 오인환 고민정 박다정",
          project: "거동이 불편한 사람들을 위한\n인테리어 리노베이션",
          brand: "U300",
          fullDescription:
            "거동이 불편한 사회적 약자를 위한 실감형 인테리어 리노베이션 서비스로,인테리어 시장의 접근성 향상이 목적이며, 기존 인테리어 디자인 프로세스 현장 실측,전문가 도움 필요, 복잡한 소프트웨어 사용 등으로 인해 접근성이 낮으며 사회적 약자들에게 큰 어려움이 있어 가상현실(XR) 기술을 도입하여 사용자가 현장 방문 없이도 공간을 시각적으로 체험하고 디자인 아이디어를 시뮬레이션을 할 수 있도록 플랫폼을 제안합니다.",
          youtubeId: "U300_VIDEO_2",
          introduceYoutubeId: "U300_INTRO_2",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/하이어_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/하이어_현수막.webp`,
          phone: "043-299-8590",
          email: "nks552@naver.com",
        },
        {
          id: 3,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/로컬_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/로컬_썸네일.webp`,
          title: "로컬",
          description: "가상현실 지역축제 서비스",
          tags: ["가상 현실", "지역 축제", "지역 상생", "사회적 약자"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/로컬.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/로컬.webp`,
          name: "김서영",
          project: "사회적 약자를 위한 가상현실 지역축제 서비스",
          brand: "U300",
          fullDescription:
            "2023년 전국에서 총 1,129개의 지역 축제가 개최되었으며,평균 8억의 예산이 사용되었지만 차별점이 없어  부정적인 인식을 만들고 있으며 ‘지속 가능’한 축제인지 판단이 줄어들고 있는 현실이기에 평소 축제를 즐기기 힘든 노약자들이나,장애인등 사회적 약자들 역시 직 간접적으로 지역축제에 참여할수 있게 제안합니다. ",
          youtubeId: "U300_VIDEO_3",
          introduceYoutubeId: "U300_INTRO_3",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/로컬_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/로컬_현수막.webp`,
          phone: "043-299-8590",
          email: "rhrnak0600@naver.com",
        },
        {
          id: 4,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/써밋_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/써밋_썸네일.webp`,
          title: "써밋",
          description:
            "기후변화 및 환경보호 인식증진을 위한\nXR 기반 탄소배출량 측정 체험형 시뮬레이터",
          tags: ["XR/VR/AR", "탄소 중립", "시뮬레이션"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/써밋.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/써밋.webp`,
          name: "김주원 김소은 유동관 고정민 김서연",
          project:
            "기후변화 및 환경보호 인식증진을 위한\nXR 기반 탄소배출량 측정 체험형 시뮬레이터",
          brand: "U300",
          fullDescription:
            "현재 문제가 커지고 있는 지구온난화 및 여러 가지 환경문제에 직결되어있는 탄소 배출 문제를 더 이상 전세계적으로 외면할 수 없는 상황에 놓여있는배경을 바탕으로 기후변화와 환경오염의 경각심을 알리고자 환경보호에 대한 인식을 증진할 수 있도록 하여 실제 비즈니스 모델을 제작하고 서비스를 구현할 수 있도록 XR 시뮬레이터 콘텐츠를 제안합니다. ",
          youtubeId: "U300_VIDEO_4",
          introduceYoutubeId: "U300_INTRO_4",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/써밋_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/써밋_현수막.webp`,
          phone: "043-299-8590",
          email: "apricotjw@naver.com",
        },
        {
          id: 5,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/펜타곤_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/펜타곤_썸네일.webp`,
          title: "펜타곤",
          description: "출산을 앞둔 여성을 위한\n출산 전 메타버스 케어 서비스",
          tags: ["VR", "메타버스", "출산 전 케어"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/펜타곤.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/펜타곤.webp`,
          name: "이도윤 이상빈 김민지 박지수 정채연",
          project: "출산을 앞둔 여성을 위한\n출산 전 메타버스 케어 서비스",
          brand: "U300",
          fullDescription:
            "최근 초산 평균연령 증가로 가임기 여성들의 기형아 출산율이 높아짐에 따라 출산에 대한 두려움이 높아지면서 사회적 이슈로 떠오르고 있습니다. 임산부를 위한 케어 서비스는 대부분 산후 케어 서비스를 제공하고 있으며 산전 케어에 관련된 서비스는 한정적이고 양질의 정보를 얻기 어렵습니다. 그러므로 실속 있고 정확한 맞춤형 산전 케어에 도움이 되는 정보와 체험형 케어 솔루션을 제공하는 출산 전 메타버스 케어 서비스를 제안합니다. ",
          youtubeId: "U300_VIDEO_5",
          introduceYoutubeId: "U300_INTRO_5",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/펜타곤_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/펜타곤_현수막.webp`,
          phone: "043-299-8590",
          email: "sunsu2261@gmail.com",
        },
        {
          id: 6,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/오래오_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/오래오_썸네일.webp`,
          title: "오래오",
          description: "노년층, 장애인을 위한 VR직업 교육 서비스",
          tags: ["VR", "직업교육", "취약계층", "케어 서비스"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/오래오.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/오래오.webp`,
          name: "김정운 주영훈 민경표 김윤재 지상운",
          project: "노년층, 장애인을 위한 VR직업 교육 서비스",
          brand: "U300",
          fullDescription:
            "취약계층은 교육 기회 부족, 경제적 어려움, 신체적 장애 등 여러 가지 이유로 인해 취업에 큰 장벽을 겪고 있습니다. 이러한 문제를 해결하기 위해 정부는 취약계층을 위한 경제적 지원과 교육 프로그램을 제공하고 있으나, 그 효과는 미흡한 상황입니다. 이에 따라 VR/XR 기기를 활용한 직업 교육 프로그램을 제안합니다.",
          youtubeId: "U300_VIDEO_6",
          introduceYoutubeId: "U300_INTRO_6",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/오래오_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/오래오_현수막.webp`,
          phone: "043-299-8590",
          email: "no6651@naver.com",
        },
        {
          id: 7,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/파이브원_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/파이브원_썸네일.webp`,
          title: "파이브원",
          description:
            "다문화 사회의 문화 차이 해소를 위한\n한국 전통문화 VR 체험 서비스",
          tags: ["전통 문화", "문화 체험", "다문화 가정"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/파이브원.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/파이브원.webp`,
          name: "이승연 강해인 신서연 박소희 박수연",
          project:
            "다문화 사회의 문화 차이 해소를 위한\n한국 전통문화 VR 체험 서비스",
          brand: "U300",
          fullDescription:
            "문화적 차이를 겪고 있는 다문화 가정에게 한국 전통문화를 정확하게 이해하고 체험할 수 있는 기회를 제공함으로써, 문화적 이해와 소통을 증진시키는 것을 주요 목표로 설정했습니다. VR 기반의 전통문화 체험 프로그램을 통해 사용자가 몰입감 있게 전통문화를 경험하도록 설계하였으며, 이를 통해 한국의 역사와 전통의 가치를 지속적으로 알리고 홍보하는데 기여하는 한국 전통문화 체험 VR 서비스를 제안합니다.",
          youtubeId: "U300_VIDEO_7",
          introduceYoutubeId: "U300_INTRO_7",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/파이브원_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/파이브원_현수막.webp`,
          phone: "043-299-8590",
          email: "hiaysx083@gmail.com",
        },
        {
          id: 8,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/혜성_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/혜성_썸네일.webp`,
          title: "혜성",
          description: "웰다잉에 대비하는 XR 기반 사후체험 서비스 플랫폼",
          tags: ["XR", "웰다잉 사후체험"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/혜성.jpg`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/혜성.webp`,
          name: "이수현 이성은 안진희 권도연",
          project: "웰다잉에 대비하는 XR 기반 사후체험 서비스 플랫폼",
          brand: "U300",
          fullDescription:
            "한국은 현재 저출산, 고령화 사회를 넘어 초고령화 사회로 빠르게 진입하고 있다. 이에 따라 정년 이후 사회적 고립이 심화되면서 고독사까지 이어지는 문제 역시 점차 증가하고 있다. 죽음에 대한 본질적인 탐구와 극복을 돋는 체험 콘텐츠부터 노년기에 남은 삶을 설계할 수 있도록 지원하는 서비스까지 제공하여, 회적 결망을 강하고 심리적 안정감을 제공하는 플랫폼을 제안합니다.",
          youtubeId: "U300_VIDEO_8",
          introduceYoutubeId: "U300_INTRO_8",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/혜성_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/혜성_현수막.webp`,
          phone: "043-299-8590",
          email: "ishyun101@naver.com",
        },
        {
          id: 9,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/지렁이_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/지렁이_썸네일.webp`,
          title: "지렁이",
          description: "실감형 XR 기술을 이용한 분리수거 서비스",
          tags: ["XR", "친환경", "분리수거 체험"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/지렁이.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/지렁이.webp`,
          name: "이준규 노상래 박종현 장건",
          project: "실감형 XR 기술을 이용한 분리수거 서비스",
          brand: "U300",
          fullDescription:
            "현대 사회에서 쓰레기 문제는 환경 오염과 자원 낭비의 주요 원인으로 떠오르고 있습니다. 분리수거의 중요성은 커지고 있지만, 많은 사람들이 올바른 방법을 알지 못해 실천에 어려움을 겪고 있습니다. 이를 해결하기 위해, 재미있는 게임 형식을 통해 분리수거 방법을 배우고 실천할 수 있는 분리수거 게임을 제안합니다.",
          youtubeId: "U300_VIDEO_9",
          introduceYoutubeId: "U300_INTRO_9",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/지렁이_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/지렁이_현수막.webp`,
          phone: "043-299-8590",
          email: " a56570331@gmail.com",
        },
        {
          id: 10,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/별사탕_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/별사탕_썸네일.webp`,
          title: "별사탕",
          description: "노인을 위한 VR 헬스케어",
          tags: ["노인", "의료복지", "건강", "VR"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/별사탕.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/별사탕.webp`,
          name: "서현교 권민서 권정은 조민지 황인애 김지현",
          project: "노인을 위한 메타버스 헬스케어 서비스",
          brand: "U300",
          fullDescription:
            "급격한 고령화, 도시 위주의 발전 및 복지로 인해 소외되는 사회적 약자들이 늘어나고 있습니다. 의료 서비스가 가장 필요한 계층임에도 불구하고 외면받고 있는 것이 현실입니다. 이를 해결하기 위해 실감형 콘텐츠라는 기술력을 통해 공간의 제약이 없는 VR 기술을 사용함으로써 사회적으로 고립된 약자들에게 의료복지 및 다양한 가상현실 공간에서의 체험을 제안합니다.",
          youtubeId: "U300_VIDEO_10",
          introduceYoutubeId: "U300_INTRO_10",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/별사탕_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/별사탕_현수막.webp`,
          phone: "043-299-8590",
          email: "wskg123@naver.com",
        },
      ],
    },
    {
      title: "M-Team",
      contents: [
        {
          id: 11,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/인포디자인_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/인포디자인_썸네일.webp`,
          title: "인포디자인",
          description:
            "넓은 공간의 인천공항 서비스를 실속있고 간편하게 볼 수 있는 인천공항 통합 키오스크",
          tags: ["키오스크", "통합 정보 안내", "대기 알림 서비스"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/인포디자인.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/인포디자인.webp`,
          name: "이도윤 우신희 김소은 안진희",
          project:
            "넓은 공간의 인천공항 서비스를 실속있고 간편하게 볼 수 있는 인천공항 통합 키오스크",
          brand: "M-Team",
          fullDescription:
            "인천공항에서 제공하는 키오스크는 각 시설마다 목적에 맞게 존재하지만 개별의 프로세스로 제공하여 대부분의 사용자가 원하는 정보 습득에 어려움을 겪고 있습니다. 인천공항이라는 넓은 공간의 서비스를 하나의 키오스크에 통합시켜 공항의 서비스를 이용하는 모든 사용자가 실속있고 간편하게 볼 수 있게 하는 목적으로 인천공항의 서비스를 함축한 통합 키오스크를 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/인포디자인_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/인포디자인_현수막.webp`,
          phone: "043-299-8590",
          email: "sunsu2261@gmail.com",
        },
        {
          id: 12,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/패스파인더_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/패스파인더_썸네일.webp`,
          title: "패스파인더",
          description:
            "주행을 넘어 다양한 경험을 제공하는\n차별화된 인포테인먼트 네비게이션 플랫폼",
          tags: ["네비게이션", "인포테인먼트"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/패스파인더.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/패스파인더.webp`,
          name: "이성은 김홍덕 설지훈 지상운 이승연",
          project:
            "주행을 넘어 다양한 경험을 제공하는\n차별화된 인포테인먼트 네비게이션 플랫폼",
          brand: "M-Team",
          fullDescription:
            "현재 자동차는 단순한 '이동 수단'을 넘어, 다양한 문화생활을 즐기는 일상의 '공간'으로 진화하고 있습니다. 이러한 변화에 발 맞추어, 안전성이 높은 주행 보조 기능과 더불어 새로운 사용자 경험을 제공할 수 있는 차별화된 인포테인먼트 내비게이션 플랫폼을 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/패스파인더_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/패스파인더_현수막.webp`,
          phone: "043-299-8590",
          email: "dbstjrals125@naver.com",
        },
        {
          id: 13,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/에너자이저_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/에너자이저_썸네일.webp`,
          title: "에너자이저",
          description:
            "자이로운 라이프스타일을 위한 맞춤형 홈 오토메이션 서비스",
          tags: ["기획/개발", "맞춤형", "홈 오토메이션"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/에너자이저.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/에너자이저.webp`,
          name: "이수현 오인환 이상빈",
          project: "자이로운 라이프스타일을 위한\n맞춤형 홈 오토메이션 서비스",
          brand: "M-Team",
          fullDescription:
            "홈 오토메이션은 편리한 주거 환경을 제공함으로써 현대 생활의 질을 높이는 핵심 주거 서비스 중 하나로 자리 잡았습니다. 그러나 기존 자이의 홈 오토메이션 서비스는 복잡한 설정, 개인화 부족, 보안과 에너지 효율성 등 사용자의 니즈를 충족하지 못하는 실정입니다. 이에 맞춤형 제어와 직관적인 사용성을 강화하고, 안전하고 효율적인 생활을 지원하는 자이 거주자를 위한 차세대 홈 오토메이션 솔류션을 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/에너자이저_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/에너자이저_현수막.webp`,
          phone: "043-299-8590",
          email: "ishyun101@naver.com",
        },
        {
          id: 14,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/노바스튜디오_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/노바스튜디오_썸네일.webp`,
          title: "노바스튜디오",
          description:
            "다양한 정보와 편의를 제공하는\n관람 경험 중점 개선 관람객 맞춤형 키오스크",
          tags: ["키오스크", "편의 제공", "관람객 맞춤"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/노바스튜디오.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/노바스튜디오.webp`,
          name: "김주원 강주희 권도연 이준규 장건",
          project:
            "다양한 정보와 편의를 제공하는\n관람 경험 중점 개선 관람객 맞춤형 키오스크",
          brand: "M-Team",
          fullDescription:
            "미술관에서 키오스크는 관람객에게 정보와 편의를 제공하고 참여도를 높이며 전반적인 관람 경험을 개선하는 중요한 역할을 합니다. 복잡한 인터페이스, 다국어 지원의 부족, 정보 제공의 한계, 관람객 맞춤형 서비스 부족 등의 이유로 키오스크 사용에 불편함을 느낌에 따라 단순화한 인터페이스와 다양한 정보, 콘텐츠를 제공하여누구나 쉽게 이용할 수 있는 사용자 맞춤 키오스크 디자인을 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/노바스튜디오_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/노바스튜디오_현수막.webp`,
          phone: "043-299-8590",
          email: "apricotjw@naver.com",
        },
        {
          id: 15,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/은가비_썸네일.png`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/은가비_썸네일.webp`,
          title: "은가비",
          description:
            "복합 문화공간으로의 변화에 맞춰\n이용 편의성과 다양한 콘텐츠를 제공하는 키오스크 플랫폼",
          tags: ["키오스크", "롯데시네마", "리디자인"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/은가비.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/은가비.webp`,
          name: "고경민 노상래 최은빈 김종재 박종현",
          project:
            "복합 문화공간으로의 변화에 맞춰\n이용 편의성과 다양한 콘텐츠를 제공하는 키오스크 플랫폼",
          brand: "M-Team",
          fullDescription:
            "이용편의와 효율적인 업무를 위해 설치되는 키오스크는 이제 일상적인 매매체로 자리잡았습니다. 다양한 경험과 문화를 공유하는 복합 문화공간으로 변화하는 롯데시네마에서는 어디에서나 경험할 수 있는 단순한 기능으로 이루어진 것이 아닌 롯데시네마만의 특별한 경험을 제공할 수 있는 키오스크가 필요합니다. 사용자 중심의 UI디자인과 콘텐츠를 통해 롯데시네마의 문화와 경험을 제공하는 키오스크 플렛폼을 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/은가비_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/은가비_현수막.webp`,
          phone: "043-299-8590",
          email: "cowardwrite1101@gmail.com",
        },
        {
          id: 16,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/파이브레인_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/파이브레인_썸네일.webp`,
          title: "파이브레인",
          description: "현대 아이오닉 5",
          tags: ["인포 페이먼트 시스템", "커스터마이징", "실시간 차량 관리"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/파이브레인.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/파이브레인.webp`,
          name: "김정운 김윤재 남용현 이상윤 고민정",
          project: "현대 아이오닉5",
          brand: "M-Team",
          fullDescription:
            "혁신적인 기술과 디자인을 통해 지속가능한 모빌리티 솔루션을 제공하는 현대 아이오닉의 인포테인먼트 시스템은  사용자 경험과 편의성을 높이는 핵심 요소로 자리잡고 있습니다, 이를 위해 더 직관적이고 간편한 UI와 서비스를 제공하는 것이 중요합니다. 따라서 본 프로젝트를 통해 인포테이먼트 시스템의 사용성 향상을 목적으로 하여 UI 및 서비스 개선 방향을 제안합니다.",
          youtubeId: "MTEAM_VIDEO_1",
          introduceYoutubeId: "MTEAM_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/파이브레인_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/파이브레인_현수막.webp`,
          phone: "043-299-8590",
          email: "dydgus0054@naver.com",
        },
      ],
    },
    {
      title: "GonGunGames",
      contents: [
        {
          id: 17,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/곤군게임즈_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/곤군게임즈_썸네일.webp`,
          title: "곤군게임즈",
          description: "뱀서라이크 생존 게임",
          tags: ["Dinosaur", "모바일", "서바이벌"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/곤군게임즈.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/곤군게임즈.webp`,
          name: "우신희 오인환",
          project: "충북 게임 아카데미 멘토 멘티 프로젝트",
          brand: "GonGunGames",
          fullDescription:
            "다이노 서바이벌은 다양한 무기 및 스킬 업그레이드 트리를 핵심 시스템으로 삼고 있으며, 짧고 강렬한 게임 세션을 통해 사용자 경험을 극대화시키고 있습니다. 컨트롤의 중요성과 보상 체계를 결합하여 플레이어가 게임 내에서 점차 강력한 능력을 획득하고, 이를 바탕으로 다채로운 전투 방식을 시도할 수 있게 함으로써 게임의 지속적인 재미를 보장합니다.",
          youtubeId: "GONGUN_VIDEO_1",
          introduceYoutubeId: "GONGUN_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/곤군게임즈_현수막.jpg`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/곤군게임즈_현수막.webp`,
          phone: "043-299-8590",
          email: "rdrd1564@naver.com",
        },
      ],
    },
    {
      title: "Media Façade",
      contents: [
        {
          id: 20,
          image: `${process.env.PUBLIC_URL}/images/thumbnail/미디어파사드_썸네일.jpg`,
          imageWebp: `${process.env.PUBLIC_URL}/images/thumbnail/미디어파사드_썸네일.webp`,
          title: "미디어파사드",
          description: "문화와 충북이 하나되다",
          tags: ["빛과 문화", "충북 여행", "미디어파사드"],
          profileImage: `${process.env.PUBLIC_URL}/images/profile/미디어파사드.png`,
          profileImageWebp: `${process.env.PUBLIC_URL}/images/profile/미디어파사드.webp`,
          name: "유동관 최윤민 박수빈 박다정 박소희 조민지",
          project:
            "빛을 따라 떠나는 충북 문화 여행\n충북과 문화가 하나되어 특별한 여정을 만나다.",
          brand: "Media Façade",
          fullDescription:
            "제작배경 : 빛을 매개체로 충북의 풍부한 문화적 자산을 탐험하는 여정이 펼펴집니다. 문화재와 자연, 예술이 어우러진 영상 속에서 충북의 숨겨진 아름다움과 고유한 가치가 빛을 통해 새롭게 드러나며, 관람객들이 전통의 결을 직접 느낄 수 있도록 연출되었습니다.",
          youtubeId: "GAME_VIDEO_1",
          introduceYoutubeId: "GAME_INTRO_1",
          bannerImage: `${process.env.PUBLIC_URL}/images/banner/미디어파사드_현수막.png`,
          bannerImageWebp: `${process.env.PUBLIC_URL}/images/banner/미디어파사드_현수막.webp`,
          phone: "043-299-8590",
          email: "dongkoz@naver.com",
        },
      ],
    },
  ];

  // 이전/다음 콘텐츠 이동 핸들러
  const handleNext = () => {
    if (!selectedContent) return;

    const currentSection = filteredSections.find(
      (section) => section.title === selectedContent.sectionTitle
    );
    const currentIndex = currentSection.contents.findIndex(
      (content) => content.id === selectedContent.id
    );

    if (currentIndex < currentSection.contents.length - 1) {
      // 같은 섹션 내 다음 콘텐츠
      const nextContent = currentSection.contents[currentIndex + 1];
      setSelectedContent({
        ...nextContent,
        sectionTitle: currentSection.title,
      });
    } else {
      // 다음 섹션의 첫 번째 콘텐츠
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
    if (!selectedContent) return;

    const currentSection = filteredSections.find(
      (section) => section.title === selectedContent.sectionTitle
    );
    const currentIndex = currentSection.contents.findIndex(
      (content) => content.id === selectedContent.id
    );

    if (currentIndex > 0) {
      // 같은 섹션 내 이전 콘텐츠
      const prevContent = currentSection.contents[currentIndex - 1];
      setSelectedContent({
        ...prevContent,
        sectionTitle: currentSection.title,
      });
    } else {
      // 이전 섹션의 마지막 콘텐츠
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

  // 검색어와 카테고리에 따른 필터링
  const filteredSections = sections
    .map((section) => ({
      ...section,
      contents: section.contents.filter((content) => {
        if (!searchKeyword) return true;

        const keyword = searchKeyword.toLowerCase();
        return (
          (content.title && content.title.toLowerCase().includes(keyword)) ||
          (content.description &&
            content.description.toLowerCase().includes(keyword)) ||
          (content.tags &&
            content.tags.some(
              (tag) => tag && tag.toLowerCase().includes(keyword)
            ))
        );
      }),
    }))
    .filter((section) =>
      selectedCategory === "All"
        ? section.contents.length > 0
        : section.title === selectedCategory && section.contents.length > 0
    );

  // 카테고리 드롭다운 핸들러
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  // Modal 관련 핸들러 추가
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
  };

  const handleCardClick = (content, sectionTitle) => {
    setSelectedContent({ ...content, sectionTitle });
    setIsModalOpen(true);
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
                          onClick={() => handleCategorySelect(category)}
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
                onClick={() => handleCardClick(content, section.title)}
              >
                <img
                  src={`/2024/multi/images/thumbnail/${content.title}_썸네일.webp`}
                  alt={content.title}
                  className="card-image"
                />
                <div className="card-info">
                  <h3 className="card-title">{content.title}</h3>
                  <p className="card-description">{content.description}</p>
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
        onClose={handleClose}
        data={selectedContent}
        variant="team"
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default Team;
