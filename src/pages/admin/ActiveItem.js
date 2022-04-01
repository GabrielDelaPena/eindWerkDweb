import React from "react";
import style from "./activeItem.module.css";

function ActiveItem() {
  return (
    <div className={style.activeContainer}>
      <p className={style.accName}>Gabriel Dela Peña</p>
      <button className={style.btnRemove}>remove</button>
    </div>
  );
}

export default ActiveItem;
