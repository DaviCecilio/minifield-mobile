const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, columns) => {
          return {
            row,
            columns,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          }
        })
    })
}

const spreadMines = (board, minesAmount) => {
  const rows = board.length,
    columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10),
      columnSel = parseInt(Math.random() * columns, 10)

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board, row, column) => {
  const neighbors = [],
    rows = [row--, row, row++],
    columns = [column--, column, column++]

  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column,
        validRow = r >= 0 && r < board.length,
        validColumn = c >= 0 && board[0].length

      if (different && validRow && validColumn) neighbors.push(board[r][c])
    })
  })
}

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
  const field = board[row][column]
  if (!field.opened) {
    !field.opened
    if (field.mined) {
      field.exploded = true
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
    } else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

const fields = board => [].concat(...board)

const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0

const pending = field => (field.mined && !field.flagged) || (!field.opened && !field.mined)

const wonGame = board => fields(board).filter(pending).length === 0

const showMines = board =>
  fields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true))

export { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines }
