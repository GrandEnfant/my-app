import {ActionType, PayloadFieldType, Types} from "../types";



const initialState: PayloadFieldType = {
    turn: 'X',
};

export const playerReducer = (state = initialState, action: ActionType): object => {
    switch (action.type) {
        case Types.CHANGE_TURN: {
            return {...state, turn: action.payload.turn}
        }
        default:
            return state;
    }
};