import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileDataContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/45273884?v=4" alt="" />

      <ProfileDataContainer>
        <header>
          <strong>Marcelo Alves</strong>
          <ExternalLink href="https://github.com/Masamarux">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </header>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>masamarux</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </footer>
      </ProfileDataContainer>
    </ProfileContainer>
  )
}
