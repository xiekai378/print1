import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // 这里将来添加各个模块的reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 