import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from '@reduxjs/toolkit'
import userReducer, { logOut, userLogin } from './userSlice'
import cartReducer, {
    addToCart,
    decreaseQt,
    deleteFromCart,
    increaseQt,
} from './cartSlice'

import { bookbuzzApi } from './bookbuzzApi/bookbuzzApi'

const cartListenerMiddleware = createListenerMiddleware()
cartListenerMiddleware.startListening({
    matcher: isAnyOf(
        addToCart,
        deleteFromCart,
        increaseQt,
        decreaseQt,
    ),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            'products',
            JSON.stringify(listenerApi.getState().cart)
        )
    },
})

const userListenerMiddleware = createListenerMiddleware()
userListenerMiddleware.startListening({
    matcher: isAnyOf(logOut, userLogin),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            'userData',
            JSON.stringify(listenerApi.getState().user)
        )
    },
})

const cartState = JSON.parse(localStorage.getItem('products') || '[]')
const userState = JSON.parse(localStorage.getItem('userData') || '{}')

export const store = configureStore({
    preloadedState: {
        user: userState,
        cart: cartState,
    },
    reducer: {
        user: userReducer,
        cart: cartReducer,
        [bookbuzzApi.reducerPath]: bookbuzzApi.reducer,
    },
    
    middleware: (getDefultMiddleware) =>
        getDefultMiddleware().concat(
            bookbuzzApi.middleware,
            cartListenerMiddleware.middleware,
            userListenerMiddleware.middleware
        ),
})
