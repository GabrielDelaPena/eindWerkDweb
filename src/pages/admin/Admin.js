import React from "react";
import ActiveItem from "./ActiveItem";
import style from "./admin.module.css";

function Admin() {
  return (
    <div className={style.container}>
      <ActiveItem />
      <ActiveItem />
      <ActiveItem />
      <ActiveItem />
      <ActiveItem />
    </div>
  );
}

export default Admin;
