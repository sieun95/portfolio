import FadeIn from './FadeIn'

const experiences = [
  {
    date: '2022.08 — 현재',
    role: '백엔드/블록체인 · 주임 · 3년 8개월',
    company: '한아이덴티티코리아',
    desc: 'DeFi 전 영역 스마트컨트랙트 단독 설계·구현 (20종 이상). Uniswap·PancakeSwap 호환 스왑 및 유동성 풀 구현. Hardhat 테스트 코드 상시 작성, 외부 보안 감사(Audit) 통과. Alchemy·ethers.js 기반 온체인 데이터 수집 파이프라인 구축, 캐싱 최적화를 통한 API 호출 90% 이상 감소.',
  },
  {
    date: '2021.08 — 2022.07',
    role: '블록체인 핀테크 과정 · 1년',
    company: '경일게임아카데미',
    desc: '블록체인 기반 핀테크 및 응용 SW 개발자 양성과정 수료. JavaScript, Node.js, Solidity, React 등 웹·블록체인 개발 전반 학습. 수료 후 한아이덴티티코리아 입사.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">경력</h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <FadeIn className="exp-item" key={exp.company} delay={i * 0.1}>
            <div className="exp-meta">
              <span className="exp-date">{exp.date}</span>
              <span className="exp-role">{exp.role}</span>
            </div>
            <div className="exp-body">
              <h3 className="exp-company">{exp.company}</h3>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
