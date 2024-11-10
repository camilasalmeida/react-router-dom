// src/components/PokemonForm.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  weight: 0,
  height: 0,
}

const PokemonForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPokemon(formData)                                    // Calling the addPokemon function from the parent component (App.jsx) and passing the formData (new Pokemon details) to it.
    setFormData(initialState)                                     // Resetting the form state after submission using initialState.
    navigate('/pokemon')                                         // Pass the path you wish to direct a user to.
}
  
  const handleChange = ({ target }) => {                        // Destructing the event object. Extracting the target property, which is the element (input field) that triggered the event.
    setFormData({ ...formData, [target.name]: target.value });
  }

  return (
    <main>
      <h2>New Pokemon 💥</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default PokemonForm

