import { React, useContext } from "react";
import style from "./nav.module.css";
import { useNavigate } from "react-router-dom";

import AccountContext from "../../contexts/accounts_contexts";

function Nav() {
  const accountCtx = useContext(AccountContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();

    accountCtx.setCurrentUser({});
    accountCtx.setIsLoggedin(false);
    navigate("login");
  };

  return (
    <nav className={style.nav}>
      <ul className={style.listsContainer}>
        <li className={style.listItem}>Home</li>
        <li className={style.listItem}>Operations</li>
        <li className={style.listItem}>Comments</li>
        {accountCtx.isLoggedin && (
          <li className={style.listItem} onClick={logoutHandler}>
            Logout
          </li>
        )}
        {!accountCtx.isLoggedin && <li className={style.listItem}>Login</li>}
      </ul>
    </nav>
  );
}

export default Nav;
