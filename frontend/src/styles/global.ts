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
    --light-purple: #807DCB;

    --red: #e52e4d;
    --green: #33cc95;
    
    --gray-400: #d7d7d7;

    --blue-500: #3F51B5;

    --black-900: #000;
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
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }


    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

}


.react-modal-overlay {
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    margin: 0 1rem;
    background: var(--white);

    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

    @media screen and (max-width: 500px){
        padding: 1.5rem;
    }
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s ease;

    &:hover {
        filter: brightness(0.8);
    }

    svg {
        font-size: 1.5rem;
    }
}

`;

