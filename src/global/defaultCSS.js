import { createGlobalStyle } from "styled-components";

export const DefaultCSS = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
}
body{
    background-color: #242424;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
}
`