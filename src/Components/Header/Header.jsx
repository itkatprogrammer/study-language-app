import React from "react";
import Logo from "./../Logo/Logo";
import st from "./Header.module.scss";

export default function Header() {
  return (
    <div className={st.header}>
      <Logo />
      <nav className={st.nav}>
        <a href='#' className='header__list-item'>
          Dictionary
        </a>
        <a href='#' className='header__list-item'>
          Cards
        </a>
        <a href='#' className='header__list-item'>
          Game
        </a>
      </nav>
    </div>
  );
}
