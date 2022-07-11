import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon, Pokemons } from './interface';



const BASE_URL:string = 'https://pokeapi.co/api/v2/pokemon';

// https://pokeapi.co/api/v2/pokemon?limit=20&offset=20
const printSomething:() => number = () => { 
  console.log('hello');
    return 1;
 }
const App:React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const listPokemon = async() => {
      const res = await axios.get(`${BASE_URL}?limit=20&offset=20`);
      // console.log(res.data.results);
      
      res.data.results.forEach(async (pokemon:Pokemons) => {
        // console.log(1);
        
        let pkm = await axios.get(`${BASE_URL}/${pokemon.name}`);
        setPokemons(p => [...p, pkm.data]);
        
      })
      
    }

    listPokemon()
  }, [])
  
  return (
    <div className="App">
        <div className="container">
          <header className="pokemon-header">Pokemon</header>
          <PokemonCollection pokemons={pokemons}/>
        </div>
    </div>
  );
}

export default App;
