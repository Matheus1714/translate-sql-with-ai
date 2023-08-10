import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import { DefaultCSS } from './global/defaultCSS'

const Providers = () => {
  return (
    <main>
      <ResetCSS />
      <DefaultCSS />
      <App />
    </main>
  );
};

export default Providers;