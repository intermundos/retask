export const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
export const SIGNUP = 'signup/SIGNUP';
export const SIGNUP_REQUEST_SUCCESS = 'signup/SIGNUP_REQUEST_SUCCESS';
export const SIGNUP_REQUEST_FAILURE = 'signup/SIGNUP_REQUEST_FAILURE';



// Action creators
export const submitForm = (formData) => {
  return {
      type: SIGNUP_REQUEST,
      payload: formData
  }
};


const initialState = {
    isSignupActive: false,
    user: {},

};

export default (state = initialState, action) => {

    switch (action.type) {

        case SIGNUP_REQUEST :
            return {
                ...state,
                isSignupActive: true
            };

        case SIGNUP_REQUEST_SUCCESS :
            console.dir('Signup success');
            return {
                ...state,
                isSignupActive: false,
                user: action.userData
            };

        default : return state;
    }
}