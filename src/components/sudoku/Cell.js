const Cell = ({cell, handleBoardChange, invalids}) => {

  const handleChange = (e) => {
    const input = e.target.value
    const newValue = parseInt(input.charAt(input.length - 1))
    if (isNaN(newValue)) {
      handleBoardChange(cell.rowIndex, cell.columnIndex, '')
    } else {
      handleBoardChange(cell.rowIndex, cell.columnIndex, newValue)
    }
  }

  const sudokuBorder = () => {
    if (cell.columnIndex < 6 && (cell.columnIndex+1)%3 === 0) {
      return 'columnBorder'
    } else {
      return ''
    }
  }

  const className = () => {
    if (isValid()) {
      return `board-cell ${sudokuBorder()}`
    } else {
      return `board-cell ${sudokuBorder()} board-cell-invalid`
    }
  }

  const isValid = () => {
    if (invalids.invalidRows.has(cell.rowIndex)) {
      return false
    }

    if (invalids.invalidCols.has(cell.columnIndex)) {
      return false
    }
    
    if (invalids.invalidGrids.has(getSubgridIndex())) {
      return false
    }

    return true
  }

  const getSubgridIndex = () => {
    return Math.floor(cell.rowIndex / 3) * 3 + Math.floor(cell.columnIndex / 3);
  }

  return (
    <input
      type="number"
      id={`cell-${cell.rowIndex}-${cell.columnIndex}`}
      className={className()}
      value={cell.value}
      disabled={cell.disabled}
      key={`${cell.rowIndex}-${cell.columnIndex}`}
      onChange={handleChange}
    />
  )
}

export default Cell;