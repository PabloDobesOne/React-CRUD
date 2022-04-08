import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    --purple: #8257e6;
    --white: #fff;

    --black-500: #121214;
}

html {
    @media screen and(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media screen and(max-width: 720px) {
        font-size: 87.5%;
    }

}

body {
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
}


`;