import React from "react";
import "../styles/components/inputStyles.css";

interface NumberOfItemsInputProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberOfItemsInput: React.FC<NumberOfItemsInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="numberOfItems">Number of Items</label>
      <input
        type="number"
        required
        id="numberOfItems"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default NumberOfItemsInput;
