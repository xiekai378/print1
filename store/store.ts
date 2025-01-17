import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './features/orderSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 