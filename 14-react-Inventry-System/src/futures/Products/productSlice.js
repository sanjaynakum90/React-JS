import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },

       
    },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
