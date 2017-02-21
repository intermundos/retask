import { createStore, compose, applyMiddleware, combineReducers }        from 'redux';
import createSagaMiddleware     from 'redux-saga';
import * as ducks from '../ducks/reducks/index';
import * as sagas        from '../ducks/sagas/index';

// Console logger
const addLogging = (store) => {

	const rawDispatch = store.dispatch;

	if (!console.group){
		return rawDispatch;
	}

	return (action)=>{
		console.group(action.type);
		console.log('%c prev state', 'color: yellow', store.getState());
		console.log('%c action', 'color: red', action);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	}
};

const configureStore = () => {

	const saga = createSagaMiddleware();
	const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

	const store = createStore(
		ducks.counter,
		process.env.NODE_ENV !== window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		composeEnchancers(
			applyMiddleware(saga)
		),
	);

	saga.run(sagas.onClickIncrease);

	if (process.env.NODE_ENV !== 'production') { store.dispatch = addLogging(store); }

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('../ducks/reducks', () => {
				store.replaceReducer(combineReducers({
					...require('../ducks/reducks')
				}));
			});
		}
	}  //TODO getting undefined on change in reducer

	return store;
};

export default configureStore;