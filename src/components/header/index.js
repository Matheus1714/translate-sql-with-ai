import React, { useState } from "react";
import * as S from "./styled";
import Logo from "../logo";
import ClearTerminalButton from "../clearTerminalButton";

const Header = () => {
    return (
    <header>
        <S.Wrapper>
            <Logo />
            <ClearTerminalButton />
        </S.Wrapper>
    </header>
    )
}

export default Header