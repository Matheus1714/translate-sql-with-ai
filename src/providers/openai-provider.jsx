import { useState, useCallback, createContext } from 'react'
import api from '../services/api'

export const OpenAIContext = createContext({
    loading: false,
    message: ""
})

const OpenAIProvider = ({ children }) => {
    const [openAIState, setOpenAIState] = useState({
        hasMessage: false,
        loading: false,
        message: ""
    })
    const getMessage = async (inputMessage) => {
        setOpenAIState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }))
        try{
            const response = await api.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: inputMessage }],
            })
            const messageContent = response.data.choices[0].message.content
            setOpenAIState((prevState) => ({
                ...prevState,
                message: messageContent
            }))
            return messageContent
        }catch(error){
            console.error(error)
            return "Ops! Ocorreu um erro na API."
        }
    }

    const contextValue = {
        openAIState,
        getMessage: useCallback((inputMessage) => getMessage(inputMessage), [])
    }

    return (
        <OpenAIContext.Provider value={contextValue}>
            {children}
        </OpenAIContext.Provider>
    )
}

export default OpenAIProvider