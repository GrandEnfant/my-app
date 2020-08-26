import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeField, changeTurn} from './redux/actions'
import {bindActionCreators, Dispatch} from "redux";
import {useEffect, useState} from "react";
import {RootState} from "./redux/types";
import {checkWinner} from "./redux/selector";

type Props = {
    changeField: (i: number, j: number, turn: string ) => void;
    changeTurn: (turn: string) => void;
    field: (string | null) [][];
    turn: string;
    winner: string;
};
let timer: number;
const X: string = 'X';
const O: string = 'O';

const App: React.FC<Props> = ({changeField, changeTurn, field, turn, winner}) => {

    function setTurnFunc(): void {
        if(turn === X) {
            changeTurn(O);
        } else {
            changeTurn(X);
        }
    }

    const [disabled, setDisabled] = useState(false);

    const timeout = function () {
        timer = window.setTimeout(setTurnFunc, 3000);
    };

    useEffect(() => {
        clearTimeout(timer);
        timeout();
    }, [turn]);

    useEffect(() => {
        if(winner) {
            setDisabled(true)
        }
    }, [winner]);

    function addSign(i: number, j: number) {
        if(field[i][j] === null) {
            changeField(i, j, turn);
            setTurnFunc();
        }
    };

    return (
        <React.Fragment>
                {field.map((item: Array<string | null>, i: number) =>
                    <div className = 'row' key={i}> {item.map((item, j: number) =>
                        <div className = {'cell'} onClick={!disabled ? () => addSign(i, j) : undefined}> {field[i][j]} </div>
                    )}
                    </div>)}
            <span> {winner} </span> </React.Fragment>
    );
};

const mapStateToProps = (state: RootState)  => {
    return {
        field: state.field.field,
        turn: state.player.turn,
        winner: checkWinner(state),
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

