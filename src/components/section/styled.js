import styled from "styled-components";
import theme from "../../global/constants";

export const WrapperSection = styled.div`
    margin-top:42px;
    font-size: ${theme.typograph.inter[300].size}
`


export const Title = styled.h1`
    color: ${theme.colors.soft.foam};
    margin-bottom:24px;
`

export const WrapperCode = styled.div`

    textarea{
        background-color: #151a2a;
        border: 1px solid #2e3640;
        border-radius: 5px;
        min-width: 100%;
        color: ${theme.colors.soft.snow};
        padding: 12px 16px 12px 16px;
        font-size: ${theme.typograph.ubuntuMono[100].size};
        resize: none;
        height: 140px;
        wrap:'off';
        scrollbar-color: #73757f;
        line-height: ${theme.typograph.ubuntuMono[100].lineHeight};
    }
    ::-webkit-scrollbar{
        width: 5px;
        
    }
    ::-webkit-scrollbar-thumb{
        background-color: #73757f;    
    }
`

export const WrapperQuestion = styled.div`

    textarea{
        background-color: #151a2a;
        border: 1px solid #2e3640;
        border-radius: 5px;
        min-width: 100%;
        color: #80838c;
        padding: 12px 16px 12px 16px;
        font-size: ${theme.typograph.inter[100].size};
        resize: none;
        height: 90px;
        wrap:'off';
        scrollbar-color: #73757f;
        line-height: ${theme.typograph.inter[100].lineHeight};
    }
    ::-webkit-scrollbar{
        width: 5px;
        
    }
    ::-webkit-scrollbar-thumb{
        background-color: #73757f;
    }
`

export const WrapperResposta = styled.div`
    position: relative;
    textarea{
        border: 1px solid #2e3640;
        border-radius: 5px;
        min-width: 100%;
        color: #80838c;
        padding: 12px 16px 12px 16px;
        font-size: ${theme.typograph.inter[100].size};
        resize: none;
        height: 223px;
        wrap:'off';
        scrollbar-color: #73757f;
        line-height: ${theme.typograph.inter[100].lineHeight};
    }
    ::-webkit-scrollbar{
        width: 5px;
        
    }
    ::-webkit-scrollbar-thumb{
        background-color: #73757f;
    }
    img{
        width:32px;
        right: 0.5em;
        bottom: 0.7em;
        position: absolute;
        /* top: 1em; */
        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }
        &:active{
            opacity: 0.5;
            cursor: pointer;
        }
    }
`

export const ButtonSubmit = styled.button`
    width: 100%;
    background-color: ${theme.colors.base.blueberry};
    color: ${theme.colors.soft.pistachio};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14.5px 0 14.5px 0;
    margin-top: 24px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.soft.pistachio};
    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 0.5;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const LogoImg = styled.img`
    width:32px;
    @media (max-width: 768px) {
        width:24px;
    }
`;