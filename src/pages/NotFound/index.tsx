import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotFoundContainer } from './styles'

export function NotFound() {
  const navigator = useNavigate()

  const handleGoToHome = useCallback(() => {
    navigator('/')
  }, [navigator])

  return (
    <NotFoundContainer>
      <div>
        <strong>404</strong>

        <div>
          <em>Nem todos que vagueiam estão perdidos...</em>
          <p>Mas no seu caso sim!</p>
        </div>

        <button onClick={handleGoToHome}>Volte para a home por aqui</button>
      </div>
    </NotFoundContainer>
  )
}
