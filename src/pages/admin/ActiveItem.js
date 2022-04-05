import { React, useContext } from "react";
import style from "./activeItem.module.css";
import { doc, deleteDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import AccountContext from "../../contexts/accounts_contexts";

function ActiveItem(props) {
  const accountCtx = useContext(AccountContext);
  const deleteHandler = async (id) => {
    const userDoc = doc(db, "accounts", id);
    await deleteDoc(userDoc);

    accountCtx.setUpdate(!accountCtx.update);
  };

  return (
    <div className={style.activeContainer}>
      <p className={style.accName}>{props.name}</p>
      <button
        className={style.btnRemove}
        onClick={() => deleteHandler(props.id)}
      >
        remove
      </button>
    </div>
  );
}

export default ActiveItem;
