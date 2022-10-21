/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import ReactMarkdown from 'react-markdown'

import { PostHeader } from './components/PostHeader'
import { PostContainer, MarkdownContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <ReactMarkdown>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        [Dynamic typing](https://google.com)
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        ```
        console.log('It works!')
        ```
      </ReactMarkdown>
    </PostContainer>
  )
}
