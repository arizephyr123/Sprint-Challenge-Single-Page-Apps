import React, { useState, useEffect } from "react";
import axios from "axios";


const CharacterCard = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data);
        characters.find(character=> props.match.params.id === `${characters.id}`);
        setCharacters(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  },[id]);

  // const avenger = avengerData.find(avenger => props.match.params.id === avenger.id);
  

  return (
    <div >
      <h1>{props.name}</h1>
    </div>
  );
  // CharacterCard();
  // return <span>{name}</span>;
};
export default CharacterCard;
