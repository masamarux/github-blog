import { PostCardContainer, MarkdownContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { formatDate } from '../../../../utils/formatters'

interface PostCardProps {
  onClick?: () => void
  title: string
  body?: string
  createdAt: string
}

export function PostCard({ onClick, title, body, createdAt }: PostCardProps) {
  return (
    <PostCardContainer onClick={onClick}>
      <div>
        <strong>
          {title.length >= 45 ? `${title.substring(0, 45)}...` : title}
        </strong>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      </div>
      <ReactMarkdown>
        {body
          ? body.length >= 250
            ? `${body.substring(0, 250)}...`
            : body
          : '...'}
      </ReactMarkdown>
    </PostCardContainer>
  )
}
