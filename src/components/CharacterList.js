import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm";


const CharacterList = props => {
  // TODO: Add useState to track data from useEffectconst [character, setCharacter] = useState([])
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, [props]);

  return (
    <section className="character-list" >
      {/* <SearchForm/> */}
      {" "}
      {character.map(character => (
        <div key={character.id}>
          <Link to={`/character/${character.id}`}>
            <Button>{character.name}
            {/* <CharacterCard key={character.id} character={character}/> */}
            </Button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CharacterList;
