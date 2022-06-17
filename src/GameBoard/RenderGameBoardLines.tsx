import NumberInput from "./NumberInput"
import { IGameCell } from "../Contexts/GameContext";
import React from "react";

interface RenderGameBoardLinesProps {
  matrixColumns: Array<IGameCell>,
  firstIndex: number
}

const RenderGameBoardLines:  React.FC<RenderGameBoardLinesProps> = ( props: RenderGameBoardLinesProps) => {

  const renderLines = () => {
    return props.matrixColumns.map((matrixCell, i) => (NumberInput(props.firstIndex, i, matrixCell)))
  }

  return (
    <>
      {renderLines()}
    </>
  )
}

export default RenderGameBoardLines