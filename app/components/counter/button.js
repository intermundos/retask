import React        from 'react';
import './button.scss';

const ButtonView = ({ text, onClick }) => (

	<button className="button is-success is-large" onClick={ onClick }>
		{ `Counter: ${ text }`}
	</button>

);

export default ButtonView;