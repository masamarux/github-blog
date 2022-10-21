import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </ExternalLinkContainer>
  )
}
