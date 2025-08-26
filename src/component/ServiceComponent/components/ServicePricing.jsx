import React, { useState } from "react";
import {
  getStartingPrice,
  getIncludedFeatures,
  getAdditionalOptions,
  getOptionDetails,
  getFeatureDetails,
} from "../data/pricingData";

const ServicePricing = ({ service }) => {
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
        <div className="price-highlight">
          <span className="price-label">Стоимость разработки, от</span>
          <span className="price-amount">
            {getStartingPrice(service.category)}
          </span>
        </div>

        {/* Блок "В стоимость включено" с двумя колонками */}
        <div className="included-features">
          <h3>В стоимость включено:</h3>
          <div className="two-columns-container">
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
                        src="/546.svg"
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
            <div className="column">
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
                        src="/546.svg"
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
        <div className="additional-options">
          <h3>Дополнительные опции:</h3>
          <div className="two-columns-container">
            <div className="column">
              <ul>
                {optionsColumn1.map((option, index) => (
                  <li
                    key={index}
                    className={expandedOption === index ? "expanded" : ""}
                    onClick={() => toggleOption(index)}
                  >
                    <div className="option-header">
                      <img
                        src="/546.svg"
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
            <div className="column">
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
                        src="/546.svg"
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
