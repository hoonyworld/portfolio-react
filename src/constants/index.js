import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import baseball from "../assets/img/baseball.png";
import racingCar from "../assets/img/racingCar.png";
import lotto from "../assets/img/lotto.png";
import christmas from "../assets/img/christmas.png";    


export const headerNav = [
    {
        title: "home",
        url: "#home"
    },
    {
        title: "about Me",
        url: "#aboutMe"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title:"study",
        url: "#study"
    },
    {
        title: "career",
        url: "#career"
    },
    {
        title: "award",
        url: "#award"
    },
    {
        title: "project",
        url: "#port"
    },
    {
        title: "others",
        url: "#others"
    }
];

export const portText = [
    {
        num: "Main Project",
        title: "Reminiscnence",
        desc: "자바/스프링을 활용하여 개발한 미니 사진관 웹 프로젝트 입니다. DB에는 사진, 이메일, 비밀번호, 닉네임 등이 저장되며 AWS 서버를 이용해 운영중입니다. 라이트모드와 다크모드로 그림을 감상할 수 있으며 사용자의 취향에 따라 사진을 감상하거나 커스텀 할 수 있습니다.                       ",
        img: proj1,
        code: "https://github.com/Leets-Official/Reminiscence-BE",
        view: "https://zero100-fe-hhes.vercel.app/",
        name: "포트폴리오",
    },
    {
        num: "Main Project (개발중)",
        title: "MoodMate",
        desc: "자바/스프링을 활용하여 개발한 크리스마스 교내 매칭 서비스 프로젝트 입니다. DB에는 채팅 기록, 이메일, 비밀번호, 닉네임 등이 저장되며, AWS 서버를 이용해 운영중입니다. 본인이 원하는 이상형에 맞는 조건들을 적으면 사이트 내에서 매칭 알고리즘을 통해 매칭을 시켜줍니다.",
        img: proj2,
        code: "https://github.com/Leets-Official/MoodMate-BE",
        view: "https://github.com/Leets-Official/MoodMate-BE",
        name: "포트폴리오",
    },
    {
        num: "Main Project  (계획중)",
        title: "HelpPeer",
        desc: "자바/스프링을 활용하여 교내 안전시설 위치를 제공하는 서비스입니다. 위험상황이 발생했을 때, 자동 제세동기, 완강기, 소화기 위치 등의 위치를 제공하여 신속하게 위치를 파악할 수 있도록 도움을 줍니다. 또한 현재 안전시설의 상태도 포함하여 사용자가 고장 여부도 확인 가능합니다.",
        img: proj3,
        code: "",
        view: "",
        name: "포트폴리오",
    },
    {
        num: "Toy Project",
        title: "Baseball Game",
        desc: "자바를 활용하여 숫자 야구 게임을 제공하는 서비스입니다. 숫자 야구 게임은 1~9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이며 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 이용해서 먼저 상대방의 수를 맞추면 승리합니다",
        img: baseball,
        code: "https://github.com/hoonyworld/java-baseball-6",
        view: "https://github.com/hoonyworld/java-baseball-6",
        name: "포트폴리오",
    },
    {
        num: "Toy Project",
        title: "Racing Car Game",
        desc: "자바를 활용하여 자동차 경주 게임을 제공하는 서비스입니다. 자동차 경주 게임은 주어진 횟수 동안 전진을 더 많이한 자동차가 우승하는 게임이며 전진 조건은 랜덤값이 4이상이 되어야 하며 회차별로 랜덤값을 부여하여 전진조건을 판단합니다. 최종에는 어떤 자동차가 우승했는지 알 수 있습니다.",
        img: racingCar,
        code: "https://github.com/hoonyworld/java-racingcar-6",
        view: "https://github.com/hoonyworld/java-racingcar-6",
        name: "포트폴리오",
    },
    {
        num: "Toy Project",
        title: "Lotto Prize Game",
        desc: "자바를 활용하여 로또 당첨 게임을 제공하는 서비스입니다. 로또 당첨 게임은 로또 구입금액 만큼 로또를 발행해 주며, 구매한 로또 번호와 당첨번호, 보너스번호를 비교하여 당첨 내역 및 수익률을 출력합니다. 1등은 20억, 2등은 3천만원, 3등은 150만원, 4등은 5만원, 5등은 5천원의 상금을 줍니다.",
        img: lotto,
        code: "https://github.com/hoonyworld/java-lotto-6",
        view: "https://github.com/hoonyworld/java-lotto-6",
        name: "포트폴리오",
    },
    {
        num: "Toy Project",
        title: "Christmas Event",
        desc: "자바를 활용하여 크리스마스 이벤트를 제공하는 서비스입니다. 크리스마스 이벤트 게임은 중복된 할인과 증정을 허용해서, 고객들이 혜택을 많이 받는다는 것을 체감하는 것이 목적입니다. 총혜택 금액에 따라 이벤트배지를 부여하며 2만원 이상 산타, 1만원 이상 트리, 5천원 이상 별배지를 줍니다,",
        img: christmas,
        code: "https://github.com/hoonyworld/java-christmas-6-hoonyworld",
        view: "https://github.com/hoonyworld/java-christmas-6-hoonyworld",
        name: "포트폴리오",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO : webstupids",
    },
    {
        link: "mailto:webstoryboy@naver.com",
        title: "mail : webstoryboy@naver.com",
    },
];

export const footerText = [
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/webstoryboy",
    },
    {
        title : "blog",
        desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://01codingjourney.tistory.com",
    },
    {
        title: "instagram",
        desc: "제 일상이 궁금하시다면 인스타그램에 오세요.",
        link: "https://www.instagram.com/01dh_lee",
    }
];