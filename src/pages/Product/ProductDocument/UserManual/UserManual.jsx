import React from "react";
import "../document.css";
const UserManual = () => {
  return (
    <div className="user-manual-page">
      <div className="container">
        <h1 className="page-title">
          ИНСТРУКЦИЯ ПО ЭКСПЛУАТАЦИИ ЭКЗЕМПЛЯРА ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
          «ИММЕТРИКС»
        </h1>

        <section className="manual-section">
          <h2 className="section-number">
            1. Общая информация о программном обеспечении:
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">1.1. Назначение:</h3>
            <p className="section-text">
              Мобильное приложение и веб-приложение предназначены для
              автоматизации процессов учёта и инвентаризации оборудования с
              использованием RFID-меток и терминалов сбора данных (ТСД) на
              платформе Android.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">1.2. Основной функционал:</h3>
            <ul className="function-list">
              <li>Просмотр и редактирование карточек оборудования</li>
              <li>Считывание и запись RFID-меток</li>
              <li>Проведение инвентаризации (частичной/полной)</li>
              <li>Формирование и просмотр отчетов</li>
              <li>Визуализация плана помещений</li>
              <li>Ведение справочников помещений, этажей, зданий</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">1.3. Техническая информация:</h3>
            <div className="tech-info">
              <p>
                <strong>Клиент</strong>
              </p>
              <ul className="tech-list">
                <li>Android (Kotlin)</li>
                <li>Веб (Javascript)</li>
              </ul>

              <p>
                <strong>Бэкэнд</strong>
              </p>
              <ul className="tech-list">
                <li>API с авторизацией (Bearer token, legal_entity)</li>
                <li>Работа по протоколу HTTPS / JSON</li>
              </ul>

              <p>
                <strong>Поддержка терминалов Chainway C5 (UHF RFID)</strong>
              </p>
              <p>
                <strong>API взаимодействия с сервером по протоколу HTTP</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="manual-section">
          <h2 className="section-number">2. Руководство пользователя:</h2>

          <div className="subsection">
            <h3 className="subsection-title">2.1. Назначение:</h3>
            <p className="section-text">Пользователь вводит логин и пароль.</p>
            <img className="section__img" src="/ris1.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">2.2. Главное меню</h3>
            <p className="section-text">Пункты:</p>
            <ul className="menu-list">
              <li>Инвентаризация</li>
              <li>Просмотр справочников</li>
              <li>Настройки</li>
              <li>Привязать метку</li>
            </ul>
            <img className="section__img" src="/ris2.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">2.3. Просмотр справочников</h3>
            <p className="section-text">
              Отображается список оборудования в иерархии «Здание → Этаж →
              Помещение → Предмет». При выборе предмета открывается экран
              редактирования.
            </p>
            <img className="section__img" src="/ris3.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">2.4. Привязка RFID-метки</h3>
            <p className="section-text">
              При нажатии на пункт «Привязать метку» запускается считывание.
              Найденные метки отображаются со статусом (занята/не занята). При
              выборе метки отображается информация о товаре.
            </p>
            <p className="section-text">
              В разделе «Привязать метку» выполняется:
            </p>
            <ol className="procedure-list">
              <li>Сканирование меток.</li>
              <li>Определение занятых и свободных.</li>
              <li>Привязка свободной метки к товару.</li>
              <li>Перезапись существующей метки с подтверждением.</li>
            </ol>
            <img className="section__img" src="/ris4.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">2.5. Инвентаризация</h3>
            <p className="section-text">Выбор типа инвентаризации:</p>
            <ul className="inventory-types">
              <li>
                <strong>Полная</strong> — все помещения.
              </li>
              <li>
                <strong>Частичная</strong> — выбор конкретных зданий/помещений.
              </li>
            </ul>
            <p className="section-text">
              После завершения инвентаризации отправляется отчет на сервер.
            </p>
            <img className="section__img" src="/ris5.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">2.6. Настройки</h3>
            <p className="section-text">Параметры:</p>
            <ul className="settings-list">
              <li>URL сервера</li>
              <li>Мощность RFID-считывателя</li>
            </ul>
            <img className="section__img" src="/ris6.png" alt="" />
          </div>
        </section>

        <section className="manual-section">
          <h2 className="section-number">3. Инструкция по установке:</h2>

          <div className="subsection">
            <h3 className="subsection-title">3.1. Установка на устройство</h3>
            <p className="section-text">
              Установить APK:{" "}
              <a
                href="http://88.210.52.152:8081/download_app"
                className="download-link"
              >
                http://88.210.52.152:8081/download_app
              </a>
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">3.2. Первичная настройка</h3>
            <ul className="setup-list">
              <li>Указать URL сервера (например, http://10.0.2.2:8080)</li>
              <li>Установить мощность считывателя от 0 до 100</li>
            </ul>
          </div>
        </section>

        <section className="manual-section">
          <h2 className="section-number">
            4. Веб-интерфейс для работы с инвентаризацией:
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">4.1. Назначение</h3>
            <p className="section-text">Веб-интерфейс предназначен для:</p>
            <ul className="web-purpose-list">
              <li>
                централизованного управления результатами инвентаризации,
                поступающими от мобильных устройств,
              </li>
              <li>визуализации помещений и их заполненности,</li>
              <li>
                ручного редактирования и управления данными о
                товарно-материальных ценностях (ТМЦ),
              </li>
              <li>генерации и экспорта отчетов.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.2. Основной функционал</h3>
            <ul className="web-functions-list">
              <li>
                Просмотр данных, переданных с мобильных устройств после
                инвентаризации.
              </li>
              <li>
                Отображение расхождений (например, найден в другом помещении).
              </li>
              <li>Формирование и экспорт отчетов по инвентаризации.</li>
              <li>Визуализация плана помещений.</li>
              <li>
                Редактирование карточки оборудования: имя, описание, цена, тип,
                метка, помещение и т.д.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.3. Страницы и интерфейсы</h3>

            <div className="interface-block">
              <h4 className="interface-title">Панель инвентаризации</h4>
              <ul className="interface-list">
                <li>
                  <strong>Таблица с результатами:</strong>
                  <ul className="nested-list">
                    <li>ID оборудования</li>
                    <li>Название</li>
                    <li>Статус (найден / не найден / найден в другом месте)</li>
                    <li>Стоимость, а также общая стоимость</li>
                  </ul>
                </li>
                <li>
                  <strong>Кнопка "Экспорт отчета"</strong> — выгрузка в Excel.
                </li>
              </ul>
              <img className="section__img" src="/ris7.png" alt="" />
            </div>

            <div className="interface-block">
              <h4 className="interface-title">Визуальный план помещений</h4>
              <ul className="interface-list">
                <li>Отображение схемы здания.</li>
                <li>Клик по помещению открывает список ТМЦ.</li>
              </ul>
              <img className="section__img" src="/ris8.png" alt="" />
            </div>

            <div className="interface-block">
              <h4 className="interface-title">Карточка оборудования</h4>
              <ul className="interface-list">
                <li>
                  <strong>Отображается:</strong>
                  <ul className="nested-list">
                    <li>Название и тип</li>
                    <li>Описание, цена</li>
                    <li>Принадлежность к помещению</li>
                  </ul>
                </li>
                <li>Возможность редактирования.</li>
              </ul>
              <img className="section__img" src="/ris9.png" alt="" />
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.4. Страницы и интерфейсы</h3>
            <p className="section-text">Вход через логин и пароль.</p>
            <img className="section__img" src="/ris10.png" alt="" />
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.5. Страницы и интерфейсы</h3>
            <ul className="integration-list">
              <li>
                Мобильное приложение отправляет JSON с результатами
                инвентаризации на POST /api/v1/report.
              </li>
              <li>Веб-интерфейс автоматически отображает новые отчеты.</li>
              <li>
                Любые изменения (например, редактирование RFID или перемещение
                предмета) отражаются как на вебе, так и в мобильной базе после
                синхронизации.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserManual;
