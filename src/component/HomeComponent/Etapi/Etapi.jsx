import React from "react";
import "./Etapi.css";

const Etapi = () => {
  return (
    <section className="work-steps">
      <div className="container">
        <h2 className="section-title">Этапы работы</h2>

        <div className="steps-container">
          {/* Этап 1 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Знакомство и анализ</h3>
              <p className="step-desc">
                Обсуждаем ваши цели, задачи и идеи. Проводим анализ рынка и
                целевой аудитории.
              </p>
            </div>
          </div>

          {/* Этап 2 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Техническое задание</h3>
              <p className="step-desc">
                Составляем детальное техническое задание (ТЗ), которое фиксирует
                все требования.
              </p>
            </div>
          </div>

          {/* Этап 3 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Дизайн-концепция</h3>
              <p className="step-desc">
                Создаем прототипы и дизайн-макеты ключевых страниц. Утверждаем
                визуальный стиль.
              </p>
            </div>
          </div>

          {/* Этап 4 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Разработка</h3>
              <p className="step-desc">
                Наши программисты приступают к кодированию. Придерживаемся
                Agile-методологии.
              </p>
            </div>
          </div>

          {/* Этап 5 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Тестирование</h3>
              <p className="step-desc">
                Проводим полный цикл тестирования: функционал, безопасность,
                производительность.
              </p>
            </div>
          </div>

          {/* Этап 6 */}
          <div className="step-item">
            <div className="step-content">
              <h3 className="step-title">Запуск и поддержка</h3>
              <p className="step-desc">
                Размещаем проект на хостинге. Предоставляем техническую
                поддержку после запуска.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etapi;
