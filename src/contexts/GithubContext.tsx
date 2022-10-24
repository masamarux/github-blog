import { createContext, ReactNode, useState } from 'react'
import { getUser } from '../libs/octokit'

interface UserProps {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username?: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface GithubContextProps {
  user: UserProps
  repository: string
  getUserData: (username: string) => void
  resetUserData: () => void
}

export const GithubContext = createContext<GithubContextProps>(
  {} as GithubContextProps,
)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [repository, setRepository] = useState('')
  const [issues, setIssues] = useState([])

  async function getUserData(username: string) {
    const userData = await getUser(username)

    userData?.data && setUser(userData.data)
  }

  async function resetUserData() {
    setUser({} as UserProps)
  }

  return (
    <GithubContext.Provider
      value={{
        user,
        repository,
        getUserData,
        resetUserData,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
