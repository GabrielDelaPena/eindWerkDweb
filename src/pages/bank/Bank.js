import React from "react";
import style from "./bank.module.css";
import CurrentBalance from "../../components/currentBalance/CurrentBalance";
import MovementsList from "../../components/movements/MovementsList";
import Operations from "../../components/operations/Operations";
import Summary from "../../components/summary/Summary";

function Bank() {
  return (
    <div className={style.bankContainer}>
      <CurrentBalance />
      <div className={style.movOperContainer}>
        <MovementsList />
        <Operations />
      </div>
      <Summary />
    </div>
  );
}

export default Bank;
