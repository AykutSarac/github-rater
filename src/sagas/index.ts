import { all } from 'redux-saga/effects'

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([])
}

export default rootSaga