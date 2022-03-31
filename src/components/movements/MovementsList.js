import React from "react";
import MovementItem from "./MovementItem";
import style from "./movementsList.module.css";

function MovementsList() {
  return (
    <div className={style.movsContainer}>
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
      <MovementItem />
    </div>
  );
}

export default MovementsList;
