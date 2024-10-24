import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./youtubeSlice";

const store = configureStore({
    reducer : {
        data : dataSlice
    }
})


export default store