import { useState, useEffect, useContext } from "react";
import "./Home.css";
import Forma from "../../component/Forma/Forma";
import { ModalContext } from "../../component/Modal/Modal"; // Убедитесь, что путь правильный
import { Link } from "react-router-dom";
import TypewriterText from "../../component/HomeComponent/TypewriterText/TypewriterText";
import ServicesCarousel from "../../component/HomeComponent/Test/Test";
import Service from "../../component/HomeComponent/Service/Service";
import Etapi from "../../component/HomeComponent/Etapi/Etapi";
import FAQ from "../../component/HomeComponent/FAQ/FAQ";
import ContactCTA from "../../component/HomeComponent/ContactCTA/ContactCTA";
const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const { openModal } = useContext(ModalContext); // Получаем openModal из контекста

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  const handleOpenModal = () => {
    if (openModal) {
      openModal(<Forma />); // Передаем компонент Forma в модальное окно
    } else {
      console.error("openModal is not a function");
    }
  };

  return (
    <div className="home-page">
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
          <button className="button__left" onClick={handleOpenModal}>
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
      <Service />
      <div className="usligii__glanv">
        <b>Наши услуги</b>
      </div>
      <div className="uslugi">
        <ServicesCarousel />
      </div>
      <ContactCTA />
      <Etapi />
      <FAQ />
    </div>
  );
};

export default Home;
