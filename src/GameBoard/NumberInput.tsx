import { GameContext, IGameCell } from "../Contexts/GameContext";
import { useContext } from "react";

const NumberInput = (firstIndex: number, secondIndex: number, matrixCell: object) => {
  const { gameMatrix, updateGameMatrixCell} = useContext(GameContext)
  const id = `${firstIndex}-${secondIndex}`

  const updateCell = (key: any) => {
    if (/[1-9]/.test(key)) {
      updateGameMatrixCell(firstIndex, secondIndex, parseInt(key))
    }
  }

  return <input type="number" key={id} id={id} name="quantity" value={gameMatrix[firstIndex][secondIndex].value} onKeyPress={(event) => updateCell(event.key)}></input>;
};

export default NumberInput;
