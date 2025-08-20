import React from "react";

export default function AnimalCard({ name, scientificName, weight, diet }) {
  return (
    <div className="animal-card">
      <h2>{name}</h2>
      <p className="scientific-name">{scientificName}</p>
      <p>{weight}</p>
      <p>{diet}</p>
    </div>
  );
}