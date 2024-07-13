import React from "react";

import { CurrentGameDataProvider } from "../../contexts/CurrentGameDataContext";
import { DiceProvider } from "../../contexts/DiceContext";
import { MovesProvider } from "../../contexts/MovesContext";

import GameWithContext from "./GameWithContext";

const Game = () => {
  return (
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
