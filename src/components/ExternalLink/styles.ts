import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  color: ${(props) => props.theme['blue-400']};
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
