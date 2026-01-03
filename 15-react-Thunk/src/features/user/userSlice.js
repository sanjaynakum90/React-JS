import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        requestSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload

        },
        requestFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { requestStart, requestSuccess, requestFail } = user.actions

export default user.reducer