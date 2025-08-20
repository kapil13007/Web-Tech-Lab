import React from "react";
import Control from "./components/Controls.jsx";
import Header from "./components/Header.jsx";
import TemperatureDisplay from "./components/TemperatureDisplay.jsx";
import { useState } from "react";
import "./App.css"

function App(){

  const [temperature,setTemperature] = useState(0);
  const [unit,setUnit] = useState("C");

  function increaseTemperature(){
    setTemperature(temperature + 1);
  }
  
  function decreaseTemperature(){
    setTemperature(temperature - 1);
  }

  function convertTemp(){
    if(unit == "C"){
      const farenheit = (temperature * 9)/5 + 32;
      setTemperature(Number(farenheit.toFixed(1)));
      setUnit('F')
    }
    else{
      const celsius = ((temperature - 32) * 5) / 9;
      setTemperature(Number(celsius.toFixed(1)));
      setUnit('C')
    }
  }

  return(
    <div className="app">
      <Header />
      <TemperatureDisplay value={temperature} unit = {unit}>

      </TemperatureDisplay>
      <Control
      onIncrease={increaseTemperature}
      onDecrease={decreaseTemperature}
      onConvert={convertTemp} />
    </div>
  );
}
export default App;