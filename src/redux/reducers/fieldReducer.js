import {types} from "../types";


const initialState = {
    field:  [[null, null, null],
             [null, null, null],
             [null, null, null],]
};

export const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_FIELD: {
            state.field[action.payload.i][action.payload.j] = action.payload.turn;
            return {...state};
        }

    default: return state;
    }

};