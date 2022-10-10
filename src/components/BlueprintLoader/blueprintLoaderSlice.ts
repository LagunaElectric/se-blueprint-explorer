import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

interface BlueprintLoaderState {
  file: String
}

const initialState: BlueprintLoaderState = {
  file: ""
}

export const blueprintLoaderSlice = createSlice({
  name: "blueprintLoader",
  initialState,
  reducers: {
    readFile: (state, action: PayloadAction<string>) => {
      state.file = action.payload
    }
  }
})

export const { readFile } = blueprintLoaderSlice.actions
export const selectFile = (state: RootState) => state.blueprintLoader.file
export default blueprintLoaderSlice.reducer
