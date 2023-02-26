import { useEffect, useState } from 'react'
import './App.css'
import { Chessboard } from './components'

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
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
      }
      //UP-LEFT
      if (rows[rowIndex + 2] && columns[columnIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 1], rows[rowIndex + 2]])
      }
      //DOWN-LEFT
      if (rows[rowIndex - 2] && columns[columnIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 1], rows[rowIndex - 2]])
      }
      //DOWN-RIGHT
      if (rows[rowIndex - 2] && columns[columnIndex + 1]) {
        possibleMoves.push([columns[columnIndex + 1], rows[rowIndex - 2]])
      }
      //LEFT-UP
      if (columns[columnIndex - 2] && rows[rowIndex + 1]) {
        possibleMoves.push([columns[columnIndex - 2], rows[rowIndex + 1]])
      }
      //LEFT-DOWN
      if (columns[columnIndex - 2] && rows[rowIndex - 1]) {
        possibleMoves.push([columns[columnIndex - 2], rows[rowIndex - 1]])
      }
      //RIGHT-UP
      if (columns[columnIndex + 2] && rows[rowIndex + 1]) {
        possibleMoves.push([columns[columnIndex + 2], rows[rowIndex + 1]])
      }
      //RIGHT-DOWN
      if (columns[columnIndex + 2] && rows[rowIndex - 1]) {
        possibleMoves.push([columns[columnIndex + 2], rows[rowIndex - 1]])
      }
      setKnight({ ...knight, possibleMoves })
    }

    possibleMovesFunction()
  }, [knight.currentPosition])

  return (
    <div className={`App ${darkTheme && 'dark'}`}>
      <nav className='navbar'>
        <h1>Chess Knight</h1>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className='theme-button'
        >
          {darkTheme ? 'Light' : 'Dark'}
        </button>
      </nav>
      <p>
        The chess board shows the possible spaces the knight can take with green
        boxes.
      </p>
      <p>
        {' '}
        Click on any one of the block to move the knight and see all the
        possible moves from that block.
      </p>
      <p> Clicking on the knight will hide the knight.</p>
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
