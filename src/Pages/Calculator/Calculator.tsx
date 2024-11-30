import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalculatorButton from "../../components/calculator/CalculatorButton";
import "./calculator.css";

const Calculator: React.FC = () => {
  const [screen, setScreen] = useState<string>("0");
  const [history, setHistory] = useState<string[]>([]);
  const navigate = useNavigate();

  function isCompleteExpression(sc: string) {
    const lastOperatorIndex = Math.max(
      sc.lastIndexOf('+'),
      sc.lastIndexOf('-'),
      sc.lastIndexOf('×'),
      sc.lastIndexOf('/')
    );
  
    if (lastOperatorIndex === -1) return false; 
    
    const leftPart = sc.substring(0, lastOperatorIndex);
    const rightPart = sc.substring(lastOperatorIndex + 1);
  
    // Pastikan ada angka di kedua sisi operator
    return leftPart.trim() !== "" && rightPart.trim() !== "";
  }
  

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setScreen("0");
    } else if (value === "DEL") {
      setScreen(screen.slice(0, -1) || "0");
    } else if (value === "=") {
      try {
        const changeExpression = screen.replace(/×/g, "*");
        if (changeExpression.includes("/0")) {
          throw new Error("Division by zero");
        }
        let result = eval(changeExpression);
        if (!Number.isInteger(result)) {
          result = result.toFixed(3);
        }
        setScreen(result.toString());
        setHistory([result.toString(), ...history]);
      } catch {
        setScreen("Err");
      }
    } else if (value === "?") {
      navigate("/Support");
    } else {
      if((value == '+' || value == '-' || value == '×' || value == '/') && isCompleteExpression(screen)){
        try {
          const changeExpression = screen.replace(/×/g, "*");
          if (changeExpression.includes("/0")) {
            throw new Error("Division by zero");
          }
          let result = eval(changeExpression);
          if (!Number.isInteger(result)) {
            result = result.toFixed(3);
          }
          setScreen(result.toString() + value);
          setHistory([result.toString(), ...history]);
        } catch {
          setScreen("Err");
        }
      }
      else {
        setScreen(screen === "0" ? value : screen + value);
      }
    }
  };

  const buttons = [
    ["C", "DEL", "?", "/"],
    ["1", "2", "3", "×"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "+"],
    ["0", "="],
  ];

  return (
    <div className="calc-container">
      <div className="calc-wrapper">
        <section className="calc-screen">
          <div className="calc-history-screen">
            {history.map((h, index) => (
              <div className="calc-history-res" key={index}>
                {h}
              </div>
            ))}
          </div>
          {screen}
        </section>
        <section className="calc-buttons">
          {buttons.map((row, rowIndex) => (
            <div key={rowIndex} className="calc-button-row">
              {row.map((btn, btnIndex) => (
                <CalculatorButton
                  key={btnIndex}
                  label={btn}
                  onClick={handleButtonClick}
                  className={
                    btn === "=" || btn === "0"
                      ? "double"
                      : btn === "?"
                      ? "support-btn"
                      : ""
                  }
                />
              ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Calculator;
