import React from "react";

export default function Recommendation({ item }) {
  // images array or fallback
  const images = Array.isArray(item.images) ? item.images : [item.images];

  return (
    <div className="card">
      <div className="card-left">
        <h3>{item.name}</h3>
        <p className="muted">{item.type.toUpperCase()}</p>
        <p>{item.description}</p>
      </div>
      <div className="card-right">
        <img src={images[0]} alt={`${item.name} thumb`} />
      </div>
    </div>
  );
}
