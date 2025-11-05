import React, { useState } from "react";
import "./Zayavka.css";
import "./adapriv.css";
import axios from "axios";

const Zayavka = () => {
  const zayavkaButton = () => {
    axios.post("http://localhost:8000/users", formValues);
  };

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  return (
    <div className="forma__right">
      <p className="forma__tile">
        <b>Оставьте заявку</b>, что бы <br></br>получить подробности
      </p>
      <div className="forma__text">
        <input
          onChange={onChange}
          value={formValues.name}
          type="text"
          name="name"
          placeholder="Имя"
        />
        <input
          onChange={onChange}
          value={formValues.email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={onChange}
          value={formValues.phone}
          type="tel"
          name="phone"
          placeholder="Телефон"
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
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-custom"></span>
          <p>
            Нажимая «Отправить заявку», вы соглашаетесь с нашей 
            <a href="/privacy" className="privacy-link">
              <b>политикой конфиденциальности</b>
            </a>
          </p>
        </label>
        <button onClick={zayavkaButton} className="forma__button">
          Отправить заявку
        </button>
      </div>
    </div>
  );
};

export default Zayavka;
