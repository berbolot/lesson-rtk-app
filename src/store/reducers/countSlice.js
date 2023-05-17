import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const countSlise = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },

        random: (state, actions) => {
            state.count += actions.payload;
        },
    },
});

const countReducer = countSlise.reducer;
export const { increment, decrement, random } = countSlise.actions;
export default countReducer;