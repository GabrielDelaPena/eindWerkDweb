import { React, useContext } from "react";
import style from "./summary.module.css";

import AccountContext from "../../contexts/accounts_contexts";

function Summary() {
  const accountCtx = useContext(AccountContext);

  /** Calculate income */
  const calcIncome = () => {
    const total = accountCtx.currentAccount.movements
      .filter((mov) => mov > 0)
      .reduce((acc, sum) => acc + sum, 0);
    return total;
  };

  /** Calculate outcome */
  const calcOutcome = () => {
    const total = accountCtx.currentAccount.movements
      .filter((mov) => mov < 0)
      .reduce((acc, sum) => acc + sum, 0);
    return total;
  };

  /** Sum of total balance using reduce. */
  const curBalance = accountCtx.currentAccount.movements.reduce(
    (acc, sum) => acc + sum,
    0
  );

  return (
    <div className={style.sumContainer}>
      <div className={style.in}>
        <p className={style.actionTest}>
          IN
          <span className={style.inValue}>{calcIncome()}€</span>
        </p>
      </div>
      <div className={style.out}>
        <p className={style.actionTest}>
          OUT
          <span className={style.outValue}>{calcOutcome()}€</span>
        </p>
      </div>
      <div className={style.interest}>
        <p className={style.actionTest}>
          BALANCE
          <span className={style.interestValue}>{curBalance}€</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
