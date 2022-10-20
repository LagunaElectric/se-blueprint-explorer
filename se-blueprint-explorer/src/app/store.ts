import { configureStore } from "@reduxjs/toolkit"
import blueprintLoaderSlice from "../components/BlueprintLoader/blueprintLoaderSlice"

export const store = configureStore({
  reducer: {
    blueprintLoader: blueprintLoaderSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
