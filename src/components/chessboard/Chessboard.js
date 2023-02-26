import React, { useEffect } from 'react'

const Chessboard = ({
  columns,
  rows,
  tempBoard,
  knight,
  setKnight,
  board,
  setBoard
}) => {
  useEffect(() => {
    const createBoard = () => {
      tempBoard = []
      for (let i = rows.length - 1; i >= 0; i--) {
        for (let j = 0; j < columns.length; j++) {
          let classList = 'tile'

          if ((i + j) % 2 === 0) {
            classList = classList + ' white-tile'
          } else {
            classList = classList + ' black-tile'
          }

          if (knight.currentPosition.join('') === columns[j] + rows[i]) {
            classList = classList + ' knight'
          }

          knight.possibleMoves.map((move) =>
            move.join('') === columns[j] + rows[i]
              ? (classList = classList + ' possible-move')
              : classList
          )

          tempBoard.push([
            <div
              // onClick={tileClickHandler}
              className={classList}
              key={columns[j] + rows[i]}
            >
              {columns[j] + rows[i]}
            </div>
          ])
        }
      }
      setBoard(tempBoard)
    }
    createBoard()
  }, [])

  return <div className='chess-board'>{board?.map((tile, index) => tile)}</div>
}

export default Chessboard
