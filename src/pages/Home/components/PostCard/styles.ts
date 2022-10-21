import styled from 'styled-components'

export const PostCardContainer = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme['dark-blue-700']};
  padding: 2rem;
  border-radius: 10px;

  div {
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

    p {
      color: ${(props) => props.theme['dark-blue-300']};
      font-weight: 400;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['dark-blue-500']};
  }
`
