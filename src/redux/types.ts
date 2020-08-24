export enum Types {
    CHANGE_FIELD = 'CHANGE_FIELD',
    CHANGE_TURN = 'CHANGE_TURN',
};


export type ActionType = {
    type: string,
    payload: PayloadFieldType | PayloadTurnType,
}

export type PayloadFieldType = {
    turn?: string,
    i?: number,
    j?: number,
}

export type PayloadTurnType = {
    turn: string,
}

export type RootState = {
    field: (string | null)[][],
    player: string
};