import { React, useContext } from "react";
import style from "./comments.module.css";


function Comment(props) {

  return (
    <div>
      <div className={style.section}>
        <p className={style.title}>{props.title}</p>
        <p className={style.comments}>{props.comment}</p>
        <p className={style.user}>{props.user}</p>
      </div>
    </div>
  );
}

export default Comment;
