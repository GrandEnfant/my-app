import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeField, changeTurn, setWinner} from './redux/actions'
import {bindActionCreators} from "redux";


function App(props): any {

    const X: string = 'X';
    const O: string = 'O';
console.log(props.winner);
    function setTurnFunc(): void {
        if(props.turn === X) {
            props.changeTurn(O);
        } else {
            props.changeTurn(X);
        }
    };

    function addSign(i: number, j: number) {

        if(props.field.field[i][j] === null) {
            props.changeField(i, j, props.turn);
            setTurnFunc();
            if(checkWinner(props.turn)) {
                props.setWinner(props.turn);
            }
        }
    };

    function checkWinner(): boolean {
        return (checkDiagonal(props.turn) || checkLines(props.turn));
    };

    function checkDiagonal(): boolean {
        let fromBottomLeftDiagonal = true;
        let fromTopLeftDiagonal = true;
        for(let i = 0; i < props.field.field.length; i++) {
            for(let j = 0; j < props.field.field[i].length; j++) {
                if (i === j) {
                    fromBottomLeftDiagonal = fromBottomLeftDiagonal && (props.field.field[i][j] === props.turn);
                } else if (i + j === (props.field.field.length - 1)) {
                    fromTopLeftDiagonal = fromTopLeftDiagonal && (props.field.field[i][j] === props.turn);
                }
            }
        }
        return fromBottomLeftDiagonal || fromTopLeftDiagonal;
    };

    const checkLines = function () {
        let isRowFill = true;
        let isColFill = true;

        for(let col = 0; col < props.field.field.length; col++) {
            for(let row = 0; row < props.field.field.length; row++) {
                isColFill = isColFill && (props.field.field[col][row] === props.turn);
                isRowFill = isRowFill && (props.field.field[row][col]);
            }
            if(isColFill || isRowFill) return true;
        }
        return false
    };

    return (
        <React.Fragment>
                {props.field.field.map((item, i) => <div className = 'row' key={i}>
                {item.map((item, j) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {props.field.field[i][j]} </div>)}  </div>)}

            <span onClick={() => {addSign()}}> {props.winner} </span> </React.Fragment>
    );
};
const mapStateToProps = state => {
    return {
        field: state.field,
        winner: state.player.winner,
        turn: state.player.turn
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        setWinner: bindActionCreators(setWinner, dispatch),
        changeField: bindActionCreators(changeField, dispatch),
        changeTurn: bindActionCreators(changeTurn, dispatch),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

