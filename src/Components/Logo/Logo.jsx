import React from "react";
import logo from "./logo.png";
import st from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <div className={st.logo__imgBox}>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
}
