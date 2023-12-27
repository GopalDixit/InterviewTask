// App.js
import React, { useEffect, useState } from 'react';
import PokemonImage from './components/PokemonImage';
import Page from './components/Page';
import axios from 'axios';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();

  useEffect(() => {
    axios.get(currentPageURL).then((resp) => {
      setNextPageURL(resp.data.next);
      setPrevPageURL(resp.data.previous);
  
      // Fetch details for each Pokémon
      const promises = resp.data.results.map((pokemon) =>
        axios.get(pokemon.url).then((details) => ({
          id: details.data.id,
          name: details.data.name,
          image: details.data.sprites.front_default,
          types: details.data.types.map((type) => type.type.name),
        }))
      );
  
      Promise.all(promises).then((pokemonDetails) => {
        setPokemonList(pokemonDetails);
      });
    });
  }, [currentPageURL]);
  function gotoNextPage() {
    setCurrentPageURL(nextPageURL);
  }

  function gotoPrevioustPage() {
    setCurrentPageURL(prevPageURL);
  }

  return (
    <div className='App'>
      <PokemonImage creatures={pokemonList} />
      <Page
        nextPage={nextPageURL ? gotoNextPage : null}
        prevPage={prevPageURL ? gotoPrevioustPage : null}
      />
    </div>
  );
};

export default App;
