import { useEffect, useState } from "react";
import "./CursorTrail.css";

export default function CursorTrail() {
  const [positions, setPositions] = useState([]);
  const trailLength = 60; // Оптимальная длина для градиента

  // Ваши цвета в HSL-формате (для плавных переходов)
  const colors = [
    { hex: "#ADD7EE", hsl: "hsl(203, 65%, 80%)" }, // Светло-голубой
    { hex: "#5FB2E1", hsl: "hsl(201, 70%, 63%)" }, // Голубой
    { hex: "#0686CE", hsl: "hsl(201, 94%, 42%)" }, // Темно-голубой
  ];

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mouseX = 0;
    let mouseY = 0;
    const posHistory = Array(trailLength).fill({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const updateTrail = () => {
      posHistory.unshift({ x: mouseX, y: mouseY });
      if (posHistory.length > trailLength) posHistory.pop();
      setPositions([...posHistory]);
      requestAnimationFrame(updateTrail);
    };

    updateTrail();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {positions.map((pos, index) => {
        const progress = index / trailLength; // От 0 (начало) до 1 (конец)
        const size = 12 - progress * 10; // Размер от 12px до 2px

        // Интерполяция цвета
        const colorIndex = Math.min(2, Math.floor(progress * 3));
        const nextColorIndex = Math.min(2, colorIndex + 1);
        const blend = (progress * 3) % 1;

        return (
          <div
            key={index}
            className="trail-dot"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: `linear-gradient(135deg, 
                ${colors[colorIndex].hex}, 
                ${colors[nextColorIndex].hex})`,
              opacity: 1 - progress * 0.8,
              transform: `scale(${1 - progress * 0.5})`,
              filter: `blur(${progress}px)`,
            }}
          />
        );
      })}
    </>
  );
}
