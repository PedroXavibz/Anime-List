import styled from 'styled-components';

const Card = styled.div`
  width: 48%;
  height: 15rem;
  margin-bottom: 5.8rem;

  display: flex;
  align-items: center;
  position: relative;

  border: 0.17rem solid ${({ theme }) => theme.colors.secondaryNeon};
  border-radius: 0.3rem;

  button.select-anime {
    position: absolute;
    top: 0;
    right: 0.1%;
  }

  div.anime-image {
    width: 30%;
    height: 100%;
  }

  div.anime-info {
    width: 70%;
    height: 100%;
    padding: 0.8rem 0.4rem;

    font-size: ${({ theme }) => theme.fontSize.medium};

    .title {
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: ${({ theme }) => theme.fontSize.large};
      color: ${({ theme }) => theme.colors.secondaryNeon};
    }

    .genres {
      display: flex;
      align-items: center;

      li {
        margin-right: 0.2rem;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    p {
      margin: 0.2rem 0rem;
      color: #ffffff;
    }

    a.anime-link {
      color: ${({ theme }) => theme.colors.secondaryNeon};
    }
  }
`;

export default Card;
