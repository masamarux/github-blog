import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
