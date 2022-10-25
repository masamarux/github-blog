import { useContextSelector } from 'use-context-selector'
import { KeyboardEvent, useCallback } from 'react'
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
  const searchIssues = useContextSelector(
    GithubContext,
    (state) => state.searchIssues,
  )
  const issues = useContextSelector(GithubContext, (state) => state.issues)

  const handleSearchIssues = useCallback(
    async (data: SearchFormInputs) => {
      await searchIssues(data.query)
    },
    [searchIssues],
  )

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        await handleSubmit(handleSearchIssues)()
      }
    },
    [handleSubmit, handleSearchIssues],
  )

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <strong>Publicações</strong>
        <span>{issues ? issues.total_count : 0} publicações</span>
      </div>
      <Controller
        defaultValue=" "
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
