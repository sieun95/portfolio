import FadeIn from './FadeIn'

const categories = [
  {
    title: '프론트엔드',
    items: [
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript', primary: false },
      { name: 'JavaScript', primary: false },
    ],
  },
  {
    title: '백엔드',
    items: [
      { name: 'Node.js', primary: true },
      { name: 'NestJS', primary: true },
      { name: 'Express', primary: false },
      { name: 'MySQL', primary: false },
    ],
  },
  {
    title: '블록체인',
    items: [
      { name: 'Solidity', primary: true },
      { name: 'Hardhat', primary: true },
      { name: 'ethers.js', primary: false },
      { name: 'ERC-20 / NFT', primary: false },
    ],
  },
  {
    title: '도구 & AI',
    items: [
      { name: 'Claude Code', primary: true },
      { name: 'Supabase', primary: true },
      { name: 'Cloudflare', primary: false },
      { name: 'AWS', primary: false },
      { name: 'Git / GitHub', primary: false },
      { name: 'Vercel', primary: false },
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
