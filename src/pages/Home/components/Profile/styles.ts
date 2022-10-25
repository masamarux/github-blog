import styled from 'styled-components'

const ProfileContainerBase = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['dark-blue-800']};
`

export const ProfileInputContainer = styled(ProfileContainerBase)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['dark-blue-100']};
    font-weight: 700;
  }

  & > div {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;

    & > div {
      flex: 1;
    }

    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme['dark-blue-500']};

      font-weight: 700;
      font-size: 0.875rem;
      color: ${(props) => props.theme['dark-blue-200']};

      &:hover {
        transition: background-color 0.2s;
        background-color: ${(props) => props.theme['dark-blue-400']};
        color: ${(props) => props.theme['dark-blue-100']};
      }
    }
  }
`

export const ProfileContainer = styled(ProfileContainerBase)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  img {
    width: 9.25;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

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

    & > div {
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

    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme['dark-blue-500']};

      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme['dark-blue-200']};

      &:hover {
        transition: background-color 0.2s;
        background-color: ${(props) => props.theme['dark-blue-400']};
        color: ${(props) => props.theme['dark-blue-100']};
      }
    }
  }
`
