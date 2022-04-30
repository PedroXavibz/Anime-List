import styled from 'styled-components';

export const ContextContainer = styled.div`
  width: 150rem;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 5.8rem;

  position: sticky;
  top: 0;

  z-index: 999;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.6);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: #ffffff;

      &.center-nav-opt {
        margin: 0 3.2rem;
      }

      &.avatar {
        display: flex;
        align-items: center;

        span.username {
          margin-left: 0.5rem;
        }
      }

      input {
        width: 38rem;
      }
    }
  }
`;

export const SectionMyAnimes = styled.section`
  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.secondaryNeon};
  }

  div.container-my-list {
    height: 65rem;
    padding: 0.8rem 1.2rem;
    background: ${({ theme }) => theme.colors.primary};

    border-radius: 0.2rem;

    header.header-my-animes {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;
        align-items: center;

        button,
        select {
          font-family: ${({ theme }) => theme.fonts.title};
          font-size: ${({ theme }) => theme.fontSize.medium};
          color: ${({ theme }) => theme.colors.secondaryNeon};
          font-weight: 400;

          letter-spacing: 0.02rem;

          padding: 0.3rem;
        }

        &.list-navigation li {
          margin-right: 1.4rem;

          button {
            font-family: ${({ theme }) => theme.fonts.paragraph};
            font-size: ${({ theme }) => theme.fontSize.small};
            font-weight: 900;
          }
        }

        &.tools li {
          margin-left: 1.4rem;

          .btn-remove {
            display: flex;
            align-items: center;
            border-radius: 0.5rem;

            background: red;
            color: #ffffff;
          }
        }
      }
    }

    div.container-card-anime {
      margin-top: 2.8rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

export const Footer = styled.footer`
  height: 17rem;

  background: ${({ theme }) => theme.colors.primary};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.secondary};

    ul {
      &.contact {
        li {
          display: flex;
          align-items: center;

          a {
            margin-left: 0.5rem;
          }
        }
      }

      li {
        margin-bottom: 1.5rem;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.secondaryNeon};
      &.current {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
