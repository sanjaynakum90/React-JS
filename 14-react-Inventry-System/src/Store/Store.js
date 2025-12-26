import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../futures/Products/productSlice";

const store = configureStore({
    reducer:{
        product :productSlice,
    }
})


export default store;