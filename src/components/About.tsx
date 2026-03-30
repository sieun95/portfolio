export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">소개</h2>
      <div className="about-grid">
        <div className="about-label-col">
          <span className="about-label-text">자기소개</span>
        </div>
        <div className="about-text">
          <p>
            DeFi 프로토콜부터 백엔드 서버까지, 블록체인 풀스택 개발자입니다.
            3년 8개월간 토큰·NFT·스테이킹·브릿지·스왑·유동성 풀 등
            DeFi 전 영역의 스마트컨트랙트를 단독 설계·구현했으며,
            외부 보안 감사(Audit) 통과 경험을 보유하고 있습니다.
          </p>
          <p>
            사이드 프로젝트로 Claude API 기반 AI 서비스(dearmy.ai)를
            1인 풀스택으로 기획부터 배포까지 완성, 현재 실서비스 운영 중입니다.
            재직 중 한양사이버대학교 컴퓨터공학과에 편입해 2025년 2월 졸업,
            실력으로 증명하는 방식을 선택해 왔습니다.
          </p>
        </div>
        <div className="about-info">
          <span>leesieun9524@gmail.com</span>
          <span>+82 10-2450-6926</span>
          <span>github.com/sieun95</span>
        </div>
      </div>
    </section>
  )
}
