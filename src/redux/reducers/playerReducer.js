import {Types} from "../types";

const initialState = {
    turn: 'X',
    winner: 0,
};

export const playerReducer = (state = initialState, action) => {
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