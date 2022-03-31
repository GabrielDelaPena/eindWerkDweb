import React from "react";
import style from "./movementItem.module.css";

function MovementItem() {
  return (
    <div className={style.movItem}>
      <p className={style.action}>deposit</p>
      <p className={style.movBal}>150€</p>
    </div>
  );
}

export default MovementItem;
