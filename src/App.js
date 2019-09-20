import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* <WelcomePage/> */}
      {/* <CharacterList/> */}

      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characters/" component={CharacterList}/>
      <Route path="/characters/:id" component={CharacterCard}/>

      
    </main>
  );
}
