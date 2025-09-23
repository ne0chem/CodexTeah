import React from "react";
import "./Setvice.css";
import ServicesPage from "../../component/ServiceComponent/ServicesPage.jsx";
import Zayavka from "../../component/Zayavka/Zayavka.jsx";

const Service = () => {
  return (
    <div className="home-page">
      <ServicesPage />
      <Zayavka />
    </div>
  );
};

export default Service;
