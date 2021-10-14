import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from 'redux/auth';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    },
});

export default authSlice.reducer;