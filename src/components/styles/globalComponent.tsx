import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body, html {
        background-color:#F3F3F3;
        outline: none;
    }
`;