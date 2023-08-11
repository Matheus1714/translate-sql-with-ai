import { Configuration, OpenAIApi } from 'openai'
import env from "react-dotenv";

const configuration = new Configuration({
    apiKey: env.API_KEY
})

const api = new OpenAIApi(configuration)

export default api