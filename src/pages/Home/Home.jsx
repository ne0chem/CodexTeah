import { useState, useEffect, useContext } from "react";
import "./Home.css";
import Forma from "../../component/Forma/Forma";
import { ModalContext } from "../../component/Modal/Modal"; // Убедитесь, что путь правильный
import { Link } from "react-router-dom";
import TypewriterText from "../../component/TypewriterText/TypewriterText";
import ServicesCarousel from "../../component/Test/Test";
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

      <div className="usligii__glanv">
        <img className="logo2" src="./polosi.svg" alt="" />
        <img className="logo4" src="./polosi.SVG" alt="" />
        <b>Наши услуги</b>
      </div>
      <div className="uslugi">
        <ServicesCarousel />
      </div>
      <Forma />
    </div>
  );
};

export default Home;
