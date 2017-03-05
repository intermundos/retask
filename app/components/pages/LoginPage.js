import React, { Component, PropTypes } from 'react';
import './LoginPage.scss';

import  LoginForm   from      '../../containers/LoginForm';


class LoginPage extends Component {


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
					<LoginForm />
				</div>
			</div>
        )
	}
}

export default LoginPage;