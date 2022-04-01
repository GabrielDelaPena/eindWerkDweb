import React from "react";
import style from "./operationInfo.module.css";

function OperationInfo() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <p className={style.labels}>
          Name: <span className={style.userInfo}>Gabriel Dela Peña</span>
        </p>
        <p className={style.labels}>
          BirthDate: <span className={style.userInfo}>28/12/1997</span>
        </p>
        <p className={style.labels}>
          Adres: <span className={style.userInfo}> Humbeeksesteenweg 130</span>
        </p>
      </div>
    </div>
  );
}

export default OperationInfo;
