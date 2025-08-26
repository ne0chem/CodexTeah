import React from "react";
import "./ServicesPage.css";

const ServiceList = ({ services, selectedService, onServiceSelect }) => {
  return (
    <div className="service-list-horizontal">
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
