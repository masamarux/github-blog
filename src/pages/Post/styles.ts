import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const MarkdownContainer = styled(ReactMarkdown)`
  color: ${(props) => props.theme['dark-blue-300']};
  white-space: pre-wrap;

  code {
    line-height: 4rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['dark-blue-100']};
  }
`
