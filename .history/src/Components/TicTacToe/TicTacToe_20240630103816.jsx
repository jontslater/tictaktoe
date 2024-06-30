import React, { useState } from 'react'
import './TicTacToe.css'
import O from '../Assets/O.jpg'
import x from '../Assets/x.jpg'

let data = ["","","","","","","","",""]

const TicTacToe = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);

  const toggle = (e,num) => {
    if (lock) {
      return 0;
    }    
    if (count%2===0)
    {
      e.target.innerHTML = `<img src='${x}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src='${O}'>`;
      data[num]="o";
      setCount(++count);
    }      
  }
  return (
    <div className= 'container'>
     <h1 className='title'>Tic Tac Toe</h1>
     <div className='board'>
      <div className='row1'>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
      </div>
      <div className='row2'>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
      </div>
      <div className='row3'>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
      </div>
     </div>
     <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe
