import { React, useContext } from "react";
import style from "./currentBalance.module.css";

import AccountContext from "../../contexts/accounts_contexts";

function CurrentBalance() {
  const accountCtx = useContext(AccountContext);

  /** Sum of total balance using reduce. */
  const curBalance = accountCtx.currentAccount.movements.reduce(
    (acc, sum) => acc + sum,
    0
  );

  return (
    <div className={style.currBalContainer}>
      <div className={style.currBalTitle}>
        <p className={style.title}>Current Balance</p>
        <p className={style.date}>As of 31/03/2022</p>
      </div>
      <p className={style.balance}>{curBalance} EUR</p>
    </div>
  );
}

export default CurrentBalance;
