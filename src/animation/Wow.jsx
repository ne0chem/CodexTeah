// animation/Wow.js
import { useEffect } from "react";
import { WOW } from "wowjs";

const useWow = () => {
  useEffect(() => {
    console.log("🚀 WOW.js инициализация...");

    const initializeWow = () => {
      try {
        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 50,
          mobile: true,
          live: false,
        });

        wow.init();
        console.log("✅ WOW.js инициализирован");

        // Принудительная активация при скролле
        window.addEventListener("scroll", () => {
          wow.sync();
        });
      } catch (error) {
        console.error("❌ Ошибка WOW.js:", error);

        // 🔥 ДОБАВЛЯЕМ РЕЗЕРВНЫЙ ВАРИАНТ ДЛЯ НАШИХ АНИМАЦИЙ
        console.log("🔄 Активируем резервные анимации...");
        activateBackupAnimations();
      }
    };

    // 🔥 ФУНКЦИЯ ДЛЯ НАШИХ CSS АНИМАЦИЙ
    const activateBackupAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              console.log("✅ CSS анимация запущена:", entry.target.className);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // Все наши CSS классы анимаций
      const animationClasses = [
        "fade-in",
        "fade-in-up",
        "fade-in-down",
        "fade-in-left",
        "fade-in-right",
        "slide-in-up",
        "slide-in-down",
        "slide-in-left",
        "slide-in-right",
        "zoom-in",
        "zoom-in-up",
        "zoom-in-down",
        "bounce-in",
        "bounce-in-up",
        "bounce-in-down",
        "flip-in-x",
        "flip-in-y",
        "rotate-in",
        "rotate-in-up",
        "swing-in",
        "wobble-in",
      ];

      const selector = animationClasses.map((cls) => `.${cls}`).join(", ");
      const animatedElements = document.querySelectorAll(selector);

      console.log(
        `🎯 Найдено ${animatedElements.length} элементов для CSS анимаций`
      );

      animatedElements.forEach((el) => {
        observer.observe(el);
      });

      // Очистка
      return () => {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    };

    // Ждем полной загрузки DOM
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeWow);
    } else {
      initializeWow();
    }
  }, []);
};

export default useWow;
