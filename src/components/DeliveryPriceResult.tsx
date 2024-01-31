import React from "react";
import "../styles/components/DeliveryPriceResult.css";

interface DeliveryPriceResultProps {
  value: number;
}

const DeliveryPriceResult: React.FC<DeliveryPriceResultProps> = ({ value }) => {
  return (
    <div>
      <h2>Delivery Price</h2>
      <p>{value}€</p>
    </div>
  );
};

export default DeliveryPriceResult;
