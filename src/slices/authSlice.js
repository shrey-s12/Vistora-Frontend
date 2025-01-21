import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            const { email } = action.payload;
            console.log("email", email);
            state.currentUser = email;
        },
        removeCurrentUser: (state) => {
            state.currentUser = null;
        }
    }
});

export const { setCurrentUser, removeCurrentUser } = authSlice.actions;

export default authSlice.reducer;