if (module.hot) {
	module.hot.accept()
}


// css vendors
import 'sanitize.css/sanitize.css';
import 'bulma/css/bulma.css';

// css libs
import 'static/styles/libs/libs.scss';

// css global
import 'static/styles/global/global.scss';


import React        from 'react';
import { render }        from 'react-dom';

import { Provider }        from 'react-redux';
import configureStore        from 'logic/store/configureStore';

import ButtonContainer        from 'containers/counter';
import { selectCounter }        from 'logic/reducks/counter';

const store = configureStore();

render(
	<Provider store={ store }>
		<div>
			<ButtonContainer counter='counter1' bindings={{ selectCounter: selectCounter('counter1') }}/>
			<ButtonContainer counter='counter2' bindings={{ selectCounter: selectCounter('counter2') }}/>
		</div>
	</Provider>,
	document.getElementById('entry')
);


