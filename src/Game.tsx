import * as React from "react";
import * as ReactDOM from "react-dom";
import RenderGameBoard from "./GameBoard/RenderGameBoard";
import { GameContext, IGameCell } from "./Contexts/GameContext";

export const Game = ({}) => {
  const defaultValue = {value: 0, is_valid: true }
  const matrix = new Array(9).fill(new Array(9).fill(defaultValue))
  const [gameMatrix, setGameMatrix] = React.useState<Array<Array<IGameCell>>>(matrix)

  const updateGameMatrixCell = (x: number, y: number, value: number) => {
    let newCell   = {value: value, is_valid: true} as IGameCell
    let newMatrix = [...gameMatrix]
    let newLine   = [...newMatrix[x]]
    newLine[y]    = newCell
    newMatrix[x]  = newLine
    setGameMatrix(newMatrix)
  }

  const gameContext = {
    gameMatrix: gameMatrix,
    updateGameMatrixCell: updateGameMatrixCell
  }

  return(
    <GameContext.Provider value={gameContext}>
      <form>
        <RenderGameBoard />
      </form>
    </GameContext.Provider>
  )
};

export default Game;
