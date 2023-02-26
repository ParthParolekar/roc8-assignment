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

          if (
            knight.currentPosition[0] !== undefined &&
            knight.currentPosition[1] !== undefined
          ) {
            knight.possibleMoves.map((move) =>
              move.join('') === columns[j] + rows[i]
                ? (classList = classList + ' possible-move')
                : classList
            )
          }

          tempBoard.push([
            <div
              onClick={tileClickHandler}
              className={classList}
              key={columns[j] + rows[i]}
              id={columns[j] + rows[i]}
            >
              {knight.currentPosition.join('') === columns[j] + rows[i] ? (
                <img
                  className='knight'
                  src='https://freesvg.org/img/portablejim-Chess-tile-Knight-2.png'
                  alt='Banner'
                />
              ) : (
                <span id={columns[j] + rows[i]}>{columns[j] + rows[i]}</span>
              )}
            </div>
          ])
        }
      }
      setBoard(tempBoard)
    }

    createBoard()
  }, [knight.possibleMoves, knight.currentPosition])

  const tileClickHandler = (e) => {
    if (knight.currentPosition.join('') !== e.target.id) {
      setKnight({
        ...knight,
        currentPosition: [e.target.id[0], e.target.id[1]]
      })
    }
  }

  return <div className='chess-board'>{board?.map((tile, index) => tile)}</div>
}

export default Chessboard
