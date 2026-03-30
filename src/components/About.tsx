const info = [
  { label: '이름', value: '이시은' },
  { label: '이메일', value: 'leesieun9524@gmail.com' },
  { label: '위치', value: '대한민국' },
  {
    label: 'GitHub',
    value: <a href="https://github.com/sieun95" target="_blank" rel="noreferrer">github.com/sieun95</a>,
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">
          저를 <span className="gradient-text">소개</span>합니다
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              안녕하세요! <strong>풀스택 개발자</strong> 이시은입니다.
            </p>
            <p>
              프론트엔드부터 백엔드까지 서비스의 전체 흐름을 이해하고 구현하는 것을 좋아합니다.
              최근에는 AI 기술을 접목한 웹 서비스 개발에 집중하고 있으며,
              Claude Code와 같은 AI 도구를 적극 활용하여 생산성을 극대화하고 있습니다.
            </p>
            <p>
              사용자 중심의 사고를 바탕으로, 기술적 완성도와 사용자 경험 모두를 추구합니다.
            </p>
          </div>
          <div className="about-info">
            {info.map(({ label, value }) => (
              <div className="about-info-item" key={label}>
                <span className="about-label">{label}</span>
                <span className="about-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
