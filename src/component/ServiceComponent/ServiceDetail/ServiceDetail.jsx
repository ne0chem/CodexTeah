import React, { useState } from "react";

import ServiceDescription from "../components/ServiceDescription";

import ServicePricing from "../components/ServicePricing";

const ServiceDetail = ({ service }) => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="service-detail">
      <div className="service-detail-content">
        <ServiceDescription service={service} />

        <ServicePricing service={service} />
      </div>
    </div>
  );
};

export default ServiceDetail;
