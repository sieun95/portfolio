import FadeIn from './FadeIn'

const categories = [
  {
    title: '프론트엔드',
    items: [
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript', primary: false },
    ],
  },
  {
    title: '백엔드',
    items: [
      { name: 'Node.js', primary: true },
      { name: 'NestJS', primary: true },
      { name: 'Express', primary: true },
      { name: 'RESTful API', primary: false },
    ],
  },
  {
    title: 'DB & 데이터',
    items: [
      { name: 'PostgreSQL', primary: true },
      { name: 'MySQL', primary: true },
      { name: 'Supabase', primary: false },
      { name: '쿼리 튜닝 / 캐싱', primary: false },
    ],
  },
  {
    title: 'AI & 인프라',
    items: [
      { name: 'Claude API / Gemini', primary: true },
      { name: 'Claude Code', primary: true },
      { name: 'Vercel / Cloudflare', primary: false },
      { name: 'AWS', primary: false },
      { name: 'Git / GitHub', primary: false },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">기술</h2>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <FadeIn className="skill-col" key={cat.title} delay={i * 0.08}>
            <span className="skill-col-title">{cat.title}</span>
            <div className="skill-items">
              {cat.items.map((item) => (
                <span key={item.name} className={`skill-item ${item.primary ? 'primary' : 'secondary'}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
