export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">안녕하세요, 저는</p>
        <h1 className="hero-name">이시은</h1>
        <h2 className="hero-title">
          <span className="accent">풀스택</span> 소프트웨어 개발자
        </h2>
        <p className="hero-desc">
          사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성합니다.
          <br />
          AI 기술을 활용한 서비스 개발에 열정을 가지고 있습니다.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">연락하기</a>
          <a href="#projects" className="btn btn-outline">프로젝트 보기</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>스크롤</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
