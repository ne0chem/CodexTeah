import "./Header.css";
import { Link } from "react-router-dom";
import Forma from "../Forma/Forma";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../Modal/Modal";

export default function Header() {
  const { openModal: contextOpenModal } = useContext(ModalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleOpenModal = () => {
    const openModalFunction = contextOpenModal;

    if (openModalFunction && typeof openModalFunction === "function") {
      openModalFunction(<Forma />);
    } else {
      console.error("openModal is not a function");
    }
    // Закрываем меню при открытии модалки
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <img src="./CodexTech.svg" alt="CodexTech Logo" />
          </div>
          <nav className="nav">
            <Link to="/" className="nav__glavnaya" onClick={closeMenu}>
              Главная
            </Link>
            <Link to="/service" className="nav__yslugi" onClick={closeMenu}>
              Услуги
            </Link>
            <Link to="/about" className="nav__company" onClick={closeMenu}>
              О компании
            </Link>
            <Link to="/product" className="nav__portfolio" onClick={closeMenu}>
              Наш продукт
            </Link>
            <Link to="/contacts" className="nab__kontact" onClick={closeMenu}>
              Контакты
            </Link>
          </nav>
          <div className="nav__right">
            <button className="button" onClick={handleOpenModal}>
              Оставить заявку
            </button>
          </div>

          {/* Бургер-кнопка */}
          <button
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        {/* Кнопка закрытия */}
        <button className="mobile-menu__close" onClick={closeMenu}>
          ×
        </button>

        <nav className="mobile-nav">
          <Link to="/" className="nav__glavnaya" onClick={closeMenu}>
            Главная
          </Link>
          <Link to="/service" className="nav__yslugi" onClick={closeMenu}>
            Услуги
          </Link>
          <Link to="/about" className="nav__company" onClick={closeMenu}>
            О компании
          </Link>
          <Link to="/product" className="nav__portfolio" onClick={closeMenu}>
            Наш продукт
          </Link>
          <Link to="/contacts" className="nab__kontact" onClick={closeMenu}>
            Контакты
          </Link>
        </nav>
        <button className="button" onClick={handleOpenModal}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
