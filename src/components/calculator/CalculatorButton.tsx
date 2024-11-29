interface ButtonProps {
  label: string;
  onClick: (value: string) => void;
  className?: string;
}

function CalculatorButton({ label, onClick, className }: ButtonProps) {
  return (
    <button
      className={`calc-button ${className || ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default CalculatorButton;
