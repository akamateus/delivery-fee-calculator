import React from "react";

interface CartValueInputProps {
  value: number;
  onChange: (value: number) => void;
}

const CartValueInput: React.FC<CartValueInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="cartValue">Cart Value:</label>
      <input
        type="number"
        id="cartValue"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default CartValueInput;
