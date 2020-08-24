import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeField, changeTurn} from './redux/actions'
import {bindActionCreators, Dispatch} from "redux";
import {useEffect} from "react";
import {RootState} from "./redux/types";

type Props = {
    changeField: (i: number, j: number, turn: string ) => void,
    changeTurn: (turn: string) => void,
    field: (string | null) [][],
    turn: string
};
let timer: number;

function checkWinner(field: (string | null)[][], turn: string): boolean {
    return (checkDiagonal(field, turn) || checkLines(field, turn));
};

function checkDiagonal(field: (string | null) [][], turn: string): boolean {
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

const checkLines = function (field: (string | null)[][], turn: string): boolean {
    let isRowFill = true;
    let isColFill = true;

    for(let col = 0; col < field.length; col++) {
        for(let row = 0; row < field.length; row++) {
            isColFill = isColFill && (field[col][row] === turn);
            isRowFill = isRowFill && !!(field[row][col]);
        }
        if(isColFill || isRowFill) return true;
    }
    return false
};

const App: React.FC<Props> = (props) => {
    let winner;
    const X: string = 'X';
    const O: string = 'O';

    function setTurnFunc(): void {
        if(props.turn === X) {
            props.changeTurn(O);
        } else {
            props.changeTurn(X);
        }
    };

    // const timeout = function () {
    //     timer = window.setTimeout(setTurnFunc, 3000);
    // };

    // useEffect(() => {
    //     clearTimeout(timer);
    //     timeout();
    // }, [props.turn]);

    function addSign(i: number, j: number) {
        if(props.field[i][j] === null) {
            props.changeField(i, j, props.turn);
            setTurnFunc();
            if(checkWinner(props.field, props.turn)) {
             console.log(props.turn);
            }
        }
    };


    return (
        <React.Fragment>
                {props.field.map((item: Array<string | null>, i: number) => <div className = 'row' key={i}>
                {item.map((item, j: number) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {props.field[i][j]} </div>)}  </div>)}
            <span> {winner} </span> </React.Fragment>
    );
};




const mapStateToProps = (state: RootState)  => {
    console.log(typeof state.field.field);
    return {
        field: state.field.field,
        winner: state.player.winner,
        turn: state.player.turn,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeField: bindActionCreators(changeField, dispatch),
        changeTurn: bindActionCreators(changeTurn, dispatch),
    }
};


const ConnectedApp: React.FC<{}> = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

