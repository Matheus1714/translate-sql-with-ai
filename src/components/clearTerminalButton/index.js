import React from "react"
import trashImg from '../../assets/Trash.svg'
import theme from "../../global/constants";
import { ButtonClear } from "./styled";

const ClearTerminalButton = () => {
    return (
        <ButtonClear>
            <img src={trashImg} alt="trash"/>
        </ButtonClear>
    )
}

export default ClearTerminalButton