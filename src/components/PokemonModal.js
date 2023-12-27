// PokemonModal.js
import React from 'react';
import './PokemonModal.css';

const PokemonModal = ({ pokemon, onClose }) => {
  return (
    <div className="pokemon-modal-overlay" onClick={onClose}>
      <div className="pokemon-modal" onClick={(e) => e.stopPropagation()}>
        <img src={pokemon.image} alt={pokemon.name} />
        <div className="modal-info">
          <p>ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>Types: {pokemon.types.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
