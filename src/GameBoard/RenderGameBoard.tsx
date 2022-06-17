import { useContext } from "react";
import { GameContext } from "../Contexts/GameContext";
import RenderGameBoardLines from "./RenderGameBoardLines";

const RenderGameBoard = () => {
  const { gameMatrix, } = useContext(GameContext)

  const renderColumns = () => {
    return gameMatrix.map((matrixColumns, i) => (
      <div key={i}><RenderGameBoardLines matrixColumns={matrixColumns} firstIndex={i} /></div>)
    )
  }

  return (
    <>
      {renderColumns()}
    </>
  )
}

export default RenderGameBoard