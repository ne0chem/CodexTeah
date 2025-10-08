import React from "react";
import "./Portfolio.css";
import Zayavka from "../../component/Zayavka/Zayavka";

const Product = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h3 className="product__title">Наш продукт</h3>
        <div className="product">
          <div className="produt__left">
            <div className="produt__left-top">
              <div className="product__text">
                <ul>
                  <b>Имметрикс</b> — новое поколение систем учёта и
                  инвентаризации Программное обеспечение «Имметрикс» — это
                  комплексное решение для управления имуществом и автоматизации
                  инвентаризационных процессов. Система объединяет:
                </ul>
                <li>мобильное Android-приложение</li>
                <li>удобный веб-интерфейс для операторов</li>
                <li>надёжные сервера для хранения и обработки данных</li>
              </div>
            </div>
            <div className="produt__left-bot"></div>
          </div>
          <div className="product__right">
            <div className="produt__right-img"></div>
            <img src="./pr2.svg" alt="" className="produt__img" />
          </div>
        </div>
        <div className="coal">
          <h3 className="coal__title">Главная цель</h3>
          <p className="coal__subtitle">
            Ускорить и упростить учёт имущества, обеспечив контроль за
            перемещением оборудования и проведение полной или частичной
            инвентаризации с применением RFID-технологий.
          </p>
        </div>
        <div className="advantages">
          <h3 className="advantages__title">
            Преимущества системы «Имметрикс»
          </h3>
          <div className="advantages__container">
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict1.svg" alt="" />
              <p className="advantages__text">
                Быстрая и точная RFID-инвентаризация.Удобные инструменты для
                операторов, администраторов и инвентаризаторов
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict2.svg" alt="" />
              <p className="advantages__text">
                Удобная идентификация — RFID-метки читаются на расстоянии и без
                прямой видимости.
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict3.svg" alt="" />
              <p className="advantages__text">
                Гибкость и масштабируемость — подходит как для малых, так и для
                крупных организаций.
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict4.svg" alt="" />
              <p className="advantages__text">
                Инвентаризация без ошибок — система фиксирует найденные,
                отсутствующие и перемещённые предметы.
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict5.svg" alt="" />
              <p className="advantages__text">
                Единая база имущества с гибкими фильтрами и отчётами
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict6.svg" alt="" />
              <p className="advantages__text">
                Быстрая и точная RFID-инвентаризация.Удобные инструменты для
                операторов, администраторов и инвентаризаторов
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict7.svg" alt="" />
              <p className="advantages__text">
                Скорость выше в десятки раз — считывание RFID-метки занимает
                доли секунды.
              </p>
            </div>
            <div className="advantages__cards">
              <img className="advantages__img" src="./prodict8.svg" alt="" />
              <p className="advantages__text">
                Единый интерфейс — Android-приложение и веб-панель с
                синхронизацией данных.
              </p>
            </div>
          </div>
        </div>
        <div className="zayavka">
          <Zayavka />
        </div>
      </div>
    </div>
  );
};

export default Product;
