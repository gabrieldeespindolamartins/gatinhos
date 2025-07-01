import React, { useState, useEffect } from "react";

const TextoDinamico = ({ text, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete(); // Chama a função quando o texto termina
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <div className="text-lg font-mono p-4 bg-gray-100 rounded shadow-md">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default TextoDinamico;