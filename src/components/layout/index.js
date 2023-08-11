import React, { useState } from 'react'
import Header from "../header"
import * as S from "./styled"
import sparkleImg from "../../assets/Sparkle.svg"

const Layout = ({ children }) => {

    const stringText = `CREATE TABLE IF NOT EXISTS "chats" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
        "title" text,
        "atlas_user_id" uuid NOT NULL,
        "created_at" timestamp DEFAULT now()
    );`

    const stringQuestion = 'Me liste todos os chats que possuem pelo menos 4 mensagens'

    const [ scriptSQL, setScriptSQL ] = useState(stringText)
    const [ question, setQuestion ] = useState(stringQuestion)
    const [ response, setResponse ] = useState('')

    return (
        <S.WrapperLayout>
            <Header />
            <S.WrapperSection>
                <S.Title>Cole seu código SQL aqui</S.Title>
                <S.WrapperCode>
                    <textarea
                        value={scriptSQL}
                        onChange={e => setScriptSQL(e.target.value)}
                    ></textarea>
                </S.WrapperCode>
            </S.WrapperSection>

            <S.WrapperSection>
                <S.Title>Faça uma pergunta sobre o código</S.Title>
                <S.WrapperQuestion>
                    <textarea
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                    ></textarea>
                </S.WrapperQuestion>
                <S.ButtonSubmit>
                    <S.LogoImg src={sparkleImg} alt="pesquisa para ia" /> Pergunte à inteligência artificial
                </S.ButtonSubmit>
            </S.WrapperSection>

            <S.WrapperSection>
                <S.Title>Resposta</S.Title>
                <S.WrapperResposta>
                    <textarea
                        value={response}
                        onChange={e => setResponse(e.target.value)}
                    ></textarea>
                </S.WrapperResposta>
            </S.WrapperSection>
        </S.WrapperLayout>
    )
}

export default Layout