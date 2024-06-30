import React from 'react'
import './TicTacToe.css'
import O from '../Assets/O.jpg'
import x from '../Assets/x.jpg'

const TicTacToe = () => {
  return (
    <div className= 'container'>
     <h1 className='title'>Tic Tac Toe</h1>
     <div className='board'>
      <div className='row1'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
      <div className='row2'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
      <div className='row3'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
     </div>
     <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe
