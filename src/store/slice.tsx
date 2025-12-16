import { createSlice } from '@reduxjs/toolkit'

const reducer = createSlice({
    name:'reducer',
    initialState:{
        count:0
    },
    reducers:{ // Fixed: was 'reducer', should be 'reducers'
        add : (state) => {
            state.count++
        }
    }
})

export const {add} = reducer.actions // action function send
export default reducer.reducer //reducer reducer