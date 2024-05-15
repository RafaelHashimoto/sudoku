import React, { useContext, useState, useEffect } from 'react'
import Context from './Context'
import Cell from './Cell'

const Board = () => {
  const { board, setBoard } = useContext(Context)

  const [invalids, setInvalids] = useState({
    invalidRows: new Set(),
    invalidCols: new Set(),
    invalidGrids: new Set(),
  });

  const updateValidation = () => {
    setInvalids({
      invalidRows:  invalidRows(),
      invalidCols:  invalidColumns(),
      invalidGrids: invalidSubGrids()
    });
  };

  useEffect(() => {
    updateValidation()
  }, [board]);

  const handleBoardChange = (row, column, value) => {
    let newBoard = [...board]
    newBoard[row][column] = { value: value, valid: true, rowIndex: row, columnIndex: column, disabled: false}
    setBoard(newBoard)
  }

  const validateSudoku = () => {
    return [invalidRows(), invalidColumns(), invalidSubGrids()]
  }

  const invalidRows = () => {
    const rows = new Set();
    board.forEach( (row, rowIndex) => {
      let seen = new Set();

      row.forEach( column => {
        if (column.value !== '') {
          if (seen.has(column.value)) {
            rows.add(rowIndex)
          } else {
            seen.add(column.value)
          }
        }
      } )
    })

    return rows
  }

  const invalidColumns = () => {
    const columns = new Set();

    for (let column = 0; column < board.length; column ++) {
      let seen = new Set();

      for (let row = 0; row < board.length; row ++) {
        if (board[row][column].value !== '') {
          if (seen.has(board[row][column].value)) {
            columns.add(column)
          } else {
            seen.add(board[row][column].value)
          }
        }
      }
    }

    return columns
  }

  const invalidSubGrids = () => {
    let invalidSubGrids = new Set();

    for (let row = 0; row < board.length; row += 3) {
      for (let column = 0; column < board.length; column += 3) {
        if (!isValidSubGrid(row, column)) {
          invalidSubGrids.add(getSubgridIndex(row, column))
        }
      }
    }

    return invalidSubGrids
  }

  const isValidSubGrid = (rowIndex, colIndex) => {
    let seen = new Set();
    let isValid = true
    board.slice(rowIndex, rowIndex + 3).forEach ( row => {

      row.slice(colIndex, colIndex + 3).forEach ( column => {
        if (column.value !==  '' && seen.has(column.value)) {
          isValid = false
        } else {
          seen.add(column.value)
        }
      })
    })

    return isValid
  }

  function getSubgridIndex(row, col) {
    return Math.floor(row / 3) * ( 3 + Math.floor(col / 3));
  }

  const sudokuBorder = (index) => {
    if (index < 6 && (index + 1)%3 === 0) { return 'rowBorder' } else { return '' }
  }
    

  const renderRow = (row, rowIndex) => {
    return row.map( (cell, columnIndex) => (
      <Cell key={`cell-${rowIndex}-${columnIndex}`} cell={cell} handleBoardChange={ handleBoardChange } invalids={invalids} ></Cell>
    ))
  }

  const renderRows = () => {
    return board.map( (row, index) => (
      <div id={`row-${index}`} key={index} className={`board-row ${ sudokuBorder(index) }`} >
        { renderRow(row, index) }
      </div>
    ))
  }

  return (
    <table className='board-container'>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  )
}


export default Board;