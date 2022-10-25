import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import { useContextSelector } from 'use-context-selector'

import { SiteContext } from '../../contexts/SiteContext'
import { getIssueData, IssueProps } from '../../libs/octokit'

import { PostHeader } from './components/PostHeader'
import { PostContainer, MarkdownContainer } from './styles'

export function Issue() {
  const { issueId } = useParams()
  const [issue, setIssue] = useState<IssueProps>({} as IssueProps)
  const changeIsBackgroundDark = useContextSelector(
    SiteContext,
    (state) => state.changeIsBackgroundDark,
  )

  const getIssue = useCallback(async () => {
    if (issueId) {
      const response = await getIssueData({
        owner: import.meta.env.VITE_GITHUB_USERNAME,
        repo: import.meta.env.VITE_GITHUB_REPO,
        issueNumber: Number(issueId),
      })

      response?.data && setIssue(response?.data)
    }
  }, [issueId])

  useEffect(() => {
    getIssue()
  }, [getIssue])

  useEffect(() => {
    changeIsBackgroundDark(true)
  }, [changeIsBackgroundDark])

  return (
    <PostContainer>
      <PostHeader
        title={issue.title}
        username={issue?.user?.login}
        comments={issue.comments}
        createdAt={issue.created_at}
        htmlUrl={issue.html_url}
      />
      <MarkdownContainer rehypePlugins={[rehypeHighlight]}>
        {issue.body ? issue.body : ''}
      </MarkdownContainer>
    </PostContainer>
  )
}
