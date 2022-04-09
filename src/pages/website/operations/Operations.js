import { React, useState } from "react";
import { motion } from "framer-motion";

import style from "./operation.module.css";

function Operations() {
  const [operations, setOperations] = useState([
    {
      title: "Tranfser money to anyone, instantly! No fees, no BS.",
      description:
        "Transfer money is never been easier than before. People can now rapidly transfer money between equity funds and cash accounts. And it transfers money instantly from a customer's account to a biller's. This is the future so join now.",
    },
    {
      title: "Buy a home or make your dreams come true, with instant loans.",
      description:
        "Without taking out loans, many of us would not be able to buy a home, a car or afford a higher education. With Banking App made it possible to loan money easier than before, just ask for amount of loan and youll never regret it. These is the future so join now.",
    },
  ]);
  const [current, setCurrent] = useState(operations[0]);

  const showTransfer = () => {
    setCurrent(operations[0]);
  };

  const showLoan = () => {
    setCurrent(operations[1]);
  };

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
            <button className={style.btn} onClick={showTransfer}>
              Instant Transfer
            </button>
            <button className={style.btn} onClick={showLoan}>
              Instant Loans
            </button>
          </div>

          <div className={style.description}>
            <p className={style.sub_title}>{current.title}</p>

            <p className={style.about}>{current.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Operations;
