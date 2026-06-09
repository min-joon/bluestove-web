# Bluestove — 공식 랜딩 페이지

> An enduring flame with a future mind.

블루스토브(데이터센터 PM·컨설팅 중심의 오퍼레이팅 컴퍼니) 공식 랜딩 페이지.
현재 공개 라우트는 영어 페이지(`/en/`)만 사용하며, 한국어 카피는 향후 재사용을 위해 코드에만 보관한다. 페이지는 6개 섹션(Hero / Philosophy / Founder / Business Area / Key Personnel / Contact)으로 구성하고, GNB는 앵커 스크롤로 동작한다.

## 기술 스택

| 항목 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | **Astro 5** | 기본 JS 0KB, 정적 출력. 리빌/폼만 소량 클라이언트 스크립트 |
| 라우팅 | 영어 정적 라우트 + 루트 리다이렉트 | `/` 접속 시 `/en/`으로 이동. `/ko/`는 현재 생성하지 않음 |
| 언어 카피 | 자체 사전(`src/i18n/ui.ts`) | 한국어 카피는 보관만 하고 공개 라우트에서는 사용하지 않음 |
| 스타일 | Vanilla CSS + CSS custom properties | 디자인 토큰은 `src/styles/tokens.css` |
| 문의 폼 | [Web3Forms](https://web3forms.com) | 백엔드 없이 정적 사이트 → admin@bluestove.com 전송 |
| 배포 | **Cloudflare Pages** | 정적 + 엣지 함수 1개, 무료, 상업용 허용, 무제한 대역폭 |

## 공개 라우팅

- **공개 URL**: `/en/`만 생성한다. `/ko/`는 현재 생성하지 않으며, EN/KO 전환 UI도 제거되어 있다.
- **루트(`/`) 처리**: 프로덕션에서는 `functions/_middleware.js`가 `/`를 `/en/`으로 302 리다이렉트한다. 로컬/프리뷰에서는 `src/pages/index.astro`가 클라이언트에서 `/en/`으로 이동시킨다.
- **한국어 카피**: 향후 필요할 수 있어 `src/i18n/ui.ts`와 `BluestoveLanding.astro` 안에 보관한다. `/ko/`를 다시 노출하려면 정적 라우트 생성, hreflang, EN/KO 전환 UI를 함께 복구해야 한다.

## Work-in-progress 모드

필요할 때 사이트를 placeholder로 가리는 게이트. **`SITE_WIP` 환경변수 하나**로 제어하며, 미설정(기본) = OFF.

| `SITE_WIP` | 빌드 결과 | 엣지 리다이렉트 |
|---|---|---|
| 미설정 / `false` (기본) | 랜딩 페이지 (`/`, `/en/`) | 활성 (`/` → `/en/`) |
| `true` | `dist/index.html`(placeholder) + favicon **만**. `/en` 미생성, `_astro` 번들 제거 | 비활성 (placeholder 그대로 노출) |

- **핵심**: WIP에서는 실제 페이지가 빌드에 **아예 안 들어간다**. `/en/` 직접 접근 → 404, 디렉토리에도 흔적 없음. (`scripts/postbuild.mjs`가 고아 `_astro` 번들까지 제거)
- **실제 페이지 작업(로컬)**: `npm run dev` 또는 `npm run build`.
- **placeholder로 잠시 숨기기**: Cloudflare Pages → Settings → Environment variables 에 `SITE_WIP=true` 추가 후 재배포.
- 제어 로직: `src/config.ts`(`WIP` 상수) — 라우트 생성·루트 페이지·엣지 함수가 모두 이 값을 참조.

## 로컬 실행

```bash
npm install
cp .env.example .env   # 키/플래그는 선택 (아래 참고)
npm run dev            # http://localhost:4321 (기본 랜딩 페이지)
SITE_WIP=true npm run dev    # placeholder를 확인할 때
npm run build          # 정적 빌드 → dist/ (기본 랜딩 페이지)
npm run preview        # 빌드 결과 미리보기
```

## 문의 폼 (Web3Forms)

- 공개(public) Access Key가 `src/i18n/ui.ts`의 `brand.web3formsKey`에 하드코딩되어 있어 **별도 설정 없이 바로 동작**한다.
- 수신 이메일(**admin@bluestove.com**)은 Web3Forms 대시보드에서 이 키에 연결되어 있다(코드가 아님). 수신 주소를 바꾸려면 Web3Forms 대시보드에서 변경.
- 다른 환경에서 키를 교체하려면 `.env`(또는 Cloudflare Pages Environment variables)에 `PUBLIC_WEB3FORMS_KEY`를 넣으면 하드코딩 값을 덮어쓴다.
- 스팸은 honeypot(`botcheck`) 필드로 1차 차단. 성공/실패 안내는 페이지 언어에 맞춰 표시.

## 배포 (Cloudflare Pages)

GitHub 레포 연동 방식 권장:

1. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**.
2. 이 레포 선택 후 빌드 설정:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
3. (선택) Environment variables에 `PUBLIC_WEB3FORMS_KEY` 추가 — 키 교체 시에만.
4. Save and Deploy → `*.pages.dev` URL 발급. 커스텀 도메인은 **Custom domains**에서 연결.

> 기본 배포는 랜딩 페이지를 노출한다. placeholder가 필요할 때만 Environment variables에 `SITE_WIP=true`를 추가한다.

> 정적 사이트 + `functions/` 엣지 함수 1개. Cloudflare Pages가 `functions/`를 자동 인식한다(별도 설정 불필요). `astro.config.mjs`의 `site` 값은 실제 도메인 확정 시 교체(hreflang/canonical에 사용).

## 구조

```
functions/
  _middleware.js            # "/" → "/en/" 리다이렉트 (WIP면 비활성)
scripts/
  postbuild.mjs             # WIP 빌드 시 고아 _astro 번들 제거
src/
  config.ts                 # WIP 게이트 플래그 (SITE_WIP)
  i18n/ui.ts                # en/ko 전체 문자열 사전 + 브랜드 상수(키/이메일/슬로건)
  layouts/Base.astro        # head/메타/OG/hreflang, reveal observer, skip-link
  pages/
    index.astro             # 루트 — WIP면 placeholder, 아니면 /en/으로 이동
    [lang]/index.astro      # /en/ 페이지 (WIP면 미생성)
  components/
    Nav.astro               # GNB (앵커 + 모바일 햄버거)
    Logo.astro              # 스토브+불꽃 SVG 플레이스홀더 (격리, 교체 예정)
    Hero / Philosophy / Founder / BusinessAreas / KeyPersonnel / Contact / Footer
  styles/
    tokens.css              # 브랜드 색/타이포/간격 토큰
    global.css              # reset, 공통 레이아웃/유틸
```

> 주의: 루트 엣지 리다이렉트는 **Cloudflare 배포 환경에서만** 실제 동작한다. 로컬은 클라이언트 리다이렉트로 `/en/`에 진입한다.

## 후속 작업 (확정 후 교체)

- **로고/불꽃 애니메이션**: 현재 `Logo.astro`는 코드형 SVG 플레이스홀더. 최종 표현(정교한 SVG / Lottie)은 디자인 확정 후 이 컴포넌트만 교체.
- **콘텐츠**: 창립자 메시지, 핵심 인력 프로필, 사업 영역 카피는 `src/i18n/ui.ts`의 en/ko에 placeholder로 존재.
- **에셋**: OG 이미지. 연락처 이메일은 admin@bluestove.com(임시).
