import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plants, updatePlant}) {

  const plantComponents = plants.map(plant => {
      return <PlantCard key={plant.id} plant={plant} updatePlant={updatePlant}/>
  })

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
