import { React, useContext, useEffect, useState } from "react";

import style from "./movementsList.module.css";
import MovementItem from "./MovementItem";
import AccountContext from "../../contexts/accounts_contexts";

function MovementsList() {
  const accountCtx = useContext(AccountContext);

  return (
    <div className={style.movsContainer}>
      {accountCtx.currentAccount.movements.map((mov, i) => {
        return <MovementItem key={i} mov={mov} />;
      })}
    </div>
  );
}

export default MovementsList;
