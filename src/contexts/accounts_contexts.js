import { React, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase";

const AccountContext = createContext();

export const AccountContextProvider = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(true);

  /** Localstorage */
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("isLoggedin")
  );
  const [localAccount, setLocalAccount] = useState({});

  /** Current account */
  const [currentUser, setCurrentUser] = useState("");
  const currentAccount = accounts.find((acc) => acc.username === currentUser);

  /** My firebase collection(accounts) */
  const userCollectionRef = collection(db, "accounts");

  useEffect(() => {
    const getAccounts = async () => {
      const data = await getDocs(userCollectionRef);
      setAccounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAccounts();
    console.log("changes");
  }, [update]);

  const value = {
    accounts: accounts,
    currentAccount: currentAccount,

    currentUser: currentUser,
    setCurrentUser: setCurrentUser,

    isLoggedin: isLoggedin,
    setIsLoggedin: setIsLoggedin,

    localAccount: localAccount,
    setLocalAccount: setLocalAccount,

    update: update,
    setUpdate: setUpdate,
  };

  console.log(currentAccount);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AccountContext.Provider value={value}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
