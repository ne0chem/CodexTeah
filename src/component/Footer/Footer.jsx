import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__img" src="./CodexTech.svg" alt="лого" />
        <p className="footer__info">
          Информационные технологии и решения от 0 до полностью готового
          продукта
        </p>
      </div>
      <div className="footer__centr">
        <h3 className="footer__nav">Навигация</h3>
        <Link to="/" className="footer__glavnaya">
          Главная
        </Link>
        <Link to="/service" className="footer__yslugi">
          Услуги
        </Link>
        <Link to="/portfolio" className="footer__port">
          Портфолио
        </Link>
        <Link to="/about" className="footer__company">
          О компании
        </Link>
      </div>
      <div className="footer__right">
        <div className="footer__contakt">
          <h4>Контакты</h4>
        </div>
        <div className="footer__nomer">
          <img src="./tlf.png" alt="" />
          <p>+7 938 000-23-47</p>
        </div>
        <div className="footer__email">
          <img src="./inet.png" alt="" />

          <p>zalaev@codekstech.ru</p>
        </div>
        <div className="footer__email1">
          <img src="/email.svg" alt="" />
          <p>zalaev@codekstech.ru</p>
        </div>
        <div className="footer__adres">
          <img src="./location.svg" alt="" />
          <p>
            Республика Татарстан, р-н Верхнеуслонский, г. Иннополис, ул.
            Университетская, д.5
          </p>
        </div>
      </div>
    </div>
  );
}
