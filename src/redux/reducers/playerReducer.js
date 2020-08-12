import {types} from "../types";

const initialState = {
    turn:{
        type: types.CHANGE_TURN,
        turn: 'X',
    },
    winner: {
        type: types.SET_WINNER,
        winner: 0,
    }
};

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TURN: {
            return {...state, turn: state.turn.concat(action.payload)}
        }
        case types.SET_WINNER: {
            return {...state, winner: state.winner.concat(action.payload)}
        }
        default: return state;
    }
    // console.log(state.turn);
    // return state;

};