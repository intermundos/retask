import React        from 'react';
import { connect }        from 'react-redux';


import  LoginView   from      '../components/elements/Login/LoginView';

const mapStateToProps = (state, { bindings: { selectLogin } }) => ({ login: selectLogin(state) });

const mapDispatchToProps = (dispatch, { form }) => (
    ({ onClick(e) { e.preventDefault(); dispatch({ type: 'LOGIN_CLICKED', payload: { form } }); } })
);



const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);

export default LoginFormContainer;