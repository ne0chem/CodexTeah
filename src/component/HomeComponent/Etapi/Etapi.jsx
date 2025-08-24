import "./Etapi.css";

const Etapi = () => {
  return (
    <section class="work-steps">
      <div class="container">
        <h2 class="section-title">Как мы работаем</h2>

        <div class="steps-container">
          {/* <!-- Этап 1 --> */}
          <div class="step-item">
            <div class="step-bg-number">1</div>
            <div class="step-card">
              <h3 class="step-title">Знакомство и анализ</h3>
              <p class="step-desc">
                Обсуждаем ваши цели, задачи и идеи. Проводим анализ рынка и
                целевой аудитории.
              </p>
            </div>
            <div class="step-connector"></div>
          </div>

          {/* <!-- Этап 2 --> */}
          <div class="step-item">
            <div class="step-bg-number">2</div>
            <div class="step-card">
              <h3 class="step-title">Техническое задание</h3>
              <p class="step-desc">
                Составляем детальное техническое задание (ТЗ), которое фиксирует
                все требования.
              </p>
            </div>
            <div class="step-connector"></div>
          </div>

          {/* <!-- Этап 3 --> */}
          <div class="step-item">
            <div class="step-bg-number">3</div>
            <div class="step-card">
              <h3 class="step-title">Дизайн-концепция</h3>
              <p class="step-desc">
                Создаем прототипы и дизайн-макеты ключевых страниц. Утверждаем
                визуальный стиль.
              </p>
            </div>
            <div class="step-connector"></div>
          </div>

          {/* <!-- Этап 4 --> */}
          <div class="step-item">
            <div class="step-bg-number">4</div>
            <div class="step-card">
              <h3 class="step-title">Разработка</h3>
              <p class="step-desc">
                Наши программисты приступают к кодированию. Придерживаемся
                Agile-методологии.
              </p>
            </div>
            <div class="step-connector"></div>
          </div>

          {/* <!-- Этап 5 --> */}
          <div class="step-item">
            <div class="step-bg-number">5</div>
            <div class="step-card">
              <h3 class="step-title">Тестирование</h3>
              <p class="step-desc">
                Проводим полный цикл тестирования: функционал, безопасность,
                производительность.
              </p>
            </div>
            <div class="step-connector"></div>
          </div>

          {/* <!-- Этап 6 --> */}
          <div class="step-item">
            <div class="step-bg-number">6</div>
            <div class="step-card">
              <h3 class="step-title">Запуск и поддержка</h3>
              <p class="step-desc">
                Размещаем проект на хостинге. Предоставляем техническую
                поддержку после запуска.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etapi;
