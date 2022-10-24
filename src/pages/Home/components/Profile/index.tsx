import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileContainer,
  ProfileDataContainer,
  ProfileInputContainer,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useContext, useState } from 'react'
import { Input } from '../../../../components/Input'
import { GithubContext } from '../../../../contexts/GithubContext'

export function Profile() {
  const [username, setUsername] = useState('')
  const { user, getUserData, resetUserData } = useContext(GithubContext)

  async function handleGetUserData() {
    await getUserData(username)
  }

  return !isEmpty(user) ? (
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
          </div>

          <button onClick={resetUserData}>MUDAR PERFIL</button>
        </footer>
      </ProfileDataContainer>
    </ProfileContainer>
  ) : (
    <ProfileInputContainer>
      <strong>Informe seu perfil no github</strong>
      <div>
        <Input.Root>
          <Input.Input
            placeholder="Escreva o usuário aqui"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Input.Root>
        <button onClick={handleGetUserData}>BUSCAR</button>
      </div>
    </ProfileInputContainer>
  )
}
