import React from "react";
import style from "./summary.module.css";

function Summary() {
  return (
    <div className={style.sumContainer}>
      <div className={style.in}>
        <p className={style.actionTest}>
          IN
          <span className={style.inValue}>5020€</span>
        </p>
      </div>
      <div className={style.out}>
        <p className={style.actionTest}>
          OUT
          <span className={style.outValue}>-1280€</span>
        </p>
      </div>
      <div className={style.interest}>
        <p className={style.actionTest}>
          INTEREST
          <span className={style.interestValue}>50,20€</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
