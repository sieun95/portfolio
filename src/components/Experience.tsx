import FadeIn from './FadeIn'

const experiences = [
  {
    date: '2022.08 — 현재',
    role: '백엔드 개발 · 주임 · 3년 8개월',
    company: '한아이덴티티코리아',
    desc: 'Express 기반 RESTful API 설계 및 백엔드 개발. 데이터 수집 파이프라인 구축, 인메모리 캐싱과 MySQL 저장 분리 적용으로 API 호출 90% 이상 감소 및 응답속도 개선. 스마트컨트랙트 20종 이상 단독 설계·구현, 외부 보안 감사(Audit) 통과.',
  },
  {
    date: '2021.08 — 2022.07',
    role: '웹·블록체인 개발 과정 · 1년',
    company: '경일게임아카데미',
    desc: '핀테크 및 응용 SW 개발자 양성과정 수료. JavaScript, Node.js, React 등 웹 개발 전반 학습. 수료 후 한아이덴티티코리아 입사.',
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
