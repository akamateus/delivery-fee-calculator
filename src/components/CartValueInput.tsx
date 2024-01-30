import React from "react";
import "../styles/components/inputStyles.css";

interface CartValueInputProps {
  value: number;
  onChange: (value: number) => void;
}

const CartValueInput: React.FC<CartValueInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="cartValue">Cart Value</label>
      <input
        type="number"
        required
        id="cartValue"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      €
    </div>
  );
};

export default CartValueInput;
