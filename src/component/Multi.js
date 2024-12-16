import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Multi.css";

function Multi({ selectedCategory, setSelectedCategory, searchKeyword }) {
  // 불필요한 props 제거
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const categories = ["All", "Product Manager", "Developer", "Designer"];

  // WebP 지원 확인을 위한 state와 useEffect 추가
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

  // 이미지 경로 생성 함수
  const getImagePath = (path) => {
    if (supportsWebP) {
      return path.replace(/\.(jpg|png)$/, ".webp");
    }
    return path;
  };

  const sections = [
    {
      title: "Product Manager",
      contents: [
        {
          id: 1,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/설지훈_썸네일.jpg`
          ),
          title: "바디프랜드",
          description: "MZ세대 특화 금융 서비스",
          tags: ["UX 설계", "헬스 케어", "맞춤 진단"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/설지훈.png`
          ),
          name: "설지훈",
          position: "UX 기획자",
          brand: "바디프랜드",
          fullDescription:
            "디지털 헬스케어의 확산으로 스마트 헬스케어와 개인 건강관리에 대한 관심이 높아지며, 사용자들은 최적화된 맞춤형 서비스를 원하고 있습니다. 헬스케어 트렌드는 일회성 정보 제공을 넘어, 개인 건강 상태에 맞춘 지속적인 관리로 변화하고 있습니다. 따라서 사용자 중심 맞춤형 콘텐츠를 제공하고 지속적으로 관리할 수 있는 헬스케어 서비스를 제안합니다.",
          youtubeId: "CCn0m5M3pyg",
          introduceYoutubeId: "vJen3MrZd6o",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/설지훈_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "seol3655@naver.com",
        },
        {
          id: 2,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이상윤_썸네일.jpg`
          ),
          title: "하나은행",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UI/UX 설계", "맞춤 자산관리"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이상윤.png`
          ),
          name: "이상윤",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 금융시장은 지속적인 플랫폼 통합화가 진행되고 있으며 개인의 요구와 선호에 맞춘 맞춤형 금융 서비스를 중요시하고 있습니다.하나은행은 금융 시장에서의 경쟁력을 강화하고 사용자의 지속적인 금융 뱅킹 사용을 위해 개인화된 금융서비스 제공과 최적의 금융솔루션을 필요로하며 사용자의 요구와 시장트렌드에 맞춰 문제점을 개선하여 시장을 선도해가는 편리하고 효율적인 고객중심 통합 금융서비스 플랫폼을 제안합니다.",
          youtubeId: "wr1tjReqGqo",
          introduceYoutubeId: "Vt42GMdt26E",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이상윤_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "nks552@naver.com",
        },
        {
          id: 3,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/권도연_썸네일.jpg`
          ),
          title: "티머니고",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX 설계", "통합 교통 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/권도연.png`
          ),
          name: "권도연",
          position: "UX 기획자",
          brand: "티머니고",
          fullDescription:
            "현재 MaaS 시장은 온라인을 통한 예매와 통합 교통 서비스 이용률이 증가하면서 교통 플랫폼에서의 경쟁력 강화와 기존 사용자와 새로운 사용자 유지 및 유입을 위해 새로운 서비스 추가와 개선이 필요합니다. 따라서 사용자에게 편안하게 다가갈 수 있는 사용자 맞춤 통합 교통 플랫폼을 제안합니다.",
          youtubeId: "4sRO-nrt4UE",
          introduceYoutubeId: "TGyuruadVTM",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/권도연_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "leamo17dy@naver.com",
        },
        {
          id: 4,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/강주희_썸네일.jpg`
          ),
          title: "SM Entertainment",
          description: "MZ세대 특화 금융 서비스",
          tags: ["브랜드 마케팅 기획", "UI/UX 기획", "팬 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/강주희.png`
          ),
          name: "강주희",
          position: "브랜드 마케팅 기획자",
          brand: "하나은행",
          fullDescription:
            "K-POP은 세계적으로 인지도를 넓히며 다양한 팬층을 형성하고 있습니다. 팬들은 최애 아티스트와 직접 소통하고,  팬 활동을 지속적으로 아카이빙 할 수 있는 플랫폼을 필요로 하고 있습니다. 본 팬 플랫폼은 기존에 분리되어 있던 아티스트와의 메시지 주고받기, 커뮤니티를 통한 자유로운 소통 기능을 통합하였으며, 커스터마이징 기능을 통해 아티스트와 팬이 더 가까워지는 맞춤형 팬 플랫폼을 제안합니다.",
          youtubeId: "KEVRnQfxv9Y",
          introduceYoutubeId: "F72tChg4X7Y",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/강주희_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "rkdwngml021202@gmail.com",
        },
        {
          id: 5,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김소은_썸네일.jpg`
          ),
          title: "밀리의 서재",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX 설계", "사용자 맞춤 도서"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김소은.png`
          ),
          name: "김소은",
          position: "UX 기획자",
          brand: "밀리의 서재",
          fullDescription:
            "구독 서비스는 디지털 기반 영역으로 확장되며 다양한 분야에 영향을 주었습니다. 이러한 변화 속에서 도서 시장의 경쟁력을 확보하기 위해 밀리의 서재는 디지털 환경에서의 독서 경험 향상이 필요합니다. 현재 제공되는 도서 뷰어의 개선 방향을 확립하고 사용자 맞춤형 서비스 도입을 통해 사용자의 니즈를 충족시킴으로써, 단순한 독서 경험을 넘어 새로운 독서 라이프를 설계할 수 있는 플랫폼을 제안합니다.",
          youtubeId: "0ewRiWqtflg",
          introduceYoutubeId: "4N6BV-Kz7Is",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김소은_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "rlathdms010@daum.net",
        },
        {
          id: 6,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/고경민_썸네일.jpg`
          ),
          title: "이마트24",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX/UI 설계", "편리한 구매 프로세스"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/고경민.png`
          ),
          name: "고경민",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "최근 1인 가구의 증가로 인해 소비 패턴이 변화하고 대형마트보다 접근성과 편의성이 뛰어난 근처 편의점을 선호하는 경향이 뚜렷해지고 있으며, 특히 바쁜 일상 속에서 빠르게 필요한 물품을 구매하려는 수요가 증가하고 있습니다. 이에 따라, 이마트24는 고객이 더욱 쉽고 빠르게 편의점을 이용할 수 있도록 제안합니다.",
          youtubeId: "VIDEO_ID_2",
          introduceYoutubeId: "9id5C5AVKVE",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/고경민_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "rhrnak0600@naver.com",
        },
        {
          id: 7,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/고민정_썸네일.jpg`
          ),
          title: "LG전자",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX 설계", "스마트 라이프 통합 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/고민정.png`
          ),
          name: "고민정",
          position: "UX 기획자",
          brand: "LG전자",
          fullDescription:
            "LG는 세계 가전 업계의 리더로서 ‘가전은 역시 LG’라는 신뢰와 명성을 쌓아왔습니다. LG전자는 세대별로 함께 또는 독립적으로 경험할 수 있는 다양한 가전 생태계를 제공하며, 단순한 제품 판매를 넘어 삶의 질 향상에 기여하는 브랜드로 자리매김하고자 합니다. 이를 위해 모든 세대의 삶의 질을 높이는 개인화된 스마트 라이프를 제공하는 혁신적인 통합 플랫폼을 제안합니다.",
          youtubeId: "gz8KskuqKCQ",
          introduceYoutubeId: "UauDtKEwEJI",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/고민정_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "minglet0418@naver.com",
        },
        {
          id: 9,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김정운_썸네일.jpg`
          ),
          title: "잡코리아",
          description: "MZ세대 특화 금융 서비스",
          tags: ["UI/UX 기획", "AI 구직 플랫폼", "다양한 구직 활동 제공"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김정운.png`
          ),
          name: "김정운",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 취업시장은 구직자 스스로 자신의 직업을 찾아다니는 것이 아닌 AI를 통한 직군 추천과 직업 만족도에 따라 구직을 하는 시스템을 이루고 있습니다. 따라서 현재 잡코리아에 구직자가 직접적으로 시간을 많이 투자하지 않아도 자신에게 알맞고 단 시간 내에 취업을 할 수 있는 구직자 맞춤 케어 서비스 플랫폼을 제안합니다.",
          youtubeId: "EJnEqYOfr50",
          introduceYoutubeId: "EMrERi2iUDU",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김정운_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "no6651@naver.com",
        },
        {
          id: 10,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김주원_썸네일.jpg`
          ),
          title: "갤러리아",
          description: "갤러리아아아",
          tags: ["서비스 기획", "UI/UX 설계", "통합 멀티 쇼핑"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김주원.png`
          ),
          name: "김주원",
          position: "UX 기획자",
          brand: "갤러리아",
          fullDescription:
            "다양한 연령층, 편리하고 빠른 쇼핑이 트렌드인 최근 쇼핑트렌드 시장에 맞춰 기존 갤러리아의 특정소비층을 겨냥한 이미지의 쇄신이 필요하다 판단, G포인트시스템 강화, AI기반 개인화 기능 및 라이프스타일적 요소를 추가하여 긍정적인 고객 경험을 제공하는 고객맞춤형 요소를 가미한 사용자 중심형 갤러리아로 리뉴얼을 제안합니다.",
          youtubeId: "EvcQXXtmiGc",
          introduceYoutubeId: "RwMxbTZmmAM",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김주원_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "apricotjw@naver.com",
        },
        {
          id: 11,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/남용현_썸네일.jpg`
          ),
          title: "경동나비엔",
          description: "MZ세대 특화 금융 서비스",
          tags: ["스마트 홈", "케어 서비스", "고객 서비스", "통합 제어"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/남용현.png`
          ),
          name: "남용현",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 스마트홈 시장은 소비자들이 제품 사용에 점차 익숙해지고 구매 의향이 높아짐에 따라 지속적 케어와, 사용성에 대한 니즈가 높아지고 있습니다. 따라서 대한민국 대표 생활기업 경동 나비엔 소비들의 니즈를 충족시키고 경쟁력 강화를 위한 변화와 개선이 필요합니다. 본 제안서로 케어 서비스와 인터페이스를 개선해 단순 사용이 아니라 장기적으로 사용할 수 있는 맞춤 케어 서비스 플랫폼을 제안합니다.",
          youtubeId: "F90qHkiHDzw",
          introduceYoutubeId: "bkdJEam_nTM",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/남용현_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "dydgus0054@naver.com",
        },
        {
          id: 12,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/노상래_썸네일.jpg`
          ),
          title: "신한은행",
          description: "신한은행 서비스",
          tags: ["UX 라이팅", "개인 맞춤 서비스", "더 가까운 은행"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/노상래.png`
          ),
          name: "노상래",
          position: "UX 기획자",
          brand: "신한은행",
          fullDescription:
            "금융시장에서 모바일 채널 사용량과 자산/소비관리 및 이벤트/프로모션에 대한 이용자들의 관심이 증가하고 있습니다. 이러한 변화에 맞춰 고객몰입 신한을 목표로 변화를 추구하는 신한은행에는 앱과 웹 채널에서 변화가 필요합니다. 이용자에게 편의를 제공하고 이용 정보를 통해 개인 맞춤 서비스와 혜택을 제공하는 모바일 뱅킹과 전반적인 은행 업무를 이용하고 계좌를 관리할 수 있는 웹사이트를 제공해 더 가까운 신한은행이 되기 위한 고객 중심 종합 금융 서비스 플렛폼을 제안합니다.",
          youtubeId: "vXf2Be5RolA",
          introduceYoutubeId: "dmdVYl7FZLI",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/노상래_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "cowardwrite1101@gmail.com",
        },
        {
          id: 13,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/박종현_썸네일.jpg`
          ),
          title: "똑닥",
          description: "똑닥",
          tags: ["UX 설계", "병원 예약·접수", "의료 케어 서비스"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/박종현.png`
          ),
          name: "박종현",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 의료 시장에서는 간편 접수 서비스의 이용률이 증가하고 있습니다. 이러한 상황에서 개인화된 서비스를 원하는 고객들이 많아졌습니다. 이러한 니즈를 바탕으로, 사용자 중심의 똑닥을 위해 변화하는 앱과 웹을 통해 보다 다양한 서비스를 제공하고자 합니다. 개인의 건강 상태와 필요에 맞춘 맞춤형 서비스와 보다 효과적인 건강 관리를 지원하기 위해, 언제 어디서나 병원 예약 및 접수 과정을 간편하게 이용할 수 있는 시스템을 마련하였습니다. 이를 통해 원활한 의료 케어 서비스를 제공하고, 사용자에게 더욱 편리한 경험을 선사하는 사용자 중심 맞춤 의료 케어 서비스 플랫폼을 제안합니다.",
          youtubeId: "oo1xdRtbO3c",
          introduceYoutubeId: "UB6Wcj5TfkY",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/박종현_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "seol3655@naver.com",
        },
        {
          id: 14,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이도윤_썸네일.jpg`
          ),
          title: "현대리바트",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UI/UX 설계", "맞춤형 라이프스타일 서비스"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이도윤.png`
          ),
          name: "이도윤",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 가구시장 및 온라인 채널은 새로운 구매 트렌드로 인해 현명한 소비를 중시하는 다양한 커스터머의 니즈와 플랫폼의 변화가 형성 되었습니다. 프리미엄 가구 브랜드 현대 리바트는 향후 트렌드를 선도하는 라이프스타일 플랫폼 버전 업데이트를 위해 특별한 경험 소비 및 맞춤형 라이프스타일 서비스 추가가 필요합니다. 사용자들의 니즈 대응과 원하는 가치를 실현 하고자 사용자 중심 AI기반 맞춤형 라이프스타일 플랫폼을 제안합니다.",
          youtubeId: "fL9wr4Y4aQY",
          introduceYoutubeId: "ogxqDW2kRzc",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이도윤_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "sunsu2261@gmail.com",
        },
        {
          id: 15,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이성은_썸네일.jpg`
          ),
          title: "코웨이",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "개인 맞춤", "제품 케어 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이성은.png`
          ),
          name: "이성은",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "새로운 소비자 유형과 변화하는 소비 니즈에 따라 가전 시장이 빠르게 진화하고 있습니다. 이에 따라 제품관리 서비스의 강화를 필요로 하며, 사용자 경험을 최우선으로 하여 시장 트렌드에 효과적으로 대응하고 고객의 기대를 초과하는 가치를 제공하고자 기존 고객을 위한 통합 제품 관리 케어 플랫폼의 리뉴얼을 제안합니다.",
          youtubeId: "XMrt1GoElsU",
          introduceYoutubeId: "W6FqUdfR6KE",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이성은_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "dbstjrals125@naver.com",
        },
        {
          id: 16,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이수현_썸네일.jpg`
          ),
          title: "윌라",
          description: "MZ세대 특화 금융 서비스",
          tags: ["UI/UX 기획", "지속 가능한", "독서 콘텐츠 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이수현.png`
          ),
          name: "이수현",
          position: "UX 기획자",
          brand: "윌라",
          fullDescription:
            "2018년 오디오북 서비스로 시작한 브랜드 윌라는 클래스, 오디오 웹소설, 전자책까지 아우르며 독서 플랫폼으로 제 2의 시작을 알렸습니다. 그러나 타 플랫폼 대비 낮은 인지도와 둔화되는 성장세로 차별화된 변화가 필요했습니다. 이에 기존 사용자의 개선 사항과 신규 사용자로써 잠재적 가치가 높은 이들의 니즈를 충족시키며, 지속 가능한 독서 습관과 개인화된 독서 경험을 제공하는 독서 콘텐츠 플랫폼을 제안합니다.",
          youtubeId: "j83436-eOvA",
          introduceYoutubeId: "nXb-K7NMJQs",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이수현_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "ishyun101@naver.com",
        },
        {
          id: 17,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이준규_썸네일.jpg`
          ),
          title: "하이마트",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX 설계", "옴니채널", "AI 서비스"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이준규.png`
          ),
          name: "이준규",
          position: "UX 기획자",
          brand: "하이마트",
          fullDescription:
            "현재 전자상거래 시장은  옴니채널과 인공지능을 활용하여 고객에 맞춤형 서비스를 제공하고 있습니다. 이러한 시장 변화에 하이마트는 대규모의 오프라인 시장을 바탕으로 디지털 전환 전략을 강화하고, 온·오프라인 통합 경험을 제공할 것을 제안합니다.",
          youtubeId: "VIDEO_ID_2",
          introduceYoutubeId: "INTRO_ID_2",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이준규_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "a56570331@gmail.com",
        },
        {
          id: 18,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이상빈_썸네일.jpg`
          ),
          title: "골프존",
          description: "MZ세대 특화 금융 서비스",
          tags: ["서비스 기획", "UX 설계", "AI 코칭"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이상빈.png`
          ),
          name: "이상빈",
          position: "UX 기획자",
          brand: "하나은행",
          fullDescription:
            "현재 스크린 골프 시장은 다양한 첨단 시스템과 AI를 결합 한 코칭 등 젊은 세대의 유입에 맞춰 기술 발전을 하고 있습니다. 이러한 시장 변화에 국내 최대 스크린 골프 기업인 골프존의 다양한 기술을 바탕으로 이용자의 요구에 대응하며 경쟁력 강화와 개선에 대하여 제안합니다.",
          youtubeId: "SiOFoGTLvz4",
          introduceYoutubeId: "nA7728ODidA",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이상빈_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "dltkdqls41@naver.com",
        },
        {
          id: 20,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/이승연_썸네일.jpg`
          ),
          title: "스타필드",
          description: "스타필드",
          tags: ["개인맞춤", "인공지능", "문화공간"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/이승연.png`
          ),
          name: "이승연",
          position: "UX 기획자",
          brand: "스타필드",
          fullDescription:
            "현재 복합 문화 공간은 고객의 경험을 향상시키고, 모든 세대가 함께 즐길 수 있는 공간으로 거듭나기 위해 변화하는 소비 패턴과 다양한 고객의 니즈에 맞춰 혁신이 필요합니다. 따라서 스타필드는 변화를 선도하며, 고객이 새로운 가치를 발견할 수 있는 브랜드로 발전해야 합니다. 변화하는 트렌드와 혁신적인 기술을 결합하여 고객 맞춤 서비스를 제공하고, 특별한 경험을 선사하는 인공지능 기반의 개인 맞춤 서비스 플랫폼을 제안합니다.",
          youtubeId: "RD_LVadd1hQ",
          introduceYoutubeId: "6F1FxBmZmFA",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/이승연_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "hiaysx083@gmail.com",
        },
      ],
    },
    {
      title: "Developer",
      contents: [
        {
          id: 21,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/우신희_썸네일.jpg`
          ),
          title: "여기어때",
          description: "여기어때",
          tags: ["React & Node.js", "데이터베이스", "관리자"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/우신희.png`
          ),
          name: "우신희",
          position: "Web Developer",
          brand: "여기어때",
          fullDescription:
            "여기어때는 글로벌 숙박 예약과 다양한 레저, 액티비티 등 여행 관련 서비스를 제공하는 종합 여행 플랫폼으로, 최저가 보장 제도를 통한 합리적인 가격, 위치 기반 추천을 통한 사용자 맞춤 정보를 제공하고 있다. 이 뿐만 아니라 사용자가 자주 이용하거나 선호하는 콘텐츠를 제공하기 위해 이 시스템을 제안합니다.",
          youtubeId: "DEV_VIDEO_1",
          introduceYoutubeId: "G1P_1rzkSfs",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/우신희_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "rdrd1564@naver.com",
        },
        {
          id: 22,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/오인환_썸네일.jpg`
          ),
          title: "SK 렌터카",
          description: "자연어 처리 기반 챗봇",
          tags: ["React", "Node.js", "MySQL"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/오인환.png`
          ),
          name: "오인환",
          position: "Web Developer",
          brand: "SK 렌터카",
          fullDescription:
            "SK렌터카는 다양한 차량 옵션과 편리한 서비스를 제공하여 고객에게 이동의 편의성을 제공해 주며 더 나은 Car Life를 만들어 고객의 행복을 추구하는 기업이다. 개인 렌트의 이용도가 증가하여 개인 맞춤형 시스템과 사용자의 편의성을 개선하여 SK 렌터카만의 데이터 분석을 기반으로 한 차별화된 맞춤 시스템을 제안합니다.",
          youtubeId: "DEV_VIDEO_2",
          introduceYoutubeId: "yoz3g19116c",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/오인환_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "dls0918@naver.com",
        },

        {
          id: 24,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김종재_썸네일.jpg`
          ),
          title: "신라호텔",
          description: "홈 IoT 통합 시스템",
          tags: ["React", "Spring", "MySQL"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김종재.png`
          ),
          name: "김종재",
          position: "Web Developer",
          brand: "Smart Home",
          fullDescription:
            "신라호텔은 숙박과 다이닝을 제공하여 고객에게 럭셔리 서비스를 제공해주어 최고의 서비스를 유지하고 있다. 고객 개인이 이용 및 체험하는 서비스가 증가함에 따라 사용자 편의성을 개선하여 사용자가 편리한 이용을 위해 서비스를 제안합니다.",
          youtubeId: "DEV_VIDEO_4",
          introduceYoutubeId: "qgCJdkmFnm8",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김종재_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "rlawhdwo31@naver.com",
        },
      ],
    },
    {
      title: "Designer",
      contents: [
        {
          id: 25,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김홍덕_썸네일.jpg`
          ),
          title: "해주세요",
          description: "해주세요",
          tags: ["UI/UX 디자인", "서비스 디자인", "개인 맞춤형"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김홍덕.png`
          ),
          name: "김홍덕",
          position: "UX/UI Designer",
          brand: "해주세요",
          fullDescription:
            "팬데믹 이후 하이퍼 로컬 시장의 성장이 두드러지면서, AI와 빅데이터 기술의 발전으로 맞춤형 지역 서비스의 중요성이 더욱 커지고 있습니다. 사용자들은 이제 자신의 관심 사와 라이프스타일에 맞춘 개인화된 경험을 기대하고 있습니다. 이러한 변화를 반영하여, 해주세요는 차별화된 하이퍼 로컬 플랫폼으로 리뉴얼을 진행하며, 사용자 맞춤형 솔루션을 제안합니다.",
          youtubeId: "3cURzrzOfRk",
          introduceYoutubeId: "DESIGN_INTRO_1",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김홍덕_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "ghdejr000417@naver.com",
        },
        {
          id: 26,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/안진희_썸네일.jpg`
          ),
          title: "신세계백화점",
          description: "스타트업 브랜딩 프로젝트",
          tags: ["UI/UX 설계", "몰입", "경험"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/안진희.png`
          ),
          name: "안진희",
          position: "UX/UI Designer",
          brand: "Creative Studio",
          fullDescription:
            "오프라인과 디지털이 유기적으로 연결되는 고객 경험 설계를 통해 사용자가 몰입할 수 있는 콘텐츠와 서비스 경험을 중심으로 유연한 사용자 흐름을 구축하여, 정보 접근 간소화를 통해 사용 편의성 극대화, 정보 탐색의 효율성을 높이고, 브랜드의 본질과 가치를 효과적으로 반영함으로써 독보적인 프리미엄으로 차별화된 가치있는 경험 제공을 위한 플랫폼을 제안합니다.",
          youtubeId: "DESIGN_VIDEO_2",
          introduceYoutubeId: "pIQ-WvcFWno",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/안진희_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "wlsgml022@naver.com",
        },
        {
          id: 27,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/김윤재_썸네일.jpg`
          ),
          title: "다방",
          description: "모바일 게임 캐릭터",
          tags: ["UI/UX 디자인", "디지털 AI", "케어 서비스", "원스텝 서비스"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/김윤재.png`
          ),
          name: "김윤재",
          position: "UX/UI Designer",
          brand: "Game Studio",
          fullDescription:
            "현재 부동산 시장은 디지털 기술의 발전과 함께 급속히 변화하며 AI와 빅데이터 기술이 접목됨에 따라 사용자 맞춤 서비스와 경험 중심 서비스 개선이 필요합니다. 따라서 다방 역시 트렌드에 맞춰 보다 더 효율적인 인터페이스 구성과 One-Step 서비스를 통해 앱과 웹의 사용성을 높이고 사용자 경험을 향상시키는 데에 중점을 두었으며 차별화된 서비스를 통해사용자의 지속적인 사용을 유도하는 새로운 리뉴얼 전략을 제안합니다.",
          youtubeId: "sRuKrcK8P4U",
          introduceYoutubeId: "mQkifMoaI8g",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/김윤재_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "dbswornt1@naver.com",
        },
        {
          id: 28,
          image: getImagePath(
            `${process.env.PUBLIC_URL}/images/thumbnail/지상운_썸네일.jpg`
          ),
          title: "CJ ONE",
          description: "기업 웹사이트 개선",
          tags: ["UI/UX 설계", "간편결제", "차별화된 플랫폼"],
          profileImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/profile/지상운.png`
          ),
          name: "지상운",
          position: "UX/UI Designer",
          brand: "CJ ONE",
          fullDescription:
            "포인트 시장은 매년 성장하고 있으나, 대부분의 사용자들은 여전히 복잡한 결제 방식과 맞춤형 정보 부족으로 인해 원활히 활용하지 못하고 있습니다. 또한, CJ ONE은 현재 다른 포인트 앱들과 차별화된 혜택과 콘텐츠가 부족하다는 문제를 인식하고, 이를 해결하기 위해 경쟁력 있는 차별화된 플랫폼을 제안합니다.",
          youtubeId: "RRRWU7X650Y",
          introduceYoutubeId: "GMA1xKMIx5I",
          bannerImage: getImagePath(
            `${process.env.PUBLIC_URL}/images/banner/지상운_현수막.jpg`
          ),
          phone: "043-299-8590",
          email: "jsw3447@gmail.com",
        },
      ],
    },
  ];

  const handleNext = () => {
    const currentSection = filteredSections.find(
      (section) => section.title === selectedContent.sectionTitle
    );
    const currentIndex = currentSection.contents.findIndex(
      (content) => content.id === selectedContent.id
    );

    // 같은 섹션 내 다음 콘텐츠
    if (currentIndex < currentSection.contents.length - 1) {
      const nextContent = currentSection.contents[currentIndex + 1];
      setSelectedContent({
        ...nextContent,
        sectionTitle: currentSection.title,
      });
    }
    // 다음 섹션의 첫 번째 콘텐츠
    else {
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

    // 같은 섹션 내 이전 콘텐츠
    if (currentIndex > 0) {
      const prevContent = currentSection.contents[currentIndex - 1];
      setSelectedContent({
        ...prevContent,
        sectionTitle: currentSection.title,
      });
    }
    // 이전 섹션의 마지막 콘텐츠
    else {
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
        // name 기준 가나다순 정렬
        .sort((a, b) => {
          // 한글 이름 기준 오름차순 정렬 (ㄱ -> ㅎ)
          return a.name.localeCompare(b.name, "ko-KR");
        }),
    }))
    .filter((section) =>
      selectedCategory === "All"
        ? section.contents.length > 0
        : section.title === selectedCategory && section.contents.length > 0
    );

  const handleCardClick = (content, sectionTitle, event) => {
    // 클릭 위치 저장
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;

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
                  <img src={content.image} alt={content.title} />
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

export default Multi;
