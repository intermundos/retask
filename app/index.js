if (module.hot) {
	module.hot.accept()
}

import React        from 'react';
import DOM        from 'react-dom';
import 'static/styles/main.scss';


export const App = () => {
	return (
		<div className="container">
			  <button className="button is-success">
				  Click
			  </button>
		</div>
	)
};


DOM.render(<App />, document.getElementById('entry'));


