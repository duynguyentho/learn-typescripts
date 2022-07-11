import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Pokemon } from '../interface'
import PokemonList from './PokemonList'
import './pokemon.css'


interface PropTypes {
    pokemons: Pokemon[]
}

const PokemonCollection:React.FC<PropTypes> = props => {
    const {pokemons} = props
  return (
    <div>
        <section className="collection-container">
            {pokemons.map((pokemon, key) => {
                return (<div>
                    <PokemonList 
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    image={pokemon.sprites.front_default}
                    />
                </div>)
            })}
        </section>
    </div>
  )
}

export default PokemonCollection