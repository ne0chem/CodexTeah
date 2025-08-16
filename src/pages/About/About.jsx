import React from "react";
import "./About.css";
import Forma from "../../component/Forma/Forma";

const About = () => {
  return (
    <div className="about">
      <img className="img" src="./polosi.svg" alt="" />
      <img className="img1" src="./polosi.svg" alt="" />

      <div className="about__top">
        <h3>CodexTech - технологии, которые работают на ваш успех</h3>
        <p>
          5+ лет опыта в разработке ПО для бизнеса и госорганизаций. От идеи -
          до рабочего продукта.
        </p>
      </div>
      <div className="about__center">
        <div className="about__left">
          <div className="img__circle">
            <img src="./11.svg" alt="" />
          </div>
          <p>Опыт работы с крупными проектами</p>
        </div>
        <div className="about__centr">
          <div className="img__circle">
            <img src="./22.svg" alt="" />
          </div>
          <p>Современные технологии</p>
        </div>
        <div className="about__right">
          <div className="img__circle">
            <img src="./33.svg" alt="" />
          </div>
          <p>Внимание к безопасности и срокам</p>
        </div>
      </div>
      <div className="about__bot">
        <h4>О компании</h4>
        <p>
          CodexTech — идеи в коде, код в результате Мы верим, что технологии
          способны менять мир. Наша молодая команда уже успела поработать с
          крупными клиентами и создать решения, которые экономят время, деньги и
          ресурсы. Компания специализируется на создании веб-приложений,
          мобильных решений и корпоративных систем для бизнеса и государственных
          структур. Опыт работы более 5 лет, современные технологии и строгие
          стандарты качества позволяют нам гарантировать результат в срок.
        </p>
      </div>
      <div className="etapi">
        <h2>Этапы сотрудничества</h2>
        <div className="etapi__bot">
          <div className="etapi__left">
            <img src="./zxc.svg" alt="" />
            <p>Аудит вашего сайта ,разработка стратегии</p>
          </div>
          <div className="etapi__center">
            <img src="./222.svg" alt="" />
            <p>
              Обсуждение юридических вопросов, подписание договора на оказание
              услуг
            </p>
          </div>
          <div className="etapi__right">
            <img src="./333.svg" alt="" />
            <p>
              Работа по согласованному плану продвижния с ежемесячными отчетами
            </p>
          </div>
        </div>
      </div>
      <div className="sotrudniki">
        <h4>Специалисты</h4>
        <div className="sotrudniki__contaner">
          <div className="odin">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Разработчик" />
                <p>Fullstack-разработчик</p>
              </div>
              <div className="card__back">
                <h3>Опыт более 5 лет</h3>
                <div className="card__info">
                  <ul>
                    <li>
                      <b>Специализация:</b> веб-разработка
                    </li>
                    <li>
                      <b>Основные технологии:</b> JavaScript/TypeScript
                    </li>
                    <li>
                      <b>Frontend:</b> React, Next.js, Redux
                    </li>
                    <li>
                      <b>Backend: </b>Node.js, Express, NestJS
                    </li>
                    <li>
                      <b>Базы данных:</b> MongoDB, PostgreSQL
                    </li>
                    <li>
                      <b>Дополнительно:</b> Docker, Git, CI/CD
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="dva">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Маркетолог" />
                <p>Frontend-разработчик</p>
              </div>
              <div className="card__back">
                <h3>Опыт 4+ года</h3>
                <div className="card__info">
                  <ul>
                    <li>
                      <b>Стек:</b>React/Vue/Angular
                    </li>
                    <li>
                      <b>State management:</b> Redux, MobX
                    </li>
                    <li>
                      <b>Стилизация:</b> CSS-in-JS, Sass
                    </li>
                    <li>
                      <b>Инструменты:</b> Webpack, Vite
                    </li>
                    <li>
                      <b>Тестирование:</b>Jest, Cypress
                    </li>
                    <li>
                      <b>UI библиотеки:</b> Material UI, Ant Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tri">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Дизайнер" />
                <p>Backend-разработчик</p>
              </div>
              <div className="card__back">
                <h3>Опыт более 5 лет</h3>
                <div className="card__info">
                  <ul>
                    <li>
                      <b>Языки: </b>Python/Java/Go
                    </li>
                    <li>
                      <b>Фреймворки:</b> Django, Spring, Gin
                    </li>
                    <li>
                      <b>Базы данных:</b> PostgreSQL, Redis
                    </li>
                    <li>
                      <b>API:</b> REST, GraphQL, gRPC
                    </li>
                    <li>
                      <b>DevOps: </b>AWS, Kubernetes
                    </li>
                    <li>
                      <b>Мониторинг:</b>Prometheus, Grafana
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="chetiri">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Разработчик" />
                <p>Мобильный разработчик</p>
              </div>
              <div className="card__back">
                <h3>Опыт 3+ года</h3>
                <div className="card__info">
                  <ul>
                    <li>
                      <b>Платформы:</b> iOS/Android/Кроссплатформа
                    </li>
                    <li>
                      <b>Технологии:</b> Swift, Kotlin, Flutter
                    </li>
                    <li>
                      <b>Архитектура</b> MVVM, Clean Architecture
                    </li>
                    <li>
                      <b>Библиотеки:</b> Alamofire, Retrofit
                    </li>
                    <li>
                      <b>Публикация:</b> AppStore, Google Play
                    </li>
                    <li>
                      <b>CI/CD:</b> Fastlane, Bitrise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pat">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Разработчик" />
                <p>UI/UX Дизайнер</p>
              </div>
              <div className="card__back">
                <h3>Опыт 2+ года</h3>
                <div className="card__info">
                  <ul>
                    <li>
                      <b>Инструменты:</b> Figma, Adobe XD, Photoshop
                    </li>
                    <li>Прототипирование и UX-исследования</li>
                    <li>Создание дизайн-систем</li>
                    <li>Адаптивный и мобильный дизайн</li>
                    <li>Анимации интерфейсов</li>
                    <li>Работа с компонентами</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pat">
            <div className="card">
              <div className="card__front">
                <img src="./fon.png" alt="Разработчик" />
                <p>Content Manager</p>
              </div>
              <div className="card__back">
                <h3>Опыт 3+ года</h3>
                <div className="card__info">
                  <ul>
                    <li>Наполнение сайтов (CMS: WordPress, Tilda)</li>
                    <li>SEO-оптимизация контента</li>
                    <li>Работа с графикой (Canva, Photoshop)</li>
                    <li>Копирайтинг и редактура</li>
                    <li>Ведение соцсетей</li>
                    <li>Аналитика посещаемости</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Forma />
    </div>
  );
};

export default About;
