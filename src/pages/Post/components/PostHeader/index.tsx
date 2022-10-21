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

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <div>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </a>
        <ExternalLink href="https://github.com/Masamarux">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ExternalLink>
      </div>

      <strong>JavaScript data types and data structures</strong>

      <footer>
        <div>
          <FontAwesomeIcon icon={faGithub} /> masamarux
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} /> Há 1 dia
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> 5 comentários
        </div>
      </footer>
    </PostHeaderContainer>
  )
}
