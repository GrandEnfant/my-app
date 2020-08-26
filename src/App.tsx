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

const App: React.FC<Props> = (props) => {

    function setTurnFunc(): void {
        if(props.turn === X) {
            props.changeTurn(O);
        } else {
            props.changeTurn(X);
        }
    }

    const [disabled, setDisabled] = useState(false);

    const timeout = function () {
        timer = window.setTimeout(setTurnFunc, 3000);
    };

    useEffect(() => {
        clearTimeout(timer);
        timeout();
        if(props.winner) {
            setDisabled(true)
        }
    }, [props.turn]);

    function addSign(i: number, j: number) {
        if(props.field[i][j] === null) {
            props.changeField(i, j, props.turn);
            setTurnFunc();
        }
    };



    function getCell(i: number, j: number) {

        if (disabled) {
          return  <div className = {'cell'}  > {props.field[i][j]} </div>
        } else {
           return <div className = {'cell'} onClick={() => {addSign(i, j)}}> {props.field[i][j]} </div>
        }

    }

    return (
        <React.Fragment>
                {props.field.map((item: Array<string | null>, i: number) =>
                    <div className = 'row' key={i}> {item.map((item, j: number) =>
                        { if (disabled) {
                            return  <div className = {'cell'}  > {props.field[i][j]} </div>
                        } else {
                            return <div className = {'cell'} onClick={() => {addSign(i, j)}}> {props.field[i][j]} </div>
                        }}
                    )}
                    </div>)}
            <span> {props.winner} </span> </React.Fragment>
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

