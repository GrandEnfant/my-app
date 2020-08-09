import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   let timer;
   const X = 'X';
   const O = 'O';
  const [field, setField] = useState( [[null, null, null],
                                                [null, null, null],
                                                [null, null, null]]);
  const [turn, setTurn] = useState(X);
  const [winner, setWinner] = useState('nobody')
  const setTurnFunc = function () {
      if(turn === X) {
          setTurn(O)
      } else {
          setTurn(X);
      }
  }

  const timeout = function () {
      timer = setTimeout(setTurnFunc, 3000);
  }

  useEffect(() => {
      clearTimeout(timer);
      timeout();
  }, [turn]);


  const addSign = function (i, j) {
    if(field[i][j] === null) {
        field[i][j] = turn;
        setField(field);
        setTurnFunc();
        if(checkWinner(turn)) {
            setWinner(turn);
        };
    }
  }

  const checkWinner = function () {
      return (checkDiagonal(turn) || checkLines(turn));
  }

  const checkDiagonal = function () {
     let diagonal1 = true;
     let diagonal2 = true;
     for(let i = 0; i < field.length; i++) {
         for(let j = 0; j < field[i].length; j++) {
             if (i === j) {
                 diagonal1 = diagonal1 && (field[i][j] === turn);
             } else if (i + j === (field.length - 1)) {
                 diagonal2 = diagonal2 && (field[i][j] === turn);
             }
         }
     }
      return diagonal1 || diagonal2;
  }

  const checkLines = function () {
    let rows = true;
    let columns = true

    for(let col = 0; col < field.length; col++) {
        for(let row = 0; row < field.length; row++) {
            columns = columns && (field[col][row] === turn);
            rows = rows && (field[row][col]);
        }
        if(columns || rows) return true;
    }
    return false
  }

    return (
    <div className="App">
        {field.map((item, i) => <div className = 'row' key={i}>
            {item.map((item, j) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {field[i][j]} </div>)} </div>)}
        <span>Winner: {winner} </span>
    </div>
  );
}

export default App;
