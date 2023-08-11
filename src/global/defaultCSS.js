import { createGlobalStyle } from "styled-components";
import theme from "./constants";

export const DefaultCSS = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
}
body{
    background-color: ${theme.colors.soft.backgroud};
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
}
`