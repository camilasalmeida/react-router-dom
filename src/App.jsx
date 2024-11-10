import PokemonList from "./components/PokemonList"
import { useState } from "react"
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonDetails from "./components/PokemonDetails" 
import PokemonForm from './components/PokemonForm'

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
]

const App = () => {
  const [pokemon, setPokemon] = useState(initialState)
  console.log(`1. Pokemon Array: `, pokemon)

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;                               // Generating a new _id for the new Pokemon based on the current lenght of the pokemon array.
    setPokemon([...pokemon, newPokemonData]);
  }
  //------------------------------------------------------------------------------\\
  return (
    <>
      <h1>Pokemon!☄️</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home Page 🍬</h2>} />
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon} />} />
        <Route 
        path='/pokemon/:pokemonId'
        element={<PokemonDetails pokemon={pokemon} />} />
        <Route path='/pokemon/new' element={<PokemonForm addPokemon={addPokemon} />} />
      </Routes>
    </>
  )
}

export default App

// `<Route path='*' element={<h2>Whoops, there is nothing here!</h2>} /> ` : The * wildcard in React Router allows you to catch all undefined routes, providing a way to show the user a friendly error or redirect them to a default page when they visit a non-existent route.