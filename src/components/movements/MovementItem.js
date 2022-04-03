import { React } from "react";
import style from "./movementItem.module.css";

function MovementItem(props) {
  return (
    <div className={style.movItem}>
      {props.mov > 0 ? (
        <>
          <p className={style.deposit}>deposit</p>
          <p className={style.movBal}>{props.mov}€</p>
        </>
      ) : (
        <>
          <p className={style.withdrawal}>withdrawal</p>
          <p className={style.movBal}>{props.mov}€</p>
        </>
      )}
    </div>
  );
}

export default MovementItem;
