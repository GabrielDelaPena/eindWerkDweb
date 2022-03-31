import React from "react";
import style from "./currentBalance.module.css";

function CurrentBalance() {
  return (
    <div className={style.currBalContainer}>
      <div className={style.currBalTitle}>
        <p className={style.title}>Current Balance</p>
        <p className={style.date}>As of 31/03/2022</p>
      </div>
      <p className={style.balance}>3850 EUR</p>
    </div>
  );
}

export default CurrentBalance;
