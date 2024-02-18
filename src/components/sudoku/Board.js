import React, { useContext } from 'react'
import Context from './Context'
import Cell from './Cell'

const Board = () => {

  const renderRow = (row) => {
    return row.map( element => (
      <Cell value={element}></Cell>
    ))
  }

  return (
    <div className='board-container'>
      {
        board.map( row => (
          <div className='board-row' >
            { renderRow(row) }
          </div>
        ))
      }
    </div>
  )
}


export default Board;