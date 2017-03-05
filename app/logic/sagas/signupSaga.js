import { takeEvery }       from 'redux-saga/effects';
import { take, put, call, fork }       from 'redux-saga/effects';
import  { SIGNUP, SIGNUP_REQUEST, SIGNUP_REQUEST_SUCCESS, SIGNUP_REQUEST_FAILURE }   from      '../reducks/signupDuck';

import  axios   from      'axios';

// Worker saga
export function* registerNewUser(action) {
    console.log('Running signup worker saga');
    console.dir(action.payload);
    try {
        console.log('Trying to create user...');
        yield put({ type: SIGNUP_REQUEST_SUCCESS, userData: action.payload });
    }

    catch (err) {
        console.log('Request failed', err);
        yield put({ type: SIGNUP_REQUEST_FAILURE });
    }
}


// Watcher saga
export function* watchLogin () {
    console.log('Running signup watch saga...');
    yield takeEvery(SIGNUP_REQUEST, registerNewUser);

}

// Root login saga
export default function* loginSaga() {
    yield fork(watchLogin);
};
