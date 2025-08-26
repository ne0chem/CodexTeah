import React from "react";

const ServiceHeader = ({ service }) => {
  return (
    <div className="service-detail-header">
      <img
        src={service.icon}
        alt={service.title}
        className="service-detail-icon"
      />
      <div className="service-detail-info">
        <h1>{service.title}</h1>
      </div>
    </div>
  );
};

export default ServiceHeader;
