import React from "react";
import style from "./operationTransfer.module.css";

function OperationTransfer() {
  return (
    <div className={style.container}>
      <div className={style.transContainer}>
        <p className={style.label}>Transfer money</p>
        <form className={style.form}>
          <input
            className={style.inputFields}
            type="text"
            placeholder="Account"
          />
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

export default OperationTransfer;
