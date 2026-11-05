import { createSlice } from "@reduxjs/toolkit";
import { setUser, logoutUser } from "../action/authActions";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null,
        isAuthenticated: false
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(setUser, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(logoutUser, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            });
    }
});

export default authSlice.reducer;