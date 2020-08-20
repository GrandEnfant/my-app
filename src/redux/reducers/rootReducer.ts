import {combineReducers} from 'redux';
import {fieldReducer} from './fieldReducer'
import {playerReducer} from "./playerReducer";


export const rootReducer = combineReducers({
    field: fieldReducer,
    player: playerReducer,
});

type RootReducerType = typeof rootReducer;
export type stateType = ReturnType<RootReducerType>
