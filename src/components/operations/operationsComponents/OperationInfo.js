import { React, useContext, useEffect } from "react";

import style from "./operationInfo.module.css";
import AccountContext from "../../../contexts/accounts_contexts";

function OperationInfo() {
  const accountCtx = useContext(AccountContext);

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <p className={style.labels}>
          Name:{" "}
          <span className={style.userInfo}>
            {accountCtx.currentAccount.name}
          </span>
        </p>
        <p className={style.labels}>
          Adres:{" "}
          <span className={style.userInfo}>
            {accountCtx.currentAccount.adres}
          </span>
        </p>
        <p className={style.labels}>
          BirthDate:
          <span className={style.userInfo}>
            {accountCtx.currentAccount.birthyear}
          </span>
        </p>
      </div>
    </div>
  );
}

export default OperationInfo;
