import React, { useState } from "react";
import "./Zayavka.css";
import "./adapriv.css";
import axios from "axios";
import * as yup from "yup";

// Схема валидации Yup
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя слишком длинное")
    .required("Имя обязательно для заполнения"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязателен для заполнения"),
  phone: yup
    .string()
    .matches(
      /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
      "Введите корректный номер телефона"
    )
    .required("Телефон обязателен для заполнения"),
  service: yup
    .string()
    .min(2, "Укажите услугу")
    .required("Услуга обязательна для заполнения"),
});

const Zayavka = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [key]: value });

    // Валидация при изменении поля
    if (touched[key]) {
      validationSchema
        .validateAt(key, { ...formValues, [key]: value })
        .then(() => {
          setErrors((prev) => ({ ...prev, [key]: "" }));
        })
        .catch((err) => {
          setErrors((prev) => ({ ...prev, [key]: err.message }));
        });
    }
  };

  const onBlur = (e) => {
    const key = e.target.name;
    setTouched((prev) => ({ ...prev, [key]: true }));

    // Валидация при потере фокуса
    validationSchema
      .validateAt(key, formValues)
      .then(() => {
        setErrors((prev) => ({ ...prev, [key]: "" }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [key]: err.message }));
      });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);

      // Помечаем все поля как touched для показа ошибок
      const allTouched = {};
      Object.keys(formValues).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched(allTouched);

      return false;
    }
  };

  const zayavkaButton = async () => {
    if (!isCheckboxChecked) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности");
      return;
    }

    setIsSubmitting(true);

    const isValid = await validateForm();

    if (isValid) {
      try {
        await axios.post("http://localhost:8000/users", formValues);
        alert("Заявка успешно отправлена!");

        // Сброс формы
        setFormValues({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
        setErrors({});
        setTouched({});
        setIsCheckboxChecked(false);
      } catch (error) {
        alert("Произошла ошибка при отправке заявки");
        console.error("Ошибка отправки:", error);
      }
    }

    setIsSubmitting(false);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <div className="forma__right">
      <p className="forma__tile">
        <b>Оставьте заявку</b>, чтобы <br />
        получить подробности
      </p>
      <div className="forma__text">
        <div className="input-wrapper">
          <input
            onChange={onChange}
            onBlur={onBlur}
            value={formValues.name}
            type="text"
            name="name"
            placeholder="Имя"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="input-wrapper">
          <input
            onChange={onChange}
            onBlur={onBlur}
            value={formValues.email}
            type="email"
            name="email"
            placeholder="Email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            onChange={onChange}
            onBlur={onBlur}
            value={formValues.phone}
            type="tel"
            name="phone"
            placeholder="Телефон"
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            onChange={onChange}
            onBlur={onBlur}
            value={formValues.service}
            type="text"
            name="service"
            placeholder="Услуга"
            className={errors.service ? "error" : ""}
          />
          {errors.service && (
            <span className="error-message">{errors.service}</span>
          )}
        </div>
      </div>
      <div className="forma__bot">
        <label className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          <span className="checkbox-text">
            Нажимая «Отправить заявку», вы соглашаетесь с нашей 
            <a href="/privacy" className="privacy-link">
              <b>политикой конфиденциальности</b>
            </a>
          </span>
        </label>
        <button
          onClick={zayavkaButton}
          className="forma__button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </button>
      </div>
    </div>
  );
};

export default Zayavka;
