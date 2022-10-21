import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2.5rem;
  gap: 2rem;

  margin-top: -5.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme['dark-blue-800']};

  img {
    width: 9.25;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong {
      font-size: 1.5rem;
      color: ${(props) => props.theme['dark-blue-100']};
      font-weight: 700;
      line-height: 1.3;
    }
  }

  & > span {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['dark-blue-300']};

    margin-bottom: 1.5rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['dark-blue-500']};
        font-size: 1.125rem;
      }

      span {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['dark-blue-200']};
      }
    }
  }
`
