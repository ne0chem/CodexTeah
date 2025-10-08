import { useState, useEffect, useContext } from "react";
import "./Home.css";
import Forma from "../../component/Forma/Forma";
import { ModalContext } from "../../component/Modal/Modal";
import { Link, useNavigate } from "react-router-dom";
import TypewriterText from "../../component/HomeComponent/TypewriterText/TypewriterText";
import ServicesCarousel from "../../component/HomeComponent/Test/Test";
import Service from "../../component/HomeComponent/Service/Service";
import Etapi from "../../component/HomeComponent/Etapi/Etapi";
import ContactCTA from "../../component/HomeComponent/ContactCTA/ContactCTA";
import Zayavka from "../../component/Zayavka/Zayavka";

const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const { openModal } = useContext(ModalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  const handleOpenModal = () => {
    if (openModal) {
      openModal(<Forma />);
    } else {
      console.error("openModal is not a function");
    }
  };

  const handleNavigateToServices = () => {
    navigate("/services");
  };

  return (
    <div className="home-page ">
      <div className="container">
        <div className="home-page__container">
          <div className="heder">
            <div className="header__right">
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
              <p>
                {animationStarted && (
                  <TypewriterText
                    text="Опыт разработки более 5 лет"
                    delay={40}
                  />
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

          <Service />

          <div className="usligii__glanv">
            <b>Наши услуги</b>
          </div>

          <div className="uslugi">
            <ServicesCarousel />
          </div>

          <ContactCTA />
          <Etapi />
          <Zayavka />
        </div>
      </div>
    </div>
  );
};

export default Home;
