// Обновленный компонент с сохранением имен
import React, { useContext } from "react";
import "./SocSeti.css";
import { ModalContext } from "../../component/Modal/Modal";

const SocSeti = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="add-butt-wrapper">
      <a className="add-butt" href="#">
        <img src="./tf.svg" alt="Like" className="icon-img" />
      </a>
      <a className="add-butt" href="#">
        <img src="./tg.svg" alt="Favorite" className="icon-img" />
      </a>
      <a className="add-butt" href="#">
        <img src="./wa.svg" alt="Comment" className="icon-img" />
      </a>
      <a className="add-butt" href="#">
        <img
          src="./sms.svg"
          alt="Location"
          className="icon-img"
          onClick={() => openModal()}
        />
      </a>
    </div>
  );
};

export default SocSeti;
