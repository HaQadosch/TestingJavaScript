import { counterSlice } from "./slices/counter"
import { combineReducers } from "@reduxjs/toolkit"


const {
  reducer: counterReducer,
  actions: { increment, decrement }
} = counterSlice

export const rootReducer = combineReducers({
  counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  increment, decrement
}