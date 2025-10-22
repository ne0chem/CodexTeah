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
// App.js или index.js

import useWow from "../../animation/Wow";

const Home = () => {
  useEffect(() => {
    // Резервная активация анимаций
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const { openModal } = useContext(ModalContext);
  const navigate = useNavigate();

  useWow();

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
            <div
              className="header__right wow fade-in-down"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
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
            <div
              className="header__left wow fade-in-down"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className="header__left-img"></div>
              <img className="img__title" src="./glavn.svg" alt="" />
            </div>
          </div>

          <div
            className="opit wow fade-in-up"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
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

          <div
            className="uslugi wow flip-in-x"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <ServicesCarousel />
          </div>

          <ContactCTA />
          <Etapi />
          <div id="zayavka-unique-container ">
            <div
              className="qwe wow bounce-in delay-400"
              data-wow-duration="10s"
              data-wow-delay="1s"
            >
              <Zayavka />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
