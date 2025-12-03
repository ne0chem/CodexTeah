import React from "react";
import "./ServicesPage.css";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={service.icon} alt={service.title} className="service-icon" />
      <h3 className="service-title">{service.title}</h3>
      <p className="service-price">{service.price}</p>
      <p className="service-description">{service.description}</p>
      <button className="service-detail-btn">Подробнее →</button>
    </div>
  );
};

export default ServiceCard;
