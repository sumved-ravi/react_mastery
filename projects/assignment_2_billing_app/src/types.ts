export type State = {
    billAmount: string;
    tip: string;
    numPeople: number;
    errors: Error;
};

export type Error = Partial<{
    billAmount: string;
    numpPeople: string;
    tip: string;
}>

export type Action = 
    | { type: "SET_BILL"; value: string }
    | { type: "INCREMENT_NUM_PEOPLE"}
    | { type: "DECREMENT_NUM_PEOPLE"}
    | { type: "SET_TIP"; value: string}
    | { type: "RESET"};