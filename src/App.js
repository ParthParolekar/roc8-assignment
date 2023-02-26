import { useState } from 'react'
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
