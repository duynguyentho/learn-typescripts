import React from 'react'
import './pokemon.css'

interface Props {
    name:string,
    id?: number,
    image: string
}

const PokemonList:React.FC<Props> = (props) => {
    const {name,id,image} = props
  return (
    <div key={id}>
        <section className="pokemon-list-container">
            <p> {name} </p>
            <img src={image} alt="" />
        </section>
    </div>
  )
}

export default PokemonList