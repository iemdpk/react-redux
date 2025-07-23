import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counter";

export const  store1 = configureStore({
    reducer:{
        count : reducer
    }
})