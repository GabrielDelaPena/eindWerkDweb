import { React, useContext } from "react";
import style from "./admin.module.css";

import ActiveItem from "./ActiveItem";
import AccountContext from "../../contexts/accounts_contexts";

function Admin() {
  const accountCtx = useContext(AccountContext);

  return (
    <div className={style.container}>
      {accountCtx.accounts.map((acc) => {
        return <ActiveItem key={acc.id} name={acc.name} id={acc.id} />;
      })}
    </div>
  );
}

export default Admin;
