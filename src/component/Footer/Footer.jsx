import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="container_f">
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
          <div className="footer__nav-links">
            <div className="footer__nav-column-left">
              <Link to="/" className="footer__glavnaya">
                Главная
              </Link>
              <Link to="/service" className="footer__yslugi">
                Услуги
              </Link>
            </div>
            <div className="footer__nav-column-right">
              <Link to="/product" className="footer__port">
                Наш продукт
              </Link>
              <Link to="/about" className="footer__company">
                О компании
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__contakt">
            <h4>Контакты</h4>
          </div>
          <div className="footer__contacts-container">
            <div className="footer__contacts-column-left">
              <div className="footer__nomer">
                <img src="./tlf.png" alt="Телефон" />
                <p>+7 938 000-23-47</p>
              </div>
              <div className="footer__email">
                <img src="./inet.png" alt="Интернет" />
                <p>zalaev@codekstech.ru</p>
              </div>
            </div>
            <div className="footer__contacts-column-right">
              <div className="footer__email1">
                <img src="/email.svg" alt="Email" />
                <p>zalaev@codekstech.ru</p>
              </div>
              <div className="footer__adres">
                <img src="./location.svg" alt="Адрес" />
                <p>
                  Республика Татарстан, р-н Верхнеуслонский, г. Иннополис, ул.
                  Университетская, д.5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
