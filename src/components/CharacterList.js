import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard"

const CharacterList = props => {
  // TODO: Add useState to track data from useEffectconst [character, setCharacter] = useState([])
  const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      const getCharacters = () => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getCharacters();
    }, [props]);

  return (
    <section className="character-list"> {character.map(character => (
      <h2>{character.name}</h2>
      // <CharacterCard/>
      // TODO
    // <Link to={`/movie/${item.id}`}>
    // <CharacterDetails key={movie.id} movie={movie} />
    // </Link>
  ))}
    </section>
  );
}

export default CharacterList;