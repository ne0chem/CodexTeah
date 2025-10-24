// components/YandexMap.js (расширенная версия)
import React, { useEffect, useRef } from "react";

const YandexMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadYandexMap = () => {
      if (window.ymaps) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.async = true;

      script.onload = () => {
        window.ymaps.ready(initMap);
      };

      document.head.appendChild(script);
    };

    const initMap = () => {
      // Точные координаты Иннополиса, Университетская, 5
      const innopolisCoords = [55.752389, 48.74937];

      const map = new window.ymaps.Map(
        mapRef.current,
        {
          center: innopolisCoords,
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        },
        {
          suppressMapOpenBlock: true,
          suppressObsoleteBrowserNotifier: true,
        }
      );

      // Кастомная иконка метки
      const marker = new window.ymaps.Placemark(
        innopolisCoords,
        {
          balloonContentHeader: "Наш офис",
          balloonContentBody: `
          Республика Татарстан, р-н Верхнеуслонский,<br/>
          г. Иннополис, ул. Университетская, д.5
        `,
          balloonContentFooter: "<em></em>",
          hintContent: "Кликните для подробной информации",
        },
        {
          // Кастомный внешний вид метки
          preset: "islands#blueDotIconWithCaption",
          iconColor: "#007bff", // Синий цвет как в дизайне
          draggable: false,
        }
      );

      map.geoObjects.add(marker);

      // Автоматически открываем подсказку при загрузке
      marker.balloon.open();
    };

    loadYandexMap();

    // Очистка при размонтировании компонента
    return () => {
      if (window.ymaps && mapRef.current) {
        mapRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        minHeight: "400px",
      }}
    />
  );
};

export default YandexMap;
