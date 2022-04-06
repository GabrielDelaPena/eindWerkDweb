import { React, useContext } from "react";
import { motion } from "framer-motion";
import style from "./comments.module.css";

import CommentContext from "./comments-context";

function Comments() {
  const commentCtx = useContext(CommentContext);

  console.log(commentCtx.currentComment);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.container}>
        <div className={style.section}>
          <p className={style.title}>{commentCtx.currentComment.title}</p>
          <p className={style.comment}>{commentCtx.currentComment.comment}</p>
          <p className={style.user}>{commentCtx.currentComment.user}</p>
          <div className={style.btnContainer}>
            <button
              className={style.btn}
              onClick={commentCtx.prevCommentHandler}
              disabled={commentCtx.currentComment.index === 0}
            >
              ⬅
            </button>
            <button
              className={style.btn}
              onClick={commentCtx.nextCommentHandler}
              disabled={
                commentCtx.currentComment.index ===
                commentCtx.comments.length - 1
              }
            >
              ➡
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Comments;
