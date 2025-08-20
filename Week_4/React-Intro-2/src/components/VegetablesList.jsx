import React from "react";

export default function VegetablesList() {
  const vegetables = [
    { name: "potatoes", calories: 110 },
    { name: "celery", calories: 15 },
    { name: "carrots", calories: 25 },
    { name: "corn", calories: 63 },
    { name: "broccoli", calories: 50 },
  ];

  return (
    <div className="food-box">
      <div className="header">Vegetables</div>
      <ul className="items">
        {vegetables.map((item, index) => (
          <li key={index}>
            <span>{item.name}: </span>
            <span className="bold">{item.calories}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

