import React from "react";
import "./Zayavka.css";

const Zayavka = () => {
  return (
    <div className="forma__right">
      <p className="forma__tile">
        <b>Начнем!</b>
      </p>
      <div className="forma__text">
        <input type="text" name="name" placeholder="Имя" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="phone" placeholder="Телефон" />
        <input type="text" name="service" placeholder="Услуга" />
      </div>
      <div className="forma__bot">
        <label className="checkbox-container">
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-custom"></span>
          <p>
            Нажимая «Отправить заявку», вы соглашаетесь с нашей 
            <b>политикой конфиденциальности</b>
          </p>
        </label>
        <button className="forma__button">Отправить заявку</button>
      </div>
    </div>
  );
};

export default Zayavka;
