import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import {useState, useEffect} from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsData => setPlants(plantsData))
  }, [])

  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  function updatePlant(updatedPlantData){
    setPlants(plants.map(plant =>{
      if(plant.id === updatedPlantData.id){
          return updatedPlantData
      }
      else{
          return plant
      }
    }))
  }

  function addPlant(newPlant){
    fetch("http://localhost:6001/plants",{
        method: "POST",
        headers: {
            "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlantData => setPlants([...plants, newPlantData]))
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search updateSearchText={setSearchText} searchText={searchText}/>
      <PlantList plants={filteredPlants} updatePlant={updatePlant}/>
    </main>
  );
}

export default PlantPage;
