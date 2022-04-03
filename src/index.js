import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AccountContextProvider } from "./contexts/accounts_contexts";

ReactDOM.render(
  <AccountContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccountContextProvider>,
  document.getElementById("root")
);
