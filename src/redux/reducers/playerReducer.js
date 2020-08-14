import {types} from "../types";

const initialState = {
    turn: 'X',
    winner: 0,
};

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TURN: {
            return {...state, turn: action.payload.turn}
        }
        case types.SET_WINNER: {

            return {...state, winner: action.payload.winner};
        }
        default: return state;
    }
    // console.log(state.turn);
    // return state;

};