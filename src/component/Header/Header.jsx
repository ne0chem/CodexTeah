import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header contaner">
      <div className="header__logo">
        <img src="./CodexTech.svg" alt="" />
      </div>
      <div className="nav">
        <Link to="/" className="nav__glavnaya">
          Главная
        </Link>
        <Link to="/service" className="nav__yslugi">
          Услуги
        </Link>
        <Link to="/about" className="nav__company">
          О компании
        </Link>
        <Link to="/portfolio" className="nav__portfolio">
          Портфолио
        </Link>
        <Link to="/contacts" className="nab__kontact">
          Контакты
        </Link>
      </div>
      <div className="nav__right">
        <p className="nav__nomer">+7 938 000-23-47</p>
        <button className="button">ЗАКАЗАТЬ ЗВОНОК</button>
      </div>
    </div>
  );
}
