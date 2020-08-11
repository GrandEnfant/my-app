import React, {useEffect, useState} from 'react';
import './App.css';
import connect from "react-redux/lib/connect/connect";
import {changeField, changeTurn, setWinner} from './redux/actions'

const mapStateToProps = store => {
    console.log(store);
    return {
        turn: store.turn
    }
};

const mapDispatchToProps = {
    changeField,
    changeTurn,
    setWinner,
};

function App() {
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


    return (
        <div>
            <React.Fragment> {field.map((item, i) => <div className = 'row' key={i}>
                {item.map((item, j) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {field[i][j]} </div>)} </div>)}
                <span>Winner: {winner} </span> </React.Fragment>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
