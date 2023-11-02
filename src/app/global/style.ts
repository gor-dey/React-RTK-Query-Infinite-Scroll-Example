import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      width: 70%;
    }
  }
`;
