import { configureStore } from '@reduxjs/toolkit'
import CharactersReducer from './reducers/CharactersReducer'

const store = configureStore({
  reducer: {
    charactersReducer: CharactersReducer,
  },
})
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
