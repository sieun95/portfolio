import type { ReactNode } from 'react'
import { ExternalLinkIcon, GitHubIcon } from './Icons'

interface Project {
  type: string
  title: string
  desc: string
  tags: string[]
  icon: ReactNode
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    type: 'AI Service',
    title: 'Dear My AI',
    desc: 'AI를 페르소나로 만들어 그리운 사람과 편지를 주고받을 수 있는 서비스. 사용자가 설정한 페르소나를 기반으로 AI가 감성적인 답장을 생성합니다.',
    tags: ['TypeScript', 'Next.js', 'AI', 'Fullstack'],
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    liveUrl: 'https://dearmy.ai/',
    githubUrl: 'https://github.com/sieun95/dear-my-ai',
  },
  {
    type: 'Fullstack',
    title: 'AI B2B 쇼핑몰',
    desc: 'AI 기술을 활용한 B2B 커머스 플랫폼. 프론트엔드와 백엔드를 모두 설계 및 구현한 풀스택 프로젝트입니다.',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Fullstack'],
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    liveUrl: 'https://web-eight-nu-11.vercel.app',
    githubUrl: 'https://github.com/shop-fullstack',
  },
  {
    type: 'Contract',
    title: 'AUG Gold',
    desc: 'AUG Gold 공식 웹사이트 외주 개발. 클라이언트 요구사항에 맞춰 웹사이트를 설계하고 구현하였습니다.',
    tags: ['Web Development', 'Contract'],
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    liveUrl: 'https://www.auggold.com/en',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">
          주요 <span className="gradient-text">프로젝트</span>
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-header">
                {p.icon}
                <div className="project-links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label="Live">
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              </div>
              <span className="project-type">{p.type}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
