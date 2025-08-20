import React from "react";
import AnimalCard from "./AnimalCard";

export default function AnimalList() {
  const animals = [
    {
      name: "Lion",
      scientificName: "Panthero leo",
      weight: "140kg",
      diet: "meat.",
    },
    {
      name: "Gorilla",
      scientificName: "Gorilla beringei",
      weight: "205kg",
      diet: "plants, insects.",
    },
    {
      name: "Zebra",
      scientificName: "Equus quagga",
      weight: "322kg",
      diet: "plants.",
    },
  ];

  return (
    <div className="page-container">
      <h1>Animals</h1>
      <div className="list-container">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            weight={animal.weight}
            diet={animal.diet}
          />
        ))}
      </div>
    </div>
  );
}