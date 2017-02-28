import React        from 'react';
import { connect }        from 'react-redux';



const LoginFormContainer = connect(
    (state, { bindings: { selectCounter } }) => ({ text: selectCounter(state) }),
    (dispatch, { counter }) => ({ onClick() { dispatch({ type: 'BUTTON_CLICKED', payload: { counter } }); } })
)();

export default LoginFormContainer;