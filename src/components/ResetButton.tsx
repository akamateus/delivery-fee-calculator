import React from "react";
import "../styles/components/buttonStyles.css";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button">
      Reset Calculator
    </button>
  );
};

export default ResetButton;
