import {types} from "./types";

export function changeField(i, j, turn) {
    return {
        type: types.CHANGE_FIELD,
        payload: {
            i: i,
            j: j,
            turn: turn
        }

    }
}

export function changeTurn(turn) {
    return {
        type: types.CHANGE_TURN,
        payload: {turn: turn},
    }
}

export function setWinner(winner) {
    return {
        type: types.SET_WINNER,
        payload: {winner: winner},
    }
}