import React, { useState } from "react";
import CartValueInput from "./CartValueInput";
import DeliveryDistanceInput from "./DeliveryDistanceInput";
import NumberOfItemsInput from "./NumberOfItemsInput";
import OrderTimeInput from "./OrderTimeInput";
import CalculateButton from "./CalculateButton";
import DeliveryPriceResult from "./DeliveryPriceResult";
import ResetButton from "./ResetButton";
import calculateDeliveryFee from "../utils/calculateDeliveryFee";
import "../styles/components/DeliveryFeeCalculator.css";

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
    if (
      cartValue <= 0 ||
      deliveryDistance <= 0 ||
      numberOfItems < 0 ||
      orderTime === null
    ) {
      // Display an error message or handle invalid inputs in your preferred way
      console.error("Invalid input values");
      return;
    }
    // Inputs are valid, proceed with the calculation
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
      <h1> Delivery Fee Calculator</h1>
      <CartValueInput value={cartValue} onChange={setCartValue} />
      <DeliveryDistanceInput
        value={deliveryDistance}
        onChange={setDeliveryDistance}
      />
      <NumberOfItemsInput value={numberOfItems} onChange={setNumberOfItems} />
      <OrderTimeInput value={orderTime} onChange={setOrderTime} />
      <div>
        <CalculateButton onClick={handleCalculateDeliveryPrice} />
        {deliveryPrice !== null && <ResetButton onClick={handleReset} />}
        {deliveryPrice !== null && (
          <DeliveryPriceResult value={deliveryPrice} />
        )}
      </div>
    </div>
  );
};

export default DeliveryFeeCalculator;
