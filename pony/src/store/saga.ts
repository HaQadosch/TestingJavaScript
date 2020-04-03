import { put, takeEvery, all, call } from "redux-saga/effects"
import { increment } from "./rootReducer";

function* helloSaga () {
  console.log({ saga: 'hello Saga!' })
  yield 1
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync () {
  yield call(delay, 1000)
  yield put(increment())
}

function* watchIncrementAsync () {
  // @ts-ignore
  yield takeEvery('saga/incrementAsync', incrementAsync)
}

export function* rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}