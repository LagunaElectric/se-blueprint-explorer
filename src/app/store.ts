import { configureStore } from "@reduxjs/toolkit"
import blueprintLoaderSlice from "../components/blueprintLoaderSlice"

export const store = configureStore({
  reducer: {
    blueprintLoader: blueprintLoaderSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
