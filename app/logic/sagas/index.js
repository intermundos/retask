import { take, put }       from 'redux-saga/effects';

export const onClickIncrease = function*() {

	while(true) {
		const { payload } = yield take('BUTTON_CLICKED');
		yield put({ type: 'INCREASE', params: payload });
	}
};