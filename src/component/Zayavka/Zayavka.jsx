import React, { useState } from "react";
import "./Zayavka.css";
import axios from "axios";

const Zayavka = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const zayavkaButton = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setMessage("Пожалуйста, согласитесь с политикой конфиденциальности");
      return;
    }

    if (!formValues.name || !formValues.email || !formValues.phone) {
      setMessage("Пожалуйста, заполните все обязательные поля");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8000/users",
        formValues
      );

      if (response.status === 200 || response.status === 201) {
        setMessage("Заявка успешно отправлена!");
        setFormValues({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
        setIsChecked(false);
      }
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      setMessage("Произошла ошибка при отправке заявки");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="zayavka-container">
      {/* Картинка как фон */}
      <img src="./forma.png" alt="" className="zayavka-fon" />

      {/* Контент поверх фона */}
      <div className="zayavka-content">
        <div className="forma__right">
          <p className="forma__tile">
            <b>Оставьте заявку, что бы получить подробности</b>
          </p>
          <div className="forma__text">
            <input
              onChange={onChange}
              value={formValues.name}
              type="text"
              name="name"
              placeholder="Имя"
              required
            />
            <input
              onChange={onChange}
              value={formValues.email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              onChange={onChange}
              value={formValues.phone}
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
            />
            <input
              onChange={onChange}
              value={formValues.service}
              type="text"
              name="service"
              placeholder="Услуга"
            />
          </div>
          <div className="forma__bot">
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-custom"></span>
              <p>
                Нажимая «Отправить заявку», вы соглашаетесь с нашей 
                <b>политикой конфиденциальности</b>
              </p>
            </label>

            {message && <div className="form-message">{message}</div>}

            <button
              onClick={zayavkaButton}
              className="forma__button"
              disabled={isLoading}
            >
              {isLoading ? "Отправка..." : "Отправить заявку"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zayavka;
// тут мы передли функцию в кнопку
{
  /* <button onClick={zayavkaButton} className="forma__button"></button> */
}
