import { React, useContext } from "react";
import { motion } from "framer-motion";
import style from "./comments.module.css";
import { useNavigate } from "react-router-dom";

import CommentContext from "./comments-context";
import Comment from "./Comment";

function Comments() {
  const commentCtx = useContext(CommentContext);
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/addcomment");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.container}>
        {commentCtx.comments.map((com, i) => {
          return (
            <div
              key={i}
              className={i === commentCtx.current ? "slide active" : "slide"}
            >
              {i === commentCtx.current && (
                <Comment
                  key={com.id}
                  title={com.title}
                  comment={com.comment}
                  user={com.user}
                />
              )}
            </div>
          );
        })}
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={commentCtx.prevSlide}>
            ⬅
          </button>
          <button className={style.btn} onClick={commentCtx.nextSlide}>
            ➡
          </button>
        </div>
        <button className={style.btnAdd} onClick={navigateTo}>
          Add comment
        </button>
      </div>
    </motion.div>
  );
}

export default Comments;
