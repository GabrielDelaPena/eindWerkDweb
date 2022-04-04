import { React, useContext } from "react";
import style from "./operationInfo.module.css";

import AccountContext from "../../../contexts/accounts_contexts";

function OperationInfo() {
  const accountCtx = useContext(AccountContext);
  const currentUser = accountCtx.currentAccount;
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <p className={style.labels}>
          Name: <span className={style.userInfo}>{currentUser.name}</span>
        </p>
        <p className={style.labels}>
          BirthDate:
          <span className={style.userInfo}>{currentUser.birthyear}</span>
        </p>
        <p className={style.labels}>
          Adres: <span className={style.userInfo}>{currentUser.adres}</span>
        </p>
      </div>
    </div>
  );
}

export default OperationInfo;
