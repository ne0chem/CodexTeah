import React from "react";
import ServicesPage from "../../component/ServiceComponent/ServicesPage.jsx";
import Zayavka from "../../component/Zayavka/Zayavka.jsx";
import "./Setvice.css";
import { useState, useEffect, useContext } from "react";

const Service = () => {
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
    <div className="home-page ">
      <ServicesPage />

      <div id="zayavka-unique-container">
        <div
          className="qwer wow bounce-in delay-400"
          data-wow-duration="10s"
          data-wow-delay="1s"
        >
          <Zayavka />
        </div>
      </div>
    </div>
  );
};

export default Service;
