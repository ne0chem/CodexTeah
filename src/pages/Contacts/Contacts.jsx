import React from "react";
import "./Contacts.css";
import Forma from "../../component/Forma/Forma";

const Contacts = () => {
  return (
    <div className="contacti">
      <img className="logo3" src="./polosi.svg" alt="" />
      <div className="contacti__top">
        <h1>Контакты</h1>
        <p>Мы рады помочь вам и ответить на ваши вопросы</p>
      </div>
      <div className="contacti__bot">
        <div className="contacti__left">
          <input type="text" name="name" placeholder="Ваше имя" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="service" placeholder="Сообщение" />
          <button className="contacti__button">Отправить</button>
        </div>
        <div className="contacti__center">
          <div className="center__top">
            <h5>Телефон</h5>
            <p>+7 938 000-23-47</p>
          </div>
          <div className="center__bot">
            <h5>Email</h5>
            <p>zalaev@codekstech.ru</p>
          </div>
          <div className="center__bot"></div>
        </div>
        <div className="contacti__right">
          <div className="right__bot">
            <h5>Адрес</h5>
            <p>
              Республика Татарстан, р-н Верхнеуслонский, г. Иннополис, ул.
              Университетская, д.5
            </p>
            <img src="./cards.svg" alt="" />
          </div>
        </div>
      </div>
      <Forma />
    </div>
  );
};

export default Contacts;
