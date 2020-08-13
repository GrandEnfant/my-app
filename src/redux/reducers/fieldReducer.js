import {types} from "../types";

const initialState = {
    field:  [[null, null, null],
             [null, null, null],
             [null, null, null],]
};

export const fieldReducer = (state = initialState, action) => {
console.log(action);
console.log(action.payload);
    // state.field.field.[action.payload.i][action.payload.j] = 'X';
    let newField = state;
    return {...state};

};