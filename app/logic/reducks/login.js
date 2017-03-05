export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const FORM_SUBMITTED = 'login/FORM_SUBMITTED';


export const formSubmitted = (data) => {
    return {
        type: FORM_SUBMITTED,
        data
    }
};


const initialState = {
  isLoginRequested: false
};

export default (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_REQUEST :
            return {
                ...state,
                isLoginRequested: true
            };

        case 'INCREASE' :
            return {
                ...state
            };

        default : return state;
    }
}