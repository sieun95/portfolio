import type { ReactNode } from 'react'
import { useFadeRef } from '../hooks/useFadeIn'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay }: Props) {
  const [ref, visible] = useFadeRef()

  return (
    <div
      ref={ref}
      className={`fade-in${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
