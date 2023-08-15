import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import { DefaultCSS } from './global/defaultCSS'
import OpenAIProvider from "./providers/openai-provider";

const Providers = () => {
  return (
    <main>
      <OpenAIProvider>
        <ResetCSS />
        <DefaultCSS />
        <App />
      </OpenAIProvider>
    </main>
  );
};

export default Providers;