import React from "react";
import DeliveryFeeCalculator from "./components/DeliveryFeeCalculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DeliveryFeeCalculator />
      </header>
    </div>
  );
};

export default App;
