import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

button {
    cursor: pointer;
}

ul, li, a {
    text-decoration: none;
    list-style: none;
}

body {
    max-width: 1920px;
    font-family: 'Oswald', sans-serif;
    overflow-x: hidden;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-top: 120px;
}
`;

export default GlobalStyles;
