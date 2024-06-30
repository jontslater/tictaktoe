import React, { useState } from 'react';
import './TicTacToe.css';
import O from '../Assets/O.png';
import X from '../Assets/x.jpg';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(Array(9).fill(''));

  const toggle = (e, num) => {
    if (data[num] !== '') {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = 'x';
      e.target.innerHTML = `<img src='${X}' alt='X'>`;
    } else {
      newData[num] = 'o';
      e.target.innerHTML = `<img src='${O}' alt='O'>`;
    }

    setData(newData);
    setCount(count + 1);
  };

  const resetGame = () => {
    setData(Array(9).fill(''));
    setCount(0);
    document.querySelectorAll('.boxes').forEach(box => (box.innerHTML = ''));
  };

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='board'>
        <div className='row'>
          {[0, 1, 2].map(i => (
            <div key={i} className='boxes' onClick={e => toggle(e, i)}></div>
          ))}
        </div>
        <div className='row'>
          {[3, 4, 5].map(i => (
            <div key={i} className='boxes' onClick={e => toggle(e, i)}></div>
          ))}
        </div>
        <div className='row'>
          {[6, 7, 8].map(i => (
            <div key={i} className='boxes' onClick={e => toggle(e, i)}></div>
          ))}
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
