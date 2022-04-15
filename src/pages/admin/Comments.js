import { React, useContext } from "react";

/** Firebase imports */
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import style from "./activeItem.module.css";
import CommentContext from "../website/comments/comments-context";

function Comments(props) {
  const commentCtx = useContext(CommentContext);

  const deleteHandler = async (id) => {
    const commentDoc = doc(db, "comments", id);
    await deleteDoc(commentDoc);

    commentCtx.setUpdateComment(!commentCtx.updateComment);
  };

  return (
    <div className={style.container}>
      <div className={style.activeContainer}>
        <div className={style.commTitle}>{props.title}</div>
        <button
          className={style.btnRemove}
          onClick={() => deleteHandler(props.id)}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default Comments;
