import React from "react";

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
      <label htmlFor="deliveryDistance">Delivery Distance:</label>
      <input
        type="number"
        id="deliveryDistance"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default DeliveryDistanceInput;
