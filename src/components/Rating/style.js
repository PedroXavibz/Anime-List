import styled from 'styled-components';

const ContainerRating = styled.div`
  margin-bottom: 10rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  h2.rating-title {
    color: ${({ theme }) => theme.colors.secondaryNeon};
    font-family: ${({ theme }) => theme.fonts.titleMono};
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  div.rating-anime {
    height: 18.8rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;

    background: ${({ theme }) => theme.colors.primary};

    border-radius: 0.2rem;

    div {
      width: 100%;
      height: 100%;
      background: red;
    }

    a.anime {
      width: 20%;
      height: 100%;
      padding: 0.5rem;
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      background: ${({ theme }) => theme.colors.secondary};

      border-radius: 0.1rem;

      .title {
        color: #ffffff;
        letter-spacing: 0.05rem;
        font-family: ${({ theme }) => theme.fonts.title};
        font-size: ${({ theme }) => theme.fontSize.medium};
      }

      button.fav {
        position: absolute;
        top: 1.5%;
        right: 0.5%;
      }
    }

    button.next,
    button.previous {
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      z-index: 25;
    }

    button.previous {
      left: -0.5%;
    }

    button.next {
      right: -0.5%;
    }
  }
`;

export default ContainerRating;
