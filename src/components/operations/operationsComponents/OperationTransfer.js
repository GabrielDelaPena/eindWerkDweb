import { React, useContext, useRef } from "react";
import style from "./operationTransfer.module.css";

/** Imports firebase */
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

/** Import components */
import AccountContext from "../../../contexts/accounts_contexts";

function OperationTransfer() {
  const accountCtx = useContext(AccountContext);
  const inputAccount = useRef();
  const inputAmount = useRef();

  /** Setting up firebase/database */
  const addPositiveMov = async (id, movements) => {
    const enteredAmount = inputAmount.current.value;
    const accDoc = doc(db, "accounts", id);
    const newMovements = { movements: [...movements, Number(enteredAmount)] };
    await updateDoc(accDoc, newMovements);
    accountCtx.setUpdate(!accountCtx.update);
    inputAmount.current.value = "";
    inputAccount.current.value = "";
  };

  const addNegativeMov = async (id, movements) => {
    const enteredAmount = inputAmount.current.value;
    const accDoc = doc(db, "accounts", id);
    const newMovements = { movements: [...movements, -Number(enteredAmount)] };
    await updateDoc(accDoc, newMovements);
  };

  /** Transfer money */
  const transferMoney = () => {
    const enteredAccount = inputAccount.current.value;
    const targetAccount = accountCtx.accounts.find(
      (acc) => acc.username === enteredAccount
    );

    if (!targetAccount) {
      inputAmount.current.value = "";
      inputAccount.current.value = "";
      return alert("Account does not exist.");
    }

    if (targetAccount.username === accountCtx.currentAccount.username) {
      inputAmount.current.value = "";
      inputAccount.current.value = "";
      return alert("You can not send money to your own.");
    }

    addNegativeMov(
      accountCtx.currentAccount.id,
      accountCtx.currentAccount.movements
    );
    addPositiveMov(targetAccount.id, targetAccount.movements);
  };

  return (
    <div className={style.container}>
      <div className={style.transContainer}>
        <p className={style.label}>Transfer money</p>
        <form className={style.form}>
          <input
            className={style.inputFields}
            type="text"
            placeholder="Account"
            ref={inputAccount}
          />
          <input
            className={style.inputFields}
            type="number"
            placeholder="Amount"
            ref={inputAmount}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              transferMoney();
            }}
            className={style.operationBtn}
          >
            ➡
          </button>
        </form>
      </div>
    </div>
  );
}

export default OperationTransfer;
