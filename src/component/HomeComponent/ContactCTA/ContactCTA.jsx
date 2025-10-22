import React from "react";
import "./ContactCTA.css";
import Forma from "../../Forma/Forma";
import { useContext } from "react";
import { ModalContext } from "../../Modal/Modal"; // Убедитесь, что путь правильный

const ContactCTA = ({ openModal: propOpenModal }) => {
  // Переименовываем пропс, чтобы избежать конфликта
  const { openModal: contextOpenModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    // Используем либо пропс, либо контекст в зависимости от того, что передано
    const openModalFunction = propOpenModal || contextOpenModal;

    if (openModalFunction && typeof openModalFunction === "function") {
      openModalFunction(<Forma />);
    } else {
      console.error("openModal is not a function");
    }
  };

  return (
    <section
      className="ContactCTA 
    wow slide-in-right"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <div className="ContactCTA">
        <div className="ContactCTA__content">
          <div className="ContactCTA__title">Остались вопросы?</div>
          <div className="ContactCTA__subTitle">
            Свяжитесь с нами и наши специалисты с радостью помогут вам
          </div>
          <div className="ContactCTA__button">
            <button className="button__ContactCTA" onClick={handleOpenModal}>
              Связаться с нами
            </button>
            <img className="button__img" src="./arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
