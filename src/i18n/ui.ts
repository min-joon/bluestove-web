// Bilingual content dictionary (English / Korean).
// Brand phrases kept English in BOTH locales by design: the official slogan,
// "Make it happen", "Let's Make it Happen", and the scope line.
// Section eyebrows are also English in both — they read as styled design labels.

export const languages = { en: 'EN', ko: 'KO' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'ko';
}

// Shared, language-agnostic brand constants.
export const brand = {
  slogan1: 'An enduring flame',
  slogan2: 'with a future mind.',
  motto: 'Make it happen',
  mottoCta: "Let's Make it Happen",
  scope: 'Data Centre Consulting & Future Tech Operating',
  contactEmail: 'admin@bluestove.com',
  web3formsKey: '90ccc2b0-3ba5-4caa-b853-8979bd4fcccf',
} as const;

interface Area {
  no: string;
  titleEn: string; // always-English subtitle, shown only on the ko page
  title: string;
  desc: string;
}
interface Person {
  name: string;
  role: string;
  bio: string;
  tbd?: boolean;
}

export const ui = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    dir: 'ltr',
    skip: 'Skip to content',
    switchAria: 'Select language',

    meta: {
      title: 'Bluestove — An enduring flame with a future mind',
      description:
        'An operating company building future ecosystems — from data centre PM and consulting to robotics, AI, space tech, and smart farms.',
    },

    nav: {
      founder: 'Founder',
      business: 'Business Area',
      personnel: 'Key Personnel',
      contact: 'Contact Us',
    },

    hero: {
      eyebrow: 'An Operating Company for Future Ecosystems',
      sub: 'A flame that endures — energy gathered within, carried by a mind set on the future.',
      ctaSecondary: 'Business Area',
    },

    philosophy: {
      eyebrow: 'Brand Philosophy',
      title: ['Calm on the surface,', 'a gathered heat within.'],
      quote:
        "The stove was humanity's first internal engine and power plant — the starting point of every industrial revolution. Bluestove is an organization that looks calm on the outside while holding immense heat and craft within.",
      mottoSub:
        'Give us infrastructure, land, and power — we build whatever comes next, ourselves.',
      beats: [
        {
          era: 'The Middle Ages — heat that escaped',
          text: 'Fireplaces could not contain their heat, and Eastern braziers had no lid. The power simply dispersed.',
        },
        {
          era: 'The Stove — power discovered',
          text: 'The stove was the first tool to trap intense heat inside a mechanical container, letting humanity discover that power for the first time.',
        },
        {
          era: 'The Steam Engine — the spark of revolution',
          text: "The steam engine, the world's first engine, began the moment someone saw power in the steam of a kettle on a stove.",
        },
      ],
    },

    founder: {
      eyebrow: 'Founder',
      title: 'From the Founder',
      name: 'Hur, Young Soo',
      role: 'President, Bluestove',
      lead: '“Mere investment isn’t our business. We hold something real, and we build it ourselves.”',
      body: [
        'Bluestove is a holding-style operating company that builds future ecosystems through real capabilities in project management and consulting. From data centres to robotics, AI, space technology, and smart farms, we take future technology directly into our own hands.',
        'Blue stands for the limitless possibility and spirit of exploration of the ocean and space; Stove for the first power plant that sparked every industrial revolution. We aim to be a flame — calm on the outside, burning long within.',
      ],
      sign: '— Hur, Young Soo, President',
    },

    business: {
      eyebrow: 'Business Area',
      title: 'What we build ourselves',
      lead: 'Anchored in data centre PM and consulting, extending to robotics, AI, space tech, and smart farms — six pillars connecting the future technology ecosystem.',
      areas: [
        { no: '01', titleEn: 'DATA CENTRE PM', title: 'Data Centre PM', desc: 'When the site, power, and infrastructure are in place, we own the project from design through construction and operation. Bluestove’s home ground.' },
        { no: '02', titleEn: 'CONSULTING', title: 'Consulting', desc: 'Real, hands-on consulting that connects future-tech infrastructure investment with commercialization — not just advice, but a roadmap through to execution.' },
        { no: '03', titleEn: 'ROBOTICS', title: 'Robotics', desc: 'Automation that works in the physical world — robotics capability bridging industrial sites and infrastructure operations.' },
        { no: '04', titleEn: 'ARTIFICIAL INTELLIGENCE', title: 'AI', desc: 'The compute and intelligence layer that pairs with our data centres — the core engine that turns infrastructure into value.' },
        { no: '05', titleEn: 'SPACE TECHNOLOGY', title: 'Space Technology', desc: 'The spirit of exploration toward the ocean and space — a long-term bet on a frontier of limitless possibility.' },
        { no: '06', titleEn: 'SMART FARM', title: 'Smart Farm', desc: 'Next-generation production infrastructure where energy, automation, and data meet — one pillar of the future ecosystem.' },
      ] as Area[],
    },

    personnel: {
      eyebrow: 'Key Personnel',
      title: 'The people who hold the flame',
      lead: 'The key people who make the real thing. Profiles will be revealed in turn.',
      people: [
        { name: 'Hur, Young Soo', role: 'President', bio: 'The founder who sets Bluestove’s direction, driving the "Make it happen" philosophy: given infrastructure, power, and land, we build anything ourselves.' },
        { name: 'Placeholder', role: 'Role Placeholder', tbd: true, bio: 'Profile placeholder for the person responsible for execution across data centre PM, consulting delivery, and future technology operations.' },
        { name: 'Placeholder', role: 'Role Placeholder', tbd: true, bio: 'Profile placeholder for the person responsible for strategic partnerships, business development, and commercialization planning.' },
      ] as Person[],
    },

    contact: {
      eyebrow: 'Contact Us',
      title: ["Let's Make", 'it Happen.'],
      lead: 'For conversations around sites, power, infrastructure, or future technology operations,\nBluestove welcomes thoughtful introductions and project inquiries.',
      emailLabel: 'Email',
      scopeLabel: 'Scope',
      nameLabel: 'Name / Company',
      namePh: 'Jane Doe / Bluestove',
      emailFieldLabel: 'Email',
      emailPh: 'you@example.com',
      phoneLabel: 'Phone',
      phoneOptional: '(optional)',
      phonePh: '+82 10 0000 0000',
      msgLabel: 'Tell us about the opportunity',
      msgPh: 'Share the context, timing, and type of collaboration you would like to discuss.',
      submit: 'Send message',
      sending: 'Sending…',
      subject: '[Bluestove] New inquiry received',
      statusOk: 'Thank you. Your message has been sent — we’ll be in touch soon.',
      statusErr: 'Something went wrong. Please try again in a moment.',
      statusNet: 'A network error occurred. Please try again in a moment.',
      statusUnset: 'The form is not configured yet (a Web3Forms access key is required).',
    },

    footer: {
      rights: 'All rights reserved.',
    },
  },

  ko: {
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    dir: 'ltr',
    skip: '본문으로 건너뛰기',
    switchAria: '언어 선택',

    meta: {
      title: 'Bluestove — 미래를 내다보는, 오래 지속되는 불꽃',
      description:
        '데이터센터 PM·컨설팅을 중심으로 로봇·AI·우주기술·스마트팜까지, 미래 생태계를 직접 구축하는 오퍼레이팅 컴퍼니.',
    },

    nav: {
      founder: '창립자',
      business: '사업 영역',
      personnel: '핵심 인력',
      contact: '문의하기',
    },

    hero: {
      eyebrow: 'An Operating Company for Future Ecosystems',
      sub: '미래를 내다보는 마인드와 함께, 내공을 갈무리하여 오래도록 지속되는 불꽃.',
      ctaSecondary: '사업 영역',
    },

    philosophy: {
      eyebrow: 'Brand Philosophy',
      title: ['겉은 잔잔하나, 안에는', '갈무리된 열이 있다.'],
      quote:
        '스토브는 인류 최초의 내연기관이자 발전소, 모든 산업 혁명의 시발점. 블루스토브는 겉으로는 잔잔하지만 내부에 엄청난 열정과 내공을 갈무리한 조직을 뜻한다.',
      mottoSub: '인프라, 땅, 전력이 있다면 우리가 무엇이든 직접 다 만들어 낸다.',
      beats: [
        {
          era: '중세 — 갇히지 않은 열',
          text: '벽난로는 열을 가두지 못했고, 동양의 화로엔 뚜껑이 없었다. 힘은 흩어졌다.',
        },
        {
          era: '스토브 — 힘의 발견',
          text: '스토브는 기계적 컨테이너 안에 강력한 열을 처음으로 가두어, 인류 최초로 그 힘을 발견해 낸 도구다.',
        },
        {
          era: '증기기관 — 산업혁명의 시발점',
          text: '세계 최초의 엔진인 증기기관 역시 스토브 위 주전자의 증기에서 힘을 발견하며 시작됐다.',
        },
      ],
    },

    founder: {
      eyebrow: 'Founder',
      title: '창립자의 말',
      name: 'Hur, Young Soo',
      role: 'President, Bluestove',
      lead: '“단순한 투자는 우리의 일이 아니다. 우리는 실체를 가지고 직접 만든다.”',
      body: [
        '블루스토브는 PM과 컨설팅이라는 실체를 가지고 미래 생태계를 통합 구축하는, 홀딩 성격의 오퍼레이팅 컴퍼니입니다. 데이터센터부터 로봇, AI, 우주기술, 스마트팜까지 — 미래 기술 전반을 직접 손에 쥡니다.',
        '블루(Blue)는 바다와 우주를 향한 무한한 가능성과 탐구 정신을, 스토브(Stove)는 모든 산업 혁명의 시발점이 된 최초의 발전소를 뜻합니다. 우리는 겉으로 잔잔하되 안으로 오래 타오르는 불꽃이 되겠습니다.',
      ],
      sign: '— Hur, Young Soo, President',
    },

    business: {
      eyebrow: 'Business Area',
      title: '우리가 직접 만드는 영역',
      lead: '데이터센터 PM과 컨설팅을 본진으로, 로봇·AI·우주기술·스마트팜까지. 미래 기술 생태계를 잇는 여섯 개의 축.',
      areas: [
        { no: '01', titleEn: 'DATA CENTRE PM', title: '데이터센터 PM', desc: '부지·전력·인프라가 주어지면 설계부터 구축·운영까지 직접 책임지는 프로젝트 매니지먼트. 블루스토브의 본진.' },
        { no: '02', titleEn: 'CONSULTING', title: '컨설팅', desc: '미래 기술 인프라 투자와 사업화를 잇는 실체 기반 컨설팅. 단순 자문이 아닌 실행까지의 로드맵.' },
        { no: '03', titleEn: 'ROBOTICS', title: '로봇', desc: '물리 세계에서 일하는 자동화. 산업 현장과 인프라 운영을 잇는 로보틱스 역량.' },
        { no: '04', titleEn: 'ARTIFICIAL INTELLIGENCE', title: 'AI', desc: '데이터센터와 결합되는 연산·지능 레이어. 인프라를 가치로 전환하는 핵심 엔진.' },
        { no: '05', titleEn: 'SPACE TECHNOLOGY', title: '우주기술', desc: '바다와 우주를 향한 탐구 정신. 무한한 가능성의 프론티어에 대한 장기 베팅.' },
        { no: '06', titleEn: 'SMART FARM', title: '스마트팜', desc: '에너지·자동화·데이터가 만나는 차세대 생산 인프라. 미래 생태계의 한 축.' },
      ] as Area[],
    },

    personnel: {
      eyebrow: 'Key Personnel',
      title: '불꽃을 갈무리한 사람들',
      lead: '실체를 만들어 내는 핵심 인력. 프로필은 순차적으로 공개됩니다.',
      people: [
        { name: 'Hur, Young Soo', role: 'President', bio: '블루스토브의 방향을 잡는 창립자. 인프라·전력·땅이 있다면 무엇이든 직접 만들어 낸다는 "Make it happen" 철학을 이끈다.' },
        { name: 'Placeholder', role: 'Role Placeholder', tbd: true, bio: '데이터센터 PM, 컨설팅 딜리버리, 미래 기술 운영 실행을 담당할 인물의 프로필 자리입니다.' },
        { name: 'Placeholder', role: 'Role Placeholder', tbd: true, bio: '전략적 파트너십, 사업 개발, 사업화 기획을 담당할 인물의 프로필 자리입니다.' },
      ] as Person[],
    },

    contact: {
      eyebrow: 'Contact Us',
      title: ["Let's Make", 'it Happen.'],
      lead: '부지, 전력, 인프라, 미래 기술 운영과 관련된 논의를 편하게 남겨주세요.\n검토 후 적절한 방식으로 이어가겠습니다.',
      emailLabel: 'Email',
      scopeLabel: 'Scope',
      nameLabel: '이름 / 회사',
      namePh: '홍길동 / 블루스토브',
      emailFieldLabel: '이메일',
      emailPh: 'you@example.com',
      phoneLabel: '연락처',
      phoneOptional: '(선택)',
      phonePh: '010-0000-0000',
      msgLabel: '논의하고 싶은 기회나 배경을 남겨주세요',
      msgPh: '프로젝트의 배경, 시점, 논의하고 싶은 협력 방향을 편하게 적어주세요.',
      submit: '글 남기기',
      sending: '전송 중…',
      subject: '[Bluestove] 새 문의가 도착했습니다',
      statusOk: '감사합니다. 메시지가 전달되었습니다. 곧 연락드리겠습니다.',
      statusErr: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      statusNet: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      statusUnset: '폼이 아직 설정되지 않았습니다. (Web3Forms access key 필요)',
    },

    footer: {
      rights: 'All rights reserved.',
    },
  },
} as const;

export type UI = (typeof ui)['en'];
