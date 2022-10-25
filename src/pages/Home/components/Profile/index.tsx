import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileDataContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

export function Profile() {
  const { user } = useContext(GithubContext)

  return (
    <ProfileContainer>
      <img src={user && user?.avatar_url} alt="" />

      <ProfileDataContainer>
        <header>
          <strong>{user?.name}</strong>
          <ExternalLink href={user?.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </header>

        <span>{user?.bio}</span>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login}</span>
          </div>
          {user?.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
          )}

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} seguidores</span>
          </div>
        </footer>
      </ProfileDataContainer>
    </ProfileContainer>
  )
}
