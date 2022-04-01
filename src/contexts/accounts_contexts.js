import { React, createContext } from "react";

const AccountContext = createContext();

const AccountContextProvider = (props) => {
  return <AccountContext.Provider>{props.children}</AccountContext.Provider>;
};
