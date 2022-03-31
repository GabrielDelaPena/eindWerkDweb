import React from "react";
import style from "./login.module.css";
import loginImage from "../../images/istockphoto-501534644-170667a.jpg";

function Login() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img className={style.image} src={loginImage} />
        </div>
        <div className={style.formContainer}>
          <div className={style.loginContainer}>
            <p className={style.loginTitle}>Member Login</p>
            <form>
              <div className={style.inputs}>
                <input className={style.inputField} type="text" placeholder="Username" />
                <input className={style.inputField} type="password" placeholder="PIN" />
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
