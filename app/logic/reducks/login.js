export const LOGIN_BUTTON_CLICKED = 'login/LOGIN_BUTTON_CLICKED';
export const SENDING_REQUEST = 'login/SENDING_REQUEST';

export const selectLogin = form => state => state.login;

const initialState = {
    formState: {
        email: '',
        password: ''
    },
    error: '',
    isSendingRequest: false,
    isLogged: false
};

export const loginReducer = (state, action) => {
    switch (action.type) {
        case SENDING_REQUEST:
            console.log(action);
            return true;
        default:
            return state;
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SENDING_REQUEST :
            return { ...state, isSendingRequest: loginReducer(state, action) };
        default: return state;
    }
};