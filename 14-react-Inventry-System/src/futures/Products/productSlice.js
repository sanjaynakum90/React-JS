import createSlice from "@reduxjs/toolkit"

const initialState = {
    products: []
}

const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload)

        }
    }
})

export const { addProduct } = product.action

export default product.reducers;