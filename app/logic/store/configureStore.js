import {
	createStore,
	compose,
	applyMiddleware }        from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger         from 'redux-logger';

import * as ducks           from 'logic/reducks/index';
import * as sagas           from 'logic/sagas/index';

const configureStore = () => {

	const logger = createLogger();
	const saga = createSagaMiddleware();
	const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

	const store = createStore(
		ducks.counter,
		process.env.NODE_ENV !== window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		composeEnchancers(
			applyMiddleware(saga, logger)
		)
	);

	saga.run(sagas.onClickIncrease);



	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('logic/reducks', () => {
				store.replaceReducer(combineReducers({
					...require('logic/reducks')
				}));
			});
		}
	}  //TODO getting undefined on change in reducer

	return store;
};

export default configureStore;