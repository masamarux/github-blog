import coverImg from '../../assets/cover-img.svg'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  img {
    width: 2.8125rem;
    height: 2.5rem;
  }

  h1 {
    font-family: 'Coda', cursive;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-400']};

    margin-top: 1.5rem;
  }
`
