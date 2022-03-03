import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    logging: false,
    currentUser: null,
    isLoginSuccess: false,
}

const authUserSlice = createSlice({
    name:'authuser',
    initialState,
    reducers:{
        login(state,action) {
            state.logging = true;
        },
        loginSuccess(state,action) {
            state.logging = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailed(state,action) {
            state.logging = false;
        },
        logout(state,action) {
            state.logging = false;
            state.isLoggedIn = false;
            state.currentUser = null;
        },
    },
})

export const authUserActions = authUserSlice.actions;

const authUserReducer = authUserSlice.reducer;
export default authUserReducer;