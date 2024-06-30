import React from 'react'
import './TicTacToe.css'
import O from '../Assets/O.jpg'
import x from '../Assets/x.jpg'

const TicTacToe = () => {
  return (
    <div className= 'container'>
     <h1 className='title'>Tic Tac Toe</h1>
     <div className='board'>

     </div>
     <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe
