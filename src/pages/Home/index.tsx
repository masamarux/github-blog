import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiteContext } from '../../contexts/SiteContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsContainer } from './styles'

export function Home() {
  const navigator = useNavigate()
  const { changeIsBackgroundDark } = useContext(SiteContext)

  useEffect(() => {
    changeIsBackgroundDark(false)
  }, [changeIsBackgroundDark])

  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        <PostCard onClick={() => navigator('/post')} />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
