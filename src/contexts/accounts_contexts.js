import { React, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase";

const AccountContext = createContext();

export const AccountContextProvider = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);

  //   const [currMovements, setCurrMovements] = useState({});
  const [updateMovements, setUpdateMovements] = useState(false);

  const currentAccount = accounts.find(
    (acc) => acc.username === currentUser.username
  );
  const userCollectionRef = collection(db, "accounts");

  useEffect(() => {
    const getAccounts = async () => {
      const data = await getDocs(userCollectionRef);
      setAccounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAccounts();
  }, [updateMovements]);

  const value = {
    accounts: accounts,
    currentAccount: currentAccount,

    currentUser: currentUser,
    setCurrentUser: setCurrentUser,

    isLoggedin: isLoggedin,
    setIsLoggedin: setIsLoggedin,

    // currMovements: currMovements,
    // setCurrMovements: setCurrMovements,

    updateMovements: updateMovements,
    setUpdateMovements: setUpdateMovements,
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
