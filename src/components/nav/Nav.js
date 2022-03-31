import React from "react";
import style from "./nav.module.css";

function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.listsContainer}>
        <li className={style.listItem}>Home</li>
        <li className={style.listItem}>Operations</li>
        <li className={style.listItem}>Comments</li>
        <li className={style.listItem}>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
