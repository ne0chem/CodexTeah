import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("popular");

  const faqData = [
    {
      id: 1,
      question: "Сколько времени занимает разработка проекта?",
      answer:
        "Сроки разработки зависят от сложности проекта. Небольшой лендинг может быть готов за 1-2 недели, тогда как сложное веб-приложение может потребовать 2-6 месяцев работы. После анализа требований мы предоставим точные сроки.",
      category: "development",
      isPopular: true,
    },
    {
      id: 2,
      question: "Как происходит процесс разработки?",
      answer:
        "Наш процесс включает: 1) Анализ требований и планирование, 2) Прототипирование и дизайн, 3) Разработка, 4) Тестирование и контроль качества, 5) Запуск и поддержка. Мы работаем по гибкой методологии (Agile), что позволяет оперативно вносить изменения.",
      category: "process",
      isPopular: true,
    },
    {
      id: 4,
      question: "Какие технологии вы используете в работе?",
      answer:
        "Мы используем современный стек технологий, включая React, Vue.js, Node.js, Python/Django, различные базы данных и облачные решения. Технологии выбираются исходя из задач конкретного проекта, чтобы обеспечить максимальную эффективность и масштабируемость.",
      category: "tech",
      isPopular: true,
    },
    {
      id: 5,
      question: "Как происходит оценка стоимости проекта?",
      answer:
        "Стоимость оценивается на основе анализа требований, сложности функционала, дизайна и сроков реализации. Мы предоставляем детализированную смету с разбивкой по этапам работ. Также возможна почасовая оплата для проектов с изменяющимися требованиями.",
      category: "pricing",
      isPopular: true,
    },
    {
      id: 19,
      question: "Как начать с вами работать?",
      answer:
        "Просто свяжитесь с нами через форму на сайте или по телефону. Мы обсудим ваши задачи, проведем бесплатную консультацию и составим коммерческое предложение.",
      category: "process",
      isPopular: true,
    },
    // Остальные вопросы (не популярные)
    {
      id: 3,
      question: "Предоставляете ли вы техническую поддержку после запуска?",
      answer:
        "Да, мы предлагаем различные пакеты технической поддержки после запуска проекта. Это может включать исправление ошибок, обновления безопасности, консультации и добавление нового функционала. Подробности обсуждаются индивидуально для каждого проекта.",
      category: "support",
      isPopular: false,
    },
    {
      id: 6,
      question: "Работаете ли вы по ТЗ заказчика?",
      answer:
        "Да, мы можем работать как по вашему техническому заданию, так и помочь с его составлением. Наши аналитики проведут аудит вашего ТЗ и предложат оптимальные решения для реализации.",
      category: "process",
      isPopular: false,
    },
    {
      id: 7,
      question: "Какие гарантии вы предоставляете?",
      answer:
        "Мы предоставляем гарантию на все наши работы сроком от 3 до 12 месяцев в зависимости от типа проекта. В течение гарантийного периода бесплатно исправляем все выявленные ошибки и недоработки.",
      category: "support",
      isPopular: false,
    },
    {
      id: 8,
      question: "Вы разрабатываете сайты с нуля или на CMS?",
      answer:
        "Мы сознательно выбрали разработку с нуля на React вместо работы с готовыми CMS. Это позволяет нам создавать продукты высочайшего качества с индивидуальным дизайном и сложной функциональностью. React обеспечивает лучшую производительность, безопасность и масштабируемость по сравнению с типовыми решениями на WordPress или Tilda. Мы фокусируемся на создании уникальных digital-продуктов, а не шаблонных сайтов.",
      category: "development",
      isPopular: false,
    },
    {
      id: 9,
      question: "Делаете ли вы адаптивную верстку?",
      answer:
        "Да, все наши проекты полностью адаптивны и корректно отображаются на всех устройствах: компьютерах, планшетах и smartphones. Мы используем mobile-first подход.",
      category: "development",
      isPopular: false,
    },
    {
      id: 10,
      question: "Как происходит согласование этапов работы?",
      answer:
        "После завершения каждого этапа мы демонстрируем результат, вносим правки по вашему feedback и только после полного согласования переходим к следующему этапу. Вы всегда в курсе прогресса.",
      category: "process",
      isPopular: false,
    },
    {
      id: 11,
      question: "Можно ли вносить изменения в процессе разработки?",
      answer:
        "Да, мы работаем по гибкой методологии, что позволяет вносить изменения. Крупные правки могут повлиять на сроки и стоимость, о чем мы заранее предупреждаем.",
      category: "process",
      isPopular: false,
    },
    {
      id: 12,
      question: "Что входит в стоимость разработки?",
      answer:
        "В стоимость входит: анализ, проектирование, дизайн, верстка, программирование, тестирование, запуск и первоначальная техническая поддержка. Детальная смета предоставляется перед началом работ.",
      category: "pricing",
      isPopular: false,
    },
    {
      id: 13,
      question: "Возможна ли рассрочка платежа?",
      answer:
        "Да, мы предлагаем гибкие условия оплаты. Стандартная схема: 30% предоплата, 40% по завершению основных этапов, 30% после сдачи проекта.",
      category: "pricing",
      isPopular: false,
    },
    {
      id: 14,
      question: "Какой срок бесплатной поддержки после запуска?",
      answer:
        "Мы предоставляем 1 месяц бесплатной поддержки для устранения возможных багов. Далее можно подключить один из платных тарифов техподдержки.",
      category: "support",
      isPopular: false,
    },
    {
      id: 15,
      question: "Обучаете ли вы работе с готовым проектом?",
      answer:
        "Да, после сдачи проекта мы проводим подробное обучение вашей команды работе с административной панелью и всеми функциями сайта.",
      category: "support",
      isPopular: false,
    },
    {
      id: 16,
      question: "Какие браузеры поддерживаются?",
      answer:
        "Наши сайты работают во всех современных браузерах: Chrome, Firefox, Safari, Edge, Opera. Поддержка старых версий обсуждается отдельно.",
      category: "tech",
      isPopular: false,
    },
    {
      id: 17,
      question: "Предоставляете ли вы доступ к хостингу и домену?",
      answer:
        "Да, мы либо помогаем с выбором и настройкой хостинга, либо предоставляем его сами. Все доступы передаются вам после завершения проекта.",
      category: "tech",
      isPopular: false,
    },
    {
      id: 18,
      question: "Заключаете ли вы официальный договор?",
      answer:
        "Да, мы работаем официально по договору, где прописываются все этапы, сроки, стоимость и гарантии. Это защищает интересы обеих сторон.",
      category: "process",
      isPopular: false,
    },
  ];

  const categories = [
    { id: "popular", name: "Популярные вопросы" },
    { id: "development", name: "Разработка" },
    { id: "process", name: "Процесс" },
    { id: "support", name: "Поддержка" },
    { id: "pricing", name: "Стоимость" },
    { id: "tech", name: "Технологии" },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((item) => {
    if (activeCategory === "popular") {
      return item.isPopular;
    }
    return item.category === activeCategory;
  });

  return (
    <section className="faq-section">
      <div className="decorative-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">Частые вопросы</h1>
          <p className="faq-subtitle">
            Здесь вы найдете ответы на самые популярные вопросы о наших услугах
            и процессе работы
          </p>
        </div>

        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isActive={activeIndex === index}
                onToggle={() => toggleQuestion(index)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>В этой категории пока нет вопросов</p>
            </div>
          )}
        </div>

        <div className="faq-footer">
          <p className="contact-text">Не нашли ответ на свой вопрос?</p>
          <a href="#contact" className="contact-btn">
            Свяжитесь с нами
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, isActive, onToggle }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <button className="faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq-icon">
          <i className={`fas fa-chevron-${isActive ? "up" : "down"}`}></i>
        </span>
      </button>
      <div className="faq-answer-container">
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
