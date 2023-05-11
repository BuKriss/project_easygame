import { ADD_PLACE } from "./actionTypes";

export const addPlace = (text) => ({
    type: ADD_PLACE,
    payload: {
        text
    }
});
