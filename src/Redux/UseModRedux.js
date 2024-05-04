import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
    name: 'usersetails',
    initialState: {
        userLoginInfo: [],
    },
    reducers: {
        userLoginData: (state, action) => {
            state.userLoginInfo.push(action.payload);
            console.log(action.payload);
        },
        removeUserData: (state) => {
            state.userLoginInfo = [];
        }
    }
})
export const { userLoginData, removeUserData } = userLogin.actions;
export default userLogin.reducer