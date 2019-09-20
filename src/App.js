import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters/" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterCard} />
      {/* <Route path="/characters/:id" render={props => <CharacterCard {...props} id={id}/>} /> */}
    </main>
  );
}
