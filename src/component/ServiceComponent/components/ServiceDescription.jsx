import React from "react";
import {
  getServiceDescriptionTitle,
  getDescriptionImage,
  getServiceButtons,
} from "../data/imageData";

const ServiceDetail = ({ service }) => {
  const serviceButtons = getServiceButtons(service.title);

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

          {/* Блок с кнопками */}
          {serviceButtons.length > 0 && (
            <div className="service-buttons-container">
              {serviceButtons.map((button) => (
                <button
                  key={button.id}
                  className={`service-button ${button.className}`}
                  disabled
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
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
