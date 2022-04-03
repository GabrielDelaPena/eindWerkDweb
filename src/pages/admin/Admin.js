import { React, useContext } from "react";
import ActiveItem from "./ActiveItem";
import style from "./admin.module.css";
import AccountContext from "../../contexts/accounts_contexts";

function Admin() {
  const accountCtx = useContext(AccountContext);

  return (
    <div className={style.container}>
      <ActiveItem />
      <ActiveItem />
      <ActiveItem />
      <ActiveItem />
    </div>
  );
}

export default Admin;
