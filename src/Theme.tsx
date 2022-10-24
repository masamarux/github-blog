import { ReactNode, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { SiteContext } from './contexts/SiteContext'
import { defaultTheme } from './styles/theme/default'
import { darkTheme } from './styles/theme/dark'

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  const { isBackgroundDark } = useContext(SiteContext)
  const theme = isBackgroundDark ? darkTheme : defaultTheme

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
