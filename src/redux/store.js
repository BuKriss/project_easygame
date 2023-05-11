import { combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth";
import placeReducer from "./reducers/placeReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    places: placeReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : args => args
    );

export default store;
