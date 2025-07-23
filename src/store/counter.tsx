import { createSlice } from "@reduxjs/toolkit";


let reducer = createSlice({
    name:'newSlice',
    initialState:{
        count:1
    },
    reducers:{
        login:(state)=>{
            state.count = state.count+1
        }
    }
})

export const { login } = reducer.actions;
export default reducer.reducer;