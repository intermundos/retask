import React, { Component, PropTypes } from 'react';
import './Login.scss';


class Login extends Component {
	constructor(props){
		super(props);

        this.state = {
        	isLoginState: true,
            userEmail: '',
            userPassword: '',
            userName: '',
			userGeo: '',
			userDepartment: ''
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.renderRegister = this.renderRegister.bind(this);
	}

	onRegisterClick(){
		this.setState({ isLoginState: !this.state.isLoginState })
	}

	renderRegister() {
		return (
			<div className="register__part">
				<p className="control has-icon">
					<input className="input is-medium"
						   name="userName"
						   value={ this.state.userName }
						   onChange={ this.onInputChange }
						   type="text"
						   placeholder="Name" />
					<span className="icon is-small">
                                	<i className="fa fa-user"/>
								</span>
				</p>

				<p className="control has-icon">
					<select className="input is-medium"
							placeholder="Geo location"
							name="userGeo"
							value={ this.state.userGeo }
							onChange={ this.onInputChange }
					>
						<option value="">Select GEO Location:</option>
						<option value="Israel">Israel</option>
						<option value="USA">USA</option>
						<option value="APAC">APAC</option>
					</select>
					<span className="icon is-small">
                                	<i className="fa fa-globe"/>
								</span>
				</p>

				<p className="control has-icon">
					<select className="input is-medium"
							name="userDepartment"
							value={ this.state.userDepartment }
							onChange={ this.onInputChange }
							placeholder="Department">
						<option value="">Select Department:</option>
						<option value="MTMY">MTMY</option>
						<option value="LEGACY">LEGACY</option>
						<option value="SOCIAL">SOCIAL</option>
						<option value="SALES">SALES</option>
						<option value="VIDEO">VIDEO</option>
						<option value="MARKETING">MARKETING</option>
						<option value="SEARCH">SEARCH</option>
						<option value="TECH">TECH</option>
						<option value="CLIENT SERVICE">CLIENT SERVICE</option>
					</select>
					<span className="icon is-small">
                                	<i className="fa fa-globe"/>
								</span>
				</p>
			</div>
		)
	}

	onInputChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	};

	formSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render(){
        return (
			<div className="page page--login">
				<div className="container">
					<hr />
					<nav className="level">
						<div className="level-item has-text-centered">
							<div>
								<p className="heading">Opened Tasks</p>
								<p className="title">129</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<p className="heading">Closed Tasks</p>
								<p className="title">111</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<p className="heading">Total</p>
								<p className="title">240</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div className="ratio">
								<p className="heading">Ratio</p>
								<p className="title">+7%</p>
							</div>
						</div>
					</nav>
					<hr/>
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


						{ this.state.isLoginState !== true ? this.renderRegister() : null }

						<p className="control">
							<button className="button button--login is-outlined is-large">
								Login
							</button>
							<button className="button button--register is-outlined is-large" onClick={ this.onRegisterClick } type="button">
								Register
							</button>
						</p>
					</form>
				</div>
			</div>
        )
	}
}

export default Login;