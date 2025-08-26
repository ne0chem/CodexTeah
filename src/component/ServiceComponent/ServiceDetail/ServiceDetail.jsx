import React, { useState } from "react";
import ServiceHeader from "../components/ServiceHeader";
import ServiceDescription from "../components/ServiceDescription";
import ServiceTechnologies from "../components/ServiceTechnologies";

import ServicePricing from "../components/ServicePricing";

import "../ServicesPage.css";

const ServiceDetail = ({ service }) => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="service-detail">
      <ServiceHeader service={service} />

      <div className="service-detail-content">
        <ServiceDescription service={service} />
        <ServiceTechnologies
          service={service}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        <ServicePricing service={service} />
      </div>
    </div>
  );
};

export default ServiceDetail;
