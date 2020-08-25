import {PayloadFieldType, Types} from "../types";

const initialState = {
    field:  [[null, null, null],
             [null, null, null],
             [null, null, null],]
};
type actionPayload = {
    payload: PayloadFieldType,
    type: string
}


export const fieldReducer = (state = initialState, action: actionPayload): object => {
    console.log(action);
    switch (action.type) {
        case Types.CHANGE_FIELD: {
            let copiedState = state;
            if(action.payload.i !== undefined || action.payload.j !== undefined) {
                // @ts-ignore
                copiedState.field[action.payload.i][action.payload.j] = action.payload.turn;
                return {...copiedState};
            }
        }
    default: return state;
    }
};