import styled from "styled-components";
import theme from "../../global/constants";

export const ButtonClear = styled.button`
    img{
        &:hover {
            opacity: ${theme.colors.transparency.snow};
            background-color: ${theme.colors.base.snow};
        }
        &:active{
            opacity: ${theme.colors.transparency.guava};
            background-color: ${theme.colors.base.guava};
        }
    }
`;
