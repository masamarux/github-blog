import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 2rem;

  margin-top: -7rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme['dark-blue-800']};
    padding: 2rem;
    gap: 1rem;
    border-radius: 8px;

    & > div {
      font-size: 0.975rem;
      color: ${({ theme }) => theme['dark-blue-400']};
    }

    strong {
      font-size: 3.5rem;
      color: ${({ theme }) => theme['dark-blue-100']};
    }

    button {
      cursor: pointer;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      border: 0;
      color: ${({ theme }) => theme['dark-blue-800']};
      font-weight: 700;
      font-size: 1.125rem;
      background-color: ${({ theme }) => theme['dark-blue-500']};

      &:hover {
        transition: background-color 0.2s, color 0.2s;
        color: ${({ theme }) => theme['dark-blue-1000']};
        background-color: ${({ theme }) => theme['dark-blue-300']};
      }
    }
  }
`
