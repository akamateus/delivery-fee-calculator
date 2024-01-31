# Delivery Fee Calculator App

## Description

This React web app calculates the delivery fee based on cart value, delivery distance, number of items, and order time. The app follows specific rules for calculating the delivery fee, including surcharges, bulk fees, and time-based adjustments.

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Folder Structure](#2-folder-structure)
3. [Components](#3-components)
4. [Styling](#4-styling)
5. [Logic Implementation](#5-logic-implementation)
6. [Time-based Rule](#6-time-based-rule)
7. [Testing](#7-testing)
8. [Usage](#8-usage)

## 1. Project Setup

- Clone the repository.
- Run `npm install` to install dependencies.
- Run `npm start` to start the development server.

## 2. Folder Structure

The project follows the following structure:

DELIVERY-FEE-CALCULATOR/
|-- src/
| |-- components/
| | |-- CartValueInput.tsx
| | |-- DeliveryDistanceInput.tsx
| | |-- NumberOfItemsInput.tsx
| | |-- OrderTimeInput.tsx
| | |-- CalculateButton.tsx
| | |-- DeliveryPriceResult.tsx
| | |-- ResetButton.tsx
| | |-- DeliveryFeeCalculator.tsx
| |-- styles/
| | |-- global.css
| | |-- components/
| |-- utils/
| | |-- calculateDeliveryFee.ts
| |-- App.tsx
| |-- App.css
| |-- index.tsx
| |-- index.css
| |-- ...
|
|-- public/
|-- node_modules/
|-- ... (other project files)

## 3. Components

The app is divided into the following components:

- `CartValueInput`: Input for cart value.
- `DeliveryDistanceInput`: Input for delivery distance.
- `NumberOfItemsInput`: Input for the number of items.
- `OrderTimeInput`: Input for the order time.
- `CalculateButton`: Button to trigger the delivery fee calculation.
- `DeliveryPriceResult`: Component to display the calculated delivery fee.
- `ResetButton`: Button to reset the calculator.
- `DeliveryFeeCalculator`: Main component integrating all inputs and buttons.

## 4. Styling

- `global.css`: Global styling.
- `components/`: Individual styling for each component, but being honest the calculator is very simple.

## 5. Logic Implementation

- `calculateDeliveryFee.ts`: Utility function containing the logic for calculating the delivery fee based on specified rules by [Wolt Engineering Internship 2024](https://github.com/woltapp/engineering-internship-2024).
  - The logic follows the rules provided in the internship assignment, considering cart value, delivery distance, number of items, and order time.
  - Surcharges, bulk fees, and time-based adjustments are applied as per the provided specifications.

## 6. Time-based Rule

The Friday rush hours rule is implemented in the `handleCalculateDeliveryPrice` function within `DeliveryFeeCalculator.tsx`. The fee is adjusted if the order is made between 3 - 7 PM.

## 7. Testing (Pending)

Testing procedures and test cases have not been implemented yet. It is recommended to thoroughly test the application with various inputs and scenarios to ensure the correct functionality of the delivery fee calculator.

Unfortunately, due to time constraints, detailed testing has not been conducted. Future iterations of the project should include comprehensive testing to validate the accuracy and robustness of the application. Sorry 😞

## 8. Usage

- Input the cart value, delivery distance, number of items, and order time.
- Click the "Calculate Delivery Price" button to see the calculated fee.
- Optionally, use the "Reset" button to clear inputs and results.

Thaaaanks 🌈
Matt
