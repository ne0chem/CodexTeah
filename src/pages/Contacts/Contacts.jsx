// Contacts.js
import { useState, useEffect, useContext } from "react";
import "./Contacts.css";
import Zayavka from "../../component/Zayavka/Zayavka";
import LeafletMap from "../../component/Map/LeafletMap";
import ModalOK from "../../component/Modal/ModalOK/ModalOK";
import useWow from "../../animation/Wow";

const Contacts = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            // Останавливаем наблюдение после активации
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in-left, .fade-in-right, .fade-in, .fade-in-down, .fade-in-up, .bounce-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="contacti">
      <div className="container">
        <div className="contacti__title fade-in-down">
          <h3 className="contacti__title-text">Контакты</h3>
          <p className="contacti__title-p">
            Мы рады помочь вам и ответить на ваши вопросы
          </p>
        </div>
        <div className="contacti__box fade-in-up">
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
        <div id="zayavka-unique-container">
          <div className="qqq wow bounce-in delay-400">
            <Zayavka />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
