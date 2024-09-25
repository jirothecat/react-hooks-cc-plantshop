import React from "react";

import {useState} from "react";

function PlantCard({plant, updatePlant}) {

  const [displayPlantStock, setDisplayPlantStock] = useState(true)

  function toggleDisplayPlantStock(){
    setDisplayPlantStock(!displayPlantStock)
    updatePlant(plant.id, !displayPlantStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {displayPlantStock ? (
      <button className="primary" onClick={toggleDisplayPlantStock}>In Stock</button>
      ) : (
        <button onClick={toggleDisplayPlantStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
