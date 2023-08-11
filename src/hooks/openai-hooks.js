import { useContext } from 'react'
import { OpenAIContext } from '../providers/openai-provider'

const useOpenAI = () => {
    const { openAIState, getMessage } = useContext(
        OpenAIContext
    )
    return { openAIState, getMessage }
}

export default useOpenAI