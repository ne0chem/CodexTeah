export const getDescriptionImage = (serviceTitle) => {
  const imageMap = {
    "Верстка сайтов": "/yslugi1.png",
    "Одностраничный сайт": "/yslugi1.png",
    "Корпоративные сайты": "/yslugi1.png",
    "Интернет-магазины": "/yslugi1.png",
    "Мобильные приложения": "/yslugi1.png",
    "Веб-приложения": "/yslugi1.png",
    "UI/UX Дизайн": "/yslugi1.png",
    "Редизайн сайтов": "/yslugi1.png",
    "Техническая поддержка": "/yslugi1.png",
    "Автоматизация бизнеса": "/yslugi1.png",
    "Хостинг и DevOps": "/yslugi1.png",
  };
  return imageMap[serviceTitle] || "/services/default.jpg";
};

export const getServiceDescriptionTitle = (serviceTitle) => {
  const descriptionTitles = {
    "Верстка сайтов": "Профессиональная верстка сайтов",
    "Корпоративные сайты": "Разработка корпоративных сайтов",
    "Интернет-магазины": "Создание интернет-магазинов",
    "Мобильные приложения": "Разработка мобильных приложений",
    "Веб-приложения": "Создание веб-приложений",
    "UI/UX Дизайн": "UI/UX дизайн интерфейсов",
    "Редизайн сайтов": "Редизайн и модернизация сайтов",
    "Техническая поддержка": "Техническая поддержка сайтов",
    "Автоматизация бизнеса": "Автоматизация бизнес-процессов",
    "Хостинг и DevOps": "Хостинг и DevOps услуги",
  };
  return descriptionTitles[serviceTitle] || "Описание услуги";
};

// ../data/imageData.js

export const getServiceButtons = (serviceTitle) => {
  console.log("getServiceButtons called with:", serviceTitle);

  const buttonsConfig = {
    "Одностраничный сайт": [
      { id: 1, text: "Сайт-визитка", className: "btn-primary" },
      { id: 2, text: "Портфолио", className: "btn-secondary" },
      { id: 3, text: "Промо-сайт", className: "btn-tertiary" },
    ],
    "Верстка сайтов": [
      { id: 1, text: "Магазин под ключ", className: "btn-primary" },
      { id: 2, text: "Интеграция с 1С", className: "btn-secondary" },
      { id: 3, text: "Мобильная версия", className: "btn-tertiary" },
    ],
    "Корпоративные сайты": [
      { id: 1, text: "Корпоративный портал", className: "btn-primary" },
      { id: 2, text: "CRM интеграция", className: "btn-secondary" },
      { id: 3, text: "Мультиязычность", className: "btn-tertiary" },
    ],
    "Интернет-магазины": [
      { id: 1, text: "Веб-дизайн", className: "btn-primary" },
      { id: 2, text: "Мобильный дизайн", className: "btn-secondary" },
      { id: 3, text: "Редизайн", className: "btn-tertiary" },
    ],
    "Мобильные приложения": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "Веб-приложения": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "UI/UX Дизайн": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "Редизайн сайтов": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "Техническая поддержка": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "Автоматизация бизнеса": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],

    "Хостинг и DevOps": [
      { id: 1, text: "iOS приложение", className: "btn-primary" },
      { id: 2, text: "Android приложение", className: "btn-secondary" },
      { id: 3, text: "Кроссплатформа", className: "btn-tertiary" },
    ],
  };

  const result = buttonsConfig[serviceTitle] || [];
  console.log("Found buttons for", serviceTitle, ":", result);
  return result;
};
