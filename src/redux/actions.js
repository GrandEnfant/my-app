import {types} from "./types";

export function changeField(i, j) {
    return {
        type: types.CHANGE_FIELD,

        payload: {i: 0, j: 0}

    }
}

export function changeTurn(turn) {
    return {
        type: types.CHANGE_TURN,
        turn: turn,
    }
}

export function setWinner(winner) {
    return {
        type: types.SET_WINNER,
        winner: winner,
    }
}