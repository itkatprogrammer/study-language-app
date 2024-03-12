import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import st from "./Header.module.scss";

export default function Header() {
  return (
    <div className='style.header__wrapper'>
      <div className={st.header}>
        <Logo />
        <nav className={st.nav}>
          <Link to='/' className='header__list-item'>
            Dictionary
          </Link>
          <Link to='/cards' className='header__list-item'>
            Cards
          </Link>
          <Link to='/game' className='header__list-item'>
            Game
          </Link>
        </nav>
      </div>
    </div>
  );
}

{
  /* <Link to='/' className='header__list-item'>
          Dictionary
        </Link>
        <Link to='/cards' className='header__list-item'>
          Cards
        </Link>
        <Link to='/game' className='header__list-item'>
          Game
        </Link>*/
}
