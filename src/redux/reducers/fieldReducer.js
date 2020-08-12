import {types} from "../types";

const initialState = {
    type: types.CHANGE_FIELD,
    field: [[null, null, null],
            [null, null, null],
            [null, null, null],]
};

export const fieldReducer = (state = initialState, action) => {

        return {...state, field: state.field};

};