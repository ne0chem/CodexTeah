import React from "react";
import "../document.css";
const Specification = () => {
  return (
    <div className="specification-page">
      <div className="container">
        <h1 className="page-title">
          ОПИСАНИЕ ФУНКЦИОНАЛЬНЫХ ХАРАКТЕРИСТИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
          «ИММЕТРИКС»
        </h1>

        {/* Раздел 1 */}
        <section className="spec-section">
          <h2 className="section-number">1. Введение</h2>
          <p className="section-text">
            Программное обеспечение «Имметрикс» представляет собой комплексную
            систему для учёта имущества и автоматизации инвентаризационных
            процессов. Система объединяет мобильное Android-приложение,
            веб-интерфейс и серверную часть (API). Основное назначение решения —
            автоматизация процессов учёта оборудования, контроль наличия и
            перемещений материальных ценностей, проведение полной и частичной
            инвентаризации с применением RFID-технологий.
          </p>
          <p className="section-text">
            Система ориентирована на использование в организациях различного
            масштаба и позволяет:
          </p>
          <ul className="spec-list">
            <li>
              формировать единый справочник помещений (здания, этажи, комнаты);
            </li>
            <li>вести учёт оборудования с подробными характеристиками;</li>
            <li>использовать RFID-метки для быстрой идентификации объектов;</li>
            <li>проводить инвентаризацию и формировать отчёты;</li>
            <li>работать через удобные интерфейсы — мобильный и веб.</li>
          </ul>
        </section>

        {/* Раздел 2 */}
        <section className="spec-section">
          <h2 className="section-number">2. Терминология и определения</h2>
          <p className="section-text">
            В настоящем документе применяются следующие термины и сокращения:
          </p>

          <dl className="terminology-list">
            <div className="term-item">
              <dt>
                <strong>API (Application Programming Interface)</strong>
              </dt>
              <dd>
                — интерфейс прикладного программирования, обеспечивающий
                взаимодействие между мобильным приложением, веб-интерфейсом и
                серверной частью системы.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>RFID (Radio Frequency Identification)</strong>
              </dt>
              <dd>
                — технология автоматической идентификации объектов с
                использованием радиочастотных меток.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>RFID-метка</strong>
              </dt>
              <dd>
                — носитель информации, содержащий уникальный EPC-код, который
                может быть считан и записан с помощью RFID-считывателя.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>EPC (Electronic Product Code)</strong>
              </dt>
              <dd>
                — код, хранящийся в RFID-метке, позволяющий однозначно
                идентифицировать объект.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>TID (Tag Identifier)</strong>
              </dt>
              <dd>
                — неизменяемый уникальный идентификатор RFID-метки, записанный
                производителем.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>UID (Unique Identifier)</strong>
              </dt>
              <dd>
                — внутренний уникальный идентификатор записи в системе
                Имметрикс.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Инвентарный номер</strong>
              </dt>
              <dd>
                — уникальный номер, закреплённый за объектом (оборудованием) для
                целей бухгалтерского и управленческого учёта.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Справочник помещений</strong>
              </dt>
              <dd>
                — иерархическая структура, включающая здания, этажи и комнаты.
                Каждое оборудование должно быть привязано к конкретному
                помещению.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Оборудование (Inventory Tool)</strong>
              </dt>
              <dd>
                — объект учёта в системе (например, стол, компьютер, проектор,
                шкаф и т.п.).
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Отчёт (Report)</strong>
              </dt>
              <dd>
                — документ в системе, формируемый по результатам инвентаризации.
                Содержит сведения о найденном, отсутствующем или перемещённом
                оборудованием.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Инвентаризация (Inventory Report)</strong>
              </dt>
              <dd>
                — процесс сверки фактического наличия имущества с данными
                учётной системы. Может быть полной (по всем помещениям) или
                частичной (по выбранным помещениям).
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Пользователь системы</strong>
              </dt>
              <dd>
                — лицо, имеющее учётную запись в системе и выполняющее операции
                в рамках предоставленных прав (администратор, оператор,
                инвентаризатор).
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Токен (Access Token)</strong>
              </dt>
              <dd>
                — строковый идентификатор, выдаваемый сервером при авторизации,
                необходимый для доступа к API.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>CRUD-операции (Create, Read, Update, Delete)</strong>
              </dt>
              <dd>
                — набор стандартных операций для работы с данными в системе.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Серверная часть</strong>
              </dt>
              <dd>
                — центральный компонент, обеспечивающий хранение данных,
                обработку бизнес-логики и предоставление API для клиентов.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Мобильное приложение</strong>
              </dt>
              <dd>
                — Android-приложение для работы с RFID-метками и проведения
                инвентаризаций.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Веб-интерфейс</strong>
              </dt>
              <dd>
                — браузерное приложение для операторов и администраторов,
                обеспечивающее управление справочниками, оборудованием и
                отчётами.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>Сессия</strong>
              </dt>
              <dd>
                — период работы пользователя в системе после авторизации до
                выхода или истечения времени действия токена.
              </dd>
            </div>

            <div className="term-item">
              <dt>
                <strong>База данных</strong>
              </dt>
              <dd>
                — централизованное хранилище данных системы, включающее таблицы
                пользователей, помещений, оборудования и отчётов.
              </dd>
            </div>
          </dl>

          <h3 className="subsection-title">
            2.1. Перечень сокращений и обозначений
          </h3>
          <ul className="abbreviations-list">
            <li>
              <strong>API</strong> — Application Programming Interface,
              интерфейс для интеграции подсистем.
            </li>
            <li>
              <strong>RFID</strong> — Radio Frequency Identification,
              радиочастотная идентификация.
            </li>
            <li>
              <strong>EPC</strong> — Electronic Product Code, код на RFID-метке
              для идентификации объекта.
            </li>
            <li>
              <strong>TID</strong> — Tag Identifier, неизменяемый идентификатор
              метки (производителя).
            </li>
            <li>
              <strong>UID/UUID</strong> — Unique (Universal) Identifier,
              уникальный идентификатор записи.
            </li>
            <li>
              <strong>CRUD</strong> — Create/Read/Update/Delete, базовые
              операции с данными.
            </li>
            <li>
              <strong>JWT/Token</strong> — формат токена доступа, используемый
              для авторизации.
            </li>
            <li>
              <strong>JSON/JSONB</strong> — формат обмена данными / бинарный
              JSON в СУБД.
            </li>
            <li>
              <strong>HTTP(S)</strong> — протокол взаимодействия клиента и
              сервера.
            </li>
            <li>
              <strong>MVVM</strong> — Model-View-ViewModel, архитектурный
              паттерн мобильного клиента.
            </li>
            <li>
              <strong>DI</strong> — Dependency Injection, внедрение
              зависимостей.
            </li>
            <li>
              <strong>ТСД</strong> — терминал сбора данных (мобильное устройство
              с RFID).
            </li>
            <li>
              <strong>KPI</strong> — ключевые показатели эффективности (для
              отчётности/аналитики).
            </li>
          </ul>
        </section>

        {/* Раздел 3 */}
        <section className="spec-section">
          <h2 className="section-number">
            3. ПРОЕКТИРОВАНИЕ АРХИТЕКТУРЫ ПРОГРАММНЫХ РЕШЕНИЙ
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">
              3.1. Описание архитектуры существующей системы ПО
            </h3>
            <p className="section-text">
              Имметрикс — это клиент-серверная система учёта имущества и
              инвентаризаций с поддержкой RFID. Система состоит из трёх
              взаимосвязанных подсистем:
            </p>
            <ol className="numbered-list">
              <li>
                <strong>Серверная часть (API):</strong>
                <ul className="nested-list">
                  <li>
                    Реализует REST API для операций со справочниками помещений,
                    оборудованием, пользователями и отчётами.
                  </li>
                  <li>
                    Централизованно хранит данные (таблицы: этажи, комнаты,
                    оборудование, отчёты, инвентаризационные отчёты,
                    пользователи).
                  </li>
                  <li>
                    Бизнес-логика частично вынесена в SQL-функции (создание /
                    чтение / фильтры / отчётность).
                  </li>
                  <li>Авторизация по токену (Bearer) и разграничение прав.</li>
                </ul>
              </li>
              <li>
                <strong>Веб-интерфейс (FrontEnd):</strong>
                <ul className="nested-list">
                  <li>
                    Операторская панель: просмотр/редактирование оборудования,
                    работа со справочниками зданий/этажей/комнат, отчёты,
                    история инвентаризаций.
                  </li>
                  <li>
                    Взаимодействует с API через AJAX/fetch, подставляя токен
                    авторизации.
                  </li>
                  <li>
                    Визуальные сценарии: таблицы и фильтры, модальные окна
                    подтверждений, просмотр агрегированных показателей,
                    навигация по планам помещений.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Мобильное приложение (Android):</strong>
                <ul className="nested-list">
                  <li>
                    Инструмент полевой работы для инвентаризаторов: сканирование
                    RFID, привязка/перезапись меток, запуск полной/частичной
                    инвентаризации.
                  </li>
                  <li>
                    Работает с ТСД (терминалами с UHF RFID), поддерживает
                    потоковое считывание и одиночное чтение EPC/TID.
                  </li>
                  <li>
                    Выполняет поиск предметов по меткам/ID, редактирование
                    карточек и отправку отчётов инвентаризации на сервер.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="section-text">
              Обмен данными: HTTP(S) + JSON; все операции — через API.
              <br />
              Авторизация: логин/пароль → токен → Authorization: Bearer
              &lt;token&gt; во всех запросах.
              <br />
              Основные процессы: ведение справочников помещений, учёт
              оборудования (включая RFID и инвентарные номера), запуск
              инвентаризаций (full/part), формирование и хранение отчётов,
              просмотр истории и аналитики на фронте.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              3.2. Доработка архитектуры системы ПО
            </h3>
            <p className="section-text">
              В целях повышения эффективности и удобства эксплуатации
              предусмотрены следующие доработки:
            </p>

            <h4 className="subsubsection-title">3.2.1. Данные и БД</h4>
            <ul className="spec-list">
              <li>
                Введение детализированных «позиций инвентаризации» (предлагается
                таблица inventory_report_items) со статусами
                FOUND/MISSING/WRONG_ROOM, фиксацией room_expected/room_found,
                rfid, note — для точной аналитики и последующих выравниваний
                местоположения.
              </li>
              <li>
                Историзация карточек оборудования (inventory_tool_history):
                кто/когда/что изменил.
              </li>
              <li>
                Уникальные индексы на rfid и (при необходимости) inv_number.
              </li>
              <li>
                Материализованные представления для сводной аналитики по
                помещениям.
              </li>
            </ul>

            <h4 className="subsubsection-title">3.2.2. API и интеграции</h4>
            <ul className="spec-list">
              <li>
                Единый формат ответа функций: {"data"} : ... (уже используется)
                + единая схема ошибок.
              </li>
              <li>
                Расширенные фильтры списков (по зданию, этажу, комнате, типу,
                статусам).
              </li>
              <li>
                Конвейер «инвентаризация → отчёт → корректировка» (в т.ч.
                массовые правки местоположений по результатам).
              </li>
            </ul>

            <h4 className="subsubsection-title">3.2.3. FrontEnd</h4>
            <ul className="spec-list">
              <li>
                Унификация компонент таблиц и фильтров (один набор компонентов
                для списков/истории/отчётов).
              </li>
              <li>
                «План помещений» с подсветкой статусов (найден/не найден/не в
                своей комнате).
              </li>
              <li>
                Экспорт отчётов (CSV/XLSX), сохранение выбранных фильтров
                пользователей.
              </li>
            </ul>

            <h4 className="subsubsection-title">3.2.4. Android</h4>
            <ul className="spec-list">
              <li>
                Устойчивое потоковое чтение RFID с визуальными индикаторами
                занятости меток, «анти-дубликат» буфер.
              </li>
              <li>
                «Записать метку»: проверка занятости EPC, подтверждение
                перезаписи, запись EPC по TID-фильтру.
              </li>
              <li>
                Офлайн-кэш (черновики инвентаризации) с последующей отправкой.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              3.3. Архитектура коробочной версии системы ПО
            </h3>
            <p className="section-text">
              Цель: предоставить развёртываемый пакет («коробку») без привязки к
              внешним хостам.
            </p>
            <p className="section-text">
              <strong>Состав коробки:</strong>
            </p>
            <ul className="spec-list">
              <li>
                API-сервис в контейнере (Go-приложение), конфиг через переменные
                окружения.
              </li>
              <li>
                База данных (совместимая с текущими SQL-миграциями),
                инициализация миграциями при первом старте.
              </li>
              <li>
                FrontEnd как статические файлы, отдаваемые встроенным
                сервером/через Nginx.
              </li>
              <li>
                Android-клиент в виде APK (параметры API вынесены в настройки
                приложения).
              </li>
            </ul>

            <p className="section-text">
              <strong>Стандартный сценарий развёртывания:</strong>
            </p>
            <ol className="numbered-list">
              <li>Запуск БД и API (docker-compose).</li>
              <li>Прогон миграций.</li>
              <li>Публикация статического фронта.</li>
              <li>Выдача APК/инструкции пользователям.</li>
            </ol>

            <p className="section-text">
              <strong>Наблюдаемость и эксплуатация:</strong>
            </p>
            <ul className="spec-list">
              <li>Логирование запросов и ошибок на API.</li>
              <li>Технические метрики (эндпоинт для Prometheus/зондов).</li>
              <li>Бэкапы БД (снапшот/pg_dump по расписанию).</li>
            </ul>

            <p className="section-text">
              <strong>Безопасность:</strong>
            </p>
            <ul className="spec-list">
              <li>Обязательная авторизация.</li>
              <li>Шифрование трафика (TLS-терминация на фронтовом прокси).</li>
              <li>
                Секреты — через переменные окружения/секрет-хранилище, без
                кодирования в образ.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              3.4. Архитектурные паттерны и решения, которые будут использованы
              в ходе разработки приложения ПО для ОС Android
            </h3>
            <p className="section-text">
              <strong>Стек и каркас:</strong>
            </p>
            <ul className="spec-list">
              <li>Kotlin, архитектура MVVM.</li>
              <li>Repository-слой поверх API.</li>
              <li>ViewModel с LiveData/StateFlow для состояний UI.</li>
              <li>Retrofit/OkHttp для HTTP + интерцептор токена.</li>
              <li>Room/SQLite (при включении офлайн-кэша).</li>
              <li>
                DI (Koin/Hilt) — зависимости (API, репозитории, RFID-адаптер).
              </li>
            </ul>

            <p className="section-text">
              <strong>Модули приложения:</strong>
            </p>
            <ul className="spec-list">
              <li>
                Авторизация (логин → токен, хранение в безопасном хранилище,
                авто-рефреш по политике сессии).
              </li>
              <li>
                Справочники (дерево «здание → этаж → комнаты», ленивые
                загрузки).
              </li>
              <li>
                Оборудование (списки, карточка, правки, фильтры, пакетное
                изменение).
              </li>
              <li>
                <strong>RFID:</strong>
                <ul className="nested-list">
                  <li>
                    потоковая инвентаризация (start/stop, буфер,
                    анти-дубликаты);
                  </li>
                  <li>
                    «Записать метку» (проверка занятости, подтверждение
                    перезаписи, запись EPC по TID фильтру);
                  </li>
                  <li>
                    «Показать предмет по метке» (модалка с данными, переход в
                    карточку).
                  </li>
                </ul>
              </li>
              <li>
                Инвентаризация (режимы: full/part, выбор помещений, фиксация
                статусов, формирование отчёта и отправка).
              </li>
            </ul>

            <p className="section-text">
              <strong>Точки качества:</strong>
            </p>
            <ul className="spec-list">
              <li>
                Единый обработчик ошибок (сетевые/SDK), ретраи при временных
                сбоях.
              </li>
              <li>
                Разделение UI-состояний: Loading / Content / Empty / Error.
              </li>
              <li>
                Тестирование: юнит-тесты репозиториев,
                интеграционные/инструментальные по ключевым сценариям RFID и
                отчётов.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              3.5. Архитектурные паттерны и решения, которые будут использованы
              в ходе разработки приложения ПО для ОС iOS
            </h3>
            <p className="section-text">
              Примечание: на текущем этапе мобильный клиент реализован для
              Android. Данный подраздел включён для совместимости структуры
              документа и описывает целевые подходы при возможной разработке
              iOS-клиента.
            </p>
            <p className="section-text">
              <strong>Целевые решения (при необходимости iOS-клиента):</strong>
            </p>
            <ul className="spec-list">
              <li>Язык Swift, архитектура MVVM.</li>
              <li>
                URLSession (или Alamofire) для API, перехват/обновление токена.
              </li>
              <li>Локальный кэш (Core Data/SQLite) для офлайн-режима.</li>
              <li>
                Модуль RFID — через совместимый SDK/бридж (если устройство
                поддерживается iOS).
              </li>
              <li>
                Те же пользовательские сценарии, что в Android-клиенте:
                справочники, карточки, инвентаризация, отчёты, «запись метки».
              </li>
            </ul>
          </div>
        </section>

        <section className="spec-section">
          <h2 className="section-number">4. БАЗА ДАННЫХ</h2>

          <div className="subsection">
            <h3 className="subsection-title">
              4.1. Общая структура базы данных
            </h3>
            <p className="section-text">
              В системе Имметрикс используется централизованная реляционная база
              данных для хранения информации о зданиях, помещениях и объектах
              учёта.
            </p>
            <p className="section-text">
              База данных содержит следующие основные сущности:
            </p>
            <ul className="spec-list">
              <li>Здания и этажи — структурное деление организации.</li>
              <li>
                Комнаты — конкретные помещения, к которым привязано имущество.
              </li>
              <li>
                Оборудование (Inventory Tools) — материальные объекты,
                подлежащие учёту и инвентаризации.
              </li>
              <li>
                Отчёты и инвентаризационные отчёты — фиксация проведённых
                проверок.
              </li>
              <li>Пользователи — сотрудники, имеющие доступ к системе.</li>
            </ul>
            <p className="section-text">
              Все объекты имеют уникальные идентификаторы (UUID), поддерживается
              принцип мягкого удаления (deleted_at). Для временных меток
              используется поле created_at, а также updated_at для фиксации
              последних изменений.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.2. Таблицы базы данных</h3>

            <div className="table-description">
              <h4 className="table-title">4.2.1. Таблица floor</h4>
              <p className="section-text">
                <strong>Назначение:</strong> хранение этажей в разрезе зданий.
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор этажа (UUID);
                </li>
                <li>
                  <code>number</code> — номер этажа (целое число);
                </li>
                <li>
                  <code>building</code> — код/название здания.
                </li>
              </ul>
            </div>

            <div className="table-description">
              <h4 className="table-title">4.2.2. Таблица room</h4>
              <p className="section-text">
                <strong>Назначение:</strong> хранение комнат (помещений),
                привязанных к этажам.
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор комнаты (UUID);
                </li>
                <li>
                  <code>number</code> — номер комнаты (строка, например «101»);
                </li>
                <li>
                  <code>name</code> — наименование помещения;
                </li>
                <li>
                  <code>floor_id</code> — внешний ключ на floor.id.
                </li>
              </ul>
            </div>

            <div className="table-description">
              <h4 className="table-title">4.2.3. Таблица inventory_tool</h4>
              <p className="section-text">
                <strong>Назначение:</strong> хранение данных об объектах учёта
                (оборудование, имущество).
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор объекта (UUID);
                </li>
                <li>
                  <code>name</code> — наименование;
                </li>
                <li>
                  <code>type</code> — тип/категория;
                </li>
                <li>
                  <code>description</code> — описание;
                </li>
                <li>
                  <code>room_id</code> — внешний ключ на комнату (room.id);
                </li>
                <li>
                  <code>attributes</code> — дополнительные характеристики
                  (JSONB);
                </li>
                <li>
                  <code>price</code> — стоимость (число с плавающей точкой);
                </li>
                <li>
                  <code>rfid</code> — код RFID-метки (строка);
                </li>
                <li>
                  <code>inv_number</code> — инвентарный номер;
                </li>
                <li>
                  <code>written_off_by</code> — кем списано (если применимо);
                </li>
                <li>
                  <code>created_at, updated_at, deleted_at</code>.
                </li>
              </ul>
            </div>

            <div className="table-description">
              <h4 className="table-title">4.2.4. Таблица report</h4>
              <p className="section-text">
                <strong>Назначение:</strong> хранение произвольных отчётов
                (например, выборки по имуществу).
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор (UUID);
                </li>
                <li>
                  <code>inventory_tool_id</code> — массив ID имущества;
                </li>
                <li>
                  <code>created_at, deleted_at</code>.
                </li>
              </ul>
            </div>

            <div className="table-description">
              <h4 className="table-title">4.2.5. Таблица inventory_report</h4>
              <p className="section-text">
                <strong>Назначение:</strong> хранение результатов
                инвентаризаций.
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор отчёта (UUID);
                </li>
                <li>
                  <code>inventory_tool_id</code> — массив ID предметов;
                </li>
                <li>
                  <code>room_ids</code> — массив ID комнат (для частичной
                  инвентаризации);
                </li>
                <li>
                  <code>type</code> — тип (full или part);
                </li>
                <li>
                  <code>building</code> — здание (строка);
                </li>
                <li>
                  <code>created_at, deleted_at</code>.
                </li>
              </ul>
            </div>

            <div className="table-description">
              <h4 className="table-title">4.2.6. Таблица users</h4>
              <p className="section-text">
                <strong>Назначение:</strong> управление пользователями системы.
              </p>
              <p className="section-text">
                <strong>Основные поля:</strong>
              </p>
              <ul className="field-list">
                <li>
                  <code>id</code> — идентификатор (UUID);
                </li>
                <li>
                  <code>login</code> — логин пользователя;
                </li>
                <li>
                  <code>password_hash</code> — хэш пароля;
                </li>
                <li>
                  <code>role</code> — роль (например, администратор,
                  инвентаризатор);
                </li>
                <li>
                  <code>deleted_at</code>.
                </li>
              </ul>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.3. Связи между таблицами</h3>
            <ul className="spec-list">
              <li>Этажи → Комнаты: один этаж содержит несколько комнат.</li>
              <li>
                Комнаты → Inventory Tools: имущество закрепляется за конкретной
                комнатой.
              </li>
              <li>
                Inventory Tools → Отчёты: предметы включаются в состав отчётов и
                инвентаризационных отчётов.
              </li>
              <li>
                Пользователи участвуют в изменении данных и формировании
                отчётов.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">4.4. Индексы и оптимизация</h3>
            <ul className="spec-list">
              <li>Уникальные индексы: rfid, inv_number.</li>
              <li>Внешние ключи: room.floor_id, inventory_tool.room_id.</li>
              <li>
                Рекомендуется индексация по created_at (для выборки истории) и
                по building (для инвентаризаций по зданиям).
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              4.5. Процедурные функции базы данных
            </h3>

            <div className="function-description">
              <h4 className="function-subtitle">
                4.5.1. Управление этажами (floor)
              </h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.1.1. public.floor_create(_id character varying, _number
                  bigint, _building character varying) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> создание этажа.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong>
                </p>
                <ul className="field-list">
                  <li>
                    <code>_id</code> — UUID строкой (обязателен);
                  </li>
                  <li>
                    <code>_number</code> — номер этажа (целое);
                  </li>
                  <li>
                    <code>_building</code> — код/имя здания.
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Бизнес-правила:</strong>
                </p>
                <ul className="spec-list">
                  <li>
                    <code>_id</code> приводится к uuid;
                  </li>
                  <li>
                    при дублировании (building, number) рекомендуется возвращать
                    ошибку (или игнорировать вставку по политике проекта).
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">{`{ "data": null }`}</pre>
                <p className="section-text">
                  <strong>Замечания:</strong> унифицировать тип _number с типом
                  столбца floor.number (int/bigint).
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.1.2. public.floor_get() RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> получить список этажей.
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> массив этажей в обёртке:
                </p>
                <pre className="code-block">
                  {`{
  "data": [
    { "id": "<uuid>", "number": 1, "building": "theatre" },
    ...
  ]
}`}
                </pre>
                <p className="section-text">
                  <strong>Сортировка:</strong> по building, затем number
                  (рекомендовано).
                </p>
                <p className="section-text">
                  <strong>Фильтр удалённых:</strong> не требуется (у этажей нет
                  deleted_at в текущей схеме).
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.1.3. public.floor_getbybuilding(_building character
                  varying) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> выборка этажей для заданного
                  здания.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong> <code>_building</code> — код/имя
                  здания.
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> как в floor_get, но отфильтровано
                  по _building.
                </p>
              </div>
            </div>

            <div className="function-description">
              <h4 className="function-subtitle">
                4.5.2. Управление помещениями (room)
              </h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.2.1. public.room_create(_id character varying, _number
                  bigint, _name character varying, _floor_id character varying)
                  RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> создание комнаты.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong>
                </p>
                <ul className="field-list">
                  <li>
                    <code>_id</code> — UUID строкой;
                  </li>
                  <li>
                    <code>_number</code> — номер комнаты (целое/строковое
                    представление; в таблице хранится varchar(10) — привести на
                    уровне функции);
                  </li>
                  <li>
                    <code>_name</code> — человекочитаемое имя комнаты;
                  </li>
                  <li>
                    <code>_floor_id</code> — UUID этажа строкой.
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Проверки:</strong>
                </p>
                <ul className="spec-list">
                  <li>существование floor(_floor_id);</li>
                  <li>
                    уникальность number/name внутри этажа (рекомендовано).
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">{`{ "data": null }`}</pre>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.2.2. public.room_get() RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> получить список всех комнат.
                </p>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">
                  {`{
  "data": [
    { "id":"<uuid>", "number":"101", "name":"Кабинет 101", "floor_id":"<uuid>" },
    ...
  ]
}`}
                </pre>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.2.3. public.room_getbyfloorid(_floor_id character varying)
                  RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> выборка комнат по этажу.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong> <code>_floor_id</code> — UUID
                  этажа (строкой).
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> массив комнат указанного этажа
                  (см. схему выше).
                </p>
              </div>
            </div>

            <div className="function-description">
              <h4 className="function-subtitle">
                4.5.3. Оборудование/имущество (inventory_tool)
              </h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.3.1. public.inventorytool_get() RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> получить список имущества.
                </p>
                <p className="section-text">
                  <strong>Результат</strong> (пример структуры элемента):
                </p>
                <pre className="code-block">
                  {`{
  "data": [
    {
      "id":"<uuid>",
      "name":"Стол",
      "type":"Мебель",
      "description":"Письменный стол",
      "room_id":"<uuid>",
      "attributes": { },
      "price": 12000.0,
      "inv_number": "INV-001",
      "rfid": "E2801170...",
      "created_at":"2024-01-10T10:00:00Z",
      "updated_at":"2024-02-01T11:00:00Z",
      "deleted_at": null
    }
  ]
}`}
                </pre>
                <p className="section-text">
                  <strong>Фильтр:</strong> по умолчанию рекомендуется исключать
                  записи с deleted_at IS NOT NULL (если не требуется иначе).
                </p>
                <p className="section-text">
                  <strong>Сортировка:</strong> created_at DESC (как в
                  списках/истории на фронте).
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.3.2. public.inventorytool_getbyids(ids character
                  varying[]) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> выборка имущества по массиву ID.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong> <code>ids</code> — массив UUID
                  (строкой).
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> массив объектов той же структуры,
                  что в inventorytool_get().
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.3.3. public.inventorytool_filterlist(...) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> отфильтрованный список имущества.
                </p>
                <p className="section-text">
                  <strong>Типичные параметры фильтра</strong> (по коду
                  функций/фронта):
                </p>
                <ul className="spec-list">
                  <li>name (ILIKE), type, inv_number, rfid,</li>
                  <li>
                    фильтрация по room_id, по зданию/этажу через join
                    rooms/floors (если включено),
                  </li>
                  <li>
                    признаки «только активные» (deleted_at IS NULL), диапазоны
                    дат.
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Результат:</strong> массив объектов, как в
                  inventorytool_get().
                </p>
                <p className="section-text">
                  <strong>Особенности реализаций:</strong>
                </p>
                <ul className="spec-list">
                  <li>
                    агрегация JSON через JSONB_AGG(JSONB_BUILD_OBJECT(...)),
                  </li>
                  <li>
                    пагинация может быть реализована на уровне приложения; при
                    необходимости — добавить _limit/_offset.
                  </li>
                </ul>
              </div>
            </div>

            <div className="function-description">
              <h4 className="function-subtitle">
                4.5.4. Отчёты (не «инвентаризация»)
              </h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.4.1. public.report_create(_id character varying,
                  _inventory_tool_ids character varying[]) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> создать отчёт по набору
                  предметов.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong>
                </p>
                <ul className="field-list">
                  <li>
                    <code>_id</code> — UUID отчёта (строкой);
                  </li>
                  <li>
                    <code>_inventory_tool_ids</code> — массив UUID предметов
                    (строкой).
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Логика:</strong> вставка в report(id,
                  inventory_tool_id, created_at).
                </p>
                <p className="section-text">
                  <strong>Результат</strong> (вариант):
                </p>
                <pre className="code-block">
                  {`{ "data": { "id":"<uuid>", "created_at":"<ts>" } }`}
                </pre>
                <p className="section-text">или</p>
                <pre className="code-block">{`{ "data": null }`}</pre>
                <p className="section-text">
                  (в зависимости от реализации возврата в миграции).
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.4.2. public.report_get() RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> получить список отчётов.
                </p>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">
                  {`{
  "data": [
    { "id":"<uuid>", "inventory_tool_id":["<uuid>", "..."], "created_at":"<ts>", "deleted_at": null }
  ]
}`}
                </pre>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.4.3. public.report_getbyid(_id character varying) RETURNS
                  JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> получить отчёт по ID.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong> <code>_id</code> — UUID отчёта
                  строкой.
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> объект отчёта (см. структуру выше)
                  в обёртке {"data"} : ....
                </p>
              </div>
            </div>

            <div className="function-description">
              <h4 className="function-subtitle">
                4.5.5. Инвентаризационные отчёты
              </h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.5.1. public.inventoryreport_create(_id character varying,
                  _type character varying, _room_ids character varying[],
                  _inventory_tool_ids character varying[], _building character
                  varying) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> создание отчёта инвентаризации.
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong>
                </p>
                <ul className="field-list">
                  <li>
                    <code>_id</code> — UUID отчёта (строкой);
                  </li>
                  <li>
                    <code>_type</code> — 'full' либо 'part';
                  </li>
                  <li>
                    <code>_room_ids</code> — массив UUID комнат (для частичной
                    инвентаризации; для полной — пустой/NULL);
                  </li>
                  <li>
                    <code>_inventory_tool_ids</code> — массив UUID предметов,
                    попавших в акт;
                  </li>
                  <li>
                    <code>_building</code> — признак здания (строкой).
                  </li>
                </ul>
                <p className="section-text">
                  <strong>Логика:</strong> вставка в inventory_report(...) с
                  created_at NOW().
                </p>
                <p className="section-text">
                  <strong>Результат:</strong> {"data"} : ...(id, type,
                  created_at) или {"data"} : null.
                </p>
              </div>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.5.2. public.inventoryreport_filterlist(...) RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> фильтрация и выдача списка
                  инвентаризационных отчётов.
                </p>
                <p className="section-text">
                  <strong>Фильтры</strong> (типично):
                </p>
                <ul className="spec-list">
                  <li>по типу (full/part),</li>
                  <li>по зданию,</li>
                  <li>по датам (created_at диапазон),</li>
                  <li>по «активности» (deleted_at IS NULL).</li>
                </ul>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">
                  {`{
  "data": [
    {
      "id":"<uuid>",
      "type":"part",
      "room_id":["<uuid>", "..."],
      "inventory_tool_id":["<uuid>", "..."],
      "building":"warehouse",
      "created_at":"<ts>",
      "deleted_at": null
    }
  ]
}`}
                </pre>
                <p className="section-text">
                  <strong>Примечание:</strong> если потребуется детализированный
                  статус «найден/не найден/в другой комнате», рекомендуется
                  ввести отдельную таблицу inventory_report_items и
                  соответствующие функции (inventoryreportitem_add,
                  inventoryreportitem_list, и т.д.).
                </p>
              </div>
            </div>

            <div className="function-description">
              <h4 className="function-subtitle">4.5.6. Пользователи</h4>

              <div className="function-item">
                <h5 className="function-name">
                  4.5.6.1. public.users_getbylogin(_login character varying)
                  RETURNS JSONB
                </h5>
                <p className="section-text">
                  <strong>Назначение:</strong> выбор пользователя по логину
                  (этап аутентификации).
                </p>
                <p className="section-text">
                  <strong>Параметры:</strong> <code>_login</code> — строка
                  (логин).
                </p>
                <p className="section-text">
                  <strong>Результат:</strong>
                </p>
                <pre className="code-block">
                  {`{
  "data": {
    "id":"<uuid>",
    "login":"user@example.com",
    "password_hash":"<hash>",
    "role":"admin"
  }
}`}
                </pre>
                <p className="section-text">
                  <strong>Правила:</strong>
                </p>
                <ul className="spec-list">
                  <li>deleted_at IS NULL;</li>
                  <li>единственность логина — уникальный индекс.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="subsection">
            <h3 className="subsection-title">
              4.6. Единые требования к возвратам и ошибкам
            </h3>
            <ul className="spec-list">
              <li>Все функции возвращают JSONB с обёрткой {"data"} : ....</li>
              <li>
                Пустой результат — {"data"} : null или {"data"} : [] для списков
                (согласовать единый стиль).
              </li>
              <li>
                Ошибки/валидации — единый формат (рекомендация):
                <pre className="code-block">
                  {`{ "error": { "code": "<string>", "message": "<string>" } }`}
                </pre>
                либо вызов/обёртка на уровне API.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              4.7. Рекомендации к дальнейшему развитию процедур
            </h3>
            <ol className="numbered-list">
              <li>
                Пагинация для функций-листингов (_limit, _offset) и стабильная
                сортировка.
              </li>
              <li>
                Валидации: уникальность rfid/inv_number до вставок/обновлений
                (возврат кодов ошибок).
              </li>
              <li>
                Историзация: триггеры, записывающие изменения в
                inventory_tool_history.
              </li>
              <li>
                Инвентаризация-позиции: отдельные CRUD-функции по
                inventory_report_items (добавление позиций, обновление статуса,
                листинг по отчёту/комнате/зданию).
              </li>
            </ol>
          </div>
        </section>
        <section className="spec-section">
          <h2 className="section-number">
            5. ФУНКЦИОНАЛЬНЫЕ ХАРАКТЕРИСТИКИ FRONTEND
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">5.1. Назначение подсистемы</h3>
            <p className="section-text">
              Веб-интерфейс Имметрикс предназначен для операторов и
              администраторов. Он обеспечивает централизованное управление
              справочниками (здания, этажи, комнаты), оборудованием,
              пользователями, а также доступ к отчётам и истории инвентаризаций.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">5.2. Основные задачи</h3>
            <ul className="spec-list">
              <li>
                Просмотр и редактирование информации о помещениях и имуществе.
              </li>
              <li>Создание, просмотр и экспорт отчётов.</li>
              <li>Управление пользователями (логины, роли, блокировки).</li>
              <li>Настройка параметров системы (адрес API, параметры RFID).</li>
              <li>
                Аналитика по зданиям и помещениям (сводные таблицы и фильтры).
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              5.3. Основные страницы интерфейса
            </h3>

            <ol className="numbered-list">
              <li>
                <strong>Авторизация</strong>
                <ol className="nested-list" type="a">
                  <li>Форма логина/пароля.</li>
                  <li>Отправка запроса на API /login.</li>
                  <li>При успешном ответе сохраняется токен.</li>
                </ol>
              </li>
              <li>
                <strong>Главная страница (Дашборд)</strong>
                <ol className="nested-list" type="a">
                  <li>
                    Сводные показатели: количество предметов, количество
                    инвентаризаций, активные отчёты.
                  </li>
                  <li>Навигация по разделам.</li>
                </ol>
              </li>
              <li>
                <strong>Справочники</strong>
                <ol className="nested-list" type="a">
                  <li>Иерархия «здание → этаж → комнаты».</li>
                  <li>
                    CRUD-операции: добавление/редактирование/удаление этажей и
                    помещений.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Оборудование</strong>
                <ol className="nested-list" type="a">
                  <li>
                    Список имущества: ID, инв. номер, наименование, тип,
                    комната.
                  </li>
                  <li>Фильтры: по имени, типу, зданию, комнате, RFID.</li>
                  <li>Карточка предмета: описание, цена, атрибуты, RFID.</li>
                  <li>
                    Возможность редактировать поля и перемещать между комнатами.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Отчёты</strong>
                <ol className="nested-list" type="a">
                  <li>История отчётов.</li>
                  <li>Просмотр деталей: состав имущества, даты.</li>
                  <li>Экспорт в CSV/XLSX.</li>
                </ol>
              </li>
              <li>
                <strong>Инвентаризационные отчёты</strong>
                <ol className="nested-list" type="a">
                  <li>Отдельная страница для инвентаризаций (full/part).</li>
                  <li>Просмотр зданий/комнат, участвовавших в отчёте.</li>
                  <li>Анализ найденных и отсутствующих предметов.</li>
                </ol>
              </li>
              <li>
                <strong>Пользователи</strong>
                <ol className="nested-list" type="a">
                  <li>Список пользователей.</li>
                  <li>Роли (администратор, оператор, инвентаризатор).</li>
                  <li>Создание/удаление/блокировка.</li>
                </ol>
              </li>
              <li>
                <strong>Настройки</strong>
                <ol className="nested-list" type="a">
                  <li>Адрес API.</li>
                  <li>Значения по умолчанию (например, фильтры).</li>
                  <li>Управление системными параметрами.</li>
                </ol>
              </li>
            </ol>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">5.4. Роли и права</h3>
            <ul className="spec-list">
              <li>
                <strong>Администратор</strong> — полный доступ.
              </li>
              <li>
                <strong>Оператор</strong> — работа с оборудованием и отчётами,
                без управления пользователями.
              </li>
              <li>
                <strong>Инвентаризатор</strong> — только просмотр и выгрузка
                данных, без редактирования.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              5.5. Онбординг и справка в продукте (Frontend)
            </h3>
            <p className="section-text">
              <strong>Цель:</strong> сократить время освоения интерфейса и
              снизить количество ошибок.
            </p>
            <p className="section-text">
              <strong>Функционал:</strong>
            </p>
            <ul className="spec-list">
              <li>
                Пошаговые подсказки при первом входе (логин → выбор здания/этажа
                → работа со списком оборудования → формирование отчёта).
              </li>
              <li>
                Встроенная справка на страницах (иконка «?» + модальные окна).
              </li>
              <li>Демонстрационные данные (опционально, флаг в настройках).</li>
              <li>Сценарные «мастера» (wizard) для инвентаризации part.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              5.6. Маршруты согласования результатов инвентаризации (Frontend)
            </h3>
            <p className="section-text">
              <strong>Цель:</strong> обеспечить контроль качества и формальную
              приёмку результатов.
            </p>
            <p className="section-text">
              <strong>Роли:</strong> Исполнитель → Руководитель → Администратор.
            </p>
            <p className="section-text">
              <strong>Функционал:</strong>
            </p>
            <ul className="spec-list">
              <li>
                Отправка отчёта в согласование (статусы: draft → on_review →
                approved/rejected).
              </li>
              <li>Комментарии и история правок.</li>
              <li>
                Шаблоны маршрутов согласования (по подразделениям/зданиям).
              </li>
              <li>Уведомления (e-mail/WebPush) участникам маршрута.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              5.7. Кампании инвентаризаций (Frontend)
            </h3>
            <p className="section-text">
              <strong>Цель:</strong> планирование инвентаризаций
              волнами/периодами.
            </p>
            <p className="section-text">
              <strong>Функции:</strong>
            </p>
            <ul className="spec-list">
              <li>
                Создание кампании (период, список зданий/комнат, целевые KPI).
              </li>
              <li>Привязка инвентаризационных отчётов к кампании.</li>
              <li>Дэшборд прогресса (выполнено/остаток, найдено/пропущено).</li>
              <li>Экспорт итогов кампании.</li>
            </ul>
          </div>
        </section>
        <section className="spec-section">
          <h2 className="section-number">
            6. ФУНКЦИОНАЛЬНЫЕ ХАРАКТЕРИСТИКИ ANDROID-ПРИЛОЖЕНИЯ
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">6.1. Назначение подсистемы</h3>
            <p className="section-text">
              Мобильное приложение Имметрикс используется сотрудниками на местах
              для проведения инвентаризаций и работы с RFID-метками.
              Поддерживаются ТСД с встроенным RFID-считывателем.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">6.2. Основные задачи</h3>
            <ul className="spec-list">
              <li>Авторизация и получение токена.</li>
              <li>Просмотр справочников и имущества.</li>
              <li>Сканирование RFID-меток (одиночное и потоковое).</li>
              <li>Привязка/перезапись RFID-метки к предмету.</li>
              <li>Проведение полной или частичной инвентаризации.</li>
              <li>Отправка отчётов в систему.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">6.3. Основные экраны</h3>

            <ol className="numbered-list">
              <li>
                <strong>Экран авторизации</strong>
                <ol className="nested-list" type="a">
                  <li>Ввод логина/пароля.</li>
                  <li>Получение токена, сохранение в памяти устройства.</li>
                </ol>
              </li>
              <li>
                <strong>Главное меню</strong>
                <ol className="nested-list" type="a">
                  <li>
                    Разделы: Инвентаризация, Просмотр справочников, Записать
                    метку, Считать RFID, Настройки.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Просмотр справочников</strong>
                <ol className="nested-list" type="a">
                  <li>Отображение иерархии помещений.</li>
                  <li>Вывод списка оборудования: инв. номер + название.</li>
                  <li>Переход в карточку предмета.</li>
                </ol>
              </li>
              <li>
                <strong>Карточка оборудования</strong>
                <ol className="nested-list" type="a">
                  <li>
                    Просмотр/редактирование: имя, описание, цена, инв. номер,
                    RFID.
                  </li>
                  <li>Перемещение в другое помещение.</li>
                  <li>Списание (поле written_off_by).</li>
                </ol>
              </li>
              <li>
                <strong>Сканирование RFID</strong>
                <ol className="nested-list" type="a">
                  <li>Запуск режима считывания.</li>
                  <li>Отображение списка EPC.</li>
                  <li>Занятые метки — красным, свободные — зелёным.</li>
                  <li>
                    При нажатии на свободную метку — выбор предмета для
                    привязки.
                  </li>
                  <li>
                    При нажатии на занятую метку — модалка с информацией +
                    кнопка «Перезаписать».
                  </li>
                </ol>
              </li>
              <li>
                <strong>Запись метки</strong>
                <ol className="nested-list" type="a">
                  <li>
                    Процедура записи EPC в RFID через SDK устройства (по
                    TID-фильтру).
                  </li>
                  <li>Подтверждение операции.</li>
                </ol>
              </li>
              <li>
                <strong>Инвентаризация</strong>
                <ol className="nested-list" type="a">
                  <li>Выбор типа: full или part.</li>
                  <li>Для part — выбор зданий и комнат.</li>
                  <li>
                    Сканирование меток → формирование списка найденных
                    предметов.
                  </li>
                  <li>
                    Кнопка «Завершить инвентаризацию» → POST отчёта на сервер.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Настройки</strong>
                <ol className="nested-list" type="a">
                  <li>Адрес API.</li>
                  <li>Мощность RFID-считывателя (0–100).</li>
                  <li>
                    Локальные параметры (например, авто-стоп сканирования).
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">6.4. Взаимодействие с API</h3>
            <ul className="spec-list">
              <li>Авторизация → POST /login, получение токена.</li>
              <li>
                Все запросы с заголовком Authorization: Bearer &lt;token&gt;.
              </li>
              <li>
                <strong>Основные эндпоинты:</strong>
                <ul className="nested-list">
                  <li>/inventory_tools/list — список оборудования;</li>
                  <li>/inventory_tool/:id — обновление предмета;</li>
                  <li>/report — обычные отчёты;</li>
                  <li>/inventory_report — отчёты инвентаризаций.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="spec-section">
          <h2 className="section-number">
            7. ВЗАИМОДЕЙСТВИЕ КОМПОНЕНТОВ СИСТЕМЫ
          </h2>

          <div className="subsection">
            <h3 className="subsection-title">
              7.1. Общая схема взаимодействия
            </h3>
            <p className="section-text">
              Система Имметрикс построена по клиент-серверной архитектуре.
              <br />
              Все компоненты обмениваются данными через единый REST API,
              доступный по протоколу HTTPS.
            </p>
            <p className="section-text">
              <strong>Основные подсистемы:</strong>
            </p>
            <ul className="spec-list">
              <li>
                <strong>Backend (API-сервис)</strong> — центральный узел
                обработки запросов и хранения данных.
              </li>
              <li>
                <strong>Frontend (веб-интерфейс)</strong> — взаимодействует с
                API через AJAX-запросы, обеспечивает операторскую работу.
              </li>
              <li>
                <strong>Android-приложение</strong> — выполняет полевую работу
                (RFID, инвентаризация), общается с API напрямую.
              </li>
            </ul>
            <p className="section-text">
              Все клиенты работают с единым API и используют единые структуры
              данных (JSON).
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              7.2. Авторизация и аутентификация
            </h3>

            <ol className="numbered-list">
              <li>
                <strong>Этап входа:</strong>
                <ol className="nested-list" type="a">
                  <li>Пользователь вводит login и password.</li>
                  <li>Отправляется запрос POST /login.</li>
                  <li>В ответ возвращается token.</li>
                </ol>
              </li>
              <li>
                <strong>Использование токена:</strong>
                <ol className="nested-list" type="a">
                  <li>
                    При всех дальнейших запросах клиент отправляет заголовок:
                    <br />
                    <code>Authorization: Bearer &lt;token&gt;</code>
                  </li>
                </ol>
              </li>
              <li>
                <strong>Права доступа:</strong>
                <ol className="nested-list" type="a">
                  <li>
                    В API проверяются роли (admin, operator, inventory и т.д.).
                  </li>
                  <li>
                    Ограничение доступа к функциям (например, управление
                    пользователями доступно только администраторам).
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              7.3. Взаимодействие FrontEnd ↔ Backend
            </h3>
            <ul className="spec-list">
              <li>
                <strong>Технологии:</strong> JavaScript (React) ↔ REST API.
              </li>
              <li>
                <strong>Типичный сценарий:</strong>
                <ul className="nested-list">
                  <li>
                    FrontEnd загружает справочники (/rooms_floors_list),
                    отображает иерархию зданий.
                  </li>
                  <li>
                    При открытии списка оборудования вызывает
                    /inventory_tools/list.
                  </li>
                  <li>
                    При редактировании карточки предмета — PUT
                    /inventory_tool/:id.
                  </li>
                  <li>
                    Для формирования отчётов вызывает POST /report или
                    /inventory_report.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Особенности:</strong>
                <ul className="nested-list">
                  <li>Ответы от API всегда в JSON-формате.</li>
                  <li>Для таблиц используется пагинация и фильтры.</li>
                  <li>Ошибки отображаются в модальных окнах.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              7.4. Взаимодействие Android ↔ Backend
            </h3>
            <ul className="spec-list">
              <li>
                <strong>Технологии:</strong> Kotlin (Retrofit + OkHttp) ↔ REST
                API.
              </li>
              <li>
                <strong>Основные сценарии:</strong>
                <ul className="nested-list">
                  <li>Авторизация (POST /login → токен).</li>
                  <li>
                    Загрузка справочников и оборудования (/rooms_floors_list,
                    /inventory_tools/list).
                  </li>
                  <li>Сканирование RFID → POST /inventory_tools с EPC.</li>
                  <li>
                    Запись RFID → PUT /inventory_tool/:id (обновление поля
                    rfid).
                  </li>
                  <li>Проведение инвентаризации → POST /inventory_report.</li>
                </ul>
              </li>
              <li>
                <strong>Особенности:</strong>
                <ul className="nested-list">
                  <li>
                    Поддержка потокового сканирования с последующей агрегацией и
                    отправкой пакета EPC.
                  </li>
                  <li>Проверка уникальности RFID на уровне API.</li>
                  <li>
                    Возможность частичной инвентаризации (с выбором room_ids).
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              7.5. Механизмы синхронизации и целостности
            </h3>
            <ul className="spec-list">
              <li>Единый источник данных — база данных Backend.</li>
              <li>
                Frontend всегда загружает данные напрямую с сервера (без
                оффлайн-режима).
              </li>
              <li>
                Android может кэшировать данные (справочники и оборудование) для
                оффлайн-работы. При восстановлении соединения черновики
                инвентаризации отправляются на сервер.
              </li>
              <li>
                RFID-операции: уникальность проверяется только на сервере при
                привязке метки.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">7.6. Обмен данными и форматы</h3>
            <ul className="spec-list">
              <li>
                <strong>Формат обмена:</strong> JSON.
              </li>
              <li>
                <strong>Пример объекта оборудования:</strong>
                <pre className="code-block">
                  {`{
  "id": "uuid",
  "name": "Стол",
  "type": "Мебель",
  "room_id": "uuid",
  "rfid": "E2801170...",
  "inv_number": "INV-001",
  "attributes": {},
  "price": 10000.0,
  "created_at": "2024-01-01T10:00:00Z"
}`}
                </pre>
              </li>
              <li>
                <strong>Пример отчёта инвентаризации:</strong>
                <pre className="code-block">
                  {`{
  "id": "uuid",
  "type": "part",
  "room_ids": ["uuid1", "uuid2"],
  "inventory_tools_ids": ["uuid3", "uuid4"],
  "building": "warehouse",
  "created_at": "2024-01-15T12:00:00Z"
}`}
                </pre>
              </li>
            </ul>
          </div>
        </section>
        <section className="spec-section">
          <h2 className="section-number">8. Интеграции</h2>

          <div className="subsection">
            <h3 className="subsection-title">
              8.1. Интеграция с RFID-оборудованием (SDK)
            </h3>
            <ul className="spec-list">
              <li>
                Поддержка SDK устройств ТСД (UHF RFID): чтение EPC/TID, запись
                EPC (по TID-фильтру), регулировка мощности.
              </li>
              <li>
                Единый адаптер в Android-клиенте (интерфейс для разных моделей).
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              8.2. Импорт/экспорт справочников и данных
            </h3>
            <ul className="spec-list">
              <li>
                <strong>Импорт CSV/XLSX:</strong> здания/этажи/комнаты,
                оборудование (name/type/inv_number/room/price/rfid).
              </li>
              <li>
                <strong>Экспорт CSV/XLSX/PDF:</strong> отчёты, итоги
                инвентаризаций, карточки оборудования.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              8.3. Интеграция с внешними учётными системами (ERP)
            </h3>
            <ul className="spec-list">
              <li>
                Обмен по REST/CSV-файлам; сопоставление сущностей
                (inventory_tool ↔ номенклатура/ОС).
              </li>
              <li>
                Регламентная синхронизация (Cron), контроль конфликтов, аудит.
              </li>
            </ul>
          </div>
        </section>

        <section className="spec-section">
          <h2 className="section-number">9. API-документация Имметрикс</h2>

          <div className="subsection">
            <h3 className="subsection-title">
              9.1. Версионирование и базовые правила
            </h3>
            <ul className="spec-list">
              <li>
                <strong>База:</strong> /api/v1/….
              </li>
              <li>
                <strong>Все ответы</strong> — JSON; <strong>ошибки</strong> —
                единый формат:
                <pre className="code-block">
                  {`{ "error": { "code": "string", "message": "string" } }`}
                </pre>
              </li>
              <li>
                <strong>Аутентификация:</strong> POST /login → token. Дальше:
                Authorization: Bearer &lt;token&gt;.
              </li>
              <li>
                <strong>Обязательный query-параметр:</strong> legal_entity.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">9.2. Пагинация и фильтры</h3>
            <ul className="spec-list">
              <li>
                <strong>Параметры:</strong> _limit, _offset, _sort, _order.
              </li>
              <li>
                <strong>Фильтры:</strong> name, type, inv_number, rfid, room_id,
                building, created_at_from/to.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">9.3. Ключевые эндпоинты</h3>

            <div className="endpoint-group">
              <h4 className="endpoint-group-title">Справочники:</h4>
              <ul className="endpoint-list">
                <li>
                  <code>GET /rooms_floors_list</code> — дерево
                  здания/этажи/комнаты.
                </li>
              </ul>
            </div>

            <div className="endpoint-group">
              <h4 className="endpoint-group-title">Оборудование:</h4>
              <ul className="endpoint-list">
                <li>
                  <code>GET /inventory_tools/list</code>,{" "}
                  <code>GET /inventory_tools?filter…</code>
                </li>
                <li>
                  <code>GET /inventory_tool/:id</code>,{" "}
                  <code>PUT /inventory_tool/:id</code>
                </li>
              </ul>
            </div>

            <div className="endpoint-group">
              <h4 className="endpoint-group-title">RFID:</h4>
              <ul className="endpoint-list">
                <li>
                  <code>POST /inventory_tools</code> — пакет EPC, ответ —
                  найденные предметы/свободные метки.
                </li>
              </ul>
            </div>

            <div className="endpoint-group">
              <h4 className="endpoint-group-title">Отчёты:</h4>
              <ul className="endpoint-list">
                <li>
                  <code>POST /report</code>, <code>GET /report</code>,{" "}
                  <code>GET /report/:id</code>
                </li>
              </ul>
            </div>

            <div className="endpoint-group">
              <h4 className="endpoint-group-title">Инвентаризация:</h4>
              <ul className="endpoint-list">
                <li>
                  <code>POST /inventory_report</code> (тип full/part),{" "}
                  <code>GET /inventory_report?filter…</code>
                </li>
              </ul>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">9.4. Коды ошибок (пример)</h3>
            <ul className="error-codes-list">
              <li>
                <code>401_UNAUTHORIZED</code> — неверные учётные
                данные/просроченный токен.
              </li>
              <li>
                <code>403_FORBIDDEN</code> — недостаточно прав.
              </li>
              <li>
                <code>409_CONFLICT</code> — попытка привязать уже занятую
                RFID-метку.
              </li>
              <li>
                <code>422_UNPROCESSABLE_ENTITY</code> — некорректные данные
                запроса.
              </li>
              <li>
                <code>500_INTERNAL_ERROR</code> — внутренняя ошибка сервера.
              </li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              9.5. Backend: функции по модулям
            </h3>

            <div className="module-description">
              <h4 className="module-title">9.5.1. Модуль Controller</h4>
              <p className="section-text">
                <strong>Файлы:</strong> internal/controller/login.go,
                inventory_tool.go, report.go, routes.go, theatre.go
              </p>
              <p className="section-text">
                <strong>Карточки функций (обработчики HTTP):</strong>
              </p>

              <div className="function-card">
                <h5 className="function-card-title">Login(c *gin.Context)</h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> аутентификация, выдача токена.
                  </li>
                  <li>
                    <strong>Маршруты:</strong> POST /api/v1/login и POST
                    /api/v1/login/ (через InitLoginRoutes).
                  </li>
                  <li>
                    <strong>Вход:</strong> JSON {"login, password"}.
                  </li>
                  <li>
                    <strong>Выход:</strong> "data":{("token", "legal_entity")}.
                  </li>
                  <li>
                    <strong>Ошибки:</strong> 401/422.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">Logout(c *gin.Context)</h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> завершение сессии.
                  </li>
                  <li>
                    <strong>Маршрут:</strong> GET /api/v1/logout.
                  </li>
                  <li>
                    <strong>Выход:</strong> 200 (очистка сессии).
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  UserCreate(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Маршрут:</strong> POST /api/v1/user/create.
                  </li>
                  <li>
                    <strong>Назначение:</strong> создать пользователя
                    (роль/логин/пароль).
                  </li>
                  <li>
                    <strong>Выход:</strong> 201 {"login: <string>"}.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  GetInventoryToolsList(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> упрощённый список имущества по
                    зданию.
                  </li>
                  <li>
                    <strong>Query:</strong> building=&lt;string&gt;.
                  </li>
                  <li>
                    <strong>Выход:</strong> "data":[…] (Inventory Tools +
                    Rooms/Floors сводка).
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  InventoryToolsList(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> общий листинг с
                    фильтрами/пагинацией.
                  </li>
                  <li>
                    <strong>Примечание:</strong> используется фронтом для
                    таблиц.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  SetInventoryTool(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> создать/изменить предмет
                    (single).
                  </li>
                  <li>
                    <strong>Тело:</strong> JSON карточки.
                  </li>
                  <li>
                    <strong>Выход:</strong> "data":{"id"} или "data":null.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  SetInventoryTools(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> пакетное добавление/изменение.
                  </li>
                  <li>
                    <strong>Тело:</strong> JSON массив карточек.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  UpdateInventoryTool(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Маршрут:</strong> PUT /api/v1/inventory_tool/:id.
                  </li>
                  <li>
                    <strong>Назначение:</strong> обновление карточки (в т.ч.
                    rfid, room_id).
                  </li>
                  <li>
                    <strong>Ошибки:</strong> 409 если RFID занята, 404 если нет
                    предмета.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  InventoryToolGetByIDs(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Маршрут:</strong> GET /api/v1/inventory_tool/:id.
                  </li>
                  <li>
                    <strong>Назначение:</strong> получить карточку по id.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  UpdateInventoryTools(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Маршрут:</strong> PUT /api/v1/inventory_tools.
                  </li>
                  <li>
                    <strong>Назначение:</strong> пакетное обновление.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  RemoveInventoryTools(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Маршрут:</strong> DELETE
                    /api/v1/inventory_tools/:id.
                  </li>
                  <li>
                    <strong>Назначение:</strong> мягкое удаление / списание
                    (заполнение written_off_by, deleted_at).
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  GetInventoryToolsRemoved(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> выборка удалённых/списанных
                    предметов.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  SetReport(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> создать обычный отчёт по набору
                    предметов.
                  </li>
                  <li>
                    <strong>Маршруты:</strong> POST /api/v1/report.
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  GetReports(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> список отчётов (GET
                    /api/v1/report).
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  GetReportInfo(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> получить отчёт по id (GET
                    /api/v1/report/:id).
                  </li>
                </ul>
              </div>

              <div className="function-card">
                <h5 className="function-card-title">
                  InventoryReports(c *gin.Context)
                </h5>
                <ul className="function-details">
                  <li>
                    <strong>Назначение:</strong> листинг инвентаризаций (GET
                    /api/v1/inventory_report) и создание (POST
                    /api/v1/inventory_report), режимы full/part.
                  </li>
                </ul>
              </div>

              <p className="section-text">
                В routes.go дополнительно инициализируются группы и
                админ-маршруты:
                <br />
                PUT /floor (UpdateFloor), PUT /room (UpdateRoom) и др. — см.
                соответствующие хендлеры контроллера.
              </p>
            </div>
          </div>
          <div className="subsection">
            <h3 className="subsection-title">
              9.5.2. Модуль Service (internal/service/theatre.go)
            </h3>
            <p className="section-text">
              <strong>Структура:</strong> слой бизнес-логики, агрегирующий
              доступ к стораджам (инвентарь, пользователи, этажи, комнаты,
              отчёты).
            </p>
            <p className="section-text">
              <strong>Функции (методы Theatre):</strong>
            </p>
            <ul className="function-methods-list">
              <li>
                <code>SetFloor, SetRoom</code> — создание/обновление
                справочников.
              </li>
              <li>
                <code>FloorsByBuildingTypeOrAll</code> — этажи по зданию/все.
              </li>
              <li>
                <code>Rooms, RoomsByFloorId, RoomsByLegalEntity</code> — выдача
                комнат.
              </li>
              <li>
                <code>InventoryTools, RemovedInventoryTools</code> — списки
                предметов (актив/удалённые).
              </li>
              <li>
                <code>InventoryToolsList</code> — фильтруемый листинг (для
                таблиц).
              </li>
              <li>
                <code>SetInventoryTool, SetInventoryTools</code> —
                создание/пакетная загрузка.
              </li>
              <li>
                <code>RemoveInventoryTool</code> — списание/мягкое удаление.
              </li>
              <li>
                <code>InventoryToolsByIds</code> — выборка по массиву UUID.
              </li>
              <li>
                <code>SetReport, SetReports, Reports, ReportById</code> —
                отчёты.
              </li>
              <li>
                <code>SetInventoryReport, InventoryReports</code> —
                инвентаризационные отчёты.
              </li>
              <li>
                <code>CreateUser, Authorization</code> —
                аутентификация/пользователи.
              </li>
            </ul>
            <p className="section-text">
              Каждый метод сервисного слоя маппится на сторадж-интерфейсы
              (storage_*) и/или SQL-функции.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              9.5.3. SQL-модули (миграции theatre/migrations/*.sql)
            </h3>
            <p className="section-text">
              <strong>Список процедур/функций:</strong>
            </p>
            <ul className="sql-functions-list">
              <li>
                <code>
                  public.floor_create(id, number, building) RETURNS jsonb
                </code>
              </li>
              <li>
                <code>public.floor_get() RETURNS jsonb</code>
              </li>
              <li>
                <code>public.floor_getbybuilding(building) RETURNS jsonb</code>
              </li>
              <li>
                <code>public.room_get() RETURNS jsonb</code>
              </li>
              <li>
                <code>public.room_getbyfloorid(floor_id) RETURNS jsonb</code>
              </li>
              <li>
                <code>public.inventorytool_create(...) RETURNS jsonb</code>
              </li>
              <li>
                <code>public.inventorytool_arraycreate(...) RETURNS jsonb</code>
              </li>
              <li>
                <code>public.inventorytool_get() RETURNS jsonb</code>
              </li>
              <li>
                <code>
                  public.inventorytool_getbyids(ids varchar[]) RETURNS jsonb
                </code>
              </li>
              <li>
                <code>public.inventorytool_filterlist(...) RETURNS jsonb</code>
              </li>
              <li>
                <code>
                  public.inventorytool_del(id, description, written_off_by)
                  RETURNS jsonb
                </code>
              </li>
              <li>
                <code>public.report_get() RETURNS jsonb</code>
              </li>
              <li>
                <code>public.report_getbyid(id) RETURNS jsonb</code>
              </li>
              <li>
                <code>public.inventoryreport_create(...) RETURNS jsonb</code>
              </li>
              <li>
                <code>
                  public.inventoryreport_filterlist(...) RETURNS jsonb
                </code>
              </li>
              <li>
                <code>
                  public.users_create(login, password_hash, role) RETURNS jsonb
                </code>
              </li>
              <li>
                <code>public.users_getbylogin(login) RETURNS jsonb</code>
              </li>
            </ul>
            <p className="section-text">
              (…и др. служебные из пакета миграций)
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              9.6. Frontend: функции по модулям (JS)
            </h3>
            <p className="section-text">
              <strong>Проект:</strong> простые JS-модули (без сборщика),
              обращаются к GET/POST /api/v1/..., хранят token в localStorage.
            </p>
            <p className="section-text">
              <strong>Основные модули и их функции:</strong>
            </p>

            <div className="module-functions">
              <div className="module-item">
                <h5 className="module-name">main.js</h5>
                <ul className="module-functions-list">
                  <li>
                    <code>showRoleNotification()</code> — отображение роли,
                    уведомления.
                  </li>
                </ul>
              </div>

              <div className="module-item">
                <h5 className="module-name">comnati.js</h5>
                <ul className="module-functions-list">
                  <li>
                    <code>getCombinedInventoryData()</code> — агрегирует данные
                    комнат/инвентаря через /api/v1/rooms_floors_list и
                    /api/v1/inventory_tools/list.
                  </li>
                  <li>
                    <code>updateInventoryItem(item)</code> — отправка изменений
                    по предмету (PUT /api/v1/inventory_tool/:id).
                  </li>
                  <li>
                    <code>testInventoryAPI()</code> — проверка доступности API.
                  </li>
                </ul>
              </div>

              <div className="module-item">
                <h5 className="module-name">dataLoader.js</h5>
                <ul className="module-functions-list">
                  <li>
                    <code>loadData()</code> — массовая загрузка инвентаря по
                    нескольким зданиям (несколько GET
                    /api/v1/inventory_tools/list?building=...), учёт token.
                  </li>
                </ul>
              </div>

              <div className="module-item">
                <h5 className="module-name">historyB.js</h5>
                <ul className="module-functions-list">
                  <li>
                    <code>initApp()</code> — инициализация страницы истории.
                  </li>
                  <li>
                    <code>checkApiAvailable()</code> — проверка эндпоинта.
                  </li>
                  <li>
                    <code>fetchInventoryData()</code> — забор данных инвентаря.
                  </li>
                  <li>
                    <code>getInventoryHistory()</code> — получение истории
                    инвентаризаций (GET /api/v1/inventory_report).
                  </li>
                  <li>
                    <code>
                      processInventoryReports() / processSingleReport()
                    </code>{" "}
                    — отображение результатов.
                  </li>
                  <li>
                    <code>findItemByRfid(epc)</code> — поиск по RFID (POST
                    /api/v1/inventory_tools/rfid).
                  </li>
                </ul>
              </div>

              <div className="module-item">
                <h5 className="module-name">inventoryB.js</h5>
                <ul className="module-functions-list">
                  <li>
                    <code>loadData()</code> — загрузка предметов с фильтрами.
                  </li>
                  <li>
                    <code>transformData()</code> — нормализация для
                    таблиц/виджетов.
                  </li>
                </ul>
              </div>

              <p className="section-text">
                <strong>Пакет js/*.js</strong> по категориям (например, IN.js,
                SP.js, mebel.js и т.п.) — в каждом 6–8 вызовов fetch к
                /api/v1/inventory_tools/list с различными предустановленными
                фильтрами (по типам/зданиям) + чтение токена из localStorage.
              </p>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">
              9.7. Android: функции по модулям (Kotlin)
            </h3>
            <p className="section-text">
              <strong>Пакеты / классы (основные):</strong>
            </p>

            <div className="android-modules">
              <div className="android-module">
                <h5 className="android-class">
                  RfidManager.kt — обёртка над SDK UHF-ридера
                </h5>
                <ul className="android-methods code">
                  <li>
                    <code>init()</code> — инициализация SDK/аппаратуры.
                  </li>
                  <li>
                    <code>getUhf()</code> — доступ к UHF-инстансу.
                  </li>
                  <li>
                    <code>
                      startInventory(callback: (List&lt;String&gt;)-&gt;Unit)
                    </code>{" "}
                    — старт потокового чтения EPC.
                  </li>
                  <li>
                    <code>stopInventory()</code> — останов.
                  </li>
                  <li>
                    <code>release()</code> — освобождение ресурсов.
                  </li>
                  <li>
                    <code>callback(..)</code> — внутренний коллбек чтения.
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">AuthInterceptor.kt</h5>
                <ul className="android-methods code">
                  <li>
                    <code>intercept(chain)</code> — добавляет Authorization:
                    Bearer &lt;token&gt; и ?legal_entity= ко всем запросам
                    (Retrofit/OkHttp).
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">MainActivity.kt</h5>
                <ul className="android-methods code">
                  <li>
                    <code>onCreate()</code> — инициация UI, проверка токена,
                    запуск сценариев.
                  </li>
                  <li>
                    <code>startRfidScan() / stopRfidScan()</code> — управление
                    чтением.
                  </li>
                  <li>
                    <code>sendTagsToServer(tags: List&lt;String&gt;)</code> —
                    POST /api/v1/inventory_tools/rfid.
                  </li>
                  <li>
                    <code>onResponse() / onFailure()</code> — обработка
                    результатов.
                  </li>
                  <li>
                    <code>onDestroy()</code> — освобождение ресурсов ридера.
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">SettingsActivity.kt</h5>
                <ul className="android-methods code">
                  <li>
                    <code>onCreate()</code> — форма настроек (мощность ридера,
                    адрес API).
                  </li>
                  <li>
                    <code>
                      onProgressChanged()/onStartTrackingTouch()/onStopTrackingTouch()
                    </code>{" "}
                    — управление ползунком мощности.
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">
                  RoomSelectionActivity.kt, InventoryModeSelectionActivity.kt,
                  InventoryTypeSelectActivity.kt
                </h5>
                <ul className="android-methods code">
                  <li>
                    экраны выбора комнат/режимов инвентаризации; функции
                    навигации/привязки данных (стандартные onCreate, обработчики
                    кликов).
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">TokenStore.kt</h5>
                <ul className="android-methods code">
                  <li>
                    методы сохранения/чтения токена и legal_entity в защищённом
                    хранилище.
                  </li>
                </ul>
              </div>

              <div className="android-module">
                <h5 className="android-class">InventoryModels.kt</h5>
                <ul className="android-methods code">
                  <li>
                    модели данных: InventoryTool, Report, и т.д. для
                    сериализации ответов API.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section className="spec-section">
            <h2 className="section-number">
              10. Программа и методика испытаний (ПМИ)
            </h2>

            <div className="subsection">
              <h3 className="subsection-title">
                10.1. Объект и цель испытаний
              </h3>
              <ul className="spec-list">
                <li>
                  <strong>Объект:</strong> система Имметрикс (API, Frontend,
                  Android).
                </li>
                <li>
                  <strong>Цель:</strong> подтвердить соответствие функциональным
                  и нефункциональным требованиям.
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                10.2. Требования к ПО и документации
              </h3>
              <ul className="spec-list">
                <li>
                  Наличие «API-документации», «Руководства пользователя»,
                  «Инструкции по установке коробки».
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                10.3. Средства и порядок испытаний
              </h3>
              <ul className="spec-list">
                <li>
                  <strong>Стенд:</strong> тестовая БД, API, фронт, APK на ТСД.
                </li>
                <li>
                  <strong>Набор тестовых данных:</strong> здания/этажи/комнаты,
                  оборудование с инв. номерами и RFID.
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">10.4. Модульные испытания</h3>
              <ul className="spec-list">
                <li>
                  <strong>API:</strong> авторизация, CRUD оборудования, отчёты,
                  инвентаризация (позитив/негатив).
                </li>
                <li>
                  <strong>Frontend:</strong> вход/выход, списки, фильтры,
                  карточки, экспорт.
                </li>
                <li>
                  <strong>Android:</strong> чтение EPC/TID, запись EPC,
                  частичная/полная инвентаризация, офлайн-кэш (если включён).
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                10.5. Приёмочные испытания (E2E сценарии)
              </h3>
              <ul className="spec-list">
                <li>
                  Полная инвентаризация здания; частичная по комнатам; привязка
                  новой RFID к предмету; перезапись занятой метки; формирование
                  и согласование отчёта; экспорт итогов.
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">10.6. Результаты испытаний</h3>
              <ul className="spec-list">
                <li>
                  Ведомость результатов, дефекты/их статус, протокол приёмки.
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                10.7. Инструкция пользователя (сжатая)
              </h3>
              <ul className="spec-list">
                <li>
                  Вход и выбор организации (legal_entity), навигация по
                  справочникам, редактирование карточек, запуск инвентаризации,
                  формирование отчётов, экспорт данных.
                </li>
              </ul>
            </div>
          </section>

          <section className="spec-section">
            <h2 className="section-number">11. Заключение</h2>
            <p className="section-text">
              Система Имметрикс представляет собой современное программное
              решение для автоматизации учёта имущества и проведения
              инвентаризаций с поддержкой RFID-технологий.
            </p>

            <h3 className="subsection-title">Ключевые достоинства системы:</h3>
            <ul className="advantages-list">
              <li>
                <strong>Единая архитектура:</strong> все клиенты (Frontend и
                Android) используют общий REST API, что обеспечивает
                консистентность данных.
              </li>
              <li>
                <strong>Модульность:</strong> выделены отдельные подсистемы для
                управления помещениями, оборудованием, отчётами, пользователями.
              </li>
              <li>
                <strong>Гибкость хранения:</strong> в базе данных реализованы
                основные сущности с возможностью расширения (JSONB-атрибуты,
                массивы идентификаторов).
              </li>
              <li>
                <strong>RFID-поддержка:</strong> Android-клиент интегрирован с
                оборудованием для считывания и записи меток, что ускоряет
                процессы инвентаризации.
              </li>
              <li>
                <strong>Разграничение прав:</strong> предусмотрена ролевая
                модель пользователей (администраторы, операторы,
                инвентаризаторы).
              </li>
              <li>
                <strong>Простота эксплуатации:</strong> коробочная версия
                включает API-сервис, базу данных, веб-интерфейс и мобильное
                приложение, что позволяет быстро развернуть систему.
              </li>
            </ul>

            <h3 className="subsection-title">Направления развития:</h3>
            <ul className="development-list">
              <li>
                Введение таблицы «позиций инвентаризации»
                (inventory_report_items) для хранения статусов предметов в
                отчётах (FOUND/MISSING/WRONG_ROOM).
              </li>
              <li>
                Расширение аналитики: отчёты по динамике, сравнение результатов
                разных инвентаризаций.
              </li>
              <li>
                Поддержка офлайн-режима в мобильном клиенте с последующей
                синхронизацией.
              </li>
              <li>
                Дополнительные интеграции с внешними ERP/учётными системами.
              </li>
              <li>
                Расширение ролей и политик доступа (например, аудит действий
                пользователей).
              </li>
            </ul>

            <div className="conclusion-block">
              <p className="section-text">
                <strong>Заключение:</strong>
              </p>
              <p className="section-text">
                Имметрикс обеспечивает полный цикл управления имуществом
                организации — от учёта и хранения данных до проведения
                инвентаризаций с применением RFID-технологий. Система обладает
                гибкой архитектурой и может быть развёрнута как в облачной, так
                и в коробочной версии. Реализованные функциональные возможности
                позволяют существенно сократить трудозатраты на инвентаризацию и
                повысить точность учёта.
              </p>
            </div>
          </section>

          <section className="spec-section">
            <h2 className="section-number">
              12. Список использованных источников
            </h2>
            <ol className="references-list">
              <li>EPCglobal — стандарты RFID (EPC/TID).</li>
              <li>Документация SDK выбранных RFID-ТСД.</li>
              <li>Спецификация JWT/JWS.</li>
              <li>Документация Android (Kotlin, MVVM, Retrofit/OkHttp, DI).</li>
              <li>Руководства по REST API и JSON.</li>
              <li>Внутренняя документация проекта Имметрикс.</li>
            </ol>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Specification;
