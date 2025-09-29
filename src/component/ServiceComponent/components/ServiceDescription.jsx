import React from "react";
import {
  getServiceDescriptionTitle,
  getDescriptionImage,
} from "../data/imageData";

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail-container">
      {/* Основной блок с описанием и изображением */}
      <div className="service-description-with-image">
        {/* Текстовый блок с заголовком, описанием и кнопками */}
        <div className="description-text">
          {/* Заголовок услуги перенесен сюда */}
          <div className="service-detail-header">
            <div className="service-detail-info">
              <h1>{service.title}</h1>
            </div>
          </div>

          <p>{service.description}</p>
          <ul className="service__info-list">
            {service.info.map((item, index) => (
              <li key={index} className="service__info-item">
                <span className="service__check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Блок с изображением */}
        <div className="description-image">
          <img
            src={getDescriptionImage(service.title)}
            alt={service.title}
            className="service-content-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
