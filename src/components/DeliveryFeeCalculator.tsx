import React, { useState } from "react";
import CartValueInput from "./CartValueInput";
import DeliveryDistanceInput from "./DeliveryDistanceInput";
import NumberOfItemsInput from "./NumberOfItemsInput";
import OrderTimeInput from "./OrderTimeInput";
import CalculateButton from "./CalculateButton";
import DeliveryPriceResult from "./DeliveryPriceResult";
import calculateDeliveryFee from "../utils/calculateDeliveryFee";
