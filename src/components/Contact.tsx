import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">연락처</h2>
      <FadeIn className="contact-grid">
        <div className="contact-label-col">
          <span className="contact-label">문의</span>
          <span className="contact-hint">
            제안이나 협업 관련 연락은<br />아래로 부탁드립니다.
          </span>
        </div>
        <div className="contact-body">
          <a href="mailto:leesieun9524@gmail.com" className="contact-email">
            leesieun9524@gmail.com
          </a>
          <a href="tel:+821024506926" className="contact-link">
            +82 10-2450-6926
          </a>
          <a href="https://github.com/sieun95" target="_blank" rel="noreferrer" className="contact-link">
            github.com/sieun95 →
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
