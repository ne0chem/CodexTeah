import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceList from "./ServiceList";
import { services, categoryNames } from "./ServiceDetail/servicesData";
import "./ServicesPage.css";

const ServicesPage = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  // Всегда показываем все услуги
  const filteredServices = useMemo(() => {
    return services;
  }, []);

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
            document.getElementById("services-content")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }
      }
    }
  }, [location.state]);

  // Автоматически выбираем первую услугу
  useEffect(() => {
    if (filteredServices.length > 0 && !selectedService) {
      setSelectedService(filteredServices[0]);
    }
  }, [filteredServices, selectedService]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="services-section">
      <div className="container">
        {/* Статический заголовок */}
        <h1 className="main-title">Все наши услуги</h1>

        <ServiceList
          services={filteredServices}
          selectedService={selectedService}
          onServiceSelect={handleServiceSelect}
        />

        <div id="services-content" className="services-content">
          {selectedService ? (
            <ServiceDetail service={selectedService} />
          ) : (
            <div className="service-placeholder">
              <h3>Выберите услугу для просмотра подробной информации</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
