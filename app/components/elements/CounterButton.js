import React        from 'react';

import './CounterButton.scss';

const ButtonView = ({ text, onClick }) => (

	<button className="button counter__btn is-outline is-large" onClick={ onClick }>
		{ `Counter: ${ text }`}
	</button>

);

export default ButtonView;

