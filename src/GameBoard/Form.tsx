import { useContext } from "react";
import NumberInput from "./NumberInput";
import { GameContext } from "../Contexts/GameContext";

const Form = () => {
  const { gameMatrix, } = useContext(GameContext)

  const renderMatrixColumns = () => {
    return (<form>
      {
        gameMatrix.map((matrixColumns, i) => (
          <div key={i}>{renderMatrixLines(matrixColumns, i)}</div>)
        )
      }
    </form>)
  };

  const renderMatrixLines = (
    matrixColumns: Array<{}>,
    firstIndex: number
  ) => {
    return(
      <div className='row'>
        {matrixColumns.map((matrixCell, i) => (NumberInput(firstIndex, i, matrixCell)))}
      </div>
    )
  };

  return <div>{renderMatrixColumns()}</div>;
};

export default Form;
