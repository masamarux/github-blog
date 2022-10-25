import { Link } from 'react-router-dom'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { formatDate } from '../../../../utils/formatters'

interface PostHeaderProps {
  title: string
  username?: string
  createdAt: string
  comments: number
  htmlUrl: string
}

export function PostHeader({
  title,
  username,
  createdAt,
  comments,
  htmlUrl,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </Link>
        <ExternalLink href={htmlUrl}>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ExternalLink>
      </div>

      <strong>{title}</strong>

      <footer>
        <div>
          <FontAwesomeIcon icon={faGithub} /> {username || '--'}
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} />{' '}
          {createdAt && formatDate(createdAt)}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> {comments} comentários
        </div>
      </footer>
    </PostHeaderContainer>
  )
}
