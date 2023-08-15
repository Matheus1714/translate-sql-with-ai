import styled from "styled-components"
import theme from "../../global/constants"

export const WrapperLayout = styled.section`
  background-color: ${theme.colors.base.blueberry};
  min-width: 430px;
  padding: 67px 24px 18px 24px;
  margin: 5% 0 5% 0;
  border-radius: 10px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;
