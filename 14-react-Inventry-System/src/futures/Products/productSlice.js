import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    updateState: null,
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

        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },

        setUpdateState: (state, action) => {
            state.updateState = action.payload;
        },



    },
});

export const { addProduct, deleteProduct, updateProduct, setUpdateState } = productSlice.actions;

export default productSlice.reducer;
