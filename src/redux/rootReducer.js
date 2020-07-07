import { INCREMENT } from "./types";

export function rootReducer(state, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    }

    return state;
}