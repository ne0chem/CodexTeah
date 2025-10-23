import React, { useState, useEffect } from "react";
import {
  getStartingPrice,
  getIncludedFeatures,
  getAdditionalOptions,
  getOptionDetails,
  getFeatureDetails,
} from "../data/pricingData";

const ServicePricing = ({ service }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            // Останавливаем наблюдение после активации
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in-left, .fade-in-right, .fade-in, .fade-in-down, .fade-in-up, .bounce-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const [expandedOption, setExpandedOption] = useState(null);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleOption = (index) => {
    setExpandedOption(expandedOption === index ? null : index);
    setExpandedFeature(null);
  };

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
    setExpandedOption(null);
  };

  // Разделяем фичи на две колонки
  const features = getIncludedFeatures(service.category);
  const midIndex = Math.ceil(features.length / 2);
  const featuresColumn1 = features.slice(0, midIndex);
  const featuresColumn2 = features.slice(midIndex);

  // Разделяем опции на две колонки
  const options = getAdditionalOptions(service.category);
  const midIndexOptions = Math.ceil(options.length / 2);
  const optionsColumn1 = options.slice(0, midIndexOptions);
  const optionsColumn2 = options.slice(midIndexOptions);

  return (
    <div className="service-pricing">
      <div className="pricing-content">
        {/* Блок с ценой */}
        <div
          className="price-highlight wow fade-in-down"
          data-wow-duration="1s"
          data-wow-delay="3s"
        >
          <span
            className="price-label wow fade-in-left"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            Стоимость разработки, от
          </span>
          <span
            className="price-amount wow fade-in-right"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {getStartingPrice(service.category)}
          </span>
        </div>

        {/* Блок "В стоимость включено" с двумя колонками */}
        <div
          className="included-features wow fade-in-right"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <h3>В стоимость включено:</h3>
          <div
            className="two-columns-container wow fade-in-up"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="column">
              <ul>
                {featuresColumn1.map((feature, index) => (
                  <li
                    key={index}
                    className={expandedFeature === index ? "expanded" : ""}
                    onClick={() => toggleFeature(index)}
                  >
                    <div className="feature-header">
                      <img
                        src="/qqqq.svg"
                        alt="Включено"
                        className="icon checkmark-icon"
                      />
                      <span className="feature-text">{feature}</span>
                      <span className="expand-icon">
                        {expandedFeature === index ? "−" : "+"}
                      </span>
                    </div>
                    {expandedFeature === index && (
                      <div className="feature-details">
                        {getFeatureDetails(service.category, index)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="column wow fade-in-up"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <ul>
                {featuresColumn2.map((feature, index) => (
                  <li
                    key={index + midIndex}
                    className={
                      expandedFeature === index + midIndex ? "expanded" : ""
                    }
                    onClick={() => toggleFeature(index + midIndex)}
                  >
                    <div className="feature-header">
                      <img
                        src="/qqqq.svg"
                        alt="Включено"
                        className="icon checkmark-icon"
                      />
                      <span className="feature-text">{feature}</span>
                      <span className="expand-icon">
                        {expandedFeature === index + midIndex ? "−" : "+"}
                      </span>
                    </div>
                    {expandedFeature === index + midIndex && (
                      <div className="feature-details">
                        {getFeatureDetails(service.category, index + midIndex)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Блок "Дополнительные опции" с двумя колонками */}
        <div
          className="additional-options wow fade-in-right"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <h3>Дополнительные опции:</h3>
          <div
            className="two-columns-container wow fade-in-up"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div
              className="column wow fade-in-up"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <ul>
                {optionsColumn1.map((option, index) => (
                  <li
                    key={index}
                    className={expandedOption === index ? "expanded" : ""}
                    onClick={() => toggleOption(index)}
                  >
                    <div className="option-header">
                      <img
                        src="/qqqq.svg"
                        alt="Включено"
                        className="icon checkmark-icon"
                      />
                      <span className="option-text">{option}</span>
                      <span className="expand-icon">
                        {expandedOption === index ? "−" : "+"}
                      </span>
                    </div>
                    {expandedOption === index && (
                      <div className="option-details">
                        {getOptionDetails(service.category, index)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="column wow fade-in-up"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <ul>
                {optionsColumn2.map((option, index) => (
                  <li
                    key={index + midIndexOptions}
                    className={
                      expandedOption === index + midIndexOptions
                        ? "expanded"
                        : ""
                    }
                    onClick={() => toggleOption(index + midIndexOptions)}
                  >
                    <div className="option-header">
                      <img
                        src="/qqqq.svg"
                        alt="Включено"
                        className="icon checkmark-icon"
                      />
                      <span className="option-text">{option}</span>
                      <span className="expand-icon">
                        {expandedOption === index + midIndexOptions ? "−" : "+"}
                      </span>
                    </div>
                    {expandedOption === index + midIndexOptions && (
                      <div className="option-details">
                        {getOptionDetails(
                          service.category,
                          index + midIndexOptions
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;
