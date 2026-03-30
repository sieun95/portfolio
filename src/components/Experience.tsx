const experiences = [
  {
    date: '2023.01 — 현재',
    company: 'OO 회사',
    role: '프론트엔드 개발자',
    details: [
      'React 기반 웹 애플리케이션 개발 및 유지보수',
      'UI/UX 개선을 통한 사용자 경험 향상',
      'RESTful API 연동 및 상태 관리 최적화',
    ],
  },
  {
    date: '2021.06 — 2022.12',
    company: 'OO 스타트업',
    role: '풀스택 개발자',
    details: [
      'Node.js + Express 기반 백엔드 API 설계 및 구현',
      '데이터베이스 설계 및 쿼리 최적화',
      '서비스 런칭 및 운영 경험',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">
          <span className="gradient-text">경력</span> 사항
        </h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.company}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>
                <ul className="timeline-details">
                  {exp.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
