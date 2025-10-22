import React from "react";
import "./Etapi.css";
import "./adaptiv.css";

const Etapi = () => {
  return (
    <div
      className="etapi-container 
    wow fade-in-up"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <h3>Этапы работ</h3>
      <div className="etapi-steps">
        <div className="etapi-step">
          <div className="etapi-step-icon">
            <img src="./e1.svg" alt="Знакомство и анализ" />
          </div>
          <div className="etapi-step-content">
            <h1 className="etapi-step-title">Знакомство и анализ</h1>
            <p className="etapi-step-description">
              Обсуждаем ваши цели, задачи и идеи
            </p>
          </div>
        </div>
        <div className="etapi-step">
          <div className="etapi-step-icon">
            <img src="./e2.svg" alt="Техническое задание" />
          </div>
          <div className="etapi-step-content">
            <h1 className="etapi-step-title">Техническое задание</h1>
            <p className="etapi-step-description">
              Составляем детальное техническое задание
            </p>
          </div>
        </div>
        <div className="etapi-step">
          <div className="etapi-step-icon">
            <img src="./e3.svg" alt="Разработка" />
          </div>
          <div className="etapi-step-content">
            <h1 className="etapi-step-title">Разработка</h1>
            <p className="etapi-step-description">
              Наши програмисты приступают к разработке
            </p>
          </div>
        </div>
        <div className="etapi-step">
          <div className="etapi-step-icon">
            <img src="./e4.svg" alt="Запуск и поддержка" />
          </div>
          <div className="etapi-step-content">
            <h1 className="etapi-step-title">Запуск и поддержка</h1>
            <p className="etapi-step-description">
              Размещаем проект на хостинге. Предоставляем техническую поддержку
              после запуска
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etapi;
