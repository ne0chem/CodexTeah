import React from "react";
import "./ServicesPage.css";

const CategoryFilters = ({ activeCategory, onCategoryChange }) => {
  const categories = ["sites", "apps", "design", "other", "all"];
  const categoryLabels = {
    sites: "Сайты",
    apps: "Приложения",
    design: "Дизайн",
    other: "Другие услуги",
    all: "Все услуги",
  };

  return (
    <div className="services-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
