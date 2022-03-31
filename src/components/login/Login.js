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
            <p>Member Login</p>
            <form>
              <div>
                <label>Username</label>
                <input type="text" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" />
              </div>
              <p>Forget username/password?</p>
              <button>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
