import { take, put }       from 'redux-saga/effects';



export const counterSaga = function*() {

    while(true) {
        const { payload } = yield take('BUTTON_CLICKED');
        yield put({ type: 'INCREASE', params: payload });
    }
};