import { React, useContext } from "react";
import style from "./admin.module.css";

import ActiveItem from "./ActiveItem";
import AccountContext from "../../contexts/accounts_contexts";
import CommentContext from "../website/comments/comments-context";
import Comments from "./Comments";

function Admin() {
  const accountCtx = useContext(AccountContext);
  const commentCtx = useContext(CommentContext);

  return (
    <div className={style.container}>
      <div>
        {accountCtx.accounts.map((acc) => {
          return <ActiveItem key={acc.id} name={acc.name} id={acc.id} />;
        })}
      </div>
      <p className={style.mid}>Comments</p>
      <div>
        {commentCtx.comments.map((comment, i) => {
          return <Comments key={i} title={comment.title} id={comment.id}/>;
        })}
      </div>
    </div>
  );
}

export default Admin;
