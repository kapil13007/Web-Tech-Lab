import React from "react";
import FruitsList from "./FruitsList";
import VegetablesList from "./VegetablesList";
import "../App.css"; 

export default function FoodTable() {
  return (
    <div className="container">
      <FruitsList />
      <VegetablesList />
    </div>
  );
}
