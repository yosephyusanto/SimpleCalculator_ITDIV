import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import '../index.css'

const Calculator: React.FC = () => {
  const [screen, setScreen] = useState<string>("0");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setScreen("0");
    } else if (value === "DEL") {
      setScreen(screen.slice(0, -1) || "0");
    } else if (value === "=") {
      try {
        const changeExpression = screen
        .replace('×', '*')
        .replace('−', '-'); // Ganti simbol Unicode minus dengan dash
      setScreen(eval(changeExpression).toString());
      } catch {
        setScreen("Error");
      }
    } else {
      setScreen(screen === "0" ? value : screen + value);
    }
  };

  const buttons = [
    ["C", "DEL", "?", "/"],
    ["1", "2", "3", "×"],
    ["4", "5", "6", "−"],
    ["7", "8", "9", "+"],
    ["0", "="],
  ];

  return (
    <div className="wrapper">
      <section className="screen">{screen}</section>
      <section className="calc-buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="calc-button-row">
            {row.map((btn, btnIndex) => (
              <CalculatorButton
                key={btnIndex}
                label={btn}
                onClick={handleButtonClick}
                className={btn === '=' || btn === '0' ? 'double' : ''}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Calculator;
