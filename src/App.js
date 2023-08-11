import React from 'react';
import Layout from './components/layout';
import useOpenAI from './hooks/openai-hooks';
import Section from './components/section';
import env from "react-dotenv";

const App = () => {
  const { openAIState } = useOpenAI()
  return (
    <Layout>
      <Section/>
    </Layout>
  )
}

export default App;
