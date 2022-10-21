import styled from 'styled-components'

export const InputRootContainer = styled.div`
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['dark-blue-1000']};
  border-radius: 6px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-400']};
  }
`

export const InputInputContainer = styled.input`
  width: 100%;
  flex: 1;
  background-color: transparent;

  border: none;
  color: ${(props) => props.theme['dark-blue-300']};

  &::placeholder {
    color: ${(props) => props.theme['dark-blue-500']};
  }

  &:focus {
    box-shadow: none;
  }
`
