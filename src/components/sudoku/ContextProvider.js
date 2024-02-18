import React, { useState, useContext } from 'react';
import Context from './Context'
import createGrid from '../../utils/sudokuBuilder'

export const ContextProvider = ({children}) => {
  const setupBoard = () => {
    let board = createGrid()
    for(let row = 0; row < 9; row ++) {
      for(let column = 0; column < 9; column ++) {
        let value = ((fillCell()) ? board[row][column] : undefined )
        board[row][column] = gameCell(value, row, column)
      }
    }
    return board
  }

  const gameCell = (value, rowIndex, columnIndex) => {
    return { value: value, valid: true, rowIndex: rowIndex, columnIndex: columnIndex }
  }

  const fillCell = () => {
    return Math.floor(Math.random() * 2) == 1
  }


  const [board, setBoard] = useState(setupBoard())
  const value = { board, setBoard }

  return(
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}