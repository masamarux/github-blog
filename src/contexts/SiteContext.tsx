import { createContext } from 'use-context-selector'
import { ReactNode, useCallback, useState } from 'react'

interface SiteContextProps {
  isBackgroundDark: boolean
  changeIsBackgroundDark: (value: boolean) => void
}

export const SiteContext = createContext<SiteContextProps>(
  {} as SiteContextProps,
)

interface SiteProviderProps {
  children: ReactNode
}

export function SiteProvider({ children }: SiteProviderProps) {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false)

  const changeIsBackgroundDark = useCallback(async (value: boolean) => {
    setIsBackgroundDark(value)
  }, [])

  return (
    <SiteContext.Provider
      value={{
        isBackgroundDark,
        changeIsBackgroundDark,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
