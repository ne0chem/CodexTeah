import React from "react";
import ServicesPage from "../../component/ServiceComponent/ServicesPage.jsx";
import Zayavka from "../../component/Zayavka/Zayavka.jsx";
import "./Setvice.css";

const Service = () => {
  return (
    <div className="home-page">
      <ServicesPage />

      <Zayavka />
    </div>
  );
};

export default Service;
