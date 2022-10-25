import { KeyboardEvent, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../../../../components/Input'
import { GithubContext } from '../../../../contexts/GithubContext'
import { SearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string().min(0),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { handleSubmit, control } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { searchIssues, issues } = useContext(GithubContext)

  async function handleSearchIssues(data: SearchFormInputs) {
    await searchIssues(data.query)
  }

  async function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      await handleSubmit(handleSearchIssues)()
    }
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <strong>Publicações</strong>
        <span>{issues ? issues.total_count : 0} publicações</span>
      </div>
      <Controller
        name="query"
        control={control}
        render={({ field: { onChange, name, value, onBlur, ref } }) => (
          <Input.Root ref={ref}>
            <Input.Input
              type="text"
              placeholder="Busca conteúdo"
              ref={ref}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
            />
          </Input.Root>
        )}
      />
    </SearchContainer>
  )
}
