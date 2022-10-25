import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const MarkdownContainer = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['dark-blue-300']};
  gap: 1.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['dark-blue-200']};
  }

  a {
    color: ${(props) => props.theme['blue-400']};
  }

  ul,
  li {
    margin-left: 1rem;
  }

  & > pre {
    padding: 1rem;
    background-color: ${(props) => props.theme['dark-blue-700']};
    border-radius: 2px;
    gap: 8px;
  }

  & > p > code {
    padding: 1rem;
    background-color: ${(props) => props.theme['dark-blue-700']};
    border-radius: 2px;
  }

  code {
    font-family: 'Fira Code', monospace;

    .hljs-keyword {
      color: ${(props) => props.theme['blue-200']};
    }

    .hljs-comment {
      color: ${(props) => props.theme['gray-300']};
    }

    .hljs-string,
    .hljs-literal,
    .hljs-number {
      color: ${(props) => props.theme['green-400']};
    }
  }
`
