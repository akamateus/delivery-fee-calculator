import React from "react";
import "../styles/components/buttonStyles.css";

interface CalculateButtonProps {
  onClick: () => void;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Calculate Delivery Price</button>
    </div>
  );
};

export default CalculateButton;
