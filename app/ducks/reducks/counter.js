
export const selectCounter = cid => state => state[cid];

export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'INCREASE':
			return state + 1;
		default:
			return state;
	}
};

export default (state = { counter1: 0, counter2: 0 }, action) => {
	switch (action.type) {
		case 'INCREASE' :
			return { ...state, [action.params.cid]: counterReducer(state[action.params.cid], action) };
		default: return state;
	}
};








