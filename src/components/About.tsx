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
            프론트엔드부터 백엔드까지 서비스 전체를 설계하고 구현하는
            풀스택 웹 개발자입니다. Claude API 기반 AI 서비스(dearmy.ai)를
            1인 풀스택으로 기획부터 배포까지 완성해 현재 실서비스로 운영 중이며,
            AI 도구를 적극 활용하여 개발 생산성을 높이고 있습니다.
          </p>
          <p>
            블록체인 분야에서도 3년 8개월간 토큰·NFT·스테이킹·브릿지·스왑·유동성 풀 등
            DeFi 전 영역의 스마트컨트랙트를 단독 설계·구현한 경험이 있으며,
            외부 보안 감사(Audit) 통과 이력을 보유하고 있습니다.
            재직 중 한양사이버대학교 컴퓨터공학과에 편입해 2025년 2월 졸업,
            부족함을 느낄 때마다 직접 채워온 개발자입니다.
          </p>
        </div>
        <div className="about-info">
          <span>한아이덴티티코리아 재직 중</span>
          <span>한양사이버대 컴퓨터공학 졸업</span>
        </div>
      </FadeIn>
    </section>
  )
}
