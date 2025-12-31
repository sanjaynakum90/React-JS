import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  updateState: null,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      // console.log("product data", [...state.products]);
    },

    setUpdateState: (state, action) => {
      state.updateState = action.payload;

      // console.log([...state.updateState]);
    },

    updateProductData: (state, action) => {
      const index = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (index != -1) {
        state.products[index] = action.payload;
      }

      state.updateState = null;
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.id !== action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct, setUpdateState, updateProductData } =
  product.actions;

export default product.reducer;
