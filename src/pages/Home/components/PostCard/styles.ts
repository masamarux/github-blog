import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostCardContainer = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme['dark-blue-700']};
  padding: 2rem;
  border-radius: 10px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    strong {
      color: ${(props) => props.theme['dark-blue-100']};
      font-size: 1.25rem;
    }

    time {
      white-space: nowrap;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.125rem;
  }

  p {
    color: ${(props) => props.theme['dark-blue-300']};
    font-weight: 400;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['dark-blue-500']};
  }
`

export const MarkdownContainer = styled(ReactMarkdown)``
