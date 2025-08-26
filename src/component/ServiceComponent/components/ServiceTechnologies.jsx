import React from "react";
import {
  getTechnologiesForService,
  getTechnologiesImage,
} from "../data/technologiesData";

const ServiceTechnologies = ({ service, selectedTech, setSelectedTech }) => {
  const technologies = getTechnologiesForService(service.title);

  return (
    <div className="service-technologies">
      <h2>Технологии и фреймворки</h2>
      <div className="technologies-content">
        <div className="technologies-section">
          <div className="tech-cards">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`tech-card ${
                  selectedTech === tech.name ? "active" : ""
                }`}
                onMouseEnter={() => setSelectedTech(tech.name)}
                onMouseLeave={() => setSelectedTech(null)}
              >
                <div className="tech-card-inner">
                  {/* Лицевая сторона карточки */}
                  <div className="tech-card-front">
                    <div className="tech-header">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-icon"
                      />
                      <h4>{tech.name}</h4>
                    </div>
                  </div>

                  {/* Обратная сторона карточки */}
                  <div className="tech-card-back">
                    <h4>{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                    <div className="tech-benefits">
                      <span>Преимущества:</span>
                      <ul>
                        {tech.benefits.map((benefit, idx) => (
                          <li key={idx}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTechnologies;
