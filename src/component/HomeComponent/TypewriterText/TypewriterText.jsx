import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 30, className = "" }) => {
  const [chars, setChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Добавление новых символов
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setChars((prev) => [
          ...prev,
          {
            char: text[currentIndex],
            opacity: 0,
            isNew: true,
          },
        ]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  // Анимация появления
  useEffect(() => {
    if (chars.length > 0 && chars.some((c) => c.opacity < 1)) {
      const fadeInterval = setInterval(() => {
        setChars((prev) =>
          prev.map((c) => {
            if (c.isNew && c.opacity < 0.3) {
              return {
                ...c,
                opacity: Math.min(0.3, c.opacity + 0.03),
              };
            }
            return {
              ...c,
              opacity: Math.min(1, c.opacity + 0.1),
              isNew: false,
            };
          })
        );
      }, 30);

      return () => clearInterval(fadeInterval);
    }
  }, [chars]);

  return (
    <span className={className} style={{ whiteSpace: "pre-wrap" }}>
      {chars.map(({ char, opacity }, i) =>
        char === " " ? (
          <span key={i} className="preserve-space">
            {" "}
          </span>
        ) : (
          <span key={i} className="typewriter-char" style={{ opacity }}>
            {char}
          </span>
        )
      )}
    </span>
  );
};

export default TypewriterText;
