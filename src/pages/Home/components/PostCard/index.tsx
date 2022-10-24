import { PostCardContainer } from './styles'

interface PostCardProps {
  onClick?: () => void
}

export function PostCard({ onClick }: PostCardProps) {
  return (
    <PostCardContainer onClick={onClick}>
      <div>
        <strong>JavaScript data types and data structures</strong>
        <time dateTime="2022-10-20T21:00:15.141Z">Há 1 dia</time>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostCardContainer>
  )
}
