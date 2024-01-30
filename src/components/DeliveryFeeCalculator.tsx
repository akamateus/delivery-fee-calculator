import React, { useState } from "react";
import CartValueInput from "./CartValueInput";
import DeliveryDistanceInput from "./DeliveryDistanceInput";
import NumberOfItemsInput from "./NumberOfItemsInput";
import OrderTimeInput from "./OrderTimeInput";
import CalculateButton from "./CalculateButton";
import DeliveryPriceResult from "./DeliveryPriceResult";
import ResetButton from "./ResetButton";
import calculateDeliveryFee from "../utils/calculateDeliveryFee";

const DeliveryFeeCalculator: React.FC = () => {
  // State for input values
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<Date>(new Date());
  // State for calculated delivery fee
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);

  // Function to handle calculation
  const handleCalculateDeliveryPrice = () => {
    const calculatedFee = calculateDeliveryFee({
      cartValue,
      deliveryDistance,
      numberOfItems,
      orderTime,
    });
    setDeliveryPrice(calculatedFee);
  };

  // Function to handle reset
  const handleReset = () => {
    setCartValue(0);
    setDeliveryDistance(0);
    setNumberOfItems(0);
    setOrderTime(new Date());
    setDeliveryPrice(null);
  };

  return (
    <div>
      <CartValueInput value={cartValue} onChange={setCartValue} />
      <DeliveryDistanceInput
        value={deliveryDistance}
        onChange={setDeliveryDistance}
      />
      <NumberOfItemsInput value={numberOfItems} onChange={setNumberOfItems} />
      <OrderTimeInput value={orderTime} onChange={setOrderTime} />
      <CalculateButton onClick={handleCalculateDeliveryPrice} />
      {deliveryPrice !== null && <ResetButton onClick={handleReset} />}
      {deliveryPrice !== null && <DeliveryPriceResult value={deliveryPrice} />}
    </div>
  );
};

export default DeliveryFeeCalculator;
