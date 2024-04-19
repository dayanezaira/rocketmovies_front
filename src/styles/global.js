import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        -webkit-font-smoothing: antialiased;
    }

    body, a, input, button, textarea, span, strong {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    } 

    a:hover, button:hover {
        filter: brightness(0.9);
    } 
`