import React from "react";
import logo from "./logo.png";
import style from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <div className={style.logo__imgBox}>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
}
