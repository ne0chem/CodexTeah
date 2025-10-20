import React from "react";
import ServicesPage from "../../component/ServiceComponent/ServicesPage.jsx";
import Zayavka from "../../component/Zayavka/Zayavka.jsx";
import "./Setvice.css";

const Service = () => {
  return (
    <div className="home-page">
      <ServicesPage />

      <div id="zayavka-unique-container">
        <div className="qwer">
          <Zayavka />
        </div>
      </div>
    </div>
  );
};

export default Service;
