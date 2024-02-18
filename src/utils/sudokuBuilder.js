const isvalid = (grid, row, column, number) => {
  if (grid[row].includes(number)) {
    return false
  } else if (grid.some( gridRow => gridRow[column] === number )) {
    return false
  }

  let valid = true
  const [rowStart, rowEnd]       = subGridRange(row)
  const [columnStart, columnEnd] = subGridRange(column)

  grid.slice(rowStart, rowEnd).forEach( gridRow => {
    if (hasDuplicates(gridRow, columnStart, columnEnd, number)) {
      valid = false
    }
  })

  return valid
}

const hasDuplicates = (row, indexStart, indexEnd, number) => {
  return row.slice(indexStart, indexEnd).includes(number)
}

const subGridRange = (index) => {
  let start = index - (index % 3)
  return [start, start + 3]
}

const fillGrid = (grid, row, column) => {
  let solved = false

  if (rowEnd(row, grid) && columnEnd(column, grid)) {
    return true
  }

  if (columnEnd(column, grid)) {
    row += 1
    column = 0
  }

  if (grid[row][column] !==  undefined) {
    return fillGrid(grid, row, nextColumn(column))
  }

  for (let number = 1; number <= grid.length; number++) {
    if (isvalid(grid, row, column, number)) {
      grid[row][column] = number
      if (fillGrid(grid, row, nextColumn(column))) {
        solved = true
      }
    }
    if (!solved) {
      grid[row][column] = undefined
    }
  }

  return solved
}

const nextColumn = (column) => {
  return column + 1
}

const rowEnd = (row, grid) => {
  return row === grid.length - 1
}

const columnEnd = (column, grid) => {
  return column === grid.length
}

const randomizeSubGrid = (grid) => {
  let rows    = [0, 3, 6]
  let columns = [0, 3, 6]
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let [subGridRowStart, subGridRowEnd]         = subGridRange(rows[randomIndex(rows)])
  let [subGridColumnsStart, subGridColumnsEnd] = subGridRange(columns[randomIndex(columns)])

  for(let row = subGridRowStart; row < subGridRowEnd; row++) {
    for(let column = subGridColumnsStart; column < subGridColumnsEnd; column++) {
      let random_index  = randomIndex(numbers)
      grid[row][column] = numbers[random_index]
      numbers           = numbers.filter( number => { return number !==  numbers[random_index] })
    }
  }
}

const randomIndex = (array) => {
  return (Math.floor(Math.random() * array.length))
}

const createGrid = () => {
  let grid = Array(9).fill().map(()=>Array(9).fill())
  randomizeSubGrid(grid)
  fillGrid(grid, 0, 0)
  return grid
}

export default createGrid