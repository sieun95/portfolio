import { useCallback, useEffect, useRef, useState } from 'react'

const links = [
  { href: '#about', label: '소개' },
  { href: '#experience', label: '경력' },
  { href: '#projects', label: '프로젝트' },
  { href: '#contact', label: '연락처' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ticking = useRef(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ESC key closes menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, closeMenu])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="메인 네비게이션">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">SE.</a>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
