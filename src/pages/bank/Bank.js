import React from "react";
import style from "./bank.module.css";
import { motion } from "framer-motion";

import CurrentBalance from "../../components/currentBalance/CurrentBalance";
import MovementsList from "../../components/movements/MovementsList";
import Operations from "../../components/operations/Operations";
import Summary from "../../components/summary/Summary";

function Bank() {
  return (
    <motion.div
      className={style.bankContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CurrentBalance />
      <div className={style.movOperContainer}>
        <MovementsList />
        <Operations />
      </div>
      <Summary />
    </motion.div>
  );
}

export default Bank;
