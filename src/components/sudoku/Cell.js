const Cell = ({value}) => {
  return (
      <input type="number" className='board-item board-item-enabled' value={value} />
  )
}

export default Cell;