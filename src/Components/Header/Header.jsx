import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import style from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setISScrollde] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setISScrollde(true);
      } else {
        setISScrollde(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.header} ${isScrolled ? style.fixedHeader : ""}`}>
      <div>
        <div className={style.headerContent}>
          <Logo />
          <nav className={style.nav}>
            <Link to='/' className={style.header__listItem}>
              Dictionary
            </Link>
            <Link to='/cards' className={style.header__listItem}>
              Cards
            </Link>
            <Link to='/game' className={style.header__listItem}>
              Game
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

