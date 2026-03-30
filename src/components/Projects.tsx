interface TechGroup {
  label: string
  items: string[]
}

interface Project {
  type: string
  title: string
  desc: string
  liveUrl: string
  liveLabel: string
  githubUrl?: string
  techGroups: TechGroup[]
}

const projects: Project[] = [
  {
    type: 'AI 서비스 · 풀스택 · 1인 개발',
    title: 'Dear My AI',
    desc: 'AI를 페르소나로 만들어 그리운 사람과 편지를 주고받을 수 있는 서비스. 사용자가 설정한 페르소나를 기반으로 AI가 감성적인 답장을 생성합니다.',
    liveUrl: 'https://dearmy.ai/',
    liveLabel: 'dearmy.ai →',
    githubUrl: 'https://github.com/sieun95/dear-my-ai',
    techGroups: [
      { label: '언어/프레임워크', items: ['React', 'Vite'] },
      { label: 'AI', items: ['Claude API'] },
      { label: '인프라', items: ['Cloudflare'] },
    ],
  },
  {
    type: 'AI 서비스 · 풀스택 · 1인 개발',
    title: 'AI B2B 쇼핑몰',
    desc: 'AI 기술을 활용한 B2B 커머스 플랫폼. 프론트엔드와 백엔드를 모두 설계 및 구현한 1인 풀스택 프로젝트입니다.',
    liveUrl: 'https://web-eight-nu-11.vercel.app',
    liveLabel: '사이트 →',
    githubUrl: 'https://github.com/orgs/shop-fullstack/repositories',
    techGroups: [
      { label: '언어/프레임워크', items: ['Next.js', 'NestJS'] },
      { label: 'DB', items: ['Supabase'] },
      { label: '인프라', items: ['Vercel'] },
    ],
  },
  {
    type: '백엔드 · 블록체인',
    title: 'BeatSwap',
    desc: 'DeFi 스왑 플랫폼. 스마트컨트랙트 전체 및 백엔드 서버를 단독 설계·구현했습니다. 프론트엔드를 제외한 모든 개발을 담당했습니다.',
    liveUrl: 'https://beatswap.io/',
    liveLabel: 'beatswap.io →',
    techGroups: [
      { label: '언어/프레임워크', items: ['Solidity', 'Node.js'] },
      { label: '블록체인', items: ['ethers.js'] },
    ],
  },
  {
    type: '백엔드 · 블록체인',
    title: 'AUG Gold',
    desc: 'AUG Gold 공식 웹사이트 개발. 클라이언트 요구사항에 맞춰 웹사이트를 설계하고 구현하였습니다.',
    liveUrl: 'https://www.auggold.com/en',
    liveLabel: 'auggold.com →',
    techGroups: [
      { label: '인프라', items: ['Render'] },
      { label: '블록체인', items: ['BNB Network'] },
    ],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">프로젝트</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project-item" key={p.title}>
            <div className="project-meta">
              <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="project-type">{p.type}</span>
            </div>
            <div className="project-body">
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
            <div className="project-links">
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                {p.liveLabel}
              </a>
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                  GitHub →
                </a>
              )}
              {p.techGroups.map((g) => (
                <span key={g.label} className="project-tech">
                  {g.label}: {g.items.join(', ')}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
