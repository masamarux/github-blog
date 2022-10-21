import { Input } from '../../../../components/Input'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>
      <Input.Root>
        <Input.Input placeholder="Busca conteúdo" />
      </Input.Root>
    </SearchContainer>
  )
}
