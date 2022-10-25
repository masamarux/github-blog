import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  const navigator = useNavigate()

  const handleGoToHome = useCallback(() => {
    navigator('/')
  }, [navigator])

  return (
    <HeaderContainer>
      <div onClick={handleGoToHome}>
        <img src="/logo.svg" alt="" />
        <h1>GITHUB BLOG</h1>
      </div>
    </HeaderContainer>
  )
}
