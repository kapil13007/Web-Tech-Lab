import React from "react";

export default function FruitsList() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 45 },
    { name: "banana", calories: 105 },
    { name: "coconut", calories: 159 },
    { name: "pineapple", calories: 37 },
  ];

  return (
    <div className="food-box">
      <div className="header">Fruits</div>
      <ul className="items">
        {fruits.map((item, index) => (
          <li key={index}>
            <span>{item.name}: </span>
            <span className="bold">{item.calories}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


