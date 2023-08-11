import { Configuration, OpenAIApi } from 'openai'
import env from "react-dotenv";

const configuration = new Configuration({
    apiKey: env.API_KEY,
    organization: env.OPEN_AI_ORGANIZATION
})

delete configuration.baseOptions.headers['User-Agent'];

const api = new OpenAIApi(configuration)

export default api