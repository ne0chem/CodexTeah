import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "./ServicesCarousel.css";

const services = [
  {
    id: 1,
    icon: "/pk.svg",
    title: "Верстка сайтов",
    price: "от 50 000 ₽",
    description:
      "Адаптивная кросс-браузерная верстка по вашему макету (Figma, PSD) с соблюдением всех современных стандартов (HTML5, CSS3, JavaScript)",
  },
  {
    id: 2,
    icon: "/pk.svg",
    title: "Разработка лендингов",
    price: "от 80 000 ₽",
    description:
      "Создание высококонверсионных landing page с интеграцией CRM, аналитики и платежных систем",
  },
  {
    id: 3,
    icon: "/pk.svg",
    title: "Корпоративные сайты",
    price: "от 150 000 ₽",
    description:
      "Разработка многостраничных сайтов для бизнеса с административной панелью, формами обратной связи и системой управления контентом",
  },
  {
    id: 4,
    icon: "/pk.svg",
    title: "Интернет-магазины",
    price: "от 250 000 ₽",
    description:
      "Полнофункциональные e-commerce решения на базе современных платформ с интеграцией платежных систем и 1С",
  },
  {
    id: 5,
    icon: "/tlf.svg",
    title: "Мобильные приложения",
    price: "от 200 000 ₽",
    description:
      "Разработка нативных и кроссплатформенных приложений для iOS и Android с индивидуальным дизайном",
  },
  {
    id: 6,
    icon: "/integration.svg",
    title: "Веб-приложения",
    price: "от 300 000 ₽",
    description:
      "Создание сложных веб-приложений (SPA/PWA) с использованием React, Vue.js или Angular и backend-интеграциями",
  },
  {
    id: 7,
    icon: "/design.svg",
    title: "UI/UX Дизайн",
    price: "от 70 000 ₽",
    description:
      "Разработка пользовательских интерфейсов и прототипирование с учетом юзабилити и современных трендов",
  },
  {
    id: 8,
    icon: "/design.svg",
    title: "Редизайн сайтов",
    price: "от 120 000 ₽",
    description:
      "Современное обновление устаревших сайтов с улучшением UX и адаптацией под мобильные устройства",
  },
  {
    id: 9,
    icon: "/seo.svg",
    title: "SEO оптимизация",
    price: "от 40 000 ₽",
    description:
      "Комплексное продвижение сайтов в поисковых системах с технической оптимизацией и контент-стратегией",
  },
  {
    id: 10,
    icon: "/integration.svg",
    title: "Техническая поддержка",
    price: "от 25 000 ₽/мес",
    description:
      "Постоянное сопровождение сайтов: обновления, доработки, исправление ошибок и консультации",
  },
  {
    id: 11,
    icon: "/integration.svg",
    title: "Интеграции с API",
    price: "от 60 000 ₽",
    description:
      "Подключение внешних сервисов: платежные системы, CRM, 1С, маркетплейсы и другие веб-сервисы",
  },
  {
    id: 12,
    icon: "/pk.svg",
    title: "Веб-аналитика",
    price: "от 35 000 ₽",
    description:
      "Настройка систем аналитики (Google Analytics, Яндекс.Метрика, Hotjar) и подготовка отчетов",
  },
  {
    id: 13,
    icon: "/design.svg",
    title: "Фирменный стиль",
    price: "от 90 000 ₽",
    description:
      "Разработка логотипа, брендбука и гайдлайнов для поддержания единого визуального стиля",
  },
  {
    id: 14,
    icon: "/integration.svg",
    title: "Автоматизация бизнеса",
    price: "от 180 000 ₽",
    description:
      "Создание внутренних систем автоматизации бизнес-процессов и CRM-решений",
  },
  {
    id: 15,
    icon: "/pk.svg",
    title: "Хостинг и DevOps",
    price: "от 30 000 ₽",
    description:
      "Настройка серверов, развертывание проектов и обеспечение бесперебойной работы сайтов",
  },
];

const ServicesCarousel = () => {
  return (
    <div className="services-carousel-container">
      <div className="services-carousel-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon"
                    />
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-price">{service.price}</p>
                  </div>
                  <div className="card-back">
                    <p className="service-description">{service.description}</p>
                    <button className="service-button">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesCarousel;
