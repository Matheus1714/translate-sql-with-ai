import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
    organization: import.meta.env.VITE_OPEN_AI_ORGANIZATION
})

delete configuration.baseOptions.headers['User-Agent'];

const api = new OpenAIApi(configuration)

export default api