import { ADD_PLACE } from "./../actiontypes/places";

const initialStore = {
    place: null
};

const placeReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...store,
                text: action.payload.text,        
            };
        default:
            return store;
    };
}

export default placeReducer;