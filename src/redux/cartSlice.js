import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('products')) || [],
    reducers: {
        addToCart: (state, { payload }) => {
            if (state.some((product) => product.id === payload.id)) {
                console.log('same')
                state.map((product) =>
                    product.id === payload.id
                        ? (product.quantity += payload.quantity)
                        : product
                )
            } else {
                state.push(payload)
            }
        },
        deleteFromCart: (state, { payload }) => {
            state = state.filter((product) => product.id !== payload)
        },
        increaseQt: (state, { payload }) => {
            state.forEach((product) =>
                product.id === payload.id ? (product.quantity += 1) : product
            )
        },
        decreaseQt: (state, { payload }) => {
            state.forEach((product) =>
                product.id === payload.id ? (product.quantity -= 1) : product
            )
        },
        resetCart: (state) => {
            state = []
        },
    },
})

export const { addToCart, deleteFromCart, increaseQt, decreaseQt, resetCart } =
    cartSlice.actions
export default cartSlice.reducer
