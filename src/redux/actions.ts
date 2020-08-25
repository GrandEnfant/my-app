import {ActionType, Types} from "./types";


export function changeField(i: number, j: number, turn: string): ActionType {
    return {
        type: Types.CHANGE_FIELD,
        payload: {
            i: i,
            j: j,
            turn: turn,
        }
    }
}

export function changeTurn(turn: string): ActionType {
    return {
        type: Types.CHANGE_TURN,
        payload: {turn: turn},
    }
}