import React from "react";

import GameWithContext from "./GameWithContext";
import { CurrentGameDataProvider } from "../../contexts/CurrentGameDataContext";
import { DiceProvider } from "../../contexts/DiceContext";
import { MovesProvider } from "../../contexts/MovesContext";

const Game = () => {
  return (
    // ? change GameDataProvider to current game data as no other game info is needed and will cause reload
    <CurrentGameDataProvider>
      <MovesProvider>
        <DiceProvider>
          <GameWithContext />
        </DiceProvider>
      </MovesProvider>
    </CurrentGameDataProvider>
  );
};

export default Game;
