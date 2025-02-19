import { createSlice } from '@reduxjs/toolkit'
const initialState = {}

const CharactersReducer = createSlice({
  name: 'Charecters',
  initialState: initialState,
  reducers: {
    setState: (state, action) => {},
  },
})

export const { setState } = CharactersReducer.actions
export default CharactersReducer.reducer
