import {types} from "./types";

export function changeField(field) {
    return {
        type: types.CHANGE_FIELD,
        payload: field,
    }
}

export function changeTurn(turn) {
    return {
        type: types.CHANGE_TURN,
        payload: turn,
    }
}

export function setWinner(winner) {
    return {
        type: types.SET_WINNER,
        payload: winner,
    }
}