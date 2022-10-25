import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'

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
      <MarkdownContainer
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={theme}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  ...style,
                  padding: '1rem',
                  borderRadius: '2px',
                  backgroundColor: '#112131',
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {issue.body ? issue.body : ''}
      </MarkdownContainer>
    </PostContainer>
  )
}
