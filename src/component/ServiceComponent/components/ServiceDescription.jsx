import React from "react";
import {
  getServiceDescriptionTitle,
  getDescriptionImage,
} from "../data/imageData";

const ServiceDescription = ({ service }) => {
  return (
    <div className="service-description-with-image">
      <div className="description-text">
        <h2>{getServiceDescriptionTitle(service.title)}</h2>
        <p>{service.description}</p>
      </div>

      <div className="description-image">
        {/* Блок с информацией над картинкой */}
        <div className="image-info-overlay">
          <div className="info-row">
            <span className="info-label">Скорость изготовления:</span>
          </div>
          <div className="info-row">
            <span className="info-value">{service.productionTime}</span>
          </div>
        </div>

        <img
          src={getDescriptionImage(service.title)}
          alt={service.title}
          className="service-content-image"
        />
      </div>
    </div>
  );
};

export default ServiceDescription;
