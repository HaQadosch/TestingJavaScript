import { createSlice } from "@reduxjs/toolkit"
import { produce, Draft } from "immer"

interface ICounterState {
  readonly count: number
}

const initialState = {
  count: 0
}

/**
 * {type: 'counter/increment'}
 * Increments the counter by 1.
 */
const incrementReducer = {
  increment: produce((draft: Draft<ICounterState>) => {
    draft.count++
  })
}

/**
 * {type: 'counter/decrement'}
 * Decrements the counter by 1.
 */
const decrementReducer = {
  decrement: produce((draft: Draft<ICounterState>) => {
    draft.count--
  })
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ...incrementReducer,
    ...decrementReducer
  }
})
