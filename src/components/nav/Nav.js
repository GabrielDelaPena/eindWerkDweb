import { React, useContext } from "react";
import style from "./nav.module.css";
import { useNavigate, Link } from "react-router-dom";

import AccountContext from "../../contexts/accounts_contexts";

function Nav() {
  const accountCtx = useContext(AccountContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    accountCtx.setCurrentUser("");
    accountCtx.setIsLoggedin(false);
    accountCtx.setAdminLoggedin(false);
    console.log("logout");
    navigate("/");
  };

  return (
    <nav className={style.nav}>
      <ul className={style.listsContainer}>
        {!accountCtx.isLoggedIn && (
          <>
            <Link className={style.links} to="/">
              Home
            </Link>
            <Link className={style.links} to="/operations">
              Operations
            </Link>
            <Link className={style.links} to="/comments">
              Comments
            </Link>
            <Link className={style.links} to="/login">
              Login
            </Link>
          </>
        )}
        {accountCtx.isLoggedIn && (
          <Link className={style.links} to="/login" onClick={logoutHandler}>
            Logout
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
