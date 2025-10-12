import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "./ServicesCarousel.css";
import "./adaptiv.css";

const services = [
  {
    id: 1,
    icon: "/y1.svg",
    title: "Верстка сайтов",
    price: "от 150 000 ₽",
    category: "sites",
  },
  {
    id: 3,
    icon: "/y2.svg",
    title: "Корпоративные сайты",
    price: "от 250 000 ₽",
    category: "sites",
  },
  {
    id: 4,
    icon: "/y4.svg",
    title: "Интернет-магазины",
    price: "от 400 000 ₽",
    category: "sites",
  },
  {
    id: 5,
    icon: "/y5.svg",
    title: "Мобильные приложения",
    price: "от 700 000 ₽",
    category: "apps",
  },
  {
    id: 6,
    icon: "/y6.svg",
    title: "Веб-приложения",
    price: "от 1 000 000 ₽",
    category: "apps",
  },
  {
    id: 7,
    icon: "/y7.svg",
    title: "UI/UX Дизайн",
    price: "от 170 000 ₽",
    category: "design",
  },
  {
    id: 8,
    icon: "/y8.svg",
    title: "Редизайн сайтов",
    price: "от 200 000 ₽",
    category: "design",
  },
  {
    id: 10,
    icon: "/y10.svg",
    title: "Техническая поддержка",
    price: "от 50 000 ₽/мес",
    category: "other",
  },
  {
    id: 14,
    icon: "/y14.svg",
    title: "Автоматизация бизнеса",
    price: "от 400 000 ₽",
    category: "other",
  },
  {
    id: 15,
    icon: "/y15.svg",
    title: "Хостинг и DevOps",
    price: "от 30 000 ₽",
    category: "other",
  },
];

const ServicesCarousel = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleServiceClick = (service) => {
    navigate("/service", {
      state: {
        category: service.category,
        serviceId: service.id,
      },
    });
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const onSwiper = (swiper) => {
    // Обновляем состояние кнопок при инициализации
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper) => {
    // Обновляем состояние кнопок при смене слайда
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="services-carousel-container ">
      <div className="services-carousel-wrapper">
        {/* Кнопки управления */}
        <div className="carousel-controls">
          <button
            className={`carousel-button prev-button ${
              isBeginning ? "disabled" : ""
            }`}
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`carousel-button next-button ${isEnd ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={isEnd}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card">
                <div className="service-content">
                  <div className="service-header">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon"
                    />
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-footer">
                    <button
                      className="Service__button__1"
                      onClick={() => handleServiceClick(service)}
                    >
                      Перейти
                    </button>
                    <p className="service-price">{service.price}</p>
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
