import React        from 'react';

const LoginView = (props, { onClick }) => {

    return (
        <form className="login__form" onSubmit={ props.formSubmit }>

            <h2 className="title is-2">Welcome!</h2>

            <p className="control has-icon">
                <input className="input is-medium"
                       type="Email"
                       name="userEmail"
                       placeholder="Email"
                       autoFocus="autoFocus"/>
                <span className="icon is-small">
                    <i className="fa fa-envelope"/>
                </span>
            </p>

            <p className="control has-icon">
                <input className="input is-medium"
                       name="userPassword"
                       type="password"
                       placeholder="Password" />
                <span className="icon is-small">
                    <i className="fa fa-lock"/>
                </span>
            </p>



            <p className="control">
                <button className="button button--login is-outlined is-large" onClick={ props.onClick }>
                    Login
                </button>
                <button className="button button--register is-outlined is-large" type="button">
                    Register
                </button>
            </p>
        </form>
    )
};

export default LoginView;