import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
    name: 'details',
    initialState: {
        LoginInfo: [],
    },
    reducers: {
        loginData: (state, action) => {
            state.LoginInfo.push(action.payload);
            console.log(action.payload);
            // state.isLoggedIn = true;
        },
        removaData: (state) => {
            state.LoginInfo = [];
            // state.isLoggedIn = false;
        }

    }

})
export const { loginData, removaData } = Login.actions;
// export const selectAdmin = (state) => state.details;
export default Login.reducer;