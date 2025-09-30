// Contacts.js
import React from "react";
import "./Contacts.css";
import Zayavka from "../../component/Zayavka/Zayavka";
import LeafletMap from "../../component/Map/LeafletMap";

const Contacts = () => {
  return (
    <div className="contacti">
      <div className="container">
        <div className="contacti__title">
          <h3 className="contacti__title-text">Контакты</h3>
          <p className="contacti__title-p">
            Мы рады помочь вам и ответить на ваши вопросы
          </p>
        </div>
        <div className="contacti__box">
          <div className="contacti__left">
            <div className="contact-item">
              <h4 className="text">Телефон</h4>
              <p className="info">+7 938 000-23-47</p>
            </div>
            <div className="contact-item">
              <h4 className="text">Email</h4>
              <p className="info">zalaev@codekstech.ru</p>
            </div>
            <div className="contact-item">
              <h4 className="text">Адрес</h4>
              <p className="info">
                Республика Татарстан, р-н Верхнеуслонский, г. Иннополис, ул.
                Университетская, д.5
              </p>
            </div>
          </div>
          <div className="contacti__right">
            <div className="map-container">
              <LeafletMap />
            </div>
          </div>
        </div>
        <div className="zayavka-container">
          <Zayavka />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
