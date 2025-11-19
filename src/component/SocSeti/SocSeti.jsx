import React from "react";
import "./SocSeti.css";

const SocSeti = () => {
  const phoneNumber = "89966650722";
  const formattedPhone = "8 (996) 665-07-22";
  const telegramUsername = "codextech_ru";
  const email = "info@codextech.ru";

  const handleEmailClick = () => {
    // Прямая ссылка на веб-почту (замените на вашего провайдера)
    const emailProvider = "gmail"; // или "yandex", "mail", "outlook"

    switch (emailProvider) {
      case "gmail":
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
          "_blank"
        );
        break;
      case "yandex":
        window.open(`https://mail.yandex.ru/compose?to=${email}`, "_blank");
        break;
      case "mail":
        window.open(`https://e.mail.ru/compose/?to=${email}`, "_blank");
        break;
      case "outlook":
        window.open(
          `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`,
          "_blank"
        );
        break;
      default:
        // Стандартный mailto как запасной вариант
        window.location.href = `mailto:${email}`;
    }
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/${telegramUsername}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = "Здравствуйте! Я с вашего сайта.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="add-butt-wrapper">
      <a
        className="add-butt"
        onClick={handleEmailClick}
        title={`Написать на ${email}`}
      >
        <img src="./email.svg" alt="Phone" className="icon-img" />
      </a>

      <a className="add-butt" onClick={handleTelegramClick} title="Telegram">
        <img src="./tg.svg" alt="Telegram" className="icon-img" />
      </a>

      <a className="add-butt" onClick={handleWhatsAppClick} title="WhatsApp">
        <img src="./wa.svg" alt="WhatsApp" className="icon-img" />
      </a>

      <a
        className="add-butt"
        // onClick={handleEmailClick}
        // title={`Email: ${email}`}
      >
        <img src="./max.svg" alt="Email" className="icon-img" />
      </a>
    </div>
  );
};

export default SocSeti;
