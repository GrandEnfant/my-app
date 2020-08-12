import React, {useEffect, useState} from 'react';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import connect from "react-redux/lib/connect/connect";

function TicTac() {
    let timer;
    const X = 'X';
    const O = 'O';
    const [field, setField] = useState( [[null, null, null],
        [null, null, null],
        [null, null, null]]);
    const [turn, setTurn] = useState(X);
    const [winner, setWinner] = useState('nobody');
    const setTurnFunc = function () {
        if(turn === X) {
            setTurn(O)
        } else {
            setTurn(X);
        }
    };

    const mapStateToProps = state => {
      console.log(state);
      return state;
    };

    const timeout = function () {
        timer = setTimeout(setTurnFunc, 3000);
    };

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
            }
        }
    };

    const checkWinner = function () {
        return (checkDiagonal(turn) || checkLines(turn));
    };

    const checkDiagonal = function () {
        let fromBottomLeftDiagonal = true;
        let fromTopLeftDiagonal = true;
        for(let i = 0; i < field.length; i++) {
            for(let j = 0; j < field[i].length; j++) {
                if (i === j) {
                    fromBottomLeftDiagonal = fromBottomLeftDiagonal && (field[i][j] === turn);
                } else if (i + j === (field.length - 1)) {
                    fromTopLeftDiagonal = fromTopLeftDiagonal && (field[i][j] === turn);
                }
            }
        }
        return fromBottomLeftDiagonal || fromTopLeftDiagonal;
    };

    const checkLines = function () {
        let isRowFill = true;
        let isColFill = true;

        for(let col = 0; col < field.length; col++) {
            for(let row = 0; row < field.length; row++) {
                isColFill = isColFill && (field[col][row] === turn);
                isRowFill = isRowFill && (field[row][col]);
            }
            if(isColFill || isRowFill) return true;
        }
        return false
    };

    const ticTac = <React.Fragment> {field.map((item, i) => <div className = 'row' key={i}>
        {item.map((item, j) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {field[i][j]} </div>)} </div>)}
        <span>Winner: {winner} </span> </React.Fragment>;

    return (
       <div>
            {ticTac}
        </div>
    );
}
//
export default connect(mapStateToProps, null)(TicTac);
// export default TicTac;