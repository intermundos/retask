import React, { Component, PropTypes }       from 'react';


class LoginView extends Component {

    constructor(props){
        super(props);

        this.state = {
            userEmail: '',
            userPassword: '',

        };

        this.formSubmit = this.formSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    };

    formSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
    }

    render(){
        return (
            <form className="login__form" onSubmit={ this.formSubmit }>

                <h2 className="title is-2">Welcome!</h2>

                <p className="control has-icon">
                    <input className="input is-medium"
                           type="Email"
                           name="userEmail"
                           value={ this.state.userEmail }
                           onChange={ this.onInputChange }
                           placeholder="Email"
                           autoFocus="autoFocus"/>
                    <span className="icon is-small">
                                    <i className="fa fa-envelope"/>
							</span>
                </p>

                <p className="control has-icon">
                    <input className="input is-medium"
                           name="userPassword"
                           value={ this.state.userPass }
                           onChange={ this.onInputChange }
                           type="password"
                           placeholder="Password" />
                    <span className="icon is-small">
                                <i className="fa fa-lock"/>
							</span>
                </p>


                <p className="control">
                    <button className="button button--login is-outlined is-large" >
                        Login
                    </button>
                    <button className="button button--register is-outlined is-large" onClick={ this.onRegisterClick } type="button">
                        Register
                    </button>
                </p>
            </form>
        )
    }
}

export default LoginView
