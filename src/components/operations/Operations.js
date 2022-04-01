import React from "react";
import style from "./operations.module.css";

import OperationInfo from "./operationsComponents/OperationInfo";
import OperationTransfer from "./operationsComponents/OperationTransfer";
import OperationLoan from "./operationsComponents/OperationLoan";

function Operations() {
  return (
    <div className={style.operationContainer}>
      <OperationInfo />
      <OperationTransfer />
      <OperationLoan />
    </div>
  );
}

export default Operations;
