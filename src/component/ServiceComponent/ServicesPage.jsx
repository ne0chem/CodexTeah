import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceList from "./ServiceList";
import { services, categoryNames } from "./ServiceDetail/servicesData";
import "./ServicesPage.css";

const ServicesPage = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  // Создаем реф для элемента, к которому будем скроллить
  const servicesContentRef = useRef(null);

  // Все услуги отображаются всегда
  const displayedServices = services;

  // Обработка перехода из карусели
  useEffect(() => {
    if (location.state) {
      const { serviceId } = location.state;

      // Находим и выбираем услугу
      if (serviceId) {
        const service = services.find((s) => s.id === serviceId);
        if (service) {
          setTimeout(() => {
            setSelectedService(service);
            // Прокрутка к деталям услуги
            scrollToServiceContent();
          }, 100);
        }
      }
    }
  }, [location.state]);

  // Функция для прокрутки к контенту услуги
  const scrollToServiceContent = () => {
    setTimeout(() => {
      if (servicesContentRef.current) {
        servicesContentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // Прокручивает к верху элемента
        });
      }
    }, 150); // Небольшая задержка для гарантии, что контент обновился
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // Прокручиваем к контенту услуги после выбора
    scrollToServiceContent();
  };

  return (
    <section className="services-section">
      <div className="container">
        {/* Статический заголовок */}
        <h1 className="main-title">Все наши услуги</h1>

        <ServiceList
          services={displayedServices}
          selectedService={selectedService}
          onServiceSelect={handleServiceSelect}
        />

        {/* Добавляем ref к этому элементу */}
        <div
          id="services-content"
          className="services-content"
          ref={servicesContentRef} // Добавляем реф здесь
        >
          {selectedService ? (
            <ServiceDetail service={selectedService} />
          ) : (
            <div className="service-placeholder"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
