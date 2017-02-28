import { take, put, fork }       from 'redux-saga/effects';
import  { LOGIN_BUTTON_CLICKED, SENDING_REQUEST }   from      '../reducks/login';

export const onClickIncrease = function*() {

    while(true) {
        const { payload } = yield take('BUTTON_CLICKED');
        yield put({ type: 'INCREASE', params: payload });
    }
};

export const onLoginClick = function*() {

    while(true) {
        const { payload } = yield take('LOGIN_CLICKED');
        yield put({ type: SENDING_REQUEST, params: payload });
    }
};

const root = function*() {
	yield [
		fork(onClickIncrease),
		fork(onLoginClick)
	]
};

export default root;