import React, {useEffect, useState} from 'react';
import './App.css';
import connect from "react-redux/lib/connect/connect";
import {changeField, changeTurn, setWinner} from './redux/actions'




function App(store) {
    console.log('tut');
    // console.log(store.field[0][1]);
    // let timer;
    // const X = 'X';
    // const O = 'O';
    // const [field, setField] = useState( [[null, null, null],
    //                                                 [null, null, null],
    //                                                  [null, null, null]]);
    // const [turn, setTurn] = useState(X);
    // const [winner, setWinner] = useState('nobody');
    // const setTurnFunc = function () {
    //     if(turn === X) {
    //         setTurn(O)
    //     } else {
    //         setTurn(X);
    //     }
    // };
    //
    // const timeout = function () {
    //     timer = setTimeout(setTurnFunc, 3000);
    // };
    //
    // useEffect(() => {
    //     clearTimeout(timer);
    //     timeout();
    // }, [turn]);
    //
    //
    // const addSign = function (i, j) {
    //     if(store.field[i][j] === null) {
    //        store.field[i][j] = turn; // mut
    //         setField(field);//
    //         setTurnFunc();
    //         if(checkWinner(turn)) {
    //             setWinner(turn);
    //         }
    //     }
    // };

    const addSign = function (i, j) {
        // if(store.field[i][j] === null) {
        //     console.log('tut')
           // store.field[i][j] = turn; // mut
            // setField(field);//
            // setTurnFunc();
            // if(checkWinner(turn)) {
            //     setWinner(turn);
            // }
        // }
    };
    //
    // const checkWinner = function () {
    //     return (checkDiagonal(turn) || checkLines(turn));
    // };
    //
    // const checkDiagonal = function () {
    //     let fromBottomLeftDiagonal = true;
    //     let fromTopLeftDiagonal = true;
    //     for(let i = 0; i < field.length; i++) {
    //         for(let j = 0; j < field[i].length; j++) {
    //             if (i === j) {
    //                 fromBottomLeftDiagonal = fromBottomLeftDiagonal && (field[i][j] === turn);
    //             } else if (i + j === (field.length - 1)) {
    //                 fromTopLeftDiagonal = fromTopLeftDiagonal && (field[i][j] === turn);
    //             }
    //         }
    //     }
    //     return fromBottomLeftDiagonal || fromTopLeftDiagonal;
    // };
    //
    // const checkLines = function () {
    //     let isRowFill = true;
    //     let isColFill = true;
    //
    //     for(let col = 0; col < field.length; col++) {
    //         for(let row = 0; row < field.length; row++) {
    //             isColFill = isColFill && (field[col][row] === turn);
    //             isRowFill = isRowFill && (field[row][col]);
    //         }
    //         if(isColFill || isRowFill) return true;
    //     }
    //     return false
    // };


    return (
        <React.Fragment> <div className={"row"}>{store.winner}</div>
              </React.Fragment>
    );
}
const mapStateToProps = state => {
        return {winner: state.winner};

    // switch(state) {
    //     case "field":
    //         return {field: state.field};
    //     case "turn":
    //         return {turn: state.turn};
    //     case "winner":
    //         return {winner: state.winner};
    //     default:
    //         return state.field
    // return store.winner
    // }


    // console.log(store);
    // return {
    //     // turn: store.turn
    // }
};

const mapDispatchToProps = () => {
    return {}
};
    export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
