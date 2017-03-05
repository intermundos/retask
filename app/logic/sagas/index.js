import  { fork }   from      'redux-saga/effects';

// import  { counterSaga }   from      './counterSaga';
// import  loginSaga   from      './loginSaga';
import  signupSaga   from      './signupSaga';


export default function* rootSaga() {
	yield [
		// fork(counterSaga),
		// fork(loginSaga),
		fork(signupSaga)
	]
}

