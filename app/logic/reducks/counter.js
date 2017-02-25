export const selectCounter = cid => state => state[cid];

export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'INCREASE':
			return state + 1;
		default:
			return state;
	}
};

export default (state = { counter1: 10, counter2: 110 }, action) => {
	switch (action.type) {
		case 'INCREASE' :
			return { ...state, [action.params.counter]: counterReducer(state[action.params.counter], action) };
		default: return state;
	}
};