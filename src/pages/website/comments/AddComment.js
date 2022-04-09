import { React, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CommentContext from "./comments-context";
import style from "./addcomment.module.css";

function AddComment() {
  const commentCtx = useContext(CommentContext);
  const navigate = useNavigate();

  const name = useRef();
  const title = useRef();
  const comment = useRef();

  const addCommentHandler = (e) => {
    e.preventDefault();

    const enteredName = name.current.value;
    const enteredTitle = title.current.value;
    const enteredComment = comment.current.value;

    commentCtx.addComment(enteredName, enteredTitle, enteredComment);
    commentCtx.setUpdateComment(!commentCtx.updateComment);
    navigate("/comments");
  };

  return (
    <div className={style.container}>
      <div className={style.section}>
        <p className={style.label}>Name</p>
        <input className={style.input} ref={name} />
        <p className={style.label}>Title</p>
        <input className={style.input} ref={title} />

        <p className={style.label}>Comment</p>
        <textarea className={style.textarea} ref={comment} />
        <button className={style.btnAdd} onClick={addCommentHandler}>
          Add comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
