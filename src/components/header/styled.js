import styled from "styled-components";
import theme from "../../global/constants";

export const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`

`;

export const TrashImg = styled.img`
  width: 32px;
  &:hover {
    opacity: ${theme.colors.transparency.snow};
    background-color: ${theme.colors.base.snow};
    cursor: pointer;
  }
  &:active{
    opacity: ${theme.colors.transparency.guava};
    background-color: ${theme.colors.base.guava};
    cursor: pointer;
  }
`
