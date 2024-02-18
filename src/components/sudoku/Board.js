import React, { useContext } from 'react'
import Context from './Context'
import Cell from './Cell'

const Board = () => {
  const { board, setBoard } = useContext(Context)

  const renderRow = (row) => {
    return row.map( cell => (
      <Cell cell={cell} setBoard={ setBoard }></Cell>
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