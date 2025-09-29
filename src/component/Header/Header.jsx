import "./Header.css";
import { Link } from "react-router-dom";
import Forma from "../Forma/Forma";
import { useContext } from "react";
import { ModalContext } from "../Modal/Modal";

export default function Header() {
  const { openModal: contextOpenModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    const openModalFunction = contextOpenModal;

    if (openModalFunction && typeof openModalFunction === "function") {
      openModalFunction(<Forma />);
    } else {
      console.error("openModal is not a function");
    }
  };

  return (
    <div className="header">
      <div className="header__container">
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
            Наш продукт
          </Link>
          <Link to="/contacts" className="nab__kontact">
            Контакты
          </Link>
        </div>
        <div className="nav__right">
          <button className="button" onClick={handleOpenModal}>
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
