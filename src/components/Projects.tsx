import FadeIn from './FadeIn'

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
    type: 'AI 커머스 · 풀스택 · 1인 개발',
    title: 'AI B2B 쇼핑몰',
    desc: 'Gemini AI 기반 B2B 커머스 플랫폼. 상품 관리, 장바구니, 결제, 주문 등 Core Commerce 전체를 1인 풀스택으로 설계·구현. AI 챗봇 상담, 맞춤 상품 추천, 수요 예측(선형 회귀 + 가중 이동평균), 트렌드 분석, 재주문/재입고 추천 등 AI가 DB 통계를 해석해 자연어 인사이트를 제공합니다.',
    liveUrl: 'https://web-eight-nu-11.vercel.app',
    liveLabel: '사이트 →',
    githubUrl: 'https://github.com/orgs/shop-fullstack/repositories',
    techGroups: [
      { label: '프론트엔드', items: ['Next.js', 'React'] },
      { label: '백엔드', items: ['NestJS', 'RESTful API'] },
      { label: 'AI', items: ['Gemini AI'] },
      { label: 'DB', items: ['Supabase (PostgreSQL)'] },
      { label: '인프라', items: ['Vercel'] },
    ],
  },
  {
    type: 'AI 서비스 · 풀스택 · 1인 개발',
    title: 'Dear My AI',
    desc: 'Claude API 기반 AI 편지 서비스. AI를 페르소나로 만들어 그리운 사람과 편지를 주고받을 수 있으며, 사용자가 설정한 페르소나를 기반으로 AI가 감성적인 답장을 생성합니다. 기획부터 배포까지 1인 풀스택으로 완성, 현재 실서비스 운영 중.',
    liveUrl: 'https://dearmy.ai/',
    liveLabel: 'dearmy.ai →',
    githubUrl: 'https://github.com/sieun95/dear-my-ai',
    techGroups: [
      { label: '프론트엔드', items: ['React', 'Vite'] },
      { label: 'AI', items: ['Claude API'] },
      { label: 'DB', items: ['Supabase'] },
      { label: '인프라', items: ['Cloudflare'] },
    ],
  },
  {
    type: '백엔드 · 블록체인',
    title: 'BeatSwap',
    desc: 'DeFi 스왑 플랫폼. Node.js 백엔드 API 서버 및 스마트컨트랙트 전체를 단독 설계·구현. 프론트엔드를 제외한 모든 서버 사이드 개발을 담당했습니다.',
    liveUrl: 'https://beatswap.io/',
    liveLabel: 'beatswap.io →',
    techGroups: [
      { label: '백엔드', items: ['Node.js', 'Express'] },
      { label: '블록체인', items: ['Solidity', 'ethers.js'] },
    ],
  },
  {
    type: '백엔드 · 블록체인',
    title: 'AUG Gold',
    desc: 'AUG Gold 공식 웹사이트 개발. 클라이언트 요구사항에 맞춰 백엔드 및 블록체인 연동을 설계하고 구현하였습니다.',
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
          <FadeIn className="project-item" key={p.title} delay={i * 0.1}>
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
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
