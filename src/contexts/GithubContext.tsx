import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  getUser,
  getSearchRepositoryIssues,
  IssuesProps,
} from '../libs/octokit'

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
  issues: IssuesProps
  getUserData: () => void
  resetUserData: () => void
  searchIssues: (query: string) => void
}

export const GithubContext = createContext<GithubContextProps>(
  {} as GithubContextProps,
)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [issues, setIssues] = useState<IssuesProps>({} as IssuesProps)
  const [repository, setRepository] = useState('')

  async function getUserData() {
    const userData = await getUser(import.meta.env.VITE_GITHUB_USERNAME)

    userData?.data && setUser(userData.data)
  }

  async function resetUserData() {
    setUser({} as UserProps)
  }

  async function searchIssues(query: string) {
    const issuesSearchedData = await getSearchRepositoryIssues({
      owner: import.meta.env.VITE_GITHUB_USERNAME,
      repo: import.meta.env.VITE_GITHUB_REPO,
      query,
    })

    issuesSearchedData?.data && setIssues(issuesSearchedData.data)
  }

  useEffect(() => {
    getUserData()
    searchIssues('')
  }, [])

  return (
    <GithubContext.Provider
      value={{
        user,
        repository,
        issues,
        getUserData,
        resetUserData,
        searchIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
