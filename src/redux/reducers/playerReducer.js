import {types} from "../types";

const initialState = {
    turn: 'X',
    winner: 0,
};

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TURN: {
            let newTurn;
            return {...state, turn: newTurn}
        }
        case types.SET_WINNER: {
            let newWinner = state.winner + 1;
            return {...state, winner: newWinner};
        }
        default: return state;
    }
    // console.log(state.turn);
    // return state;

};