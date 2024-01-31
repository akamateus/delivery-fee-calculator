interface CalculateDeliveryFeeParams {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  orderTime: Date;
}

const calculateDeliveryFee = ({
  cartValue,
  deliveryDistance,
  numberOfItems,
  orderTime,
}: CalculateDeliveryFeeParams): number => {
  //Small order surcharge
  const smallOrderSurcharge = Math.max(0, 10 - cartValue);
  //Base delivery fee
  let baseDeliveryFee = 2;
  //Additional fee for extra delivery distance
  const additionalDistanceFee =
    deliveryDistance > 1000
      ? Math.ceil((deliveryDistance - 1000) / 500) * 1
      : 0;
  //Additional surcharge for items
  const itemSurcharge =
    numberOfItems >= 5
      ? 0.5 * (numberOfItems - 5) + (numberOfItems > 12 ? 1.2 : 0)
      : 0;
  //Maximum delivery fee
  const maxDeliveryFee = 15;
  //Free delivery for cart value 200$
  const freeDeliveryThreshold = 200;
  const isFreeDelivery = cartValue >= freeDeliveryThreshold;
  //Friday rush hour
  const fridayRushHourStart = 15; // 3 PM in UTC
  const fridayRushHourEnd = 19; // 7 PM in UTC
  const isFridayRushHour =
    orderTime.getUTCHours() >= fridayRushHourStart &&
    orderTime.getUTCHours() < fridayRushHourEnd;
  const rushHourMultiplier = isFridayRushHour ? 1.2 : 1;
  //Calculate the total delivery fee
  let totalDeliveryFee =
    baseDeliveryFee +
    additionalDistanceFee +
    itemSurcharge +
    smallOrderSurcharge;
  // Applying the maximum delivery fee and free delivery
  if (!isFreeDelivery) {
    totalDeliveryFee = Math.min(totalDeliveryFee, maxDeliveryFee);
  }
  // Applying the rush hour multiplier
  totalDeliveryFee *= rushHourMultiplier;
  return totalDeliveryFee;
};

export default calculateDeliveryFee;
