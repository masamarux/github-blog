import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SiteContext } from './contexts/SiteContext'
import { defaultTheme } from './styles/theme/default'
import { darkTheme } from './styles/theme/dark'
import { useContextSelector } from 'use-context-selector'

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  const isBackgroundDark = useContextSelector(
    SiteContext,
    (state) => state.isBackgroundDark,
  )
  const theme = isBackgroundDark ? darkTheme : defaultTheme

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
