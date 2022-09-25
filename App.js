import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {
  const [pokemonName, setPokemonName] = useState([]);
  
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/ ${pokemonName}`).then(
      (response) => {
      setPokemonName(response.data.results);
    })
  .catch((err) => console.log(err))
  }, []);
  
  return (
    <div className="App">
      <div className="SearchName">
        <h1>Pokemon API</h1>
        <input type="text" onChange={(e) => {setPokemonName(e.target.value);}}/>
        <ul> 
          {pokemonName.map((pokemon, i) => (
              <li key={i}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
