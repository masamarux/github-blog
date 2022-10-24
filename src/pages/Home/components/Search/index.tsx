import { KeyboardEvent } from 'react'
import { Input } from '../../../../components/Input'
import { getRepositoryIssues } from '../../../../libs/octokit'
import { SearchContainer } from './styles'

export function Search() {
  async function getIssues() {
    const response = await getRepositoryIssues({
      owner: 'facebook',
      repo: 'react',
    })

    console.log(response)
  }

  async function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      await getIssues()
    }
  }

  return (
    <SearchContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>
      <Input.Root>
        <Input.Input placeholder="Busca conteúdo" onKeyDown={handleKeyDown} />
      </Input.Root>
    </SearchContainer>
  )
}
