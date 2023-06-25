import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from '@reduxjs/toolkit'
import useReducer, { logOut, userLogin } from './userSlice'

import { bookbuzzApi } from './bookbuzzApi/bookbuzzApi'

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

const userState = JSON.parse(localStorage.getItem('userData') || '{}')

export const store = configureStore({
    preloadedState: {
        user: userState,
    },
    reducer: {
        user: useReducer,
        [bookbuzzApi.reducerPath]: bookbuzzApi.reducer,
    },
    middleware: (getDefultMiddleware) =>
        getDefultMiddleware().concat(
            bookbuzzApi.middleware,
            userListenerMiddleware.middleware
        ),
})
