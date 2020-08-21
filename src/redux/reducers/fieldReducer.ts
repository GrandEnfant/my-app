import {Types} from "../types";

const initialState = {
    field:  [[null, null, null],
             [null, null, null],
             [null, null, null],]
};

export const fieldReducer = (state = initialState, action: any): object => {
    switch (action.type) {
        case Types.CHANGE_FIELD: {
            let copiedState = state;
            copiedState.field[action.payload.i][action.payload.j] = action.payload.turn;
            return {...copiedState};
        }
    default: return state;
    }
};