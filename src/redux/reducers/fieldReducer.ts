import {fieldType, PayloadFieldType, Types} from "../types";

const initialState: fieldType = {
    field:  [[null, null, null],
             [null, null, null],
             [null, null, null],]
};

type actionPayload = {
    payload: PayloadFieldType,
    type: string
}

export const fieldReducer = (state = initialState, action: actionPayload): object => {
    switch (action.type) {
        case Types.CHANGE_FIELD: {
            let copiedState = state;
                copiedState.field[action.payload.i][action.payload.j] = action.payload.turn;
                return {...copiedState};

        }
    default: return state;
    }
};