import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: 'Questrial', sans-serif;
    background: {({theme}) => theme.colors.bg };
  }

  a {
    text-decoration: none;
    color: #FFFFF;
  }

  ul {
    list-style-position: inside;
    list-style-type: none;
  }

  section,
  footer {
    margin-top: 10rem;
  }
`;

export default GlobalStyle;
