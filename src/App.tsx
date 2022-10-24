import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { SiteProvider } from './contexts/SiteContext'
import { Theme } from './Theme'
import { GithubProvider } from './contexts/GithubContext'

export function App() {
  return (
    <SiteProvider>
      <Theme>
        <BrowserRouter>
          <GithubProvider>
            <Router />
          </GithubProvider>
        </BrowserRouter>

        <GlobalStyle />
      </Theme>
    </SiteProvider>
  )
}
