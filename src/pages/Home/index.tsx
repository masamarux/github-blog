import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../contexts/GithubContext'
import { SiteContext } from '../../contexts/SiteContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsContainer } from './styles'

export function Home() {
  const navigator = useNavigate()
  const issues = useContextSelector(GithubContext, (state) => state.issues)
  const changeIsBackgroundDark = useContextSelector(
    SiteContext,
    (state) => state.changeIsBackgroundDark,
  )

  useEffect(() => {
    changeIsBackgroundDark(false)
  }, [changeIsBackgroundDark])

  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        {issues &&
          issues.items &&
          issues.items.map((issue) => (
            <PostCard
              key={issue.id}
              onClick={() => navigator(`/issue/${issue.number}`)}
              title={issue.title}
              body={issue.body}
              createdAt={issue.created_at}
            />
          ))}
      </PostsContainer>
    </HomeContainer>
  )
}
