import React from "react";

import GameWithContext from "./GameWithContext";
import { GameDataProvider } from "../../contexts/GameDataContext";
import { DiceProvider } from "../../contexts/DiceContext";

const Game = () => {
  return (
    // ? change GameDataProvider to current game data as no other game info is needed and will cause reload
    <GameDataProvider>
      {/* ? add move provider */}
      <DiceProvider>
        <GameWithContext />
      </DiceProvider>
    </GameDataProvider>
  );
};

export default Game;
