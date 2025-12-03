import React, { useState, useEffect, useRef } from "react";
import "./ServicesPage.css";

const ServiceList = ({ services, selectedService, onServiceSelect }) => {
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
    <div
      className="service-list-horizontal wow fade-in-down"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <div className="service-links-horizontal">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-link-horizontal ${
              selectedService?.id === service.id ? "active" : ""
            }`}
            onClick={() => onServiceSelect(service)}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="service-link-icon"
            />
            <div className="service-link-info">
              <span className="service-link-title">{service.title}</span>
              <span className="service-link-price">{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
