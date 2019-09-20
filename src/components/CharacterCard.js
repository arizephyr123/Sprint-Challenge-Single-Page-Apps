import React from "react";

import CharacterList from "./CharacterList";

export default function CharacterCard({ character }) {
  const { name } = character;
  return <span>{character.name}</span>;
}
