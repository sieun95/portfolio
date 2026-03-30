import { useEffect } from 'react'

export default function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const elements = document.querySelectorAll(
      '.about-grid, .timeline-item, .project-card, .skill-category, .contact-item',
    )
    elements.forEach((el) => {
      el.classList.add('fade-in')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
