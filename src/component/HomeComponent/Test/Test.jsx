import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "./ServicesCarousel.css";

const services = [
  {
    id: 1,
    icon: "/y1.svg",
    title: "Верстка сайтов",
    price: "от 150 000 ₽",
    description:
      "Адаптивная кросс-браузерная верстка по вашему макету (Figma, PSD) с соблюдением всех современных стандартов (HTML5, CSS3, JavaScript)",
  },

  {
    id: 3,
    icon: "/y2.svg",
    title: "Корпоративные сайты",
    price: "от 250 000 ₽",
    description:
      "Разработка многостраничных сайтов для бизнеса с административной панелью, формами обратной связи и системой управления контентом",
  },
  {
    id: 4,
    icon: "/y4.svg",
    title: "Интернет-магазины",
    price: "от 400 000 ₽",
    description:
      "Полнофункциональные e-commerce решения на базе современных платформ с интеграцией платежных систем",
  },
  {
    id: 5,
    icon: "/y5.svg",
    title: "Мобильные приложения",
    price: "от 700 000 ₽",
    description:
      "Разработка нативных и кроссплатформенных приложений для Android с индивидуальным дизайном",
  },
  {
    id: 6,
    icon: "/y6.svg",
    title: "Веб-приложения",
    price: "от 1 000 000 ₽",
    description:
      "Создание сложных веб-приложений (SPA/PWA) с использованием React, Vue.js или Angular и backend-интеграциями",
  },
  {
    id: 7,
    icon: "/y7.svg",
    title: "UI/UX Дизайн",
    price: "от 170 000 ₽",
    description:
      "Разработка пользовательских интерфейсов и прототипирование с учетом юзабилити и современных трендов",
  },
  {
    id: 8,
    icon: "/y8.svg",
    title: "Редизайн сайтов",
    price: "от 200 000 ₽",
    description:
      "Современное обновление устаревших сайтов с улучшением UX и адаптацией под мобильные устройства",
  },
  {
    id: 10,
    icon: "/y10.svg",
    title: "Техническая поддержка",
    price: "от 50 000 ₽/мес",
    description:
      "Постоянное сопровождение сайтов: обновления, доработки, исправление ошибок и консультации",
  },
  {
    id: 14,
    icon: "/y14.svg",
    title: "Автоматизация бизнеса",
    price: "от 400 000 ₽",
    description:
      "Создание внутренних систем автоматизации бизнес-процессов и CRM-решений с интегрированной системой управления задачами на базе Яндекс Трекера",
  },
  {
    id: 15,
    icon: "/y15.svg",
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
