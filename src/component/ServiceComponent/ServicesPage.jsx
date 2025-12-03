import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceList from "./ServiceList";
import { services, categoryNames } from "./ServiceDetail/servicesData";
import "./ServicesPage.css";

const ServicesPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
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

  const location = useLocation();
  const [selectedService, setSelectedService] = useState(services[0]); // Первая услуга по умолчанию

  const servicesContentRef = useRef(null);
  const displayedServices = services;

  // Обработка перехода из карусели
  useEffect(() => {
    if (location.state?.serviceId) {
      const service = services.find((s) => s.id === location.state.serviceId);
      if (service) {
        setTimeout(() => {
          setSelectedService(service);
          scrollToServiceContent();
        }, 100);
      }
    }
  }, [location.state]);

  const scrollToServiceContent = () => {
    setTimeout(() => {
      if (servicesContentRef.current) {
        servicesContentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    scrollToServiceContent();
  };

  return (
    <section className="services-section">
      <div className="container">
        {/* Заголовок всегда отображается */}
        <h1 className="main-title wow fade-in-down">Все наши услуги</h1>

        <ServiceList
          services={displayedServices}
          selectedService={selectedService}
          onServiceSelect={handleServiceSelect}
        />

        {/* Всегда показываем детали услуги */}
        <div
          id="services-content"
          className="services-content active"
          ref={servicesContentRef}
        >
          <div className="service-detail-container">
            <ServiceDetail service={selectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
