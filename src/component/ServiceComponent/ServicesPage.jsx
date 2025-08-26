import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceList from "./ServiceList";
import CategoryFilters from "./CategoryFilters";
import { services, categoryNames } from "./ServiceDetail/servicesData";
import "./ServicesPage.css";

const ServicesPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("sites");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") {
      return services;
    }
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  // Обработка перехода из карусели
  useEffect(() => {
    if (location.state) {
      const { category, serviceId } = location.state;

      // Устанавливаем категорию
      if (category) {
        setActiveCategory(category);
      }

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

  // Автоматически выбираем первую услугу при смене категории
  useEffect(() => {
    if (filteredServices.length > 0 && !selectedService) {
      setSelectedService(filteredServices[0]);
    }
  }, [filteredServices, selectedService]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedService(null);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  // Функция для получения заголовка в зависимости от категории
  const getMainTitle = () => {
    switch (activeCategory) {
      case "sites":
        return "Разработка сайтов";
      case "apps":
        return "Разработка приложений";
      case "design":
        return "UI/UX Дизайн";
      case "other":
        return "Дополнительные услуги";
      case "all":
        return "Все наши услуги";
      default:
        return "Наши услуги";
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        {/* Динамический заголовок */}
        <h1 className="main-title">{getMainTitle()}</h1>

        <CategoryFilters
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

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
