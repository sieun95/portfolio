import { GitHubIcon, MailIcon } from './Icons'

const contacts = [
  {
    href: 'mailto:leesieun9524@gmail.com',
    icon: <MailIcon />,
    label: '이메일',
    value: 'leesieun9524@gmail.com',
  },
  {
    href: 'https://github.com/sieun95',
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/sieun95',
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          <span className="gradient-text">연락</span>처
        </h2>
        <div className="contact-content">
          <p className="contact-desc">
            함께 일하고 싶으시거나, 궁금한 점이 있으시면 편하게 연락해 주세요.
          </p>
          <div className="contact-links">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-item"
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <div className="contact-icon-wrap">{c.icon}</div>
                <div>
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
