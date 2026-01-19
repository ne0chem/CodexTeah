import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Portfolio.css";
import Zayavka from "../../component/Zayavka/Zayavka";
import useWow from "../../animation/Wow";
import { Link } from "react-router-dom";
const Product = () => {
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
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(
      ".fade-in-left, .fade-in-right, .fade-in, .fade-in-down, .fade-in-up, .bounce-in",
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="home-page">
      <div className="container">
        <h3
          className="product__title wow fade-in-down"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          Наш продукт
        </h3>
        <div
          className="product wow fade-in-down"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div className="produt__left">
            <div className="produt__left-top">
              <div className="product__text">
                <ul>
                  <b>Имметрикс</b> — новое поколение систем учёта и
                  инвентаризации Программное обеспечение «Имметрикс» — это
                  комплексное решение для управления имуществом и автоматизации
                  инвентаризационных процессов. Система объединяет:
                </ul>
                <li className="reset-list"> - мобильное Android-приложение</li>
                <li className="reset-list">
                  - удобный веб-интерфейс для операторов
                </li>
                <li className="reset-list">
                  - надёжные сервера для хранения и обработки данных
                </li>
              </div>
            </div>
            <div className="produt__left-bot"></div>
          </div>
          <div className="product__right">
            <div className="produt__right-img"></div>
            <img src="./pr2.svg" alt="" className="produt__img" />
          </div>
        </div>
        <div
          className="coal
        wow fade-in-left"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <h3 className="coal__title">Главная цель</h3>
          <p className="coal__subtitle">
            Ускорить и упростить учёт имущества, обеспечив контроль за
            перемещением оборудования и проведение полной или частичной
            инвентаризации с применением RFID-технологий.
          </p>
        </div>
        <div
          className="advantages
        wow fade-in-up"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <h3 className="advantages__title ">
            Преимущества системы «Имметрикс»
          </h3>
          <div
            className="advantages__container
            wow fade-in-right"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div
              className="advantages__cards
            "
            >
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
        <div className="price__document">
          <p className="price">Стоимость разработки ПО, от</p>
          <p className="price bold">500 000 руб</p>
        </div>
        <div className="product__document">
          <h1 className="advantages__title pr_title">Документы ПО</h1>
          <div className="product__links">
            <div className="product__link">
              <img className="document__img" src="./pages.svg" alt="" />
              <Link className="link__text" to="/product/specification">
                Имметрикс Описание функциональных арактеристик и архитектуры
              </Link>
              <Link to="/product/specification" className="document__link">
                <img
                  src="./link.svg"
                  alt="Ссылка на спецификацию"
                  className="document__img1"
                />
              </Link>
            </div>

            <div className="product__link">
              <img className="document__img" src="./pages.svg" alt="" />
              <Link className="link__text" to="/product/installation">
                Инструкция по установке
              </Link>
              <Link to="/product/installation" className="document__link">
                <img
                  src="./link.svg"
                  alt="Ссылка на спецификацию"
                  className="document__img1"
                />
              </Link>
            </div>
            <div className="product__link">
              <img className="document__img" src="./pages.svg" alt="" />
              <Link className="link__text" to=" /product/userManual/">
                Инструкция по эксплуатации
              </Link>
              <Link to="/product/userManual/" className="document__link">
                <img
                  src="./link.svg"
                  alt="Ссылка на спецификацию"
                  className="document__img1"
                />
              </Link>
            </div>
            <div className="product__link">
              <img className="document__img" src="./pages.svg" alt="" />
              <Link className="link__text" to="/product/technical/">
                Описание технических средств
              </Link>
              <Link to="/product/technical/" className="document__link">
                <img
                  src="./link.svg"
                  alt="Ссылка на спецификацию"
                  className="document__img1"
                />
              </Link>
            </div>
            <div className="product__link">
              <img className="document__img" src="./pages.svg" alt="" />
              <Link className="link__text" to="/product/lifecycle/">
                Описание жизненного цикла
              </Link>
              <Link to="/product/lifecycle/" className="document__link">
                <img
                  src="./link.svg"
                  alt="Ссылка на спецификацию"
                  className="document__img1"
                />
              </Link>
            </div>
          </div>
        </div>
        <div id="zayavka-unique-container">
          <div
            className="qwee wow bounce-in delay-400"
            data-wow-duration="10s"
            data-wow-delay="1s"
          >
            <Zayavka />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
