import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 62.5% //1rem == 10px
}

body {
    padding-left: 150px;
    font-size: 1.6rem; //set font for 16px - happy rems
    font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
