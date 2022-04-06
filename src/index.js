import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AccountContextProvider } from "./contexts/accounts_contexts";
import { CommentContextProvider } from "./pages/website/comments/comments-context";

ReactDOM.render(
  <CommentContextProvider>
    <AccountContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccountContextProvider>
  </CommentContextProvider>,
  document.getElementById("root")
);
