// src/components/PokemonDetails.jsx or Details of a single pokemon.
import { useParams } from 'react-router-dom'

const PokemonDetails = (props) => {
  console.log(props)                          // Always verify that any props are being passed correctly!
  const { pokemonId } = useParams()                                                           // Will extract the pokemonId from the URL.
  const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId))         // Find a specific pokemon in the props.pokemon array using the extrated pokemonId.
  console.log('pokemonId is: ', pokemonId )                                                  // Using Number to convert the pokemonId from a String to a number.
  console.log('Pokemon Object: ', singlePokemon)

  return (
    <>
      <h2>Pokemon Details for: {singlePokemon.name} </h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{ singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  )
}

export default PokemonDetails

/* 
<dt> and <dd> are used together to define description lists (also known as definition lists). These elements are part of a pair that helps structure and display information in a key-value or term-definition format.
<dt> stands for "Definition Term". It represents a term or a name that you want to define or describe.
<dd> stands for "Definition Description". It holds the definition or description of the term defined in <dt>
The <dl> element in HTML stands for "Definition List". It is used to group a list of terms and their descriptions. A definition list consists of one or more <dt> (definition term) elements and one or more <dd> (definition description) elements.
*/