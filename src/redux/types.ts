export enum Types {
    CHANGE_FIELD = 'CHANGE_FIELD',
    CHANGE_TURN = 'CHANGE_TURN',
};


export type ActionType = {
    type: string;
    payload: PayloadFieldType | PayloadTurnType;
};

export type PayloadFieldType = {
    turn: string;
    i: number;
    j: number;
};

export type PayloadTurnType = {
    turn: string;
};

export type fieldType = {
    field: (string | null)[][];
};

export type turnType = {
    turn: string;
};

export type RootState = {
   field: fieldType;
   player: turnType;
};