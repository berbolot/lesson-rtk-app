import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countSlice";
import usersReducer from "./reducers/usersSlice";

const rootReducer = combineReducers({
    countReducer,
    usersReducer,
});

const store = configureStore({ reducer: rootReducer })

export default store;


