import React from "react";
import { useState, useEffect, useContext } from "react";
import "./About.css";
import "./adaptiv.css";
import Forma from "../../component/Forma/Forma";
import Zayavka from "../../component/Zayavka/Zayavka";

const About = () => {
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
    <div className="about ">
      <div className="container">
        <div className="section__missia">
          <div
            className="missia__left wow fade-in-down"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <h3 className="missia__left__title">Миссия и ценности</h3>
            <p className="missia__left__text">
              Наша миссия — внедрять передовые технологии для роста бизнесса
              наших клиентов. Делая сложное простым. Мы верим, что цифровые
              решения должны быть поняными, надежными и полезными каждому
              пользователю.
            </p>
          </div>
          <div
            className="missia__right wow fade-in-right"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="missia__right-img"></div>
            <img src="./about.svg" alt="" />
          </div>
        </div>
        <div className="section__cennosti ">
          <div
            className="cennosti__top wow fade-in-up"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <h3 className="cennosti__top__title">Наши ценности</h3>
            <p className="cennosti__top__text">
              CodexTech стремится войти в число самых перспективных молодых
              IT-компаний России и доказать, что качественные технологии могут
              быть доступны и эффективны.
            </p>
          </div>
          <div
            className="cennosti__bot wow fade-in-left"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="cennosti__columns">
              <div className="cennosti__column">
                <div className="cennosti__item">
                  <div className="cennosti__left">
                    <img src="./cen1.svg" alt="" />
                  </div>
                  <div className="cennosti__right">
                    <h4>Качество</h4>
                    <p>создаем продукты, на которые можно опираться.</p>
                  </div>
                </div>
                <div className="cennosti__item">
                  <div className="cennosti__left">
                    <img src="./cen2.svg" alt="" />
                  </div>
                  <div className="cennosti__right">
                    <h4>Инновации</h4>
                    <p>
                      используем современные технологии и смело ищем новые
                      решения.
                    </p>
                  </div>
                </div>
              </div>

              <div className="cennosti__column">
                <div className="cennosti__item">
                  <div className="cennosti__left">
                    <img src="./cen3.svg" alt="" />
                  </div>
                  <div className="cennosti__right">
                    <h4>Развитие</h4>
                    <p>постоянно учимся и растем вместе с нашими клиентами.</p>
                  </div>
                </div>
                <div className="cennosti__item">
                  <div className="cennosti__left">
                    <img src="./cen4.svg" alt="" />
                  </div>
                  <div className="cennosti__right">
                    <h4>Ответственность</h4>
                    <p>соблюдаем сроки и обязательства перед партнёрами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="comanda wow fade-in-up"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <h3>Наша команда</h3>
            <p>
              Сегодня команда CodexTech — это разработчики, дизайнеры и
              проектные менеджеры, объединённые одной целью: создавать
              IT-продукты, которые приносят реальную пользу бизнесу. Мы
              небольшие, но гибкие, быстро адаптируемся к новым задачам и ценим
              командную работу.
            </p>
          </div>
          <div className="plusi">
            <h3
              className="plusi__title wow fade-in-down"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              Наши преимущества
            </h3>
            <div
              className="plusi__container wow fade-in-up"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className="plusi__columns">
                <div className="plusi__column">
                  <div className="plusi__item">
                    <div className="plusi__icon">
                      <img src="./cen5.svg" alt="Стандарты безопасности" />
                    </div>
                    <div className="plusi__content">
                      <p className="plusi__text">
                        Соблюдаем стандарты безопасности и конфиденциальности —
                        важно для бизнеса и госструктур.
                      </p>
                    </div>
                  </div>
                  <div className="plusi__item">
                    <div className="plusi__icon">
                      <img src="./cen6.svg" alt="Полный цикл разработки" />
                    </div>
                    <div className="plusi__content">
                      <p className="plusi__text">
                        Полный цикл разработки: от идеи и прототипа до поддержки
                        продукта.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="plusi__column">
                  <div className="plusi__item">
                    <div className="plusi__icon">
                      <img src="./cen7.svg" alt="Гибкий подход" />
                    </div>
                    <div className="plusi__content">
                      <p className="plusi__text">
                        Гибкий подход: работаем по Agile и подстраиваемся под
                        клиента.
                      </p>
                    </div>
                  </div>
                  <div className="plusi__item">
                    <div className="plusi__icon">
                      <img src="./cen8.svg" alt="Экспертиза" />
                    </div>
                    <div className="plusi__content">
                      <p className="plusi__text">
                        Экспертиза в создании высоконагруженных веб-систем.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="doverie">
            <h3
              className="wow fade-in-left"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              Нам доверяют
            </h3>
            <div className="doverie__container">
              <div
                className="doverie__left wow fade-in-left"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <img src="./about1.svg" alt="" />
              </div>
              <div
                className="doverie__right wow fade-in-left"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <p>
                  Наш продукт — система инвентаризации имущества для театра с
                  использованием ТСД и RFID-меток. Решение позволяет вести учёт
                  реквизита и декораций на плане помещений, видеть стоимость и
                  местоположение предметов, а также выявлять недостающие
                  объекты.
                </p>
              </div>
            </div>
          </div>
          <div id="zayavka-unique-container">
            <div
              className="qwqw wow bounce-in delay-400"
              data-wow-duration="10s"
              data-wow-delay="1s"
            >
              <Zayavka />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
