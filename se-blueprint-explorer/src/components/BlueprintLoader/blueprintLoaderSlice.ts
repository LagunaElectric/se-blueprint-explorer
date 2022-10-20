import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

var XMLParser = require("react-xml-parser")

interface BlueprintLoaderState {
  file: any
}

const initialState: BlueprintLoaderState = {
  file: ""
}

export const blueprintLoaderSlice = createSlice({
  name: "blueprintLoader",
  initialState,
  reducers: {
    readFile: (state, action: PayloadAction<string>) => {
      state.file = new XMLParser().parseFromString(action.payload)
    }
  }
})

export const { readFile } = blueprintLoaderSlice.actions
export const selectFile = (state: RootState) => state.blueprintLoader.file
export default blueprintLoaderSlice.reducer
