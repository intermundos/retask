import React, { Component, PropTypes }       from 'react';
import { connect }        from 'react-redux';

import  LoginView   from      '../components/login/LoginView';

import  { submitForm }   from      '../logic/reducks/signupDuck';




const LoginForm = connect(
    null,
    { submitForm }
)(LoginView);

export default LoginForm;