import React from "react";
import * as S from "./styled";
import mainLogo from "../../assets/Logo.svg"
import trashImg from "../../assets/Trash.svg"


const Header = () => {
    return (
    <header>
        <S.Wrapper>
            <S.LogoImg src={mainLogo} alt="askSQL" />
            <S.TrashImg src={trashImg} alt="trash" />
        </S.Wrapper>
    </header>
    )
}

export default Header