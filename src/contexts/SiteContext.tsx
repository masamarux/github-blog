import { createContext, ReactNode, useState } from 'react'

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

  async function changeIsBackgroundDark(value: boolean) {
    setIsBackgroundDark(value)
  }

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
