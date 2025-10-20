import { useState, useEffect, useContext } from "react";
import "./Home.css";
import "./adaptiv.css";
import Forma from "../../component/Forma/Forma";
import { ModalContext } from "../../component/Modal/Modal";
import { Link, useNavigate } from "react-router-dom";
import ServicesCarousel from "../../component/HomeComponent/Test/Test";
import Service from "../../component/HomeComponent/Service/Service";
import Etapi from "../../component/HomeComponent/Etapi/Etapi";
import ContactCTA from "../../component/HomeComponent/ContactCTA/ContactCTA";
import Zayavka from "../../component/Zayavka/Zayavka";

const Home = () => {
  const { openModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (openModal) {
      openModal(<Forma />);
    } else {
      console.error("openModal is not a function");
    }
  };

  const handleNavigateToServices = () => {
    navigate("/service");
  };

  return (
    <div className="home-page ">
      <div className="container">
        <div className="home-page__container">
          <div className="heder">
            <div className="header__right">
              <h3>ІТ-решения под ключ для вашего бизнеса</h3>
              <p className="header__text">
                Разработка веб-систем, мобильных приложений и решений для
                корпораций и госструктур
              </p>
              <div className="menu__button">
                <button className="button__left" onClick={handleOpenModal}>
                  Оставить заявку
                </button>
                <button
                  className="button__right"
                  onClick={handleNavigateToServices}
                >
                  Посмотреть услуги
                </button>
              </div>
            </div>
            <div className="header__left">
              <div className="header__left-img"></div>
              <img className="img__title" src="./glavn.svg" alt="" />
            </div>
          </div>

          <div className="opit">
            <div className="opit__left">
              <img src="./1.svg" alt="" />
              <p>Опыт разработки более 5 лет</p>
            </div>
            <div className="opit__centr">
              <img src="./2.svg" alt="" />
              <p>Современные технологии</p>
            </div>
            <div className="opit__right">
              <img src="./3.svg" alt="" />
              <p>Проекты под ключ</p>
            </div>
          </div>

          <Service />

          <div className="usligii__glanv">
            <b>Наши услуги</b>
          </div>

          <div className="uslugi">
            <ServicesCarousel />
          </div>

          <ContactCTA />
          <Etapi />
          <div className="zayavka">
            <Zayavka />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
