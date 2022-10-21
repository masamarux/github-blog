import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { darkTheme } from './styles/theme/dark'
import { useState } from 'react'

export function App() {
  const theme = darkTheme

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
