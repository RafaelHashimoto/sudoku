import * as React from "react";

export const GameContext = React.createContext({
  gameMatrix: <Array<Array<IGameCell>>>new Array(9).fill(new Array(9).fill({value: null, is_valid: true})),
  updateGameMatrixCell: (x: number, y: number, value: number) => {}
});

export interface IGameCell {
  value: number;
  is_valid: boolean
}
