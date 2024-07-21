import React from "react";

import { CurrentGameDataProvider } from "../../contexts/CurrentGameDataContext";
import { DiceProvider } from "../../contexts/DiceContext";
import { MovesProvider } from "../../contexts/MovesContext";

import GameWithContext from "./GameWithContext";

/**
 * @returns the game page with all the necessary contexts
 */
const Game = () => (
  <CurrentGameDataProvider>
    <MovesProvider>
      <DiceProvider>
        <GameWithContext />
      </DiceProvider>
    </MovesProvider>
  </CurrentGameDataProvider>
);

export default Game;
