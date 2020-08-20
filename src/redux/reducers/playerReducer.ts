import {Types} from "../types";
import {IAction, IPayload} from '../actions'


const initialState: IPayload = {
    turn: 'X',
    winner: 'nobody',
};

export const playerReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case Types.CHANGE_TURN: {
            return {...state, turn: action.payload.turn}
        }
        case Types.SET_WINNER: {
            return {...state, winner: action.payload.winner};
        }
        default:
            return state;
    }
};