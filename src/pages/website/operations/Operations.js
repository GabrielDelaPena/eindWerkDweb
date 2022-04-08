import React from "react";
import { motion } from "framer-motion";

import style from "./operation.module.css";

function Operations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.container}>
        <h2 className={style.title}>Everything as simple as possible</h2>

        <div className={style.operations_containter}>
          <div className={style.btn_container}>
            <button className={style.btn}>Instant Transfer</button>
            <button className={style.btn}>Instant Loans</button>
          </div>

          <div className={style.description}>
            <p className={style.sub_title}>
              Tranfser money to anyone, instantly! No fees, no BS.
            </p>

            <p className={style.about}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Operations;
