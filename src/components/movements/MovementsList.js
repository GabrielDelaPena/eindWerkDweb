import { React, useContext, useEffect, useState } from "react";
import style from "./movementsList.module.css";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import MovementItem from "./MovementItem";
import AccountContext from "../../contexts/accounts_contexts";

function MovementsList() {
  const accountCtx = useContext(AccountContext);
  const currentUser = accountCtx.currentAccount;

  // useEffect(() => {
  //   const setLocalStorage = () => {
  //     localStorage.setItem("user", JSON.stringify(currentUser));
  //   };
  //   setLocalStorage();
  //   // accountCtx.setLocalAccount(JSON.parse(localStorage.getItem("user")));
  //   // // console.log(accountCtx.localAccount);
  //   // console.log("locaStorage");
  // }, [currentUser]);

  // console.log(accountCtx.localAccount);

  return (
    <div className={style.movsContainer}>
      {currentUser.movements.map((mov, i) => {
        return <MovementItem key={i} mov={mov} />;
      })}
    </div>
  );
}

export default MovementsList;
