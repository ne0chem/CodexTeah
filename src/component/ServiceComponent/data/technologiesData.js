export const getTechnologiesForService = (serviceTitle) => {
  const technologies = {
    "Одностраничный сайт": [
      {
        name: "HTML5/CSS3",
        icon: "/tech/html-css.svg",
        description: "Семантическая верстка для landing page",
        benefits: [
          "Чистая и понятная структура",
          "Оптимизация для SEO",
          "Быстрая загрузка страницы",
          "Кроссбраузерная совместимость",
        ],
      },
      {
        name: "JavaScript",
        icon: "/tech/javascript.svg",
        description: "Интерактивность и анимации",
        benefits: [
          "Плавные анимации и переходы",
          "Валидация форм обратной связи",
          "Интерактивные элементы",
          "Работа с API (отправка форм)",
        ],
      },
      {
        name: "React/Gatsby",
        icon: "/tech/react.svg",
        description: "Для сложных интерактивных лендингов",
        benefits: [
          "Компонентный подход",
          "Высокая производительность",
          "SSR для лучшего SEO",
          "Reusable компоненты",
        ],
      },
      {
        name: "Tailwind CSS",
        icon: "/tech/tailwind.svg",
        description: "Быстрое создание адаптивного дизайна",
        benefits: [
          "Быстрая разработка интерфейса",
          "Полная адаптивность",
          "Кастомный дизайн",
          "Чистая и понятная верстка",
        ],
      },
      {
        name: "Figma",
        icon: "/tech/figma.svg",
        description: "Проектирование UI/UX дизайна",
        benefits: [
          "Создание прототипов",
          "Разработка дизайн-системы",
          "Коллаборация с заказчиком",
          "Экспорт ресурсов для разработки",
        ],
      },
      {
        name: "GSAP",
        icon: "/tech/gsap.svg",
        description: "Продвинутые анимации и скролл-эффекты",
        benefits: [
          "Плавные и производительные анимации",
          "Параллакс эффекты",
          "Скролл-триггеры",
          "Интерактивные элементы",
        ],
      },
      {
        name: "PHP/Form handlers",
        icon: "/tech/php.svg",
        description: "Обработка форм обратной связи",
        benefits: [
          "Отправка email уведомлений",
          "Интеграция с CRM",
          "Защита от спама",
          "Валидация данных",
        ],
      },
      {
        name: "Google Analytics",
        icon: "/tech/analytics.svg",
        description: "Аналитика и отслеживание конверсий",
        benefits: [
          "Отслеживание поведения пользователей",
          "Анализ конверсий",
          "A/B тестирование",
          "Оптимизация эффективности",
        ],
      },
    ],
    "Верстка сайтов": [
      {
        name: "HTML5/CSS3",
        icon: "/tech/html-css.svg",
        description: "Семантическая верстка с современными стандартами",
        benefits: [
          "Кросс-браузерная совместимость",
          "Доступность (a11y)",
          "Оптимизация для SEO",
          "Быстрая загрузка страниц",
        ],
      },
      {
        name: "JavaScript ES6+",
        icon: "/tech/javascript.svg",
        description: "Современный JavaScript для интерактивности",
        benefits: [
          "Интерактивные элементы",
          "Анимации и эффекты",
          "Работа с API",
          "Валидация форм",
        ],
      },
      {
        name: "React",
        icon: "/tech/react.svg",
        description: "Библиотека для сложных интерфейсов",
        benefits: [
          "Компонентный подход",
          "Высокая производительность",
          "Большое сообщество",
          "Reusable компоненты",
        ],
      },
      {
        name: "Vue.js",
        icon: "/tech/vue.svg",
        description: "Прогрессивный JavaScript-фреймворк",
        benefits: [
          "Плавная кривая обучения",
          "Гибкость архитектуры",
          "Высокая производительность",
          "Подробная документация",
        ],
      },
      {
        name: "Tailwind CSS",
        icon: "/tech/tailwind.svg",
        description: "Utility-first CSS фреймворк",
        benefits: [
          "Быстрая разработка",
          "Кастомный дизайн",
          "Адаптивность из коробки",
          "Чистый код",
        ],
      },
      {
        name: "Figma",
        icon: "/tech/figma.svg",
        description: "Проектирование интерфейсов и прототипирование",
        benefits: [
          "Реальный-time коллаборация",
          "Интерактивные прототипы",
          "Авто-лейаут",
          "Дизайн-системы",
        ],
      },
    ],

    "Одностраничные сайты (SPA)": [
      {
        name: "React",
        icon: "/tech/react.svg",
        description: "Библиотека для динамических SPA",
        benefits: [
          "Виртуальный DOM для производительности",
          "Компонентная архитектура",
          "Богатая экосистема",
          "Поддержка серверного рендеринга",
        ],
      },
      {
        name: "Vue.js",
        icon: "/tech/vue.svg",
        description: "Фреймворк для интуитивных SPA",
        benefits: [
          "Реактивная система данных",
          "Плавная интеграция в проекты",
          "Vue Router для навигации",
          "Vuex для управления состоянием",
        ],
      },
      {
        name: "Angular",
        icon: "/tech/angular.svg",
        description: "Полнофункциональный фреймворк для SPA",
        benefits: [
          "Полная MVC архитектура",
          "TypeScript из коробки",
          "Встроенные инструменты",
          "Enterprise-уровень",
        ],
      },
      {
        name: "Gatsby",
        icon: "/tech/gatsby.svg",
        description: "React-фреймворк для высокопроизводительных сайтов",
        benefits: [
          "Генерация статических сайтов",
          "Мгновенная загрузка",
          "Оптимизация для SEO",
          "Богатая экосистема плагинов",
        ],
      },
      {
        name: "Figma",
        icon: "/tech/figma.svg",
        description: "Проектирование UI/UX для SPA",
        benefits: [
          "Создание интерактивных прототипов",
          "Командная работа в реальном времени",
          "Дизайн-системы и компоненты",
          "Экспорт кода для разработчиков",
        ],
      },
      {
        name: "Webpack/Vite",
        icon: "/tech/webpack.svg",
        description: "Сборка и оптимизация проекта",
        benefits: [
          "Бандлинг ресурсов",
          "Горячая перезагрузка",
          "Оптимизация производительности",
          "Tree shaking",
        ],
      },
    ],

    "Корпоративные сайты": [
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg",
        description: "React фреймворк для корпоративных решений",
        benefits: [
          "SSR для SEO",
          "Высокая производительность",
          "Встроенный роутинг",
          "Оптимизация изображений",
        ],
      },
      {
        name: "WordPress",
        icon: "/tech/wordpress.svg",
        description: "CMS для управления контентом",
        benefits: [
          "Простое управление",
          "Много готовых решений",
          "SEO-дружественный",
          "Большое сообщество",
        ],
      },
      {
        name: "Go (Golang)",
        icon: "/tech/go.svg",
        description: "Высокопроизводительный бэкенд",
        benefits: [
          "Многопоточность (горутины)",
          "Высокая производительность",
          "Простой и чистый синтаксис",
          "Встроенная поддержка HTTP",
        ],
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
        description: "JavaScript на сервере",
        benefits: [
          "Единый язык на frontend/backend",
          "Высокая производительность",
          "Большой ecosystem",
          "Масштабируемость",
        ],
      },
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
        description: "NoSQL база данных для гибкости",
        benefits: [
          "Гибкая схема данных",
          "Масштабируемость",
          "Высокая производительность",
          "JSON-like документы",
        ],
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        description: "Реляционная база данных",
        benefits: [
          "Надежность и стабильность",
          "Расширенные функции SQL",
          "Полная ACID совместимость",
          "Масштабируемость",
        ],
      },
    ],

    "Интернет-магазины": [
      {
        name: "Shopify",
        icon: "/tech/shopify.svg",
        description: "Платформа для e-commerce",
        benefits: [
          "Готовые платежные решения",
          "Управление inventory",
          "Маркетинговые инструменты",
          "Мобильная оптимизация",
        ],
      },
      {
        name: "WooCommerce",
        icon: "/tech/woocommerce.svg",
        description: "E-commerce плагин для WordPress",
        benefits: [
          "Интеграция с WordPress",
          "Гибкие настройки",
          "Много расширений",
          "SEO-оптимизация",
        ],
      },
      {
        name: "Magento",
        icon: "/tech/magento.svg",
        description: "Мощная платформа для интернет-магазинов",
        benefits: [
          "Высокая масштабируемость",
          "Богатая функциональность",
          "Гибкость настроек",
          "Enterprise-решения",
        ],
      },
      {
        name: "Go (Golang)",
        icon: "/tech/go.svg",
        description: "Бэкенд для высоконагруженных магазинов",
        benefits: [
          "Обработка высоких нагрузок",
          "Быстрые API-запросы",
          "Эффективное кэширование",
          "Микросервисная архитектура",
        ],
      },
      {
        name: "React/Next.js",
        icon: "/tech/nextjs.svg",
        description: "Современный фронтенд для магазинов",
        benefits: [
          "Интерактивный интерфейс",
          "Быстрая загрузка страниц",
          "PWA возможности",
          "SEO оптимизация",
        ],
      },
    ],

    "Мобильные приложения": [
      {
        name: "React Native",
        icon: "/tech/react-native.svg",
        description: "Кроссплатформенная разработка",
        benefits: [
          "Один код для iOS/Android",
          "Нативный performance",
          "Горячая перезагрузка",
          "Большое сообщество",
        ],
      },
      {
        name: "Flutter",
        icon: "/tech/flutter.svg",
        description: "UI toolkit от Google",
        benefits: [
          "Быстрая разработка",
          "Красивый дизайн",
          "Высокая производительность",
          "Rich widgets",
        ],
      },
      {
        name: "Swift",
        icon: "/tech/swift.svg",
        description: "Нативная разработка для iOS",
        benefits: [
          "Высокая производительность",
          "Прямой доступ к API Apple",
          "Безопасность и стабильность",
          "Оптимизация под оборудование Apple",
        ],
      },
      {
        name: "Kotlin",
        icon: "/tech/kotlin.svg",
        description: "Нативная разработка для Android",
        benefits: [
          "Современный и безопасный язык",
          "Полная совместимость с Java",
          "Официальный язык для Android",
          "Короткий и выразительный код",
        ],
      },
      {
        name: "Go (Golang)",
        icon: "/tech/go.svg",
        description: "Бэкенд для мобильных приложений",
        benefits: [
          "Высокая производительность API",
          "Эффективная обработка запросов",
          "Микросервисная архитектура",
          "Простота развертывания",
        ],
      },
      {
        name: "Firebase",
        icon: "/tech/firebase.svg",
        description: "Backend-as-a-Service от Google",
        benefits: [
          "Реальный-time база данных",
          "Аутентификация",
          "Хостинг и облачные функции",
          "Analytics и уведомления",
        ],
      },
    ],

    "Веб-приложения": [
      {
        name: "React",
        icon: "/tech/react.svg",
        description: "Библиотека для сложных интерфейсов",
        benefits: [
          "Компонентный подход",
          "Виртуальный DOM",
          "Богатая экосистема",
          "Поддержка сообщества",
        ],
      },
      {
        name: "Vue.js",
        icon: "/tech/vue.svg",
        description: "Прогрессивный JavaScript-фреймворк",
        benefits: [
          "Гибкая архитектура",
          "Понятная документация",
          "Плавная интеграция",
          "Высокая производительность",
        ],
      },
      {
        name: "Angular",
        icon: "/tech/angular.svg",
        description: "Полнофункциональный фреймворк",
        benefits: [
          "Полный набор инструментов",
          "TypeScript из коробки",
          "Инъекция зависимостей",
          "Enterprise-уровень",
        ],
      },
      {
        name: "Go (Golang)",
        icon: "/tech/go.svg",
        description: "Высокопроизводительный бэкенд",
        benefits: [
          "Простые и эффективные API",
          "Высокая пропускная способность",
          "Встроенная поддержка многопоточности",
          "Минимальные требования к памяти",
        ],
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
        description: "JavaScript на сервере",
        benefits: [
          "Единый язык на frontend/backend",
          "Большой ecosystem npm",
          "Событийно-ориентированная архитектура",
          "Масштабируемость",
        ],
      },
      {
        name: "Python/Django",
        icon: "/tech/django.svg",
        description: "Фреймворк для быстрой разработки",
        benefits: [
          "Чистая архитектура MVC",
          "Встроенная админ-панель",
          "ORM для работы с базами данных",
          "Система аутентификации",
        ],
      },
      {
        name: "Ruby on Rails",
        icon: "/tech/rails.svg",
        description: "Фреймворк для продуктивной разработки",
        benefits: [
          "Конвенция над конфигурацией",
          "Быстрая разработка",
          "Безопасность по умолчанию",
          "Богатая экосистема гемов",
        ],
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        description: "Мощная реляционная БД",
        benefits: [
          "Надежность и стабильность",
          "Расширенные функции",
          "Масштабируемость",
          "Полная ACID совместимость",
        ],
      },
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
        description: "Документо-ориентированная NoSQL БД",
        benefits: [
          "Гибкая схема данных",
          "Горизонтальное масштабирование",
          "Высокая производительность",
          "JSON-подобные документы",
        ],
      },
    ],

    "UI/UX Дизайн": [
      {
        name: "Figma",
        icon: "/tech/figma.svg",
        description: "Профессиональный инструмент дизайна",
        benefits: [
          "Реальный-time collaboration",
          "Auto layout",
          "Design systems",
          "Прототипирование",
        ],
      },
      {
        name: "Adobe XD",
        icon: "/tech/adobe-xd.svg",
        description: "Дизайн и прототипирование",
        benefits: [
          "Интеграция с Adobe Creative Cloud",
          "Auto-animate",
          "Voice prototyping",
          "Responsive resize",
        ],
      },
      {
        name: "Sketch",
        icon: "/tech/sketch.svg",
        description: "Векторный редактор для дизайнеров",
        benefits: [
          "Интуитивный интерфейс",
          "Широкие возможности плагинов",
          "Символы и переиспользуемые элементы",
          "Экспорт кода",
        ],
      },
      {
        name: "InVision",
        icon: "/tech/invision.svg",
        description: "Прототипирование и коллаборация",
        benefits: [
          "Интерактивные прототипы",
          "Обратная связь в реальном времени",
          "Дизайн-системы",
          "Интеграция с другими инструментами",
        ],
      },
      {
        name: "Adobe Photoshop",
        icon: "/tech/photoshop.svg",
        description: "Редактор для графики и макетов",
        benefits: [
          "Мощные инструменты редактирования",
          "Точный контроль над пикселями",
          "Широкие возможности для графики",
          "Интеграция с другими инструментами Adobe",
        ],
      },
      {
        name: "Adobe Illustrator",
        icon: "/tech/illustrator.svg",
        description: "Векторная графика и иллюстрации",
        benefits: [
          "Создание масштабируемой векторной графики",
          "Точные инструменты рисования",
          "Логотипы и иконки",
          "Профессиональные иллюстрации",
        ],
      },
    ],

    "Хостинг и DevOps": [
      {
        name: "AWS",
        icon: "/tech/aws.svg",
        description: "Облачная инфраструктура",
        benefits: [
          "Высокая доступность",
          "Автомасштабирование",
          "Глобальная инфраструктура",
          "Pay-as-you-go",
        ],
      },
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        description: "Контейнеризация приложений",
        benefits: [
          "Изоляция окружения",
          "Простота деплоя",
          "Консистентность",
          "Масштабируемость",
        ],
      },
      {
        name: "Kubernetes",
        icon: "/tech/kubernetes.svg",
        description: "Оркестрация контейнеров",
        benefits: [
          "Автоматическое масштабирование",
          "Самовосстановление",
          "Управление состоянием приложений",
          "Переносимость между облаками",
        ],
      },
      {
        name: "GitLab CI/CD",
        icon: "/tech/gitlab.svg",
        description: "Непрерывная интеграция и доставка",
        benefits: [
          "Автоматизация сборки и тестирования",
          "Интеграция с GitLab",
          "Развертывание в несколько сред",
          "Мониторинг пайплайнов",
        ],
      },
      {
        name: "Jenkins",
        icon: "/tech/jenkins.svg",
        description: "Сервер автоматизации",
        benefits: [
          "Гибкая настройка пайплайнов",
          "Большое количество плагинов",
          "Распределенная архитектура",
          "Поддержка различных инструментов",
        ],
      },
      {
        name: "Terraform",
        icon: "/tech/terraform.svg",
        description: "Infrastructure as Code",
        benefits: [
          "Декларативная конфигурация",
          "Управление инфраструктурой в коде",
          "Версионирование изменений",
          "Поддержка множества провайдеров",
        ],
      },
      {
        name: "Nginx",
        icon: "/tech/nginx.svg",
        description: "Веб-сервер и обратный прокси",
        benefits: [
          "Высокая производительность",
          "Балансировка нагрузки",
          "Кэширование контента",
          "Обработка большого числа соединений",
        ],
      },
    ],
  };

  return (
    technologies[serviceTitle] || [
      {
        name: "Современные технологии",
        icon: "/tech/default.svg",
        description: "Используем актуальные инструменты разработки",
        benefits: [
          "Высокая производительность",
          "Безопасность",
          "Масштабируемость",
          "Поддержка и обновления",
        ],
      },
    ]
  );
};

export const getTechnologiesImage = (category) => {
  const imageMap = {
    sites: "/tech/web-tech.jpg",
    apps: "/tech/mobile-tech.jpg",
    design: "/tech/design-tech.jpg",
    other: "/tech/devops-tech.jpg",
    spa: "/tech/spa-tech.jpg", // Добавляем изображение для SPA
    ecommerce: "/tech/ecommerce-tech.jpg", // Добавляем изображение для интернет-магазинов
  };
  return imageMap[category] || "/tech/default-tech.jpg";
};
