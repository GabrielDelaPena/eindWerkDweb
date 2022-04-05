import { React, useContext, useRef, useEffect } from "react";
import style from "./operationLoan.module.css";
import { useNavigate } from "react-router-dom";

import AccountContext from "../../../contexts/accounts_contexts";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

function OperationLoan() {
  const accountCtx = useContext(AccountContext);
  const amount = useRef();

  /** Updating movement/amount on current account in the firebase */
  const addMovement = async (id, movements) => {
    const enteredAmount = amount.current.value;
    const accDoc = doc(db, "accounts", id);
    const newMovements = { movements: [...movements, Number(enteredAmount)] };

    await updateDoc(accDoc, newMovements);
    accountCtx.setUpdate(!accountCtx.update);
    amount.current.value = "";
  };

  return (
    <div className={style.container}>
      <div className={style.loanContainer}>
        <p className={style.label}>Request loan</p>
        <form className={style.form}>
          <input
            className={style.inputFields}
            type="number"
            placeholder="Amount"
            ref={amount}
          />
          <button
            className={style.operationBtn}
            onClick={(event) => {
              event.preventDefault();
              addMovement(
                accountCtx.currentAccount.id,
                accountCtx.currentAccount.movements
              );
            }}
          >
            ➡
          </button>
        </form>
      </div>
    </div>
  );
}

export default OperationLoan;
