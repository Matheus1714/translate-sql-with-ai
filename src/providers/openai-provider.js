import React, { useState, useCallback, createContext } from 'react'
import api from '../services/api'
import env from "react-dotenv";

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
    const getMessage = (inputMessage) => {
        setOpenAIState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }))
        api.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: inputMessage }],
        }).then(({ data }) => {
            setOpenAIState((prevState) => ({
                ...prevState,
                message: data.choices[0].message.content
            }))
        }).catch((error) => {
            console.error(error)
        }).finally(() => {
            setOpenAIState((prevState) => ({
                ...prevState,
                loading: !prevState.loading
            }))
        })
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