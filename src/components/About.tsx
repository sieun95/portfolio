import FadeIn from './FadeIn'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">소개</h2>
      <FadeIn className="about-grid">
        <div className="about-label-col">
          <span className="about-label-text">자기소개</span>
        </div>
        <div className="about-text">
          <p>
            React/Next.js 프론트엔드부터 Node.js/NestJS 백엔드,
            PostgreSQL 데이터 모델링까지 서비스 전체를 설계하고 구현하는
            풀스택 개발자입니다. 3년 8개월간 Express 기반 RESTful API 설계,
            데이터 수집 파이프라인 구축, 캐싱 최적화를 통한 API 호출 90% 이상 감소 등
            백엔드 성능 개선에 집중해 왔습니다.
          </p>
          <p>
            커머스 도메인에 관심을 가지고 개인 포트폴리오로 AI B2B 쇼핑몰을 직접 설계·구현하며
            상품 관리, 장바구니, 결제, 주문 흐름과 AI 추천·예측 시스템을 학습했습니다.
            Claude API 기반 AI 서비스(dearmy.ai)는 기획부터 배포까지 1인으로 완성해
            현재 실서비스 운영 중이며, AI 도구를 적극 활용하여 개발 생산성을 높이고 있습니다.
          </p>
        </div>
        <div className="about-info">
          <span>한아이덴티티코리아 재직 중</span>
          <span>서버 사이드 개발 3년 8개월</span>
          <span>한양사이버대 컴퓨터공학 졸업</span>
        </div>
      </FadeIn>
    </section>
  )
}
