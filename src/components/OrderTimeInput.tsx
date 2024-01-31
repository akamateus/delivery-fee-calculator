import React from "react";
import "../styles/components/inputStyles.css";

interface OrderTimeInputProps {
  value: Date;
  onChange: (value: Date) => void;
}

const OrderTimeInput: React.FC<OrderTimeInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="orderTime">Order Time</label>
      <input
        type="datetime-local"
        required
        id="orderTime"
        value={value.toISOString().substring(0, 16)}
        onChange={(e) => onChange(new Date(e.target.value))}
      />
    </div>
  );
};

export default OrderTimeInput;
