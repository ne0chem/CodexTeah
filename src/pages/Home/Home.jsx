import { useState, useEffect } from "react";
import "./Home.css";
import Forma from "../../component/Forma/Forma";
import { ModalContext } from "../../component/Modal/Modal";
import { Link } from "react-router-dom";
import TypewriterText from "../../component/TypewriterText/TypewriterText";
const Home = ({ openModal }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  // Corrected: using useEffect instead of useState
  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className="home-page">
      <img className="logo" src="./polosi.svg" alt="" />
      <div className="heder">
        <h3>
          {animationStarted && (
            <TypewriterText text="ІТ-решения под ключ для вашего бизнеса" />
          )}
        </h3>
        <p className="header__text">
          {animationStarted && (
            <TypewriterText
              text="Разработка веб-систем, мобильных приложений и решений для корпораций и госструктур"
              delay={20}
            />
          )}
        </p>
        <div className="menu__button">
          <button className="button__left" onClick={() => openModal()}>
            Оставить заявку
          </button>
          <Link to="/service" className="button__right">
            Посмотреть услуги
          </Link>
        </div>
      </div>
      <div className="opit">
        <div className="opit__left">
          <img src="./1.svg" alt="" />
          <p>
            {animationStarted && (
              <TypewriterText text="Опыт более 5 лет" delay={40} />
            )}
          </p>
        </div>
        <div className="opit__centr">
          <img src="./2.svg" alt="" />
          <p>
            {animationStarted && (
              <TypewriterText text="Современные технологии" delay={40} />
            )}
          </p>
        </div>
        <div className="opit__right">
          <img src="./3.svg" alt="" />
          <p>
            {animationStarted && (
              <TypewriterText text="Проекты под ключ" delay={40} />
            )}
          </p>
        </div>
      </div>

      <div className="usligii__glanv">
        <img className="logo2" src="./polosi.svg" alt="" />
        <img className="logo4" src="./polosi.SVG" alt="" />
        <b>Наши услуги</b>
      </div>
      <div className="uslugi">
        <div className="uslugi1">
          <img src="./pk.svg" alt="" className="uslugi1__img1" />
          <p className="uslugi__title">
            <b>Веб-разработка</b>
          </p>
          <p className="uslugi__price">
            <b>от 100 000</b>
          </p>
          <p className="uslugi__subtitle">Сайты, веб-системы, дизайн сайтов</p>
        </div>
        <div className="uslugi2">
          <img src="./tlf.svg" alt="" className="uslugi1__img2" />
          <p className="uslugi__title1">
            <b>Мобильные приложения</b>
          </p>
          <p className="uslugi__price">
            <b>от 150 000</b>
          </p>
          <p className="uslugi__subtitle"></p>
        </div>
        <div className="uslugi3">
          <img src="./3.svg" alt="" className="uslugi1__img3" />
          <p className="uslugi__title1">
            <b>Веб-системы и интеграции</b>
          </p>
          <p className="uslugi__price"></p>
          <p className="uslugi__subtitle"></p>
        </div>
        <div className="uslugi5">
          <img src="./3.svg" alt="" className="uslugi1__img3" />
          <p className="uslugi__title1">
            <b>Верстка и програмирование</b>
          </p>
          <p className="uslugi__price"></p>
          <p className="uslugi__subtitle"></p>
        </div>
        <div className="uslugi3">
          <img src="./3.svg" alt="" className="uslugi1__img3" />
          <p className="uslugi__title">
            <b>Тестирование и запуск</b>
          </p>
          <p className="uslugi__price"></p>
          <p className="uslugi__subtitle"></p>
        </div>
      </div>
      <Forma />
    </div>
  );
};

export default Home;
