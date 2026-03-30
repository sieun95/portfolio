const categories = [
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
    title: '백엔드',
    items: [
      { name: 'Node.js', primary: true },
      { name: 'Express', primary: true },
      { name: 'NestJS', primary: false },
    ],
  },
  {
    title: '프론트엔드',
    items: [
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript', primary: false },
    ],
  },
  {
    title: '도구 & AI',
    items: [
      { name: 'Claude Code', primary: true },
      { name: 'AWS', primary: true },
      { name: 'Git / GitHub', primary: false },
      { name: 'MySQL', primary: false },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">기술</h2>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skill-col" key={cat.title}>
            <span className="skill-col-title">{cat.title}</span>
            <div className="skill-items">
              {cat.items.map((item) => (
                <span key={item.name} className={`skill-item ${item.primary ? 'primary' : 'secondary'}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
