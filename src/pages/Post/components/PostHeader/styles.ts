import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  margin-top: -5.5rem;

  background-color: ${(props) => props.theme['dark-blue-800']};
  border-radius: 10px;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      text-decoration: none;
      font-weight: 700;
      gap: 0.5rem;
      color: ${(props) => props.theme['blue-400']};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['dark-blue-100']};
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['dark-blue-400']};

      svg {
        font-size: 1.125rem;
      }
    }
  }
`
