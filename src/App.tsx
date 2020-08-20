import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeField, changeTurn, setWinner} from './redux/actions'
import {bindActionCreators} from "redux";


type Props = {
    changeField: (i: number, j: number, turn: string ) => void,
    changeTurn: (turn: string) => void,
    setWinner: (turn: string) => void,
    field: (string | null) [][],
    winner: string,
    turn: string
}


const App: React.FC<Props> = (props) => {
    const X: string = 'X';
    const O: string = 'O';
    function setTurnFunc(): void {
        if(props.turn === X) {
            props.changeTurn(O);
        } else {
            props.changeTurn(X);
        }
    };

    function addSign(i: number, j: number) {
        if(props.field[i][j] === null) {
            props.changeField(i, j, props.turn);
            setTurnFunc();
            if(checkWinner()) {
                props.setWinner(props.turn);
            }
        }
    };

    function checkWinner(): boolean {
        return (checkDiagonal() || checkLines());
    };

    function checkDiagonal(): boolean {
        let fromBottomLeftDiagonal = true;
        let fromTopLeftDiagonal = true;
        for(let i = 0; i < props.field.length; i++) {
            for(let j = 0; j < props.field[i].length; j++) {
                if (i === j) {
                    fromBottomLeftDiagonal = fromBottomLeftDiagonal && (props.field[i][j] === props.turn);
                } else if (i + j === (props.field.length - 1)) {
                    fromTopLeftDiagonal = fromTopLeftDiagonal && (props.field[i][j] === props.turn);
                }
            }
        }
        return fromBottomLeftDiagonal || fromTopLeftDiagonal;
    };

    const checkLines = function () {
        let isRowFill = true;
        let isColFill = true;

        for(let col = 0; col < props.field.length; col++) {
            for(let row = 0; row < props.field.length; row++) {
                isColFill = isColFill && (props.field[col][row] === props.turn);
                isRowFill = isRowFill && !!(props.field[row][col]);
            }
            if(isColFill || isRowFill) return true;
        }
        return false
    };

    return (
        <React.Fragment>
                {props.field.map((item: Array<string | null>, i: number) => <div className = 'row' key={i}>
                {item.map((item, j: number) => <div className={'cell'} key={j} onClick={() => {addSign(i, j)}}> {props.field[i][j]} </div>)}  </div>)}

            <span> {props.winner} </span> </React.Fragment>
    );
};

const mapStateToProps = (state: any)  => {
    return {
        field: state.field.field,
        winner: state.player.winner,
        turn: state.player.turn
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setWinner: bindActionCreators(setWinner, dispatch),
        changeField: bindActionCreators(changeField, dispatch),
        changeTurn: bindActionCreators(changeTurn, dispatch),
    }
};
const ConnectedApp: React.FC<{}> = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

