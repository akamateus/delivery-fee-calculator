import React from "react";
import "../styles/components/inputStyles.css";

interface DeliveryDistanceInputProps {
  value: number;
  onChange: (value: number) => void;
}

const DeliveryDistanceInput: React.FC<DeliveryDistanceInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="deliveryDistance">Delivery Distance</label>
      <input
        type="number"
        required
        id="deliveryDistance"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      m
    </div>
  );
};

export default DeliveryDistanceInput;
