// PokemonImage.js
import React, { useState } from 'react';
import './App.css';
import PokemonModal from './PokemonModal'; // Import the PokemonModal component

const PokemonImage = ({ creatures }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="PokemonImage">
      {creatures.map((pokemon) => (
        <div
          key={pokemon.name}
          className="pokemon-item"
          onClick={() => handlePokemonClick(pokemon)}
        >
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={closeModal} />
      )}
    </div>
  );
};

export default PokemonImage;
