import {Types} from "./types";


export interface IAction {
    type: string,
    payload: IPayload
}

export interface IPayload {
    turn?: string,
    winner?: string
    field?: string | null [][],
    i?: number,
    j?: number,
}
export function changeField(i: number, j: number, turn: string) {
    return {
        type: Types.CHANGE_FIELD,
        payload: {
            i: i,
            j: j,
            turn: turn
        }
    }
}

export function changeTurn(turn: string) {
    return {
        type: Types.CHANGE_TURN,
        payload: {turn: turn},
    }
}

export function setWinner(winner: string) {
    return {
        type: Types.SET_WINNER,
        payload: {winner: winner},
    }
}