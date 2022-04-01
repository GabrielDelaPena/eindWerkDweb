import React from "react";
import style from "./operationLoan.module.css";

function OperationLoan() {
  return (
    <div className={style.container}>
      <div className={style.loanContainer}>
        <p className={style.label}>Request loan</p>
        <form className={style.form}>
          <input
            className={style.inputFields}
            type="number"
            placeholder="Amount"
          />
          <button className={style.operationBtn}>➡</button>
        </form>
      </div>
    </div>
  );
}

export default OperationLoan;
