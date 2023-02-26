import { useEffect, useState } from 'react'
import './App.css'
import { Chessboard } from './components'

function App() {
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const rows = ['1', '2', '3', '4', '5', '6', '7', '8']
  let tempBoard = []
  const [knight, setKnight] = useState({
    currentPosition: ['b', '1'],
    possibleMoves: [
      ['c', '3'],
      ['a', '3'],
      ['d', '2']
    ]
  })
  const [board, setBoard] = useState([])

  useEffect(() => {
    const possibleMovesFunction = () => {
      const columnIndex = columns.indexOf(knight.currentPosition[0])
      const rowIndex = rows.indexOf(knight.currentPosition[1])
      let possibleMoves = []

      //UP-RIGHT
      if (rows[rowIndex + 2] && columns[columnIndex + 1]) {
        possibleMoves.push([columns[columnIndex + 1], rows[rowIndex + 2]])
        // console.log(rows[rowIndex + 2], columns[columnIndex + 1]);
      }
      //UP-LEFT
      if (rows[rowIndex + 2] && columns[columnIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 1], rows[rowIndex + 2]])
        // console.log(rows[rowIndex + 2], columns[columnIndex - 1]);
      }
      //DOWN-LEFT
      if (rows[rowIndex - 2] && columns[columnIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 1], rows[rowIndex - 2]])
        // console.log(rows[rowIndex - 2], columns[columnIndex - 1]);
      }
      //DOWN-RIGHT
      if (rows[rowIndex - 2] && columns[columnIndex + 1]) {
        possibleMoves.push([columns[columnIndex + 1], rows[rowIndex - 2]])
        // console.log(rows[rowIndex - 2], columns[columnIndex + 1]);
      }
      //LEFT-UP
      if (columns[columnIndex - 2] && rows[rowIndex + 1]) {
        possibleMoves.push([columns[columnIndex - 2], rows[rowIndex + 1]])
        // console.log(rows[rowIndex + 1], columns[columnIndex - 2]);
      }
      //LEFT-DOWN
      if (columns[columnIndex - 2] && rows[rowIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 2], rows[rowIndex - 1]])
        // console.log(rows[rowIndex - 1], columns[columnIndex - 2]);
      }
      //RIGHT-UP
      if (columns[columnIndex + 2] && rows[rowIndex + 1]) {
        possibleMoves.push([columns[columnIndex + 2], rows[rowIndex + 1]])
        // console.log(rows[rowIndex + 1], columns[columnIndex + 2]);
      }
      //RIGHT-DOWN
      if (columns[columnIndex + 2] && rows[rowIndex - 1]) {
        possibleMoves.push([columns[columnIndex + 2], rows[rowIndex - 1]])
        // console.log(rows[rowIndex - 1], columns[columnIndex + 2]);
      }
      // console.log(possibleMoves);
      setKnight({ ...knight, possibleMoves })
    }
    possibleMovesFunction()
  }, [knight.currentPosition])

  return (
    <div className='App'>
      <Chessboard
        columns={columns}
        rows={rows}
        tempBoard={tempBoard}
        knight={knight}
        setKnight={setKnight}
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

export default App
