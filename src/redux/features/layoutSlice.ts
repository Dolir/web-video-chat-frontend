import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Iunscroll {
    name: string,
    value: boolean
}
export interface LayoutState {
  unscrolls: Iunscroll[]
}

const initialState: LayoutState = {
  unscrolls: []
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleUnscroll: (state, action: PayloadAction<Iunscroll>) => {
      const found = state.unscrolls.find((item) => item.name === action.payload.name)
      if (found) {
        found.value = action.payload.value
        return
      }
      state.unscrolls.push(action.payload)
    },
    deleteUnscroll: (state, action: PayloadAction<string>) => {
      state.unscrolls = state.unscrolls.filter(
        (item) => item?.name !== action.payload
      )
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleUnscroll, deleteUnscroll } = layoutSlice.actions

export default layoutSlice.reducer
