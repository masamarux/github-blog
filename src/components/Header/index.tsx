import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  const navigator = useNavigate()

  function handleGoToHome() {
    navigator('/')
  }
  return (
    <HeaderContainer>
      <div onClick={handleGoToHome}>
        <img src="/logo.svg" alt="" />
        <h1>GITHUB BLOG</h1>
      </div>
    </HeaderContainer>
  )
}
