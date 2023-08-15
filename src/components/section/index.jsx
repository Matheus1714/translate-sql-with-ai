import { useState } from "react"
import * as S from './styled'
import sparkleImg from "../../assets/Sparkle.svg"
import copyIcon from '../../assets/Copy.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import useOpenAI from "../../hooks/openai-hooks";
import 'react-toastify/dist/ReactToastify.css';

const Section = () => {

    const { getMessage, openAIState } = useOpenAI()

    const stringText = `CREATE TABLE IF NOT EXISTS "chats" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
        "title" text,
        "atlas_user_id" uuid NOT NULL,
        "created_at" timestamp DEFAULT now()
    );`

    const stringQuestion = 'Me liste todos os chats que possuem pelo menos 4 mensagens'

    const [ scriptSQL, setScriptSQL ] = useState(stringText)
    const [ question, setQuestion ] = useState(stringQuestion)
    const [ response, setResponse ] = useState('Minha resposta de teste')
    const [ copySuccess, setCopySuccess ] = useState(false)

    const handleCopy = () => {
        setCopySuccess(true)
        toast("Mensagem Copiada com sucesso.")
    }

    const handleMassage = async () => {
        toast("Menssagem enviada para IA, espere um momento!")
        const responseAI = await getMessage(`
            Baseado no script SQL:
            ${scriptSQL}
            Escreva um script SQL respondendo a pergunta baseado no script anterior:
            ${question}
        `)
        toast("Tudo pronto!!!")
        setResponse(responseAI)
    }

    return (
        <>
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
                <S.ButtonSubmit
                    onClick={handleMassage}
                >
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
                    <CopyToClipboard text={response}
                        onCopy={handleCopy}>
                        <S.LogoImg
                            src={copyIcon} 
                            alt="copiar"
                        />
                    </CopyToClipboard>
                    <ToastContainer />
                </S.WrapperResposta>
            </S.WrapperSection>
        </>
    )
}

export default Section