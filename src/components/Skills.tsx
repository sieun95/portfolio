const categories = [
  {
    title: 'Frontend',
    items: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Express'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'AI & Tools',
    items: ['Claude Code', 'Pencil (AI Design)', 'Git / GitHub', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          기술 <span className="gradient-text">스택</span>
        </h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-items">
                {cat.items.map((item) => (
                  <div className="skill-item" key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
