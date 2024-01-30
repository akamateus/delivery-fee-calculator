import React from "react";

interface OrderTimeInputProps {
  value: Date;
  onChange: (value: Date) => void;
}

const OrderTimeInput: React.FC<OrderTimeInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="orderTime">Order Time:</label>
      <input
        type="datetime-local"
        id="orderTime"
        value={value.toISOString().substring(0, 16)}
        onChange={(e) => onChange(new Date(e.target.value))}
      />
    </div>
  );
};

export default OrderTimeInput;
