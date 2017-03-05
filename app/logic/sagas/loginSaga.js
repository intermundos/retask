import { take, put, call, fork, race, takeEvery }       from 'redux-saga/effects';
import  { LOGIN_REQUEST, FORM_SUBMITTED }   from      '../reducks/login';


/*
*   1. LOGIN button clicked
*   2. REQUEST sent with user data
*
*
*/

// Watcher saga
export const watchLogin = function* () {
    console.log('Running login watch saga...');
    yield takeEvery(LOGIN_REQUEST, )
};


// Root login saga
export default function* loginSaga() {
    yield [
        fork(watchLogin)
    ]
};



export const login = function*() {

    while(true) {
        let request = yield take(LOGIN_REQUEST);
        let { email, password} = request.data;
        yield take(FORM_SUBMITTED);
        yield put({ type: LOGIN_REQUEST, isLogin: true });

    }
};


