const Cell = ({cell, setBoard}) => {
  return (
    <input
      type="number"
      className='board-item'
      value={cell.value}
      disabled={cell.value !== undefined}
      key={`${cell.row}-${cell.column}`}
    />
  )
}

export default Cell;