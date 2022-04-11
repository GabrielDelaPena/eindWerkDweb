import { React, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase";

const AccountContext = createContext();

export const AccountContextProvider = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(true);
  const [adminLoggedin, setAdminLoggedin] = useState(false);

  /** Current account */
  const [currentUser, setCurrentUser] = useState("");
  const currentAccount = accounts.find((acc) => acc.username === currentUser)
    ? accounts.find((acc) => acc.username === currentUser)
    : {};
  const [isLoggedIn, setIsLoggedin] = useState(false);

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

  console.log(currentAccount);
  console.log(isLoggedIn);

  const value = {
    accounts: accounts,
    currentAccount: currentAccount,

    currentUser: currentUser,
    setCurrentUser: setCurrentUser,

    isLoggedIn: isLoggedIn,
    setIsLoggedin: setIsLoggedin,

    update: update,
    setUpdate: setUpdate,

    adminLoggedin: adminLoggedin,
    setAdminLoggedin: setAdminLoggedin,

    setLoading: setLoading,
  };

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
