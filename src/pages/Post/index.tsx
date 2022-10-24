/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { SiteContext } from '../../contexts/SiteContext'

import { PostHeader } from './components/PostHeader'
import { PostContainer, MarkdownContainer } from './styles'

export function Post() {
  const { changeIsBackgroundDark } = useContext(SiteContext)
  const markdown = "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n[Dynamic typing](https://google.com)\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\n```let foo = 42;   //foo is now a number\nfoo = ‘bar’;    // foo is now a string\nfoo = true;     // foo is now a boolean```"

  useEffect(() => {
    changeIsBackgroundDark(true)
  }, [changeIsBackgroundDark])
  return (
    <PostContainer>
      <PostHeader />
      <MarkdownContainer >
        {markdown}
      </MarkdownContainer>
    </PostContainer>
  )
}
