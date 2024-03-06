import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        email : null,
        password : null,
        emailSubmit : null,
        passwordSubmit : null,
        userName : null,
        status : null,
        statusSubmit : null,
        statusConnnexion : null,
    },
    reducers:{
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setPassword : (state, action) => {
            state.password = action.payload
        },
        setEmailSubmit : (state, action) => {
            state.emailSubmit = action.payload
        },
        setPasswordSubmit : (state, action) => {
            state.passwordSubmit = action.payload
        },
        setUserName : (state, action) => {
            state.userName = action.payload
        },
        verifsubmit : (state) => {
            if(state.emailSubmit !== null && state.passwordSubmit !== null) {
                state.statusSubmit = true
            }else {
                state.statusSubmit = false
            }
        },
        setsubmitstatus : (state, action) => {
            state.statusSubmit = action.payload
        },
        setStatus : (state, action) => {
            state.status = action.payload
        },
        verify : (state) => {
            if (state.emailSubmit === state.email && state.passwordSubmit === state.password && state.emailSubmit !== null && state.passwordSubmit !== null) {
                state.status = true
            } else {
                state.status = false
            }
        },
        toggleConnexion : (state, action) => {
            state.statusConnnexion = action.payload
        }
    }
})

export const {setEmail, setPassword, setEmailSubmit, setPasswordSubmit, setUserName, verify , verifsubmit , setsubmitstatus , setStatus , toggleConnexion} = loginSlice.actions
export default loginSlice.reducer