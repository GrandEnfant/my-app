import {Types} from "./types";

export function changeField(i, j, turn) {
    return {
        type: Types.CHANGE_FIELD,
        payload: {
            i: i,
            j: j,
            turn: turn
        }
    }
}

export function changeTurn(turn) {
    return {
        type: Types.CHANGE_TURN,
        payload: {turn: turn},
    }
}

export function setWinner(winner) {
    return {
        type: Types.SET_WINNER,
        payload: {winner: winner},
    }
}