import { React, useContext, useRef, useEffect } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

import loginImage from "../../images/istockphoto-501534644-170667a.jpg";
import AccountContext from "../../contexts/accounts_contexts";

function Login() {
  const accountCtx = useContext(AccountContext);
  const navigate = useNavigate();
  const username = useRef();
  const pin = useRef();

  /** Check if the inputs value are correct. */
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredUsername = username.current.value;
    const enteredPin = pin.current.value;

    const findAccount = accountCtx.accounts.find(
      (acc) => acc.username === enteredUsername && acc.pin === enteredPin
    );

    if (!findAccount) {
      return alert("Account does not exist.");
    }
    
    accountCtx.setCurrentUser(findAccount.username);
    accountCtx.setUpdate(!accountCtx.update);
    navigate("/account");
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img className={style.image} src={loginImage} />
        </div>
        <div className={style.formContainer}>
          <div className={style.loginContainer}>
            <p className={style.loginTitle}>Member Login</p>
            <form onSubmit={submitHandler}>
              <div className={style.inputs}>
                <input
                  className={style.inputField}
                  type="text"
                  placeholder="Username"
                  ref={username}
                />
                <input
                  className={style.inputField}
                  type="password"
                  placeholder="PIN"
                  ref={pin}
                />
              </div>
              <p className={style.forgetPass}>Forget username/password?</p>
              <button className={style.loginBtn}>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
